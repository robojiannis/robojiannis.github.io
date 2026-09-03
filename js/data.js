window.PORTFOLIO = {
  person: {
    name: "Jiannis Sotiropoulos",
    legal: "Ioannis Sotiropoulos",
    location: "Berlin",
    languages: ["German", "English", "Greek"],
    email: "robojiannis [at] gmail [dot] com",
    linkedin: "https://www.linkedin.com/in/jiannissotiropoulos/",
    hire:
      "I like building digital products: choosing the stack, prototyping the integration, shipping it, and still being there after launch.",
    education: [
      {
        degree: "Master of Arts, European Media Studies",
        place: "University of Potsdam / FH Potsdam",
        year: "2008",
      },
      {
        degree: "Bachelor, Sociology",
        place: "Panteion University, Athens",
        year: "2005",
      },
    ],
    skills: [
      "Strategy",
      "Problem solving",
      "Leadership",
      "Funding",
      "Business development",
      "Technical architecture",
    ],
  },
  projects: [
    {
      id: "whether",
      name: "whether.games",
      org: "whether",
      type: "own",
      seats: ["lead", "programming"],
      years: "2026",
      yearStart: 2026,
      yearSort: 2026,
      scope: null,
      partners: [],
      team: "1",
      story:
        "whether.games is an AI tool that quickly cleans up a publisher’s inbox and helps developers iteratively improve their games. Pitch decks land in an encrypted inbox; publishers get a fit report back — whether this game belongs with them, and what the weather looks like if they take it on.\n\nIt scores against the publisher’s own lens — genre, audience, budget, content policy — using Steam shelf signals and curated market references. Developers get the same read, so they can change the game and the pitch instead of guessing why it was a pass.",
      responsibilities:
        "I did the development on my own. I built the infrastructure: an encrypted inbox for pitches, a scoring pipeline that stays model-agnostic, and the live market data a fit report has to stand on.",
      scopeNote: null,
      partnersNote: null,
      result:null,      awards: null,
      visual: null,
    },
    {
      id: "lost-glitches",
      name: "The Lost Glitches",
      org: "honig",
      type: "own",
      seats: ["lead", "programming"],
      years: "2022–2025",
      yearStart: 2022,
      yearSort: 2025,
      scope: "high",
      partners: ["BMWK", "equity investment"],
      team: "25",
      story:
        "The Lost Glitches is a tactical card battler designed for instant action. Jump into short, clean PvP battles with 5 free complete starter decks. It’s easy to start, but deep when you want it, master the 5-slot battlefield, unlock skills, and go deeper at your own pace.",
      responsibilities:
        "I directed the game, handled business development and publishing, and programmed the LiveOps backend — the stores, the economy, live operations, and streaming.",
      scopeNote: "A live game with twenty-five of us, development started in 2022 until it released in 2025.",
      partnersNote: "BMWK funded the production, along with equity investors.",
      result:
        "We were competing with AAA games for the same players. In spite of that, a strategic partnership with Twitch, listening to the community, and choosing which features to ship increased daily players, retention, and how many people signed up. We reached 300,000 registered users, and a peak of 10,000 people playing on the same day.",
      awards: null,
      visual: { kind: "video", src: "media/lost-glitches.mp4?v=2", poster: "media/lost-glitches.jpg?v=2" },
    },
    {
      id: "hochdrei",
      name: "hochdrei – Visionenspiel",
      org: "honig",
      type: "hired",
      seats: ["lead", "programming"],
      years: "2021–2022",
      yearStart: 2021,
      yearSort: 2022,
      scope: "low",
      partners: ["Kulturstiftung des Bundes", "Die Baupiloten"],
      team: null,
      story:
        "You want to rethink a library — maybe even rebuild it — and you want the people who use it in the room. hochdrei – Visionenspiel is a browser game the Kulturstiftung des Bundes made for that: library teams, administrations, and citizens sit together and turn scattered wishes into one shared concept.\n\nYou book a slot, send a link, and meet in the browser for about two hours, webcam and microphone on. The game walks the group from rough ideas — how the place should look, what it should do, how it should feel — to a plan you can download and keep using. Desktop only; phones and tablets stay out.",
      responsibilities:
        "I was the technical lead and I programmed it. I worked iteratively, with rapid prototypes, so the tool could change as we learned what actually happened in the room.",
      scopeNote:
        "We spent a year and a half developing and testing it. The partner libraries we worked with asked for an intentionally simple design — they wanted the focus on the conversation and the ideation, not the interface. It launched on 24 October 2022, the German Day of Libraries.\n\nLibraries across Germany use the page as a foundation for their workshops.",
      partnersNote:
        "The Kulturstiftung des Bundes commissioned it. Die Baupiloten BDA, with Prof. Dr. Susanne Hofmann, did idea and concept.",
      result: null,
      awards: null,
      visual: { kind: "image", src: "media/hochdrei.jpg?v=2" },
    },
    {
      id: "migrant-lives",
      name: "Migrant Lives in Pandemic Times",
      org: "honig",
      type: "hired",
      seats: ["programming"],
      years: "2021",
      yearStart: 2021,
      yearSort: 2021,
      scope: "low",
      partners: ["Migration Matters", "CERC Migration"],
      team: null,
      story:
        "Twelve short portraits of people living between countries during Covid, each paired with a scholar’s video and a policy brief. Recorded in the summer of 2021. From a Chilean tutor in Oakland to a Senegalese street seller in Bilbao, the platform puts voices that were missing from the debate next to the analysis that might change the conditions around them.\n\nThe people in the films took part in making their own stories, from start to finish.",
      responsibilities:
        "I was the technical lead and I programmed the platform.",
      scopeNote: "A social documentary platform, made in 2021.",
      partnersNote:
        "It was produced by CERC Migration at Toronto Metropolitan University and Migration Matters in Berlin.",
      result: null,
      awards: null,
      visual: { kind: "video", src: "media/migrant-lives.mp4", poster: "media/migrant-lives.jpg" },
    },
    {
      id: "ooigo",
      name: "Ooigo",
      org: "honig",
      type: "hired",
      seats: ["lead", "programming"],
      years: "2017–2020",
      yearStart: 2017,
      yearSort: 2020,
      scope: "high",
      partners: ["Sony Music"],
      team: "8",
      story:
        "Ooigo is a dedicated app to stream audiobooks for children. It connects with your Spotify or Apple Music account and helps you find the best stories based on your child’s interests and age. The app learns the more you use it: it remembers favourite series, continues from where you stopped listening, and suggests series that fit the profile.\n\nChildren can search for the series and episodes they love, and if the result doesn’t fit the preset profile, a parental gate kicks in. It is a fun, safe and simple way to discover stories for children of all ages.",
      responsibilities:
        "I technically led the project from the first idea through to what happened after launch, and I sat with Sony’s Head of New Business the whole way. I built the backend APIs, the Spotify and Deezer connections, and the recommendation algorithms. ",
      scopeNote: "A live product with eight of us, from 2017 to 2020.",
      partnersNote: "Sony Music was the partner.",
      result:
        "The recommendation engine made new audiobooks discoverable, so kids and families spent more time listening and Sony's catalogue listens grew.",
      awards: null,
      press: [
        {
          quote:
            "Dank intuitiver Swipe-Gesten und einem simplen Layout mit großem Coverbild wird es den Kleinen leicht gemacht, sich in der App zurecht zu finden.",
          source: "appgefahren.de",
        },
        {
          quote:
            "Umso willkommener heißen wir eine App wie den Ooigo Kidsplayer, die uns genau das ermöglicht, was wir uns wünschen: Kinder mit der heutigen Technik aufwachsen zu lassen, das allerdings auf kindgerechte Art und Weise und in einem sicheren Umfeld.",
          source: "baby, kind und meer",
        },
      ],
      visual: { kind: "video", src: "media/ooigo.mp4", poster: "media/ooigo.jpg" },
    },
    {
      id: "kunstlabore",
      name: "Kunstlabore",
      org: "honig",
      type: "hired",
      seats: ["lead", "programming"],
      years: "2018–2019",
      yearStart: 2018,
      yearSort: 2019,
      scope: "mid",
      partners: ["Mutik", "Stiftung Mercator"],
      team: "5",
      story:
        "Make more art at school. Art and creative thinking are fundamental building blocks of a child’s education, but bringing the artistic method into schools is a complicated task. For three years, five art groups — fine arts, literature, music, dance and theater — worked with schools to develop formats and methods for qualitative art in the classroom.\n\nKunstlabore is the online platform documenting that work, made to inspire educators and artists to work together.",
      responsibilities:
        "I led the project and owned the digital concept and the code.",
      scopeNote:
        "An arts-education platform with five of us, from 2018 to 2019. We had to coordinate six other teams — they came from schools, education, and art, and they were not tech-savvy.\n\nMultiple workshops and iterations led to a workbook so teachers across the country could replicate the methods for teaching art in schools.",
      partnersNote:
        "We made this with Mutik GmbH. Stiftung Mercator funded the programme.",
      result: null,
      awards: null,
      visual: { kind: "video", src: "media/kunstlabore.mp4", poster: "media/kunstlabore.jpg" },
    },
    {
      id: "el-hijo",
      name: "El Hijo",
      org: "honig",
      type: "own",
      seats: ["lead"],
      years: "2016–2019",
      yearStart: 2016,
      yearSort: 2019,
      scope: "high",
      partners: ["HandyGames", "Medienboard", "Nordmedia"],
      team: "16",
      story:
        "El Hijo is a spaghetti western, an indie stealth game set in a mythical place that resembles the American west as we know it from Sergio Leone: gangs of outlaws, shady saloons, and desert landscapes, all served with a helping of sarcasm and irony. The journey begins when a farmer and her son El Hijo are attacked by bandits who raze their farm. The mother, confronted with a difficult choice, leaves El Hijo with a group of old monks at a secluded monastery. El Hijo decides the monastic life is not for him, and he escapes.\n\nYou sneak through three environments — a remote monastery, a harsh stretch of desert, and a frontier town rife with crime — and in each one El Hijo has to contend with different opponents. Progress means combining stealth and puzzle-solving into a mischievous master plan, and the further he goes, the more complex those combinations become.",
      responsibilities:
        "I was the project lead and was responsible for business development and funding.",
      scopeNote: "A console, streaming, and PC game with sixteen of us, from 2016 until it released in 2019.",
      partnersNote: "HandyGames published it, with additional funding from Medienboard and Nordmedia.",
      result: null,
      awards:
        "It took Gamescom 2019 Best Indie Game, the Deutscher Computerspielpreis 2021 for best Family Game, and Apple TV Game of the Year.",
      press: [
        {
          quote: "Gamescom’s Best Indie Winner El Hijo’ Brings A New Look To The Western",
          source: "Matt Paprocki, Forbes",
        },
        {
          quote: "‘El Hijo’ is a Spaghetti Western stealth game with heart",
          source: "Jessica Conditt, Engadget",
        },
        {
          quote:
            "Honig Studios’s awareness of the genre it’s stepping into and its visual sophistication suggests good things for a dreamlike spaghetti-western",
          source: "Gareth Damian Martin, Kill Screen",
        },
        {
          quote:
            "With soft cell-shaded, sepia tones El Hijo is definitely a pretty game, but it impresses on a gameplay level as well.",
          source: "Rebecca Stow, Daily Star",
        },
        {
          quote:
            "a brilliant non-violent stealth game where El Hijo must sneak around to escape and find his mother.",
          source: "Maggie Wall, Indie Toaster",
        },
      ],
      visual: { kind: "video", src: "media/el-hijo.mp4", poster: "media/el-hijo.jpg" },
    },
    {
      id: "richard-the-stork",
      name: "Richard the Stork",
      org: "honig",
      type: "hired",
      seats: ["production"],
      years: "2017",
      yearStart: 2017,
      yearSort: 2017,
      scope: "high",
      partners: ["Knudsen & Streuber", "Medienboard"],
      team: "12",
      story:
        "Richard is a little sparrow who is convinced he is a stork. The 3D cinema film follows him, Olga, Kiki, and a flock of pigeons. The companion app puts those same characters on iOS and Android — games and playful features, built in Unity from the film’s 3D world.",
      responsibilities:
        "I led the production and funding of the companion app.",
      scopeNote: "A 3D Unity game app — cinema assets cut down for phones — with twelve of us, in 2017.",
      partnersNote:
        "We made this with Knudsen & Streuber Medienmanufaktur, with funding from Medienboard.",
      result: null,
      awards: null,
      visual: { kind: "image", src: "media/richard-the-stork.jpg?v=3" },
    },
    {
      id: "movie-creator",
      name: "Movie Creator",
      org: "honig",
      type: "hired",
      seats: ["production"],
      years: "2017",
      yearStart: 2017,
      yearSort: 2017,
      scope: "low",
      partners: ["Fox and Sheep"],
      team: "6",
      story:
        "Fox and Sheep Movie Studio gives you the chance to create a birthday film for granny, explain something complicated in an easy way, or finally put the stories in your head on screen. You can bring in characters from Little Fox Music Box and Nighty Night, dress the film with effects, and make it yours with an opening and a closing.",
      responsibilities:
      "I looked after production, sitting with Fox and Sheep while the app came together.",
      scopeNote: "A licensed kids app with six of us, in 2017.",
      partnersNote: "We made this with Fox and Sheep.",
      result: null,
      awards: null,
      press: [
        {
          quote: "Für kreativen Filmspaß ist mit dem Fox & Sheep Filmstudio daher definitiv gesorgt",
          source: "appgefahren",
        },
      ],
      visual: { kind: "video", src: "media/movie-creator.mp4", poster: "media/movie-creator.jpg" },
    },
    {
      id: "obstgarten",
      name: "Obstgarten",
      org: "honig",
      type: "hired",
      seats: ["production"],
      years: "2016",
      yearStart: 2016,
      yearSort: 2016,
      scope: "low",
      partners: ["HABA", "Fox and Sheep"],
      team: "5",
      story:
        "What a lovely fruit garden — the fruit looks ripe and juicy — but Theo the Raven, the cheeky thief, wants to swipe it. He will try every trick to distract you and get the fruit from your basket. Only a quick harvest of cherries, apples, pears and plums keeps the raven from snatching them.\n\nThe child plays directly against Theo. When it is his turn he creeps a little closer, or starts one of many mini-games, which loosens the course of play and creates little surprises. This mobile version was made for the thirtieth anniversary of HABA’s classic board game Orchard, inviting children to play and learn about fruit and colours, in seventeen languages.",
      responsibilities:
        "I ran production management on the digital version of HABA’s Orchard.",
      scopeNote: "A licensed board-game app with five of us, in 2016.",
      partnersNote: "HABA and Fox and Sheep were the partners.",
      result: null,
      awards: null,
      press: [
        {
          quote:
            "Beautiful and smoothly animated. There are little surprises here and there that keep the game lighthearted.",
          source: "Camila Amanda, Geeks With Juniors",
        },
        {
          quote:
            "The Orchard is a neat and well-crafted app that offers stress-free fun for kids aged three and above",
          source: "Stuart Dredge, Apps Playground",
        },
        {
          quote:
            "der Klassiker wurde wunderbar in die digitale Welt übertragen und ist nun eine hervorragende Spiele App mit Lerneffekt",
          source: "Ene Mene Mobile",
        },
      ],
      visual: { kind: "video", src: "media/obstgarten.mp4", poster: "media/obstgarten.jpg" },
    },
    {
      id: "milli",
      name: "Milli The Snail",
      org: "honig",
      type: "own",
      seats: ["lead", "programming"],
      years: "2014–2015",
      yearStart: 2014,
      yearSort: 2015,
      scope: "mid",
      partners: ["Medienboard", "MFG"],
      team: "6",
      story:
        "On a perfectly normal, totally magical hill stands a very special apple tree, full of confetti blossom, autumn leaves and rosy apples all at the same time. Beneath the apple tree lives a very small and very curious young snail called Milli. She is the only snail on Apple-Tree Hill, and when we first meet her she is not sure what it means to be a snail. She is very slow, she knows that much.\n\nBut Milli is also inquisitive, and it is her constant need to understand the world around her that fuels her adventures. When she sees Harry the Stag Beetle’s magnificent antlers, she doesn’t think “oh, that’s interesting.” She thinks: I wonder what it would be like to have antlers like that? And thus another adventure begins.",
      responsibilities:
        "I programmed the app, handled business development and fuding, and published it on the iOS and Android stores.",
      scopeNote: "An original children’s app with six of us, from 2014 to 2015. I coordinated the efforts that resulted in selling the distribution rights to a major publisher.",
      partnersNote: "Medienboard and MFG funded it.",
      result: null,
      awards:
        "It picked up a GIGA Maus, a Red Dot Design Award, FWA Mobile, Cinekid, and Communication Arts.",
      press: [
        {
          quote: "Milli might just be the most beautiful app for the iPad",
          source: "Brain Pickings",
        },
        {
          quote:
            "Milli the Snail is both thematically and artistically an exceptionally interesting storybook app.",
          source: "beste kinder apps",
        },
        {
          quote:
            "In addition to a fabulous, charming animated story with a positive message, Milli the Snail includes plenty of fun and games.",
          source: "iPhone Kinder Apps",
        },
        {
          quote:
            "A small celebration for children and parents, full of details, funny ideas and cute heroes from forest and grassland.",
          source: "myToys",
        },
        {
          quote:
            "Milli has great artwork, age-appropriate approach, international appeal and well-thought through usage of various platforms to engage the audience.",
          source: "Cinekid Festival",
        },
      ],
      visual: { kind: "video", src: "media/milli.mp4", poster: "media/milli.jpg" },
    },
    {
      id: "atterwasch",
      name: "Atterwasch",
      org: "honig",
      type: "hired",
      seats: ["programming"],
      years: "2013–2014",
      yearStart: 2013,
      yearSort: 2014,
      scope: "low",
      partners: ["ARTE Future", "MIZ Babelsberg", "Rudolf Augstein Stiftung"],
      team: "5",
      story:
        "Atterwasch is a web-documentary about the German village of the same name, under pressure to make way for a brown-coal open-cast mine, even though the village exemplifies Germany’s energy transition. Over a year, from 2013 to 2014, it follows the uncertainty the residents were living with. With interactive parallax scrolling, it takes a detailed inventory of the mining area of Lower Brandenburg, and unfolds the fate of a region and its inhabitants between relocation and home, unemployment and large corporations, conservation and energy policy — a black-and-white footprint of a village that will soon be history.",
      responsibilities:
        "I programmed the site and shaped the UX, so you could set your own pace through the village. I helped coordinate the project with the partners and the team as well as the integration with the other media partners.",
      scopeNote: "A public-media web-documentary with five of us, from 2013 to 2014.",
      partnersNote: "We made this with ARTE Future, MIZ Babelsberg, and the Rudolf Augstein Stiftung.",
      result: null,
      awards: "It picked up a Lovie Award, a Lead Award, Communication Arts, and an Awwwards.",
      press: [
        {
          quote: "A compelling scroll-documentary that captures the humanity of a small town.",
          source: "Leica Camera Blog",
        },
        {
          quote: "A haunting cautionary tale about a tiny German town struggling to exist.",
          source: "Made by Morel",
        },
      ],
      visual: { kind: "video", src: "media/atterwasch.mp4?v=2", poster: "media/atterwasch.jpg?v=2" },
    },
    {
      id: "disaster-resilience",
      name: "Disaster Resilience Journal",
      org: "honig",
      type: "hired",
      seats: ["programming"],
      years: "2014",
      yearStart: 2014,
      yearSort: 2014,
      scope: "mid",
      partners: ["Red Cross", "Helios Design Labs"],
      team: "5",
      story:
        "An interactive web-documentary built around forty-two short pieces — photo and video essays, interviews, games and quizzes — in eleven languages. Viewers were invited to contribute their own resilience stories, and the campaign lived across web, mobile, social and live events.",
      responsibilities: "I programmed the mini-games inside it and helped coordinate the project with the partners and the team as well as the integration with the other media partners.",
      scopeNote: "A humanitarian web-documentary with five of us, in 2014.",
      partnersNote:
        "The Red Cross — the International Federation of Red Cross and Red Crescent Societies — commissioned it; Helios Design Labs produced it with us.",
      result: "The campaign reached more than 9.3 million people in less than two months in 2014.",
      awards: "It was recognised by Communication Arts and with a Digital Communications NGO award.",
      visual: {
        kind: "video",
        src: "media/disaster-resilience.mp4",
        poster: "media/disaster-resilience.jpg",
      },
    },
    {
      id: "everyday-rebellion",
      name: "Everyday Rebellion",
      org: "honig",
      type: "hired",
      seats: ["programming"],
      years: "2014",
      yearStart: 2014,
      yearSort: 2014,
      scope: "mid",
      partners: ["Kloos & Co.", "Golden Girls Filmproduktion", "Medienboard"],
      team: "6",
      story:
        "A companion app to a feature documentary about creative nonviolent activism: a practical guide and information hub connected to the film and the site. The app was built around user-generated content — people could contribute their own material, so the project kept growing beyond the film.",
      responsibilities:
        "I programmed the app and built the backend to screen, curate, and highlight user-generated content, and to connect it to the film.",
      scopeNote: "A documentary companion with six of us, in 2014.",
      partnersNote:
        "Kloos & Co. and Golden Girls Filmproduktion were the partners. Medienboard funded it.",
      result:
        "People could contribute their own material, and the pieces that belonged could be screened, curated, and shown next to the film.",
      awards: null,
      visual: {
        kind: "video",
        src: "media/everyday-rebellion.mp4",
        poster: "media/everyday-rebellion.jpg",
      },
    },
    {
      id: "spiral",
      name: "The Spiral",
      org: "honig",
      type: "hired",
      seats: ["production", "programming"],
      years: "2010–2012",
      yearStart: 2010,
      yearSort: 2012,
      scope: "high",
      partners: ["Caviar Films", "NRK", "SVT", "VARA", "Arte", "TV3", "YLE", "Eén"],
      team: "12",
      story:
        "A European transmedia crime series that went out live, in several languages, at the same time across a group of state broadcasters — with online games and a live event in Brussels. Players moved between the broadcast, a map of the city, and more than twenty minigames.",
      responsibilities:
        "I was the technical producer and I built the mini-games that sat alongside the series.",
      scopeNote: "A transmedia series with twelve of us, from 2010 to 2012.",
      partnersNote:
        "Caviar Films produced the series with a group of European broadcasters — NRK, SVT, VARA, Arte, TV3, YLE, and Eén.",
      result:
        "Around two million people watched. A hundred thousand played, and ten thousand created something inside the story — fewer than a straight broadcast would gather, but the people who jumped in went much deeper.",
      awards: "The series was nominated for a Digital Emmy and a Prix Europa Award.",
      visual: { kind: "video", src: "media/spiral.mp4?v=2", poster: "media/spiral.jpg?v=2" },
    },
    {
      id: "jessie-j",
      name: "Sing with Jessie J",
      org: "honig",
      type: "hired",
      seats: ["programming"],
      years: "2011",
      yearStart: 2011,
      yearSort: 2011,
      scope: "low",
      partners: ["Universal Music"],
      team: "8",
      story:
        "A Facebook karaoke app and a YouTube video for Universal Music, promoting Jessie J’s single Price Tag to teenage girls. Your webcam synced to a prerecorded video, Facebook Connect folded in some of your info, and the tracking rewarded you for dancing along.",
      responsibilities:
        "I programmed the karaoke app and coordinated with anothe developer — the webcam, the bitmap tracking, Facebook Connect, and the backend that ran it in eight languages.",
      scopeNote: "A music-campaign experiment with eight of us, in 2011.",
      partnersNote: "Universal Music was the partner.",
      result:
        "In the first weeks it picked up more than 10,000 views and 1,000 shares. It ran in eight languages and more than 30 countries — the first Universal Music Germany interactive project they distributed internationally.",
      awards: null,
      press: [
        {
          quote: "eine einzigartige Aktion",
          source: "Dominic Hesse, Universal Music",
        },
      ],
      visual: { kind: "image", src: "media/jessie-j.jpg?v=2" },
    },
    {
      id: "notruf",
      name: "Notruf Deutschland",
      org: "honig",
      type: "hired",
      seats: ["programming"],
      years: "2010–2011",
      yearStart: 2010,
      yearSort: 2011,
      scope: "mid",
      partners: ["MyVideo", "Medienboard"],
      team: "8",
      story:
        "Notruf Deutschland is an interactive drama told across multiple platforms, which aims to provoke a public debate around the subject of reality TV. It reveals how reality shows actually work: framing the participants, manipulating content and deceiving the viewers. At its core is a scripted reality show, which gradually exceeds all moral and social conventions.\n\nIt blends reality and fiction in a puzzle the audience is invited to unravel: discover backstage material of the show, discuss the implications of such a format and eventually take action to stop it. Seven episodes of five minutes.",
      responsibilities:
        "I programmed the interactive player — live compositing of the viewer’s photo at preset timecodes, Facebook photo import, and a face-recognition step so only pictures with one face were used.",
      scopeNote: "An experimental web series with eight of us, from 2010 to 2011.",
      partnersNote: "We made this for MyVideo, with funding from Medienboard.",
      result: null,
      awards: "It picked up an FWA and the interactive page went viral with hundreds of thousands of views.",
      visual: { kind: "video", src: "media/notruf.mp4?v=2", poster: "media/notruf.jpg?v=2" },
    },
  ],
};
