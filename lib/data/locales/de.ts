import type { LocalizedPortfolioData } from "./types";

export const localizedData: LocalizedPortfolioData = {
  profile: {
    title: "Softwareingenieur",
    summary:
      "Softwareingenieur mit über 5 Jahren Erfahrung in Full-Stack-Produktentwicklung, Systemarchitektur und der Leitung KI-gestützter Engineering-Workflows. Erfahrung mit Webplattformen, Entwicklerwerkzeugen, Echtzeitsystemen, sicherheitsorientierten Kommandozeilenanwendungen, MCP-Integrationen und evidenzbasierten KI-Agenten. Nutzt GitHub Copilot, Claude Code und Codex, um die Bereitstellung zu beschleunigen und die Qualität durch Planung, Context Engineering, systematische Reviews, Tests und DevOps-Automatisierung zu sichern.",
    shortBio:
      "Softwareingenieur in Trento mit über 5 Jahren Erfahrung in Full-Stack-Produkten, Entwicklerwerkzeugen, Echtzeitsystemen und KI-gestütztem Engineering. Schwerpunkt auf Architektur, Agenten-Orchestrierung, systematischen Reviews und wirksamer KI-Einführung in Teams.",
    locationLabel: "Trento, Italien",
  },

  experience: [
    {
      id: "arcoda",
      role: "Softwareingenieur",
      summary:
        "Softwareingenieur für eine konfigurierbare GIS-Plattform, gemeinsame Geodaten- und 3D-Visualisierungsbibliotheken sowie interne Full-Stack-Werkzeuge. Verantwortet Funktionen vom Entwurf bis zum Support nach der Veröffentlichung und unterstützt das Team bei strukturierten KI-gestützten Entwicklungspraktiken.",
      responsibilities: [
        "Entwicklung und Pflege konfigurierbarer GIS-Anwendungen für Infrastruktur, Umweltdienste, Bauwesen, Luftbilder und 3D-Baustellenmodelle",
        "Pflege gemeinsamer TypeScript-Bibliotheken für Google Maps, MapLibre und Leaflet sowie 3D-Rendering mit Babylon.js",
        "Verantwortung für Frontend- und Kartenfunktionen von Entwurf und Implementierung bis Veröffentlichung und Support",
        "Leitung eines internen Full-Stack-Werkzeugs zur Überwachung von 3D-Aufnahmen und Rekalibrierungen mit .NET, Angular, PostgreSQL, Python und Kubernetes CronJobs",
        "Einsatz von GitHub Copilot, Claude Code, Codex und eigenen Agenten mit Planung, Context Engineering, Review und Validierung",
        "Interne Ansprechperson für KI-gestützte Entwicklung und Zusammenarbeit mit dem Management zu Praktiken, Leitplanken und Erfolgsmessung",
        "Konzeption und Durchführung einer Schulung zu agentischem Engineering für Kollegen aus vier Teams",
        "Vertretung des Entwicklungsteams in einer bereichsübergreifenden Initiative zur kontinuierlichen Verbesserung",
      ],
      achievements: [
        {
          description:
            "Entwurf, Veröffentlichung und Support einer Multi-Orthofoto-Visualisierung mit sammlungsbasiertem Zustand, synchronisierten Bedienelementen und automatischer Viewport-Steuerung",
        },
        {
          description:
            "Schnelle Entwicklung von der Feature-Bereitstellung in vier Projekten zum Mentoring eines Praktikanten, zur Leitung eines internen Full-Stack-Werkzeugs und zur Vertretung des Teams bei kontinuierlicher Verbesserung",
        },
        {
          description:
            "Aufbau eines vom Management unterstützten KI-Einführungsprogramms und Durchführung teamübergreifender Schulungen zu agentischen Engineering-Praktiken",
        },
      ],
    },
    {
      id: "neg-digital",
      role: "Softwareingenieur",
      summary:
        "Entwickler, der den gesamten Softwareentwicklungszyklus in einem kleinen Startup abdeckt und Webanwendungen sowie KI-gestutzte Automatisierungstools fur Content-Erstellungsdienste entwickelt.",
      responsibilities: [
        "Erstellung von Webanwendungen mit Angular fur interne Produkte und React/Next.js/Astro fur kundenorientierte Websites",
        "Entwicklung von KI-Agentensystemen fur automatisierte Content-Erstellungsworkflows",
        "Erstellung und Bereitstellung von RAG-Systemen fur Informationsabruf und Inhaltsgenerierung",
        "Implementierung von MCP-Servern fur KI-Modellkommunikation und -Orchestrierung",
        "Integration von KI-APIs (OpenAI, Anthropic) mit Prompt Engineering fur Content-Automatisierung",
        "Arbeit mit Vektordatenbanken und Embedding-Modellen fur semantische Suchfunktionen",
        "Teilnahme an Kundengesprachen und Beitrag zur Projektumfangsbestimmung und Zeitschatzung",
        "Beitrag zur Sprint-Planung und Meilenstein-Definition mit Stakeholdern",
        "Wartung von CI/CD-Pipelines und Multi-Umgebungs-Bereitstellungsworkflows",
      ],
      achievements: [
        {
          description:
            "Beitrag zur KI-gestutzten Automatisierung, die zur Reduzierung der manuellen Content-Erstellungszeit beitrug",
          metric: "ca. 40% Reduzierung",
        },
        {
          description:
            "Erstellung KI-gesteuerter Tools zur Unterstutzung mehrerer Kundenprojekte fur die Content-Produktion",
        },
      ],
    },
    {
      id: "neg-group",
      role: "Freiberuflicher Softwareingenieur",
      summary:
        "Wartung und Erweiterung einer bestehenden Geschaftsmanagement-Plattform fur ein Bauunternehmen, eigenstandige Arbeit als einziger Entwickler des Projekts.",
      responsibilities: [
        "Wartung und Erweiterung der Geschaftsmanagement-Plattform, die in allen Unternehmensabteilungen eingesetzt wird",
        "Wochentliche Meetings mit dem CEO und Mitarbeitern zur Erfassung von Anforderungen und Priorisierung von Funktionen",
        "Entwicklung von Modulen fur Kundenmanagement, Baustellenverfolgung und Rechnungsstellung",
        "Umstrukturierung der Firebase Realtime Database zur Verbesserung von Suchabfragen und Ladezeiten",
        "Erstellung von Workflow-Automatisierungen zur Verbindung von CRM-, Projektmanagement- und Rechnungsmodulen",
        "Entwicklung von REST-APIs fur die Datensynchronisation zwischen Plattformmodulen",
        "Wartung von CI/CD-Pipelines fur Bereitstellungen",
      ],
      achievements: [
        {
          description:
            "Verbesserung der Plattformautomatisierung zur Reduzierung manueller Verwaltungsarbeit fur das Team",
        },
        {
          description:
            "Umstrukturierung der Datenbank zur Verbesserung der Datenabrufleistung",
        },
        {
          description:
            "Termingerechte Lieferung von Funktionen durch direkte Zusammenarbeit mit dem Unternehmen",
        },
      ],
    },
    {
      id: "tc-consulting",
      role: "Fullstack-Softwareentwickler",
      summary:
        "Fullstack-Entwickler, der am internen Produkt des Unternehmens und als externer Berater fur einen in Grossbritannien ansassigen SaaS-Kunden (Commify) in einem 10-kopfigen Entwicklerteam arbeitet.",
      responsibilities: [
        "Entwicklung und Wartung des internen Webprodukts des Unternehmens (Frontend und Backend)",
        "Arbeit als Teil eines 10-kopfigen Entwicklerteams an einer Plattformmigration fur einen in Grossbritannien ansassigen SaaS-Kunden (Commify)",
        "Beitrag zur Migration einer Legacy-PHP-Codebasis zu Angular fur eine SMS-Messaging-Plattform",
        "Unterstutzung bei der API-Migration von einer ubernommenen Plattform zum System des Kunden",
        "Implementierung von Lazy Loading fur Angular-Module zur Reduzierung der Bundle-Grosse",
        "Beitrag zur API-Entwicklung mit Java und Spring Framework",
        "Arbeit an UI-Verbesserungen mit Angular",
        "Teilnahme an Code-Reviews und Git-basierten Branching-Workflows mit dem internationalen Team",
      ],
      achievements: [
        {
          description:
            "Beitrag zur Plattformmigration fur einen SMS-Messaging-Dienst als Teil eines verteilten Teams",
          metric: "6-monatige Migration",
        },
        {
          description:
            "Beitrag zur Verbesserung der Frontend-Leistung durch Angular Lazy Loading und Bundle-Optimierung",
        },
      ],
    },
    {
      id: "unitn-internship",
      role: "Softwareentwickler-Praktikant",
      summary:
        "Forschungsorientiertes Praktikum zur Entwicklung eines IoT-Tracking-Systems fur das Abschlussprojekt, Entwurf eines Raspberry Pi-basierten Systems zur Triangulation von Wi-Fi-Geratepositionen.",
      responsibilities: [
        "Entwurf und Entwicklung eines Raspberry Pi-basierten Systems zur Triangulation von Wi-Fi-Geratepositionen",
        "Entwicklung einer webbasierten Oberflache zur Visualisierung von Tracking-Daten",
        "Beitrag zur Softwarearchitektur und zum Bereitstellungsprozess",
      ],
      achievements: [
        {
          description:
            "Erfolgreicher Abschluss des Abschlussprojekts zur Geratetriangulation mittels eingebetteter Hardware",
        },
        {
          description:
            "Entwicklung eines funktionsfahigen Prototyps zur Demonstration der praktischen Anwendung theoretischer Konzepte",
        },
      ],
    },
  ],

  skillGroups: [
    {
      key: "frontend",
      label: "Frontend-Technologien",
      description:
        "Frameworks, Sprachen und Werkzeuge fur die Erstellung von Benutzeroberflachen",
    },
    {
      key: "backend",
      label: "Backend-Technologien",
      description: "Serverseitige Sprachen, Frameworks und API-Design",
    },
    {
      key: "databaseAndCloud",
      label: "Datenbank & Cloud",
      description: "Datenspeicherung, Cloud-Plattformen und Infrastruktur",
    },
    {
      key: "aiAndAutomation",
      label: "KI & Automatisierung",
      description:
        "KI-Frameworks, LLM-Integration und Automatisierungssysteme",
    },
    {
      key: "devopsAndPractices",
      label: "Entwicklungswerkzeuge & Praktiken",
      description: "Versionskontrolle, CI/CD, Methoden und Projektmanagement",
    },
    {
      key: "aiAugmentedDev",
      label: "KI-gestutzte Entwicklung",
      description:
        "Praktiken und Workflows fur KI-assistierte Softwareentwicklung",
    },
  ],

  projects: [
    {
      id: "canvas-agent",
      tagline: "Dateibasierte Excalidraw-Arbeitsbereiche für KI-Coding-Agenten",
      description:
        "Ein dauerhafter, anbieterunabhängiger Arbeitsbereich, in dem Werkzeuge wie Codex, Claude Code und ChatGPT Excalidraw-Diagramme zusammen mit Markdown-Spezifikationen und elementbezogenen Notizen pflegen können.",
      highlights: [
        "Entwurf eines dateibasierten Formats mit Standard-Excalidraw-Szenen, Markdown-Dokumenten, dauerhaften Notizen, unabhängigen Revisionen und wiederherstellbaren Snapshots",
        "Erstellung einer Node.js-CLI und eines MCP-Servers für Projektsuche, kompakten Kontext, Seitenerstellung, Verknüpfung und validierte Patches",
        "Implementierung optimistischer Revisionsprüfungen und konfliktsicherer Speichervorgänge",
        "Erstellung eines lokalen Browser-Arbeitsbereichs mit Diagramm-, Dokument- und geteilter Ansicht",
        "Veröffentlichung von @andreacaddev/canvas-agent mit Skills für mehrere KI-Werkzeuge sowie automatisierten Build- und Testprüfungen",
      ],
    },
    {
      id: "company-researcher",
      tagline: "Evidenzbasierter KI-Rechercheagent mit nachvollziehbaren Quellen",
      description:
        "Ein begrenzter Rechercheablauf für Unternehmen und Fachgebiete, der öffentliche Quellen sammelt, nachvollziehbare Evidenz extrahiert, Wissenslücken erhält und zitierte Markdown-Dossiers erzeugt.",
      highlights: [
        "Implementierung gestufter Recherche, Evidenzextraktion, Synthese und Dossiererstellung mit expliziten Ergebniszuständen",
        "Integration von OpenAI-Modellen und Tavily-Suche über LangChain mit konfigurierbaren Grenzen",
        "Optionale LangSmith-Traces mit Steuerelementen zum Ausblenden von Ein- und Ausgaben",
        "Deterministische, API-schlüsselfreie Verifikation mit Fixtures, Fakes, pytest und Ruff",
      ],
    },
    {
      id: "sbobuz",
      tagline: "Echtzeit-Multiplayer-Kartenspiel mit Event-Sourcing-Engine",
      description:
        "Ein browserbasiertes Multiplayer-Kartenspiel mit Registrierung, Räumen, menschlichen und KI-Gegnern, Wiederverbindung und horizontal skalierbarer WebSocket-Kommunikation.",
      highlights: [
        "Aufbau eines modularen Monolithen mit Next.js-Client, Express-Backend, gemeinsamen TypeScript-Verträgen, PostgreSQL und Redis Pub/Sub",
        "Implementierung einer serverautoritativen Event-Sourcing-Spielengine mit reinen Zustandsübergängen und KI-Strategien in Worker Threads",
        "Vollständige Statussynchronisierung nach Wiederverbindung, Socket.IO-Skalierung, JWT-Authentifizierung, Health Checks und Migrationen",
        "Unit- und Integrationstests sowie klar begrenzte Experimente mit Infrastruktur- und Observability-Werkzeugen",
      ],
    },
    {
      id: "redmine-cli-agent",
      tagline: "Local-First-KI-Assistent für private Redmine-Daten",
      description:
        "Ein datenschutzbewusster Kommandozeilenassistent, der natürlichsprachliche Fragen zu einer Unternehmens-Redmine-Instanz mit einem lokalen LLM und einem eigenen schreibgeschützten MCP-Server beantwortet.",
      highlights: [
        "Orchestrierung lokaler Qwen3-Modelle über Ollama und Übersetzung von Fragen in fünf speziell entwickelte Redmine-MCP-Werkzeuge",
        "Lokale Modellinferenz und isolierter Zugriff auf die Redmine-REST-API über einen schreibgeschützten Python-MCP-Server",
        "Konversationssteuerung, Debug-Modus, Konfigurationsbeispiele und pytest-Abdeckung hinzugefügt",
      ],
    },
    {
      id: "casa-negrano",
      tagline: "Ferienwohnungs-Website mit Echtzeit-Buchung",
      description:
        "Moderne Ferienvermietungs-Website fur drei Wohnungstypen in Trento, Italien, mit umfassender Buchungsverwaltung durch Lodgify-API-Integration und Optimierung des Gasteerlebnisses.",
      highlights: [
        "Start einer Produktions-Website fur ein reales Ferienvermietungsgeschaft mit automatisierten Buchungsfunktionen",
        "Implementierung der Echtzeit-Verfugbarkeitsprufung durch Lodgify-API-Integration",
        "Erstellung eines Mobile-First-Responsive-Designs mit interaktiven Bildgalerien und kalenderbasierten Buchungsformularen",
        "Entwicklung einer skalierbaren Multi-Objekt-Architektur fur drei Wohnungstypen (Bilocale, Trilocale, Suite Deluxe)",
        "Erzielung optimaler Leistungswerte durch moderne Webtechnologien und Bereitstellungsoptimierung",
        "Reduzierung der manuellen Buchungsverwaltung durch Echtzeit-Verfugbarkeitsintegration",
      ],
    },
    {
      id: "chess-analyzer",
      tagline: "Full-Stack-Schachanalyseplattform mit Stockfish-Integration",
      description:
        "Umfassende Full-Stack-Schachanalyseplattform, die die Chess.com-API mit der Stockfish-Engine fur Echtzeit-Spielanalyse und Einblicke zur Spielerverbesserung integriert. Mit interaktivem Schachbrett, Zugklassifizierung, Eroffnungsrepertoire-Analyse und taktischer Mustererkennung.",
      highlights: [
        "Erstellung einer skalierbaren Plattform mit Echtzeit-Stockfish-Engine-Integration (keine Testdaten) fur Stellungsbewertung",
        "Implementierung der Server-Sent-Events-Architektur fur Live-Analyse-Updates mit Hintergrund-Job-Verarbeitung",
        "Erstellung der Chess.com-API-Integration mit Massenimport-Funktionen und Fortschrittsverfolgung",
        "Erstellung einer professionellen Schachbrett-Komponente mit Tastaturnavigation, Zugvisualisierung und Analysepfeilen",
        "Entwicklung einer fortgeschrittenen Analyse-Engine zur Kategorisierung von Zugen (Patzer, Fehler, Ungenauigkeiten) mit Verbesserungsempfehlungen",
        "Implementierung von Docker-Multi-Stage-Builds mit Entwicklungs-Hot-Reload, Produktionsoptimierung und Health-Checks",
        "Erstellung einer robusten UCI-Protokollkommunikation fur komplexe Stellungsanalyse und Zugbewertungspipelines",
      ],
    },
    {
      id: "resumake-mcp",
      tagline: "MCP-Server zur Erstellung von LaTeX-Lebenslaufen uber Claude Desktop",
      description:
        "Model-Context-Protocol-Server zur Erstellung professioneller LaTeX-Lebenslaufe uber Claude Desktop mit naturlicher Sprache und resumake.io-Vorlagen. JavaScript-Implementierung fur KI-gesteuerte Dokumentenerstellung.",
      highlights: [
        "Erstellung eines produktionsreifen MCP-Servers mit 15 GitHub-Sternen und 10 Forks",
        "Ermoglichung der Lebenslauferstellung in naturlicher Sprache durch Claude-Desktop-Integration",
        "Implementierung eines flexiblen LaTeX-Vorlagensystems fur verschiedene Dokumentformate",
        "Entwicklung einer robusten Fehlerbehandlung und Validierung fur LaTeX-Kompilierungsprozesse",
      ],
    },
    {
      id: "cover-letter-mcp",
      tagline: "MCP-Server zur Erstellung von PDF-Anschreiben mit LaTeX",
      description:
        "Model-Context-Protocol-Server zur Erstellung professioneller PDF-Anschreiben mit LaTeX. Python-Implementierung mit identischen Dokumentenautomatisierungsfunktionen wie die JavaScript-Version.",
      highlights: [
        "Bereitstellung eines produktionsreifen MCP-Servers mit Funktionsparitat zur JavaScript-Version",
        "Erstellung wiederverwendbarer LaTeX-Automatisierungstools fur Dokumentenerstellungsworkflows",
        "Beitrag zum Claude-AI-Okosystem mit Open-Source-Tools fur die Dokumentenverarbeitung",
      ],
    },
    {
      id: "streaming-json-parser",
      tagline: "Hochleistungs-Python-Bibliothek fur inkrementelle JSON-Verarbeitung",
      description:
        "Hochleistungs-Python-Bibliothek fur inkrementelle JSON-Verarbeitung, konzipiert zur Simulation von LLM-Streaming-Ausgaben mit Echtzeit-Zugriff auf Teildaten. Mit O(1)-Streaming-Parser und inkrementellen Verarbeitungsfunktionen.",
      highlights: [
        "Erzielung von O(1)-Konsumoperationen mit O(ΔN) inkrementellem Parsing fur optimale Streaming-Leistung",
        "Konzipiert fur LLM-Ausgabesimulation und Echtzeit-JSON-Verarbeitungsszenarien",
        "Implementierung intelligenter Teilansichtsgenerierung, die Schlussel erst nach Bestimmung der Werttypen anzeigt",
        "Entwicklung von Echtzeit-String-Content-Streaming ohne Anforderung schliessender Anfuhrungszeichen fur sofortiges Feedback",
        "Erstellung eines Klammer-Balancierungsalgorithmus zur Erkennung des Abschlusszustands in Streaming-Kontexten",
      ],
    },
    {
      id: "web-crawler-dashboard",
      tagline: "Full-Stack-Web-Crawling-Anwendung mit Analyse-Dashboard",
      description:
        "Produktionsreife Full-Stack-Webanwendung fur Website-Crawling und Analyse mit umfassender Dashboard-Oberflache und Echtzeit-Datenverarbeitung. Erstellt mit React 18 + TypeScript-Frontend und Go 1.22 + Gin-Backend.",
      highlights: [
        "Entwicklung einer skalierbaren Multi-Umgebungs-Docker-Infrastruktur fur Entwicklungs-, Test- und Produktionsworkflows",
        "Implementierung effizienter Crawling-Algorithmen mit Echtzeit-Statusverfolgung und Massendatenverarbeitung",
        "Einrichtung einer automatisierten Test-Pipeline mit Hot-Reloading-Entwicklungsumgebung",
        "Erstellung sicherheitsgeharteter Produktions-Builds mit minimaler Angriffsflache",
        "Erstellung eines detaillierten Dashboards mit Datenvisualisierung, Sortierung, Filterung und Paginierung",
      ],
    },
    {
      id: "personal-website",
      tagline: "Portfolio-Website mit interaktivem Schachratsel-Login",
      description:
        "Personliche Portfolio-Website erstellt mit Next.js 16 und React 19, mit brutalistischer Designasthetik und einem interaktiven Schachratsel als kreativem Login-Mechanismus. Integriert die Lichess-API fur tagliche Ratsel.",
      highlights: [
        "Erstellung eines interaktiven Schachratsel-Logins mittels Lichess-API-Integration",
        "Implementierung eines brutalen Minimalismus-Designsystems mit zentralisierten Design-Tokens",
        "Erstellung einer modularen 3-Schichten-Schacharchitektur mit Trennung von Logik, Hooks und UI",
      ],
    },
    {
      id: "node-js-course",
      tagline: "Umfassende Node.js-Lernmaterialien vom Anfanger- bis zum Fortgeschrittenenniveau",
      description:
        "Umfassender Studiengang zu Node.js-Kernmodulen vom Anfanger- bis zum Fortgeschrittenenniveau. Bildungsressource zum Erlernen der serverseitigen JavaScript-Entwicklung.",
      highlights: [
        "Erstellung umfassender Lernmaterialien zu Node.js-Kernmodulen",
        "Strukturierter Lernpfad von Anfanger- bis zu Fortgeschrittenenkonzepten",
      ],
    },
    {
      id: "certificate-authority-service",
      tagline: "Kommandozeilen-X.509-Zertifikatslebenszyklusverwaltung in Go",
      description:
        "Eine Kommandozeilen-Zertifizierungsstelle, die X.509-Digitalzertifikate uber ihren gesamten Lebenszyklus verwaltet. Erstellt in Go ohne externe Abhangigkeiten, unter ausschliesslicher Verwendung der Standardbibliothek fur alle kryptographischen Operationen.",
      highlights: [
        "Erstellung des vollstandigen CA-Lebenszyklus: Initialisierung, CSR-Signierung, Widerruf, CRL-Generierung und Verifizierung",
        "Implementierung ohne externe Abhangigkeiten unter ausschliesslicher Verwendung der Go-Standardbibliothek-Kryptographie",
        "Entwurf eines spezifikationsgetriebenen Entwicklungsworkflows mit Forschungsnotizen, funktionalen Spezifikationen und Architekturentscheidungsprotokollen",
        "Anwendung von Validate-before-Mutate-Mustern und atomaren Dateioperationen fur Datenintegritat",
      ],
    },
    {
      id: "simple-append-only-event-store",
      tagline: "Event-Sourcing-Implementierung in Go mit Bankkonto-Domane",
      description:
        "Eine lehrreiche Implementierung von Event-Sourcing-Prinzipien in Go. Zeigt, wie ein System aufgebaut wird, in dem der Zustand aus unveranderlichen Ereignissen rekonstruiert wird, anstatt durch direkte Zustandsaktualisierungen, anhand eines Bankkonto-Szenarios.",
      highlights: [
        "Implementierung eines Append-Only-Ereignisprotokolls mit In-Memory-Indizierung fur effiziente Stream-Suchen",
        "Erstellung eines Ereignis-Replay-Mechanismus zur Rekonstruktion des aktuellen Zustands aus unveranderlicher Ereignishistorie",
        "Demonstration des Stream-per-Aggregate-Architekturmusters mit klarer Befehls-/Ereignistrennung",
        "Keine externen Abhangigkeiten, vollstandig mit der Go-Standardbibliothek erstellt",
      ],
    },
    {
      id: "rate-limiter",
      tagline: "Token-Bucket-Rate-Limiting-Experiment in Python",
      description:
        "Ein Softwareexperiment zur Demonstration von Token-Bucket-Rate-Limiting mit unabhangiger, konfigurierbarer Kontingentuberwachung pro Benutzer. Beweist, dass Rate-Limiting pro Benutzer mit Lazy-Refill korrekt ohne Hintergrund-Threads funktioniert.",
      highlights: [
        "Implementierung des Token-Bucket-Algorithmus mit Lazy-On-Demand-Refill, keine Hintergrund-Threads erforderlich",
        "Erzielung der Benutzerisolation, bei der die Kontingenterschopfung eines Benutzers keine Auswirkung auf andere hat",
        "Validierung aller 5 Verhaltensszenarien der formalen Spezifikation mit automatisierten Tests",
        "Keine externen Abhangigkeiten, vollstandig mit der Python-Standardbibliothek erstellt",
      ],
    },
    {
      id: "serverless-function-runtime",
      tagline: "Lokale Serverless-Laufzeitumgebung, die Dateien auf HTTP-Endpunkte abbildet",
      description:
        "Eine lokale Node.js-Einzelprozess-Laufzeitumgebung, die automatisch Funktionsdateien in einem api/-Verzeichnis erkennt und als HTTP-Endpunkte bereitstellt. Verwaltet Anfrage-Routing und -Dispatching basierend auf HTTP-Methoden unter Beibehaltung von Web-Standard-APIs.",
      highlights: [
        "Erstellung einer dateibasierten Routenerkennung, die api/-Verzeichnisdateien automatisch auf HTTP-Endpunkte abbildet",
        "Implementierung des methodenbasierten Dispatchings, das Anfragen uber Handler-Exporte mit HTTP-Verb-Namen weiterleitet",
        "Verwendung von Web-Standard-Request/Response-Vertragen mit festem Aufruf-Timeout (3000ms)",
        "Enthalt eine End-to-End-Validierungstestsuite",
      ],
    },
    {
      id: "secret-management-vault",
      tagline: "Zweischichtiger Envelope-Verschlusselungs-Anmeldedatenspeicher in Python",
      description:
        "Ein lokales Python-Tool, das zweischichtige Envelope-Verschlusselung fur die Anmeldedatenspeicherung implementiert. Jedes Geheimnis erhalt seinen eigenen Data Encryption Key (AES-256-GCM), wobei alle Schlussel durch einen Root Key geschutzt werden, der aus einem Master-Passwort mittels PBKDF2 abgeleitet wird.",
      highlights: [
        "Implementierung der Envelope-Verschlusselung mit einzigartigen Data Encryption Keys pro Geheimnis und PBKDF2-Schlusselableitung (600.000 Iterationen)",
        "Erstellung einer pfadbasierten Zugriffskontrolle mit Glob-Wildcards und identitatsgesteuertem Richtliniensystem",
        "Entwurf eines Seal/Unseal-Lebenszyklus, der den Root Key nur im aktiven Zustand im Speicher halt",
        "Enthalt Append-Only-Auditprotokoll, Geheimnisversionierung und 11 CLI-Unterbefehle",
      ],
    },
    {
      id: "property-rental-website-template",
      tagline: "Konfigurierbares Astro-Template fur Ferienvermietungsobjekte",
      description:
        "Ein anpassbares Website-Template fur Ferienvermietungsobjekte, erstellt mit Astro und React. Mit konfigurationsgesteuerter Einrichtung uber YAML/TypeScript-Dateien, funf integrierten Theme-Voreinstellungen und statischer Website-Generierung fur optimale Leistung.",
      highlights: [
        "Erstellung einer konfigurationsgesteuerten Architektur, anpassbar uber YAML/TypeScript-Konfigurationsdateien ohne Programmierung",
        "Erstellung von funf integrierten Theme-Voreinstellungen: Luxury, Modern, Rustic, Coastal und Minimal",
        "Implementierung der SEO-Optimierung mit Open Graph, Meta-Tags, Sitemap und strukturierten Daten",
        "Entwurf von Mobile-First-Responsive-Layouts mit WebP-Bildunterstutzung und Lazy Loading",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science",
      field: "Informations- und Kommunikationstechnik",
      thesis: "Geratetriangulation mittels eingebetteter Hardware",
    },
  ],

  languages: [
    { code: "it", name: "Italienisch", level: "Muttersprache" },
    { code: "en", name: "Englisch", level: "Fortgeschritten (C1)" },
  ],

  interests: [
    {
      area: "KI-gestütztes Engineering",
      description:
        "Verfolgen der Entwicklung agentischer Coding-Werkzeuge, Muster und bewährter Praktiken und ihres Einflusses auf die Softwareentwicklung",
    },
    {
      area: "Entwicklung des Engineerings",
      description:
        "Erkunden des Wandels von implementierungsorientierter Arbeit zu Architektur, Orchestrierung, Review und Teamunterstützung",
    },
    {
      area: "Entwicklungsworkflows",
      description:
        "Praktizieren von Context Engineering, Planung, systematischer Ausgabevalidierung, Tests und verantwortungsvollem Einsatz von KI-Werkzeugen",
    },
    {
      area: "Schach",
      description:
        "Begeisterter Schachspieler, der die analytischen und strategischen Aspekte des Spiels geniesst",
    },
  ],

  softSkills: [
    {
      name: "Leadership",
      description:
        "Leitung technischer Initiativen, Mentoring von Entwicklern und Unterstützung von Teams bei wirksamen Engineering-Praktiken",
    },
    {
      name: "Kommunikation",
      description:
        "Sichere Zusammenarbeit mit Kunden, Stakeholdern, Engineering-Teams und Kollegen aus anderen Abteilungen",
    },
    {
      name: "Problemlösung",
      description:
        "Proaktives Erkennen technischer und prozessbezogener Probleme, Abwägen von Kompromissen und Lieferung wartbarer Lösungen",
    },
    {
      name: "Anpassungsfahigkeit",
      description:
        "Anpassung an verschiedene Arbeitsumgebungen und Entwicklungsparadigmen, von traditioneller Programmierung bis zu KI-gestutzten Workflows",
    },
  ],
};
