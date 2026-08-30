import type { LocalizedPortfolioData } from "./types";

export const localizedData: LocalizedPortfolioData = {
  profile: {
    title: "Ingegnere del Software",
    summary:
      "Ingegnere del Software con oltre 5 anni di esperienza nello sviluppo di prodotti full-stack, nell'architettura di sistemi e nella leadership di flussi di lavoro potenziati dall'IA. Esperto nella realizzazione di piattaforme web, strumenti per sviluppatori, sistemi real-time, applicazioni CLI orientate alla sicurezza, integrazioni MCP e agenti IA basati su fonti verificabili. Utilizza GitHub Copilot, Claude Code e Codex per accelerare la consegna mantenendo la qualità attraverso pianificazione, context engineering, revisione sistematica, test e automazione DevOps.",
    shortBio:
      "Ingegnere del Software con sede a Trento e oltre 5 anni di esperienza in prodotti full-stack, strumenti per sviluppatori, sistemi real-time e ingegneria potenziata dall'IA. Focalizzato su architettura, orchestrazione di agenti, revisione sistematica e adozione efficace dell'IA nei team.",
    locationLabel: "Trento, Italia",
  },

  experience: [
    {
      id: "arcoda",
      role: "Ingegnere del Software",
      summary:
        "Ingegnere del software impegnato nello sviluppo di una piattaforma GIS configurabile, librerie condivise per la visualizzazione geospaziale e 3D e strumenti interni full-stack. Segue le funzionalità dalla progettazione al supporto post-rilascio e contribuisce all'adozione di pratiche strutturate di sviluppo assistito dall'IA.",
      responsibilities: [
        "Sviluppo e manutenzione di applicazioni GIS configurabili per infrastrutture, servizi ambientali, edilizia, immagini aeree e modelli 3D di cantieri",
        "Manutenzione di librerie TypeScript condivise per Google Maps, MapLibre e Leaflet e per il rendering 3D con Babylon.js",
        "Gestione di funzionalità frontend e cartografiche dalla progettazione al rilascio e al supporto successivo",
        "Leadership di uno strumento interno full-stack per monitorare acquisizioni 3D e ricalibrazioni con .NET, Angular, PostgreSQL, Python e Kubernetes CronJobs",
        "Uso di GitHub Copilot, Claude Code, Codex e agenti personalizzati attraverso pianificazione, context engineering, revisione e validazione",
        "Punto di riferimento interno per lo sviluppo assistito dall'IA e collaborazione con il management su pratiche, guardrail e misure di successo",
        "Progettazione ed erogazione di una formazione sull'ingegneria agentica per colleghi di quattro team",
        "Rappresentanza del team di sviluppo in un'iniziativa interfunzionale di miglioramento continuo",
      ],
      achievements: [
        {
          description:
            "Progettazione, rilascio e supporto della visualizzazione multi-ortofoto con stato a collezione, controlli sincronizzati e gestione automatica della viewport",
        },
        {
          description:
            "Rapida evoluzione dalla consegna di funzionalità su quattro progetti al mentoring di uno stagista, alla guida di uno strumento full-stack interno e alla rappresentanza del team nel miglioramento continuo",
        },
        {
          description:
            "Avvio di un programma di adozione dell'IA sostenuto dal management e formazione inter-team sulle pratiche di ingegneria agentica",
        },
      ],
    },
    {
      id: "neg-digital",
      role: "Ingegnere del Software",
      summary:
        "Sviluppatore che opera lungo l'intero ciclo di vita dello sviluppo software in una piccola startup, creando applicazioni web e strumenti di automazione basati sull'IA per servizi di creazione contenuti.",
      responsibilities: [
        "Creazione di applicazioni web utilizzando Angular per prodotti interni e React/Next.js/Astro per siti rivolti ai clienti",
        "Sviluppo di sistemi ad agenti IA per flussi di lavoro automatizzati di creazione contenuti",
        "Creazione e distribuzione di sistemi RAG per il recupero di informazioni e la generazione di contenuti",
        "Implementazione di server MCP per la comunicazione e orchestrazione di modelli IA",
        "Integrazione di API IA (OpenAI, Anthropic) con prompt engineering per l'automazione dei contenuti",
        "Lavoro con database vettoriali e modelli di embedding per funzionalità di ricerca semantica",
        "Partecipazione a chiamate con i clienti e contributo alla definizione dell'ambito dei progetti e alla stima delle tempistiche",
        "Contributo alla pianificazione degli sprint e alla definizione delle milestone con gli stakeholder",
        "Manutenzione di pipeline CI/CD e flussi di distribuzione multi-ambiente",
      ],
      achievements: [
        {
          description:
            "Contributo all'automazione basata sull'IA che ha permesso di ridurre i tempi di creazione manuale dei contenuti",
          metric: "riduzione di circa il 40%",
        },
        {
          description:
            "Creazione di strumenti basati sull'IA a supporto di molteplici progetti clienti per la produzione di contenuti",
        },
      ],
    },
    {
      id: "neg-group",
      role: "Ingegnere del Software Freelance",
      summary:
        "Manutenzione ed espansione di una piattaforma di gestione aziendale esistente per un'impresa edile, lavorando in autonomia come unico sviluppatore del progetto.",
      responsibilities: [
        "Manutenzione ed espansione della piattaforma di gestione aziendale utilizzata in tutti i reparti dell'azienda",
        "Incontri settimanali con il CEO e il personale per raccogliere requisiti e definire le priorità delle funzionalità",
        "Sviluppo di moduli per la gestione clienti, il monitoraggio dei cantieri e la fatturazione",
        "Ristrutturazione di Firebase Realtime Database per migliorare le query di ricerca e i tempi di caricamento",
        "Creazione di automazioni dei flussi di lavoro collegando CRM, gestione progetti e moduli di fatturazione",
        "Sviluppo di API REST per la sincronizzazione dei dati tra i moduli della piattaforma",
        "Manutenzione di pipeline CI/CD per le distribuzioni",
      ],
      achievements: [
        {
          description:
            "Miglioramento dell'automazione della piattaforma riducendo il lavoro amministrativo manuale del team",
        },
        {
          description:
            "Ristrutturazione del database migliorando le prestazioni di recupero dati",
        },
        {
          description:
            "Consegna delle funzionalità nei tempi previsti attraverso la collaborazione diretta con l'azienda",
        },
      ],
    },
    {
      id: "tc-consulting",
      role: "Sviluppatore Software Fullstack",
      summary:
        "Sviluppatore fullstack che lavora sul prodotto interno dell'azienda e come consulente esterno per un cliente SaaS con sede nel Regno Unito (Commify) all'interno di un team di 10 sviluppatori.",
      responsibilities: [
        "Sviluppo e manutenzione del prodotto web interno dell'azienda (frontend e backend)",
        "Lavoro come parte di un team di 10 sviluppatori per la migrazione di piattaforma di un cliente SaaS con sede nel Regno Unito (Commify)",
        "Contributo alla migrazione di un codebase legacy PHP ad Angular per una piattaforma di messaggistica SMS",
        "Supporto alla migrazione delle API da una piattaforma acquisita al sistema del cliente",
        "Implementazione del lazy loading per i moduli Angular per ridurre la dimensione del bundle",
        "Contributo allo sviluppo di API utilizzando Java e Spring Framework",
        "Lavoro su miglioramenti dell'interfaccia utente utilizzando Angular",
        "Partecipazione a code review e flussi di lavoro di branching basati su Git con il team internazionale",
      ],
      achievements: [
        {
          description:
            "Contributo alla migrazione della piattaforma per un servizio di messaggistica SMS come parte di un team distribuito",
          metric: "migrazione di 6 mesi",
        },
        {
          description:
            "Contributo al miglioramento delle prestazioni frontend tramite lazy loading di Angular e ottimizzazione del bundle",
        },
      ],
    },
    {
      id: "unitn-internship",
      role: "Stagista Sviluppatore Software",
      summary:
        "Tirocinio orientato alla ricerca per lo sviluppo di un sistema di tracciamento IoT per il progetto di tesi, progettando un sistema basato su Raspberry Pi per la triangolazione delle posizioni dei dispositivi Wi-Fi.",
      responsibilities: [
        "Progettazione e sviluppo di un sistema basato su Raspberry Pi per la triangolazione delle posizioni dei dispositivi Wi-Fi",
        "Sviluppo di un'interfaccia web per la visualizzazione dei dati di tracciamento",
        "Contributo all'architettura software e al processo di distribuzione",
      ],
      achievements: [
        {
          description:
            "Completamento con successo del progetto di tesi sulla triangolazione dei dispositivi tramite hardware embedded",
        },
        {
          description:
            "Sviluppo di un prototipo funzionante che dimostra l'applicazione pratica di concetti teorici",
        },
      ],
    },
  ],

  skillGroups: [
    {
      key: "frontend",
      label: "Tecnologie Frontend",
      description:
        "Framework, linguaggi e strumenti per la creazione di interfacce utente",
    },
    {
      key: "backend",
      label: "Tecnologie Backend",
      description: "Linguaggi lato server, framework e progettazione di API",
    },
    {
      key: "databaseAndCloud",
      label: "Database e Cloud",
      description: "Archiviazione dati, piattaforme cloud e infrastruttura",
    },
    {
      key: "aiAndAutomation",
      label: "IA e Automazione",
      description:
        "Framework IA, integrazione LLM e sistemi di automazione",
    },
    {
      key: "devopsAndPractices",
      label: "Strumenti e Pratiche di Sviluppo",
      description: "Controllo versione, CI/CD, metodologie e gestione dei progetti",
    },
    {
      key: "aiAugmentedDev",
      label: "Sviluppo Potenziato dall'IA",
      description:
        "Pratiche e flussi di lavoro per lo sviluppo software assistito dall'IA",
    },
  ],

  projects: [
    {
      id: "canvas-agent",
      tagline: "Workspace Excalidraw persistenti su file per agenti di coding IA",
      description:
        "Workspace durevole e indipendente dal provider che consente a strumenti come Codex, Claude Code e ChatGPT di creare e mantenere diagrammi Excalidraw insieme a specifiche Markdown e note a livello di elemento.",
      highlights: [
        "Progettato un formato su file che abbina scene Excalidraw standard, documenti Markdown, note persistenti, revisioni indipendenti e snapshot recuperabili",
        "Creati CLI Node.js e server MCP per scoperta dei progetti, contesto compatto, creazione di pagine, collegamenti e patch validate",
        "Implementati controlli di revisione ottimistici e salvataggi sicuri in caso di conflitto",
        "Realizzato un workspace browser locale con viste diagramma, documento e affiancata",
        "Pubblicato @andreacaddev/canvas-agent con skill per più strumenti IA e controlli automatici di build e test",
      ],
    },
    {
      id: "company-researcher",
      tagline: "Agente di ricerca IA basato su fonti verificabili",
      description:
        "Flusso di ricerca aziendale e di settore con limiti espliciti, raccolta di fonti pubbliche, evidenze tracciabili, gestione delle informazioni mancanti e dossier Markdown con citazioni.",
      highlights: [
        "Implementate fasi di ricerca, estrazione delle evidenze, sintesi e generazione del dossier con esiti espliciti",
        "Integrati modelli OpenAI e ricerca Tavily tramite LangChain con limiti configurabili",
        "Aggiunte tracce LangSmith opzionali con controlli sulla visibilità di input e output",
        "Creata una verifica deterministica senza chiavi API con fixture, fake, pytest e Ruff",
      ],
    },
    {
      id: "sbobuz",
      tagline: "Gioco di carte multiplayer real-time con motore event-sourced",
      description:
        "Gioco di carte multiplayer nel browser con registrazione, stanze, avversari umani e IA, riconnessione e comunicazione WebSocket scalabile orizzontalmente.",
      highlights: [
        "Realizzato un monolite modulare con client Next.js, backend Express, contratti TypeScript condivisi, PostgreSQL e Redis pub/sub",
        "Implementato un motore di gioco event-sourced e autoritativo lato server con transizioni pure e strategie IA in worker thread",
        "Aggiunti sincronizzazione completa dopo la riconnessione, scaling Socket.IO, autenticazione JWT, health check e migrazioni",
        "Creati test unitari e di integrazione ed esperimenti delimitati con strumenti di infrastruttura e osservabilità",
      ],
    },
    {
      id: "redmine-cli-agent",
      tagline: "Assistente IA local-first per dati Redmine privati",
      description:
        "Assistente da riga di comando attento alla privacy che risponde a domande in linguaggio naturale su un'istanza Redmine aziendale usando un LLM locale e un server MCP personalizzato in sola lettura.",
      highlights: [
        "Orchestrati modelli Qwen3 locali tramite Ollama e tradotte le domande in chiamate a cinque strumenti MCP dedicati",
        "Mantenuta locale l'inferenza isolando l'accesso alle API REST di Redmine dietro un server MCP Python in sola lettura",
        "Aggiunti controlli di conversazione, modalità debug, esempi di configurazione e copertura pytest",
      ],
    },
    {
      id: "casa-negrano",
      tagline: "Sito web per appartamenti vacanza con prenotazione in tempo reale",
      description:
        "Sito web moderno per affitti vacanze con tre tipologie di appartamento a Trento, Italia, con gestione completa delle prenotazioni tramite integrazione dell'API Lodgify e ottimizzazione dell'esperienza degli ospiti.",
      highlights: [
        "Lancio di un sito web in produzione per un'attività reale di affitti vacanze con funzionalità di prenotazione automatizzata",
        "Implementazione del controllo di disponibilità in tempo reale tramite integrazione dell'API Lodgify",
        "Creazione di un design responsive mobile-first con gallerie di immagini interattive e moduli di prenotazione basati su calendario",
        "Sviluppo di un'architettura multi-proprietà scalabile che supporta tre tipologie di appartamento (Bilocale, Trilocale, Suite Deluxe)",
        "Raggiungimento di punteggi di prestazione ottimali attraverso tecnologie web moderne e ottimizzazione della distribuzione",
        "Riduzione della gestione manuale delle prenotazioni tramite integrazione della disponibilità in tempo reale",
      ],
    },
    {
      id: "chess-analyzer",
      tagline: "Piattaforma full-stack di analisi scacchistica con integrazione Stockfish",
      description:
        "Piattaforma completa full-stack di analisi scacchistica che integra l'API di Chess.com con il motore Stockfish per l'analisi delle partite in tempo reale e approfondimenti per il miglioramento del giocatore. Include scacchiera interattiva, classificazione delle mosse, analisi del repertorio di aperture e riconoscimento di pattern tattici.",
      highlights: [
        "Creazione di una piattaforma scalabile con integrazione del motore Stockfish in tempo reale (non dati simulati) per la valutazione delle posizioni",
        "Implementazione dell'architettura Server-Sent Events per aggiornamenti di analisi in tempo reale con elaborazione di job in background",
        "Creazione dell'integrazione con l'API di Chess.com con funzionalità di importazione massiva e monitoraggio del progresso",
        "Creazione di un componente scacchiera professionale con navigazione da tastiera, visualizzazione delle mosse e frecce di analisi",
        "Sviluppo di un motore di analisi avanzato che categorizza le mosse (sviste, errori, imprecisioni) con raccomandazioni di miglioramento",
        "Implementazione di build Docker multi-stage con hot-reload in sviluppo, ottimizzazione per la produzione e health check",
        "Creazione di una comunicazione robusta del protocollo UCI per l'analisi complessa delle posizioni e pipeline di valutazione delle mosse",
      ],
    },
    {
      id: "resumake-mcp",
      tagline: "Server MCP per la generazione di curriculum LaTeX tramite Claude Desktop",
      description:
        "Server Model Context Protocol per la generazione di curriculum professionali in LaTeX tramite Claude Desktop utilizzando linguaggio naturale e template di resumake.io. Implementazione JavaScript che abilita la generazione di documenti guidata dall'IA.",
      highlights: [
        "Creazione di un server MCP pronto per la produzione con 15 stelle GitHub e 10 fork",
        "Generazione di curriculum in linguaggio naturale tramite integrazione con Claude Desktop",
        "Implementazione di un sistema flessibile di template LaTeX che supporta vari formati di documento",
        "Sviluppo di una gestione degli errori robusta e validazione per i processi di compilazione LaTeX",
      ],
    },
    {
      id: "cover-letter-mcp",
      tagline: "Server MCP per la generazione di lettere di presentazione PDF con LaTeX",
      description:
        "Server Model Context Protocol che genera lettere di presentazione professionali in PDF utilizzando LaTeX. Implementazione Python che fornisce funzionalità identiche di automazione documentale rispetto alla controparte JavaScript.",
      highlights: [
        "Consegna di un server MCP pronto per la produzione con parità di funzionalità rispetto alla versione JavaScript",
        "Creazione di strumenti riutilizzabili di automazione LaTeX per flussi di lavoro di generazione documenti",
        "Contributo all'ecosistema Claude AI con strumenti open-source per l'elaborazione di documenti",
      ],
    },
    {
      id: "streaming-json-parser",
      tagline: "Libreria Python ad alte prestazioni per l'elaborazione incrementale di JSON",
      description:
        "Libreria Python ad alte prestazioni per l'elaborazione incrementale di JSON, progettata per simulare output in streaming in stile LLM con accesso parziale ai dati in tempo reale. Include parser streaming O(1) con funzionalità di elaborazione incrementale.",
      highlights: [
        "Raggiungimento di operazioni di consumo O(1) con parsing incrementale O(ΔN) per prestazioni di streaming ottimali",
        "Progettazione per la simulazione di output LLM e scenari di elaborazione JSON in tempo reale",
        "Implementazione della generazione intelligente di viste parziali che mostra le chiavi solo dopo la determinazione dei tipi di valore",
        "Sviluppo dello streaming di contenuti stringa in tempo reale senza richiedere virgolette di chiusura per un feedback immediato",
        "Creazione di un algoritmo di bilanciamento delle parentesi per il rilevamento dello stato di completamento in contesti di streaming",
      ],
    },
    {
      id: "web-crawler-dashboard",
      tagline: "Applicazione full-stack di web crawling con dashboard analitica",
      description:
        "Applicazione web full-stack pronta per la produzione per il crawling di siti web e analisi, con interfaccia dashboard completa e elaborazione dati in tempo reale. Costruita con frontend React 18 + TypeScript e backend Go 1.22 + Gin.",
      highlights: [
        "Sviluppo di un'infrastruttura Docker multi-ambiente scalabile che supporta flussi di lavoro di sviluppo, test e produzione",
        "Implementazione di algoritmi di crawling efficienti con monitoraggio dello stato in tempo reale ed elaborazione dati massiva",
        "Creazione di una pipeline di test automatizzati con ambiente di sviluppo hot-reload",
        "Creazione di build di produzione con sicurezza rinforzata e superficie di attacco minimale",
        "Costruzione di una dashboard dettagliata con visualizzazione dati, ordinamento, filtri e paginazione",
      ],
    },
    {
      id: "personal-website",
      tagline: "Sito web portfolio con login tramite puzzle di scacchi interattivo",
      description:
        "Sito web portfolio personale costruito con Next.js 16 e React 19, con un'estetica di design brutalista e un puzzle di scacchi interattivo come meccanismo di login creativo. Integra l'API di Lichess per i puzzle giornalieri.",
      highlights: [
        "Creazione del login con puzzle di scacchi interattivo tramite integrazione dell'API di Lichess",
        "Implementazione del sistema di design brutal minimalism con design token centralizzati",
        "Creazione di un'architettura modulare a 3 livelli per gli scacchi che separa logica, hook e interfaccia utente",
      ],
    },
    {
      id: "node-js-course",
      tagline: "Materiali di studio completi su Node.js dal livello base all'avanzato",
      description:
        "Corso di studio completo che copre i moduli core di Node.js dal livello base all'avanzato. Risorsa educativa per l'apprendimento dello sviluppo JavaScript lato server.",
      highlights: [
        "Creazione di materiali di studio completi che coprono i moduli core di Node.js",
        "Percorso di apprendimento strutturato dai concetti base a quelli avanzati",
      ],
    },
    {
      id: "certificate-authority-service",
      tagline: "Gestione del ciclo di vita dei certificati X.509 da riga di comando in Go",
      description:
        "Un'Autorità di Certificazione da riga di comando che gestisce i certificati digitali X.509 lungo il loro intero ciclo di vita. Costruita in Go senza dipendenze esterne, utilizzando solo la libreria standard per tutte le operazioni crittografiche.",
      highlights: [
        "Costruzione del ciclo di vita completo della CA: inizializzazione, firma CSR, revoca, generazione CRL e verifica",
        "Implementazione senza dipendenze esterne utilizzando solo la crittografia della libreria standard di Go",
        "Progettazione del flusso di lavoro di sviluppo basato su specifiche con note di ricerca, specifiche funzionali e registri di decisioni architetturali",
        "Applicazione di pattern validate-before-mutate e operazioni su file atomiche per l'integrità dei dati",
      ],
    },
    {
      id: "simple-append-only-event-store",
      tagline: "Implementazione di event sourcing in Go con dominio conto bancario",
      description:
        "Un'implementazione educativa dei principi di event sourcing scritta in Go. Dimostra come costruire un sistema in cui lo stato viene ricostruito da eventi immutabili anziché da aggiornamenti diretti dello stato, utilizzando uno scenario di conto bancario.",
      highlights: [
        "Implementazione di un log di eventi append-only con indicizzazione in memoria per ricerche efficienti sugli stream",
        "Costruzione di un meccanismo di replay degli eventi per ricostruire lo stato corrente dalla cronologia di eventi immutabili",
        "Dimostrazione del pattern architetturale stream-per-aggregate con chiara separazione comandi/eventi",
        "Zero dipendenze esterne, costruito interamente con la libreria standard di Go",
      ],
    },
    {
      id: "rate-limiter",
      tagline: "Esperimento di rate limiting con token bucket in Python",
      description:
        "Un esperimento software che dimostra il rate limiting con token bucket con monitoraggio indipendente e configurabile delle quote per utente. Dimostra che il rate limiting per utente con ricarica lazy funziona correttamente senza thread in background.",
      highlights: [
        "Implementazione dell'algoritmo token bucket con ricarica lazy on-demand, senza necessità di thread in background",
        "Raggiungimento dell'isolamento per utente dove l'esaurimento della quota di un utente non ha alcun impatto sugli altri",
        "Validazione di tutti i 5 scenari comportamentali dalla specifica formale con test automatizzati",
        "Zero dipendenze esterne, costruito interamente con la libreria standard di Python",
      ],
    },
    {
      id: "serverless-function-runtime",
      tagline: "Runtime serverless locale che mappa file su endpoint HTTP",
      description:
        "Un runtime Node.js locale a singolo processo che scopre automaticamente i file di funzione in una directory api/ e li espone come endpoint HTTP. Gestisce il routing delle richieste e il dispatching basato sui metodi HTTP mantenendo API conformi allo standard Web.",
      highlights: [
        "Costruzione della scoperta di route basata su file che mappa automaticamente i file della directory api/ su endpoint HTTP",
        "Implementazione del dispatch basato sui metodi che instrada le richieste tramite export handler nominati con i verbi HTTP",
        "Utilizzo di contratti Request/Response conformi allo standard Web con timeout di invocazione fisso (3000ms)",
        "Include una suite di test di validazione end-to-end",
      ],
    },
    {
      id: "secret-management-vault",
      tagline: "Archivio di credenziali con crittografia a busta a due livelli in Python",
      description:
        "Uno strumento Python locale che implementa la crittografia a busta a due livelli per l'archiviazione delle credenziali. Ogni segreto ha la propria Data Encryption Key (AES-256-GCM), con tutte le chiavi protette da una Root Key derivata da una password master tramite PBKDF2.",
      highlights: [
        "Implementazione della crittografia a busta con Data Encryption Key uniche per segreto e derivazione chiave PBKDF2 (600.000 iterazioni)",
        "Costruzione del controllo d'accesso basato su percorsi con wildcard glob e sistema di policy basato sull'identità",
        "Progettazione del ciclo di vita seal/unseal che mantiene la Root Key in memoria solo quando attiva",
        "Include log di audit append-only, versionamento dei segreti e 11 sottocomandi CLI",
      ],
    },
    {
      id: "property-rental-website-template",
      tagline: "Template Astro configurabile per proprietà in affitto vacanze",
      description:
        "Un template di sito web personalizzabile per proprietà in affitto vacanze, costruito con Astro e React. Include configurazione guidata tramite file YAML/TypeScript, cinque preset di tema integrati e generazione di siti statici per prestazioni ottimali.",
      highlights: [
        "Costruzione di un'architettura guidata dalla configurazione personalizzabile tramite file di configurazione YAML/TypeScript senza scrivere codice",
        "Creazione di cinque preset di tema integrati: luxury, modern, rustic, coastal e minimal",
        "Implementazione dell'ottimizzazione SEO con Open Graph, meta tag, sitemap e dati strutturati",
        "Progettazione di layout responsive mobile-first con supporto immagini WebP e lazy loading",
      ],
    },
  ],

  education: [
    {
      degree: "Laurea Triennale",
      field: "Ingegneria dell'Informazione e delle Comunicazioni",
      thesis: "Triangolazione di dispositivi tramite hardware embedded",
    },
  ],

  languages: [
    { code: "it", name: "Italiano", level: "Madrelingua" },
    { code: "en", name: "Inglese", level: "Avanzato (C1)" },
  ],

  interests: [
    {
      area: "Ingegneria Potenziata dall'IA",
      description:
        "Seguire l'evoluzione di strumenti, pattern e buone pratiche di coding agentico e il loro impatto sul lavoro di ingegneria del software",
    },
    {
      area: "Evoluzione dell'Ingegneria",
      description:
        "Esplorare il passaggio dall'implementazione verso architettura, orchestrazione, revisione e supporto ai team",
    },
    {
      area: "Flussi di Lavoro di Sviluppo",
      description:
        "Praticare context engineering, pianificazione, validazione sistematica degli output, test e uso responsabile degli strumenti IA",
    },
    {
      area: "Scacchi",
      description:
        "Appassionato giocatore di scacchi che apprezza gli aspetti analitici e strategici del gioco",
    },
  ],

  softSkills: [
    {
      name: "Leadership",
      description:
        "Guida di iniziative tecniche, mentoring degli sviluppatori e supporto ai team nell'adozione di pratiche efficaci",
    },
    {
      name: "Comunicazione",
      description:
        "Collaborazione sicura con clienti, stakeholder, team di ingegneria e colleghi di diversi reparti",
    },
    {
      name: "Problem Solving",
      description:
        "Individuazione proattiva di problemi tecnici e di processo, valutazione dei compromessi e consegna di soluzioni manutenibili",
    },
    {
      name: "Adattabilità",
      description:
        "Adattamento a diversi ambienti di lavoro e paradigmi di sviluppo, dalla programmazione tradizionale ai flussi di lavoro assistiti dall'IA",
    },
  ],
};
