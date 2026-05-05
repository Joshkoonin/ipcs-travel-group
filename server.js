import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  
  // Use the PORT environment variable provided by Cloud Run, or fallback to 8080.
  // AI Studio preview will provide 3000 in its environment.
  const PORT = process.env.PORT || 8080;
  
  const isProduction = process.env.NODE_ENV === "production" || process.env.K_SERVICE !== undefined;

  console.log(`[SERVER] Mode: ${isProduction ? "Production" : "Development"}`);
  console.log(`[SERVER] Port: ${PORT}`);

  // Root health check for Cloud Run / Load Balancers
  app.get("/_health", (req, res) => res.sendStatus(200));

  if (!isProduction) {
    // Development mode with Vite middleware
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (e) {
      console.error("[SERVER] Failed to load Vite middleware:", e);
      process.exit(1);
    }
  } else {
    // Production mode serving built assets directly
    const distPath = path.join(process.cwd(), "dist");
    
    app.use(express.static(distPath));
    
    // SPA Fallback for all other routes
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"), (err) => {
        if (err) {
          res.status(200).send(`
            <html>
              <head>
                <title>App Loading</title>
                <meta http-equiv="refresh" content="5">
              </head>
              <body style="font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background: #fdfdfd; color: #333;">
                <div style="text-align: center;">
                  <h2>Application is Starting</h2>
                  <p>The build artifacts are not ready yet. This page will refresh automatically.</p>
                </div>
              </body>
            </html>
          `);
        }
      });
    });
  }

  const server = app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(`[SERVER] Listening on 0.0.0.0:${PORT}`);
  });

  server.on('error', (err) => {
    console.error('[SERVER] Runtime error:', err);
    process.exit(1);
  });
}

startServer().catch((err) => {
  console.error("[SERVER] UNCAUGHT STARTUP ERROR:");
  console.error(err);
  process.exit(1);
});
