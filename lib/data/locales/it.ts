import type { LocalizedPortfolioData } from "./types";

export const localizedData: LocalizedPortfolioData = {
  profile: {
    title: "Ingegnere del Software",
    summary:
      "Ingegnere del Software con 5 anni di esperienza nello sviluppo fullstack, di cui gli ultimi 2 anni focalizzati su flussi di lavoro di sviluppo potenziati dall'IA e sistemi di coding agentici. A mio agio nell'utilizzo di strumenti di coding IA moderni (GitHub Copilot, Claude Code) a supporto dello sviluppo, con crescente familiarità nella pianificazione, coordinamento delle attività e revisione degli output generati dall'IA. Più esperto con framework e pattern che con la padronanza pura dei linguaggi, in continuo apprendimento.",
    shortBio:
      "Ingegnere del Software con sede a Trento, Italia. 5 anni di esperienza nello sviluppo fullstack e nei flussi di lavoro potenziati dall'IA. Focalizzato su pratiche di coding agentiche, pianificazione delle attività e creazione di applicazioni web con framework moderni.",
    locationLabel: "Trento, Italia",
  },

  experience: [
    {
      id: "arcoda",
      role: "Ingegnere del Software",
      summary:
        "Ingegnere frontend che contribuisce a librerie di visualizzazione geospaziale e integrazione di mappe 3D, utilizzando strumenti di coding IA a supporto del lavoro di sviluppo quotidiano.",
      responsibilities: [
        "Contribuzione a librerie frontend per la visualizzazione e integrazione di immagini georeferenziate",
        "Lavoro su librerie per il rendering e la manipolazione di modelli 3D all'interno di interfacce basate su mappe",
        "Implementazione di funzionalità di visualizzazione dati geospaziali per applicazioni di mappatura",
        "Utilizzo di strumenti di coding IA (GitHub Copilot IDE/CLI, Claude Code) nel flusso di lavoro quotidiano",
        "Applicazione di un approccio planning-first alle attività di sviluppo: pianificazione del contesto, revisione del codice generato dall'IA e iterazione sui risultati",
      ],
      achievements: [
        {
          description:
            "Adozione di strumenti di coding IA per lo sviluppo di librerie geospaziali in ambiente di produzione",
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
      area: "Strumenti di Coding Agentici",
      description:
        "Seguire l'evoluzione degli assistenti di coding IA come GitHub Copilot e Claude Code, e come cambiano il lavoro di sviluppo quotidiano",
    },
    {
      area: "Flussi di Lavoro di Sviluppo",
      description:
        "Esplorare come pianificazione, preparazione del contesto e revisione si integrano nello sviluppo assistito dall'IA",
    },
    {
      area: "Ecosistema di Coding IA",
      description:
        "Restare aggiornati su server MCP, framework per agenti IA e nuovi strumenti nello spazio del coding agentico",
    },
    {
      area: "Scacchi",
      description:
        "Appassionato giocatore di scacchi che apprezza gli aspetti analitici e strategici del gioco",
    },
  ],

  softSkills: [
    {
      name: "Pianificazione delle Attività",
      description:
        "Suddivisione del lavoro in passi gestibili, definizione delle priorità e strutturazione delle attività di sviluppo prima dell'esecuzione",
    },
    {
      name: "Multitasking",
      description:
        "Gestione di molteplici flussi di lavoro paralleli e passaggio efficace tra le attività, specialmente nei flussi di lavoro di coding agentici",
    },
    {
      name: "Delega",
      description:
        "Distribuzione del lavoro tra agenti IA e strumenti, revisione degli output e coordinamento degli sforzi di sviluppo paralleli",
    },
    {
      name: "Comunicazione",
      description:
        "A proprio agio nelle interazioni con i clienti, nelle discussioni di team e nella traduzione dei requisiti in attività concrete",
    },
    {
      name: "Adattabilità",
      description:
        "Adattamento a diversi ambienti di lavoro e paradigmi di sviluppo, dalla programmazione tradizionale ai flussi di lavoro assistiti dall'IA",
    },
  ],
};
