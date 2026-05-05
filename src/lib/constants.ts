import { SiteContent } from '../types';

export const INITIAL_CONTENT: SiteContent = {
  homeHero: {
    title: "IPCS Travel Group",
    subtitle: "A legacy of discovery. Three distinct journeys. One trusted umbrella."
  },
  about: {
    founderName: "Joshua Koonin",
    founderBio: "Joshua grew up in South Africa and Australia with an innate passion for Israel, Jewish history, and global geopolitics. His vision for IPCS was born from a desire to bridge deep academic insight with world-class travel experiences.",
    founderImage: "/Josh%20pro%20color.png",
    story: "From the streets of Jerusalem to the halls of geopolitical analysis, Joshua and his team bring decades of institutional expertise and a meticulous eye for detail to every journey."
  },
  brands: [
    {
      id: 'pizazz',
      name: "Pizazz Israel Tours",
      tagline: "Vibrant, Warm, Energetic.",
      description: "Discover the heartbeat of Israel through immersive, high-energy tours that go beyond the surface.",
      heroImage: "/Kotel%20AI.png",
      accentColor: "pizazz-primary",
      secondaryColor: "pizazz-secondary",
      features: ["Expert Local Guides", "Boutique Accommodations", "Exclusive Culinary Experiences"]
    },
    {
      id: 'ourtribe',
      name: "Our Tribe Tours",
      tagline: "Heritage, Identity, Culture.",
      description: "A deep dive into Jewish history and identity across the globe, connecting past, present, and future.",
      heroImage: "/Tree%20of%20life.jpg",
      accentColor: "ourtribe-primary",
      secondaryColor: "ourtribe-secondary",
      features: ["Heritage Site Access", "Community Connections", "Academic Insight"]
    },
    {
      id: 'geopolitical',
      name: "Geopolitical Journeys",
      tagline: "Current Affairs. Expert Analysis. Global Perspective.",
      description: "Serious, analyst-led journeys into the world's most complex regions and political landscapes.",
      heroImage: "/congress%20ai2.png",
      accentColor: "geo-primary",
      secondaryColor: "geo-secondary",
      features: ["Expert Analyst Briefings", "High-Security Clearances", "Policy-Maker Meetings"]
    }
  ],
  segments: [
    {
      id: "educational",
      title: "Educational Tours",
      tagline: "Inspiring the Next Generation of Thinkers.",
      description: "We bridge the gap between academic theory and on-the-ground reality, creating bespoke curricula for schools, universities, and gap-year programs.",
      heroImage: "/Knessetai.png",
      detailImage: "/Knessetai.png",
      details: ["Curriculum Integration", "Expert Lecturers", "Interactive Workshops", "Safe & Structured Environments"]
    },
    {
      id: "communal",
      title: "Communal Organizations",
      tagline: "Strengthening the Bonds of Global Community.",
      description: "Our strategic missions for federations and nonprofits are designed to foster deep connections, drive engagement, and showcase the impact of communal work.",
      heroImage: "/YV.jpg",
      details: ["Donor Stewardship", "Policy Briefings", "Mission Logisitics", "Impact-Focused Itineraries"]
    },
    {
      id: "religious",
      title: "Religious Congregations",
      tagline: "A Pilgrimage of Spirit and Heritage.",
      description: "From milestone missions to deep spiritual explorations, we help congregations connect with their heritage through meaningful travel and profound experiences.",
      heroImage: "/Religious.jpg",
      detailImage: "/Kotel%20AI.png",
      details: ["Heritage Site Access", "Scholarly Guidance", "Spiritual Programming", "Community Building"]
    },
    {
      id: "family",
      title: "Family, Friends and Individuals",
      tagline: "Multigenerational Journeys. Timeless Memories.",
      description: "Private luxury travel curated for the most important people in your life. We handle every detail so you can focus on the moments that matter.",
      heroImage: "/Altneuai.png",
      details: ["Luxury Concierge", "Multi-Gen Programming", "Private Access", "Meticulous Planning"]
    }
  ],
  itineraries: [
    {
      id: "jewish",
      title: "Jewish themed itineraries",
      label: "",
      brandIds: ['pizazz'],
      description: "profound journeys through faith, history, culture and the spirit of the Jewish people. From the ancient stones of Jerusalem to modern-day innovation.",
      heroImage: "/Kotel%20AI.png",
      subItineraries: [
        {
          id: "jewish-gems",
          title: "7 day Jewish Gems",
          description: "An intensive week uncovering the essential highlights of Jewish heritage and modern life in Israel.",
          schedule: [
            { day: "Day 1", activity: "Arrival in Jerusalem & Welcome", description: "Arrive at Ben Gurion Airport where you'll be met and transferred to your Jerusalem hotel. Enjoy a panoramic welcome overlooking the Old City followed by a festive welcome dinner." },
            { day: "Day 2", activity: "The Old City & Western Wall", description: "Walk through the historic gates of the Old City. Explore the Jewish Quarter, the ancient Cardo, and stand before the Western Wall before descending into the tunneling history of the Kotel Tunnels." },
            { day: "Day 3", activity: "Yad Vashem & Jewish Identity", description: "Visit the World Holocaust Remembrance Center for a profound exploration of memory and resilience. Spend the afternoon at the Israel Museum, home to the Dead Sea Scrolls." },
            { day: "Day 4", activity: "Tel Aviv & Startup Nation", description: "Journey to the vibrant coast. Visit Independence Hall where the state was declared, and explore the cutting-edge innovation hubs that define modern Israel." },
            { day: "Day 5", activity: "Galilee Heritage Sites", description: "Travel north to the mystical city of Safed, the cradle of Kabbalah. Visit ancient synagogues and wander through the charming artists' colony." },
            { day: "Day 6", activity: "Masada & Dead Sea", description: "Ascend the desert fortress of Masada by cable car to hear the heroic story of the Jewish zealots. Conclude the day with a therapeutic float in the mineral-rich waters of the Dead Sea." },
            { day: "Day 7", activity: "Departure & Reflections", description: "Enjoy a final morning at leisure for last-minute exploration or shopping before your transfer to the airport for your flight home." }
          ]
        },
        {
          id: "comprehensive",
          title: "10 day comprehensive package",
          description: "Our hallmark journey. A deep, unhurried exploration of the land, its people, and its multi-layered history.",
          schedule: [
            { day: "Day 1", activity: "Arrival & Coastal Heritage", description: "Arrive at Ben Gurion Airport and travel to the Mediterranean coast for a relaxed first evening." },
            { day: "Day 2", activity: "Caesarea & Haifa Foundations", description: "Explore the ancient Roman port of Caesarea and the beautiful Bahai Gardens in Haifa, overlooking the bay." },
            { day: "Day 3", activity: "Safed: Mysticism and Art", description: "Venture into the mystical alleyways of Safed, the center of Kabbalah, and engage with local artists." },
            { day: "Day 4", activity: "Golan Heights Strategy", description: "Ascend the Golan Heights for strategic briefings and breathtaking views across the borders." },
            { day: "Day 5", activity: "Galilee to Jerusalem Transition", description: "Travel through the Jordan Valley, stopping at ancient sites before making your triumphal entry into Jerusalem." },
            { day: "Day 6", activity: "Jerusalem: Layers of the Past", description: "Deep dive into the Old City, exploring the Jewish, Christian, and Armenian quarters." },
            { day: "Day 7", activity: "Jerusalem: Mount Herzl & Yad Vashem", description: "Engage with the dual narratives of modern Zionism and the history of the Holocaust." },
            { day: "Day 8", activity: "Masada & Dead Sea Resilience", description: "A day of physical and spiritual resilience at the Judean desert's most iconic locations." },
            { day: "Day 9", activity: "Tel Aviv: Startup Nation", description: "Experience the vibrant energy, world-class culinary scene, and innovative spirit of Tel Aviv." },
            { day: "Day 10", activity: "The Jewish Future & Departure", description: "Final reflections on the journey and the future of the global community before heading home." }
          ]
        },
        {
          id: "solidarity-link",
          title: "Solidarity Tours",
          description: "An impactful mission focusing on community resilience, social impact, and the deep bonds that connect us globally.",
          externalLink: "/itinerary/solidarity",
          schedule: []
        },
        {
          id: "day-tours",
          title: "Day tours",
          description: "Curated single-day deep dives for those with limited time or specific niche interests.",
          schedule: [
            { 
              day: "Option 1", 
              activity: "Classic Old City Tour", 
              description: "A profound journey through the four quarters of the Old City. Visit the Western Wall (Kotel), walk through the historic Jewish Quarter, explore the ancient Roman Cardo, and visit the Church of the Holy Sepulchre and the Via Dolorosa. Conclude with a visit to the vibrant Arab Souq (market) and view the rooftops of the Old City." 
            },
            { 
              day: "Option 2", 
              activity: "Mount of Olives, City of David and Bethlehem", 
              description: "A dual-heritage journey: begin with the iconic panoramic lookout from the Mount of Olives. Descend to the Garden of Gethsemane before exploring the biblical City of David archeological site, including Warren's Shaft and the Siloam Tunnel. Transition to Bethlehem to visit Manger Square and the Church of the Nativity." 
            },
            { 
              day: "Option 3", 
              activity: "Masada, Dead Sea", 
              description: "Explore the Judean Desert’s wonders. Ascend the desert fortress of Masada by cable car to see Herod’s palaces, the bathhouse, and the ancient synagogue. Hike to David’s Waterfall in the Ein Gedi Nature Reserve, and end the day floating in the mineral-rich waters of the Dead Sea." 
            },
            { 
              day: "Option 4", 
              activity: "Galilee", 
              description: "Travel north to the mystical city of Safed (Tzfat), visiting its 16th-century synagogues and the charming artists' colony. Continue to the Sea of Galilee (Kinneret) for a boat ride and a visit to the ancient synagogue at Capernaum." 
            }
          ]
        },
        {
          id: "custom",
          title: "Design a custom itinerary",
          description: "Every institutional mission or private journey is unique. We collaborate with you to build a signature experience.",
          schedule: [
            { day: "Step 1", activity: "Institutional Objective Consultation" },
            { day: "Step 2", activity: "Drafting the Curated Experience" },
            { day: "Step 3", activity: "Logistics & Security Assessment" }
          ]
        }
      ]
    },
    {
      id: "us-democracy",
      title: "The Heart of US democracy - Washington & New York",
      label: "Institutional Insight",
      brandIds: ['geopolitical'],
      description: "A deep dive into the institutions, history, and power dynamics of the United States. From the halls of Congress to the global headquarters of the UN.",
      heroImage: "/congress%20ai2.png",
      subItineraries: [
        {
          id: "democracy-path",
          title: "Power & Policy Journey",
          description: "An intensive immersion into the heart of American power and global policy architecture.",
          schedule: [
            { day: "Day 1", activity: "Political Briefings", description: "Enjoy briefings with leading US political commentators aligned with both the Republican and Democratic parties. Hear from leading pollsters about the current state of the race" },
            { day: "Day 2", activity: "Foreign Policy", description: "Explore American Foreign Affairs policy by meeting with former White House Foreign Affairs Advisers from different administrations and leading Foreign Policy Think Tanks and publications" },
            { day: "Day 3", activity: "Winning Elections", description: "Discover the techniques used to win elections by enjoying a workshop with one of DC's leading campaign consultancy firms" },
            { day: "Day 4", activity: "Domestic Issues", description: "Explore domestic American issues including gun control, the abortion debate and race relations by meeting leading journalists, NGOs and stakeholders" },
            { day: "Day 5", activity: "Capitol Hill & Mall", description: "Tour the United States Congress and meet with an adviser to a Member of Congress. Tour National Mall and its monuments" },
            { day: "Day 6", activity: "New York City", description: "Travel to New York and enjoy a tour of the city" },
            { day: "Day 7", activity: "Media & State Assembly", description: "Meet with journalists from leading New York based publications such as the Wall Street Journal; Meet a member of the New York state assembly. Visit the 9/11 memorial" },
            { day: "Day 8", activity: "UN & Farewell", description: "Visit the United Nations and meet with delegates there. Learn about economic policy debates at a leading think tank. Enjoy a farewell dinner and celebration" }
          ]
        }
      ]
    },
    {
      id: "south-africa-geo",
      title: "South Africa - from Apartheid State to Rainbow Nation?",
      label: "Social Transformation",
      brandIds: ['geopolitical'],
      description: "Explore the complex political history and modern social landscape of South Africa, assessing the progress of its democratic journey.",
      heroImage: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2071&auto=format&fit=crop",
      subItineraries: [
        {
          id: "sa-transformation",
          title: "The Long Walk to Freedom",
          description: "Mapping the path from systemic segregation to a modern multi-racial democracy.",
          schedule: [
            { day: "Day 1", activity: "Johannesburg Exploration", description: "Explore Johannesburg including its leafy northern suburbs and the CBD. Once the center of the nation's commerce, the CBD has become plagued by crime and 'white flight' but is also undergoing regeneration and cultural rebirth" },
            { day: "Day 2", activity: "Soweto & Apartheid Museum", description: "Explore Soweto and the apartheid museum" },
            { day: "Day 3", activity: "Constitution & Culture", description: "Meet with a leading constitutional law scholar regarding South Africa's new constitution and visit Constitution Hill. Discover sites associated with Nelson Mandela. Continue to a Zulu cultural village for dinner and a show" },
            { day: "Day 4", activity: "Social Policy Challenges", description: "Meet with South African policy professionals who will discuss the challenges caused by crime, HIV, and poverty. Continue to a leading think tank to hear about efforts to promote jobs and equality in the new South Africa" },
            { day: "Day 5", activity: "Safari Experience", description: "Enjoy a day safari" },
            { day: "Day 6", activity: "Cape Town: Struggle History", description: "Travel to Cape Town and enjoy a walking tour focusing on the anti-apartheid struggle in Cape Town" },
            { day: "Day 7", activity: "Robben Island & Politics", description: "Visit Robben Island where Mandela was imprisoned. Meet with a leading political analyst regarding the state of South African democracy and political trends" },
            { day: "Day 8", activity: "Parliament & Democracy", description: "Tour parliament and meet with mps from several parties Farewell meal" },
            { day: "Day 9", activity: "Cape Peninsula (Optional)", description: "Optional tour of the Cape Peninsula" }
          ]
        }
      ]
    },
    {
      id: "uk-geo",
      title: "The United Kingdom? England, Scotland and Northern Ireland",
      label: "Devolution & Identity",
      brandIds: ['geopolitical'],
      description: "Assessing the future of the union. A journey through the distinct political identities of Westminster, Holyrood, and Stormont.",
      heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
      subItineraries: [
        {
          id: "uk-union",
          title: "The Four Nations",
          description: "Understanding the tensions and ties that bind the United Kingdom today.",
          schedule: [
            { day: "Day 1", activity: "Westminster Briefings", description: "Meet with mps and advisors regarding issues in British politics. Hear from leading political journalists about where things are headed" },
            { day: "Day 2", activity: "Social Policy", description: "Explore issues such as homelessness, poverty and racial divisions in England as you meet with leading policy professionals" },
            { day: "Day 3", activity: "Brexit Analysis", description: "Examine our Brexit has influenced London by meeting with economic professionals as well as representatives of groups that promoted Brexit" },
            { day: "Day 4", activity: "The Monarchy & Belfast", description: "Discuss the issue of the royals - meet with the British Republican Society and monarchist organizations. Travel to Belfast" },
            { day: "Day 5", activity: "Belfast: Divergent Narratives", description: "Enjoy a tour led by former Unionist and Separatist political prisoners. Explore the seam line between catholic and protestant areas. Tour Belfast's parliament and meet with mps" },
            { day: "Day 6", activity: "Belfast to Edinburgh", description: "Tour Beflast's city hall. Enjoy free time in the city. Travel to Edinburgh" },
            { day: "Day 7", activity: "Scottish Independence", description: "Tour Edinburgh's Royal Mile. Explore the topic of Scottish Independence by meeting with the SNP and those opposed to independence. Meet with leading economist re the likely economic impact of independence" },
            { day: "Day 8", activity: "The Future of the Union", description: "Meet with a panel of journalists regarding the future of the independence movement and Scotland generally, as well as the UK. Farewell meal and depart" }
          ]
        }
      ]
    },
    {
      id: "international-law",
      title: "From Nuremberg to the Hague: The Architecture of Global Justice",
      label: "Justice & Ethics",
      brandIds: ['geopolitical'],
      description: "A profound exploration of international legal frameworks, tracing the arc of accountability from the ruins of Nazi Germany to the modern International Criminal Court.",
      heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
      subItineraries: [
        {
          id: "legal-foundations",
          title: "The Pursuit of Global Justice",
          description: "Evaluating how the world holds state and non-state actors accountable through historical sites and expert discourse.",
          schedule: [
            { day: "Munich", activity: "The Rise of Pathocracy", description: "Exploring the Nazi rise to power in Munich, assessing the social and political vacuum that enabled authoritarianism." },
            { day: "Dachau", activity: "The Systemic Void", description: "A somber visit to Dachau concentration camp to understand the consequences of a dismantled legal system." },
            { day: "Nuremberg", activity: "Institutional Accountability", description: "A high-level seminar on international law, visiting the Nazi Parade Grounds and Courtroom 600." },
            { day: "Würzburg", activity: "Victor's Justice?", description: "Exploring the reconstructed Old Town and assessing the impact of Allied bombings. A critical seminar: Is international law merely written by the victors?" },
            { day: "Frankfurt", activity: "The Economic Heart", description: "A day exploring the financial and logistical center of modern Germany, bridging the gap between history and contemporary power." },
            { day: "En Route", activity: "The Transit of Law", description: "Traveling toward the Netherlands with an overnight stop, preparing for the institutional briefings in the Hague." },
            { day: "The Hague I", activity: "Yugoslavia & Genocide Law", description: "Meeting with senior legal experts on the Yugoslavia Tribunal proceedings and the evolution of genocide definitions." },
            { day: "The Hague II", activity: "The Current Frontier", description: "Exclusive sessions with members of the Israeli defense team and representatives of nations in the current ICJ proceedings." }
          ]
        }
      ]
    },
    {
      id: "india-geo",
      title: "Gandi's Dream - A political journey in modern India",
      label: "Rising Power",
      brandIds: [],
      description: "Exploring the world's largest democracy. Assessing the tensions between tradition, rapid development, and political identity.",
      heroImage: "https://images.unsplash.com/photo-1524492459423-5c260f3fde17?q=80&w=2070&auto=format&fit=crop",
      subItineraries: [
        {
          id: "india-politics",
          title: "India: 21st Century Giant",
          description: "A deep dive into the political and social forces driving the Indian subcontinent.",
          schedule: [
            { day: "Delhi", activity: "Lutyens' Delhi Briefings", description: "Engaging with journalists and policy experts on the future of Indian democracy." },
            { day: "Gujarat", activity: "The Heritage of Gandhi", description: "Exploring the roots of non-violent resistance and its legacy in modern politics." }
          ]
        }
      ]
    },
    {
      id: "christian",
      title: "Christian themed itineraries",
      label: "",
      brandIds: ['pizazz'],
      description: "Retrace the steps of faith through the Holy Land. A spiritual odyssey connecting the biblical past with the vibrant present.",
      heroImage: "/Religious.jpg",
      subItineraries: [
        {
          id: "christian-gems",
          title: "7 day Christian Gems",
          description: "An essential week-long journey through the most sacred sites of the Holy Land, focusing on the life and ministry of Jesus.",
          schedule: [
            { day: "Day 1", activity: "Arrival & The Mediterranean Coast", description: "Arrive at Ben Gurion Airport and travel to the coast. Visit Caesarea Maritima, the Roman capital and port built by Herod the Great." },
            { day: "Day 2", activity: "The Galilee: Ministry and Miracles", description: "Explore the Sea of Galilee, the Mount of Beatitudes, and Capernaum, the center of Jesus' ministry in the Galilee." },
            { day: "Day 3", activity: "Nazareth & Mount Tabor", description: "Visit the Basilica of the Annunciation in Nazareth and ascend Mount Tabor, the site of the Transfiguration." },
            { day: "Day 4", activity: "The Road to Jerusalem", description: "Travel through the Jordan Valley to Jerusalem. Stop at Qasr el Yahud, the traditional site of Jesus' baptism." },
            { day: "Day 5", activity: "Jerusalem: The Mount of Olives", description: "Ascend the Mount of Olives for a panoramic view. Visit the Garden of Gethsemane and the Church of All Nations." },
            { day: "Day 6", activity: "The Way of the Cross", description: "Walk the Via Dolorosa in the Old City, ending at the Church of the Holy Sepulchre. Visit the Upper Room on Mount Zion." },
            { day: "Day 7", activity: "Emmaus & Departure", description: "Visit the site of Emmaus before transferring to the airport for your return flight." }
          ]
        },
        {
          id: "full-pilgrim",
          title: "10 day Full Pilgrim Experience",
          description: "A comprehensive spiritual immersion, allowing for deeper reflection and visits to significant biblical sites off the main path.",
          schedule: [
            { day: "Day 1", activity: "Arrival & Joppa", description: "Begin in the ancient port of Joppa, where Jonah set sail and Peter had his vision. Overnight on the coast." },
            { day: "Day 2", activity: "Caesarea & Mount Carmel", description: "Follow the coast to Elijah's site at Mukhraka on Mount Carmel before reaching the Galilee." },
            { day: "Day 3", activity: "The Sea of Galilee", description: "Enjoy a boat ride on the Sea of Galilee and visit the 'Jesus Boat' museum. Explore Magdala and its ancient synagogue." },
            { day: "Day 4", activity: "Northern Ministry", description: "Visit Caesarea Philippi at the base of Mount Hermon and explore the nature and history of the Dan reserve." },
            { day: "Day 5", activity: "Cana & Nazareth", description: "Witness the site of the first miracle at Cana and explore the deep history of Nazareth's holy sites." },
            { day: "Day 6", activity: "Jericho & The Judean Desert", description: "Travel south to Jericho, the oldest city in the world, and view the Mount of Temptation." },
            { day: "Day 7", activity: "Bethlehem & Shepherd's Fields", description: "Visit the Church of the Nativity and find peace in the quiet fields where the angels appeared to the shepherds." },
            { day: "Day 8", activity: "Jerusalem: The Ancient City", description: "Explore the City of David and walk through Hezekiah's Tunnel, connecting the biblical narrative to physical archaeology." },
            { day: "Day 9", activity: "The Garden Tomb & Reflection", description: "A morning of quiet reflection at the Garden Tomb, followed by an afternoon for prayer or personal exploration in the Old City." },
            { day: "Day 10", activity: "Blessing & Departure", description: "A final group service of thanksgiving before the journey concludes and you transfer for your flight." }
          ]
        },
        {
          id: "christian-day-tours",
          title: "Day Tours",
          description: "Targeted one-day explorations for pilgrims with specific interests or limited schedules.",
          schedule: [
            { 
              day: "Option 1", 
              activity: "Holy City Walking Tour", 
              description: "Retrace the steps of the Passion: from the Upper Room on Mount Zion to the Garden of Gethsemane, and through the Via Dolorosa to the Church of the Holy Sepulchre and the Garden Tomb." 
            },
            { 
              day: "Option 2", 
              activity: "Biblical Archeology Deep-Dive", 
              description: "Visit the City of David to see the Pool of Siloam and the Pilgrimage Road. Explore the Southern Wall excavations (Davidson Center) and the excavations beneath the Western Wall." 
            },
            { 
              day: "Option 3", 
              activity: "Galilee Highlights", 
              description: "Explore Nazareth’s Basilica of the Annunciation and the Jordan River baptismal site (Yardenit). Conclude with the Mount of Beatitudes, the multiplication site at Tabgha, and Capernaum on the Sea of Galilee." 
            },
            { 
              day: "Option 4", 
              activity: "Judean Desert & Baptismal Site", 
              description: "Visit Qasr el Yahud on the Jordan River, view the caves of Qumran where the Dead Sea Scrolls were found, and witness the views from the Mount of Temptation in Jericho." 
            }
          ]
        },
        {
          id: "christian-bespoke",
          title: "Bespoke Itineraries",
          description: "Whether for a specific denomination, a study mission, or a private family pilgrimage, we build unique paths tailored to your theology and goals.",
          schedule: [
            { day: "Phase 1", activity: "Theological Alignment Consultation" },
            { day: "Phase 2", activity: "Curated Site Selection" },
            { day: "Phase 3", activity: "Spiritual Programming Integration" }
          ]
        }
      ]
    },
    {
      id: "educational",
      title: "Educational Tours",
      label: "",
      brandIds: ['pizazz', 'geopolitical', 'ourtribe'],
      description: "Specifically designed for schools and universities, bridging academic theory with deep experiential learning and expert briefings.",
      heroImage: "/Knessetai.png",
      detailImage: "/Knessetai.png",
      subItineraries: [
        {
          id: "learning",
          title: "Learning & Legacy",
          description: "Academic-led expeditions focusing on geopolitics, history, and innovation.",
          schedule: [
            { day: "Day 1", activity: "Orientation & Geopolitical Overview", description: "Kick off with a high-level briefing on the regional landscape, followed by a guided tour of the Knesset and Supreme Court. Meet a member of the Knesset and hear from a leading political journalist." },
            { day: "Day 2", activity: "Gaza Periphery & Resilience", description: "Visit the Gaza periphery, including one of the communities worst hit on 7 October 2023, and meeting with a survivor of the NOVA festival massacre" },
            { day: "Day 3", activity: "Memory & Identity", description: "Visit Yad Vashem and hear from a Holocaust survivor. Meet with a leading Arab journalist and enjoy a panel of Jewish and Arab student leaders" },
            { day: "Day 4", activity: "Bethlehem & Palestinian Perspectives", description: "Visit Bethlehem and explore the Church of the Nativity, before meeting with a senior Palestinian Authority official for a Palestinian perspective" },
            { day: "Day 5", activity: "Jerusalem: Multi-layered Narratives", description: "Extensive tour of the Old City of Jerusalem focusing on historic sites, as well as the identity of the different groups in the city and the Israeli and Palestinian narratives within the Old City and Jerusalem more broadly" },
            { day: "Day 6", activity: "Northern Security", description: "Travel to northern Israel and meet with leading experts on Iran, Hezbollah. Visit the Israeli - Lebanese border" },
            { day: "Day 7", activity: "Syrian Border & Minorities", description: "Tour the Syrian border with a leading expert on Israel - Syria relations. Meet with the Israeli Druze and other lesser known minority groups" },
            { day: "Day 8", activity: "Innovation & Reflection", description: "Explore Tel Aviv's tech ecosystem. Meet with a member of the Knesset at his Tel Aviv based office, and have time to reflect on your journey." }
          ]
        }
      ]
    },
    {
      id: "solidarity",
      title: "Solidarity",
      label: "",
      brandIds: ['pizazz'],
      description: "An impactful mission focusing on community resilience, social impact, and the deep bonds that connect us globally.",
      heroImage: "/YV.jpg",
      subItineraries: [
        {
          id: "solidarity-mission-7day",
          title: "7 day Solidarity Mission",
          description: "A deep immersion into the resilience and spirit of the land, meeting heroes and supporting impacted communities.",
          schedule: [
            { day: "Day 1", activity: "Arrival & Orientation", description: "Arrival at Ben Gurion Airport and group transfer to hotel. Opening dinner and briefing on the current national state of affairs with top policy analysts from the IPCS think-tank network." },
            { day: "Day 2", activity: "Center Region Resilience", description: "Hands-on volunteering at tactical aid logistics centers helping displaced families. Afternoon visit to the Ichilov hospital rehab center to meet injured soldiers." },
            { day: "Day 3", activity: "Gaza Envelope: Bearing Witness", description: "Guided tour through Kibbutz Kfar Azza. Visit the site of the destroyed police station in Sderot. Pay respects at the Tekuma car cemetery and hear the moving testimony of a Nova Music Festival survivor at the Re'im forest site." },
            { day: "Day 4", activity: "Jerusalem: Unity and History", description: "Visit the 'Civilian Command Center' in Jerusalem. Walk through the Old City, focusing on the resilience of its diverse inhabitants during these challenging times." },
            { day: "Day 5", activity: "Northern Security Challenges", description: "Journey north to the border with Syria and Lebanon. Strategic briefings on the Golan Heights from regional experts. Explore the unique challenges facing northern communities like Kiryat Shmona." },
            { day: "Day 6", activity: "Innovation & Future Healing", description: "Visit trauma treatment startups in Tel Aviv. Afternoon of volunteering at civilian-led agricultural initiatives helping farmers on the border regions." },
            { day: "Day 7", activity: "Synthesis & Reflection", description: "Closing group session to process findings. Individual reflections and departure transfer for return flights." }
          ]
        },
        {
          id: "solidarity-day-tours",
          title: "Solidarity Day Tours",
          description: "Targeted single-day journeys to bear witness and understand the geopolitical reality.",
          schedule: [
            { 
              day: "Option 1", 
              activity: "Gaza Envelope Day Tour", 
              description: "Guided tour of Kibbutz Kfar Azza, testimony from a Nova festival survivor, Sderot's destroyed police station site, and the Tekuma car cemetery." 
            },
            { 
              day: "Option 2", 
              activity: "Northern Israel: Security & Strategy", 
              description: "A geopolitical deep-dive into the security challenges from Syria and Lebanon. Guided by regional experts, explore the Golan Heights and the displaced communities of the Galilee panhandle." 
            }
          ]
        }
      ]
    },
    {
      id: "poland",
      title: "Poland",
      label: "",
      brandIds: ['ourtribe'],
      description: "A profound encounter with the history, memory, and enduring spirit of Polish Jewry.",
      heroImage: "/Poland.jpg",
      subItineraries: [
        {
          id: "poland-7day",
          title: "7 Day Holocaust Heritage Journey",
          description: "An intensive immersion into the narrative of the Holocaust through the key sites across Poland.",
          schedule: [
            { day: "Day 1", activity: "Warsaw: Foundations & Walls", description: "Arrival in Warsaw. Explore the remains of the Ghetto wall, Umschlagplatz, and the Mila 18 bunker site." },
            { day: "Day 2", activity: "Warsaw: Polin & Resistance", description: "Visit the POLIN Museum of the History of Polish Jews and the Okopowa Street Jewish Cemetery." },
            { day: "Day 3", activity: "Majdanek & Lublin", description: "Travel to the Majdanek State Museum. Continue to Lublin to see the Yeshivat Chachmei Lublin." },
            { day: "Day 4", activity: "The Road to Krakow", description: "Travel to Krakow, stopping at Tarnow to see the Bimah of the Old Synagogue and the forest of Zbylitowska Gora." },
            { day: "Day 5", activity: "Krakow: Kazimierz", description: "Discover the vibrant Jewish quarter: the Remuh Synagogue and Cemetery, Old Synagogue, and the Tempel Synagogue." },
            { day: "Day 6", activity: "Shabbat in Krakow: The Royal Way", description: "A Shabbat-friendly extensive walking tour including the Royal Way, Wawel Castle (exterior), and the great Market Square." },
            { day: "Day 7", activity: "Auschwitz-Birkenau & Departure", description: "A full day of bearing witness at Auschwitz I and Auschwitz II-Birkenau before returning to Krakow for departure." }
          ]
        }
      ]
    },
    {
      id: "central-europe",
      title: "Budapest, Vienna & Prague",
      label: "",
      brandIds: ['ourtribe'],
      description: "The imperial grandeur and complex history of the Jewish communities of the Austro-Hungarian Empire.",
      heroImage: "/Habo%20parliament%20ai.png",
      subItineraries: [
        {
          id: "central-europe-10day",
          title: "Jewish Heritage of the Empire",
          description: "A cross-border journey connecting the three great capitals of Central Europe.",
          schedule: [
            { day: "Day 1", activity: "Budapest: The Living Ghetto", description: "Guided tour through the historic Jewish Quarter, focusing on the preservation of identity." },
            { day: "Day 2", activity: "Budapest: Synagogues & Spirit", description: "Visit the Dohany Street Synagogue, the Tree of Life memorial, and the Raoul Wallenberg memorial park." },
            { day: "Day 3", activity: "Budapest: Danube & Baths", description: "The Shoes on the Danube Bank memorial. Afternoon relaxation at the historic Széchenyi Thermal Baths." },
            { day: "Day 4", activity: "Bratislava en route to Vienna", description: "Travel to Vienna via Bratislava. Tour the Bratislava Old Town and the Chatam Sofer Memorial." },
            { day: "Day 5", activity: "Vienna: Imperial History", description: "Visit the Jewish Museum Vienna at Dorotheergasse and the Holocaust Memorial at Judenplatz." },
            { day: "Day 6", activity: "Shabbat in Vienna: Imperial Walk", description: "Shabbat-friendly walking tour: Hofburg Palace, St. Stephen's Cathedral, and the Ringstraße architecture." },
            { day: "Day 7", activity: "Travel to Prague", description: "Train journey to Prague. Evening walking tour of the Old Town Square and the Astronomical Clock." },
            { day: "Day 8", activity: "Terezin: The Ghetto of Lies", description: "Full day excursion to the Theresienstadt Ghetto and Small Fortress memorial site." },
            { day: "Day 9", activity: "Prague: Josefov", description: "Comprehensive tour of the Prague Jewish Museum: Old Jewish Cemetery, Pinkas, Klausen, and Maisel Synagogues." },
            { day: "Day 10", activity: "Prague: Bridges & Castles", description: "Cross the Charles Bridge and explore the Prague Castle complex before departure." }
          ]
        }
      ]
    },
    {
      id: "germany",
      title: "Germany",
      label: "",
      brandIds: ['ourtribe'],
      description: "Trace the rise, destruction, and reconstruction of Jewish life in the heart of Europe.",
      heroImage: "/Germany.jpg",
      subItineraries: [
        {
          id: "germany-8day",
          title: "8 Day Journey of Remembrance",
          description: "From the beer halls of Munich to the memorials of Berlin.",
          schedule: [
            { day: "Day 1", activity: "Munich: Rise of the Nazis", description: "Walking tour examining the early years of the NS movement, including the Feldherrnhalle and Konigsplatz." },
            { day: "Day 2", activity: "Dachau Memorial", description: "Profound visit to the Dachau Concentration Camp Memorial Site, the first of its kind." },
            { day: "Day 3", activity: "Nuremberg: Party Grounds", description: "Visit the Documentation Center at the Nazi Party Rally Grounds and the Great Road." },
            { day: "Day 4", activity: "Nuremberg Trials & Berlin Travel", description: "Visit Courtroom 600 where the Nuremberg Trials took place. High-speed train to Berlin." },
            { day: "Day 5", activity: "Berlin: Jewish Identity", description: "Visit the Jewish Museum Berlin and the Memorial to the Murdered Jews of Europe." },
            { day: "Day 6", activity: "Shabbat in Berlin: Historical Walk", description: "Shabbat-friendly walk: Brandenburg Gate, Reichstag exterior, and the Tiergarten memorials." },
            { day: "Day 7", activity: "Berlin: Terror & Wannsee", description: "Visit the Topography of Terror museum and the House of the Wannsee Conference." },
            { day: "Day 8", activity: "Platform 17 & Departure", description: "Visit the Grunewald Station Platform 17 memorial before transferring to the airport." }
          ]
        }
      ]
    },
    {
      id: "litvak-trail",
      title: "The Litvak Trail",
      label: "",
      brandIds: ['ourtribe'],
      description: "A cultural and spiritual journey through the lost world of 'Lite' – from Vilnius to Riga.",
      heroImage: "/Lithuania.jpg",
      subItineraries: [
        {
          id: "litvak-trail-8day",
          title: "Vilnius to Riga Heritage Path",
          description: "Connecting the historical hubs of the Litvak people across the Baltics.",
          schedule: [
            { day: "Day 1", activity: "Vilnius: Jerusalem of the North", description: "Explore the historic Jewish Quarter, the site of the Great Synagogue, and the Vilna Gaon's residence." },
            { day: "Day 2", activity: "Paneriai & Holocaust Research", description: "Visit the Paneriai (Ponary) Memorial Park and the 'Green House' Holocaust Museum." },
            { day: "Day 3", activity: "Trakai & Kaunas", description: "Visit the Karaites' island castle at Trakai en route to Kaunas (Kovno)." },
            { day: "Day 4", activity: "Kaunas: Sugihara & The Fortress", description: "Visit the Sugihara House and the Ninth Fort memorial, focusing on Kovno Ghetto history." },
            { day: "Day 5", activity: "Siauliai & The Hill of Crosses", description: "Travel north, visiting the Chaim Frenkel Villa and the unique Hill of Crosses." },
            { day: "Day 6", activity: "Crossing into Latvia", description: "Travel to Riga, stopping at Rundāle Palace, the pearl of Latvian Baroque architecture." },
            { day: "Day 7", activity: "Riga: Ghetto & Old Town", description: "Visit the Riga Ghetto Museum and the Peitav Synagogue, the only one to survive the war in Riga." },
            { day: "Day 8", activity: "Rumbula & Departure", description: "Visit the Rumbula Forest memorial site before your transfer to Riga International Airport." }
          ]
        }
      ]
    },
    {
      id: "heritage-custom",
      title: "Build your own Heritage Tour",
      label: "",
      brandIds: ['ourtribe'],
      description: "Collaborate with our experts to design a signature experience that reflects your community's specific history, values, and goals.",
      heroImage: "/Tree%20of%20life.jpg",
      subItineraries: [
        {
          id: "custom-consult",
          title: "Design Your Journey",
          description: "Every journey is unique. We work with you through every phase of planning.",
          schedule: [
            { day: "Phase 1", activity: "Identity & Goal Consultation", description: "Discussing the specific narrative and educational objectives of your group." },
            { day: "Phase 2", activity: "Logistics & Site Curation", description: "Selecting the destinations and experts that align with your vision." },
            { day: "Phase 3", activity: "Spiritual & Cultural Programming", description: "Integrating Shabbat experiences and specialized local workshops." }
          ]
        }
      ]
    }
  ],
  testimonials: [
    {
      author: "Institutional Client A",
      text: "The institutional credibility and attention to detail provided by IPCS is unmatched in the industry.",
      rating: 5,
      source: "Internal"
    },
    {
      author: "Traveler B",
      text: "Pizazz Israel Tours made our trip absolutely unforgettable. The energy was incredible!",
      rating: 5,
      source: "TripAdvisor"
    }
  ],
  trustedBy: [
    { name: "AUJS", logo: "/aujs.png" },
    { name: "SAUJS", logo: "/SAUJS.png" },
    { name: "Young Judea", logo: "/Young%20Judea.png" },
    { name: "WUJS", logo: "/WUJS%20logo.png" },
    { name: "UNSW", logo: "/unsw%20updated.png" },
    { name: "Habonim", logo: "/Habonim.png" },
    { name: "Hebrew University", logo: "/Logo-Hebrew-University.jpg" }
  ]
};
