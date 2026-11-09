/* Literacy glossary page copy (9 Nov 2026). Loads after copy.js. Every term, sense, deck and figure is invented or a generic public term. */
window.COPY = window.COPY || {};
Object.assign(window.COPY, {
  glossaryPage: {
    title: "Literacy glossary",
    description: "Literacy glossary: a business-technology lexicon you read like a printed dictionary, filed by architecture layer.",
    back: "Back to Rayane's bench",
    nav: { layers: "Layers", lookup: "Look up", senses: "Senses", links: "Links", team: "For the team" },
    name: "Literacy glossary",
    intro: [
      { k: "What", v: "Business-technology terms, set like a printed dictionary and filed by architecture layer." },
      { k: "For", v: "Executives who met a technical word on a slide, and the team that explains it." },
      { k: "How", v: "The team fills it from Excel; readers open one file to browse, search and follow links." }
    ],
    fact: "Web, one file, opens from disk",
    live: "Open the sample glossary",
    liveUrl: "https://rayoen0.github.io/literacy-glossary/",
    sheet: {
      title: "Glossary", sub: "Business technology",
      search: "Search terms", key: "/",
      compact: "Compact", technical: "Technical definitions",
      indexLabel: "Index of layers", tabTip: "Layer: "
    },
    labels: { also: "Also", here: "In our programme", technical: "Technical definition", example: "Example", picture: "Picture", show: "show", hide: "hide" },
    layers: [
      { name: "Applications", desc: "What people use: business applications and the way they are built and shipped." },
      { name: "Integration", desc: "How systems talk to each other." },
      { name: "Data", desc: "Where data is stored, shaped and governed." },
      { name: "Security", desc: "Who may do what, and how we know." },
      { name: "Infrastructure", desc: "The compute, network and platforms everything runs on." }
    ],
    /* invented sample: layer index into layers[], word, expansion, other names, sense 1, deck locator */
    entries: [
      { id: "cicd", layer: 0, word: "CI/CD", exp: "continuous integration, continuous delivery", also: "pipeline", s1: "An automated assembly line that tests every change and delivers it to users quickly and safely.", deck: "Delivery plan", slides: "slide 6" },
      { id: "micro", layer: 0, word: "Microservice", exp: "", also: "service", s1: "A small program that does one business job and can be changed without touching the rest.", deck: "Target architecture", slides: "slides 3, 8" },
      { id: "lowcode", layer: 0, word: "Low-code platform", exp: "", also: "citizen development", s1: "A tool that lets staff build simple business apps by dragging blocks instead of writing code.", deck: "Board update", slides: "slide 11" },
      { id: "stream", layer: 1, word: "Event streaming", exp: "", also: "event bus", s1: "Systems announce what just happened, and any system that cares picks it up as it happens.", deck: "Target architecture", slides: "slide 9" },
      { id: "queue", layer: 1, word: "Message queue", exp: "", also: "queue, broker", s1: "A waiting line for messages, so a busy system takes them one at a time and nothing is lost.", deck: "Target architecture", slides: "slide 9" },
      { id: "ipaas", layer: 1, word: "Integration platform", exp: "integration platform as a service", also: "iPaaS", s1: "One place that connects business applications, so data moves between them without hand-built links.", deck: "Board update", slides: "slide 12" },
      { id: "lake", layer: 2, word: "Data lake", exp: "", also: "raw zone", s1: "One store that keeps raw data in its original form until someone needs it.", deck: "Data roadmap", slides: "slides 2, 5" },
      { id: "catalogue", layer: 2, word: "Data catalogue", exp: "", also: "data catalog", s1: "A searchable list of the organisation's data: what exists, what it means and who owns it.", deck: "Data roadmap", slides: "slide 7" },
      { id: "master", layer: 2, word: "Master data", exp: "", also: "reference data", s1: "The shared facts many systems rely on, such as customers, products and sites, kept in one agreed version.", deck: "Data roadmap", slides: "slide 4" },
      { id: "mfa", layer: 3, word: "Multi-factor authentication", exp: "mfa", also: "two-step verification", s1: "Signing in with two proofs of who you are, such as a password and a code on your phone.", deck: "Security review", slides: "slide 3" },
      { id: "sso", layer: 3, word: "Single sign-on", exp: "sso", also: "one login", s1: "One login that opens every work application, so people stop juggling passwords.", deck: "Security review", slides: "slide 4" },
      { id: "zero", layer: 3, word: "Zero trust", exp: "", also: "never trust, always verify", s1: "Every request is checked, even from inside the office network; nothing is trusted by default.", deck: "Security review", slides: "slides 5, 6" },
      { id: "k8s", layer: 4, word: "Kubernetes", exp: "k8s", also: "K8s, Kube", s1: "Software that runs and looks after many containers at once: it starts them, restarts them when they fail and adds more when demand rises.", deck: "Board update", slides: "slides 12, 14" },
      { id: "container", layer: 4, word: "Container", exp: "", also: "container image", s1: "A sealed box that holds a program and everything it needs, so it runs the same on any machine.", deck: "Target architecture", slides: "slide 10" },
      { id: "landing", layer: 4, word: "Landing zone", exp: "", also: "cloud foundation", s1: "A prepared cloud account with the network, security and rules in place before the first workload moves in.", deck: "Cloud plan", slides: "slide 2" }
    ],
    /* the full article used in Senses, Links and the layout scene */
    k8s: {
      here: "Every new service moved to the cloud runs on one shared Kubernetes platform, looked after by the platform team rather than by each project.",
      technical: "An open-source orchestrator that schedules containers across a cluster of machines, keeps the declared number of copies running and balances traffic between them.",
      example: "The order service runs as six identical containers; when one crashes, Kubernetes replaces it within seconds.",
      linkWord: "containers"
    },
    containerHere: "Every new service is shipped as a container, so the same box runs on a laptop, in testing and in the cloud.",
    hero: {
      label: "A page of the glossary: thumb tabs on the right edge page through the layers, and the entry turns to that layer's word"
    },
    layersScene: {
      title: "Terms are filed by architecture layer, so a reader opens the right shelf first",
      lede: "Five layers run from Applications down to Infrastructure. A tab on the page edge jumps to one; the running head always names where you are.",
      label: "One layer of the glossary with its terms; the tabs on the right switch layer",
      count: " terms"
    },
    lookup: {
      title: "Search finds a term by its name, its abbreviation or any other name people use for it",
      lede: "Press / and type. “k8s” finds Kubernetes and “two-step” finds multi-factor authentication; filters narrow the page to one layer.",
      placeholder: "Search terms",
      all: "All layers",
      none: "No term matches. Try another name for it.",
      one: " term", many: " terms",
      demo: ["k8s", "two-step", "lake"]
    },
    senses: {
      title: "Every entry answers in one sentence first, then says what the term means in this work",
      lede: "Sense 1 is the largest text in the entry. Sense 2 ties the term to the decks it appears in, and the technical definition stays folded until someone opens it.",
      label: "The entry for Kubernetes with its three senses and the decks where it appears"
    },
    links: {
      title: "A term named inside a definition links to its own entry, and Back returns to the same spot",
      lede: "The first mention in each entry is underlined. The jump marks the target with a short wash, so the eye lands on the right word.",
      back: "Back",
      label: "Two entries of the glossary; the underlined word jumps to its own entry"
    },
    team: {
      title: "The team fills the glossary from any Excel sheet and sends readers a single file",
      lede: "Import finds the term column on its own and brings every row in at once, with Undo. Export writes a reader copy without any edit controls.",
      cols: ["Term", "Stands for", "Layer", "In short"],
      sheetName: "terms.xlsx",
      file: "Glossary.html",
      fileNote: "Reader copy",
      imported: "rows in",
      undo: "Undo",
      replay: "Replay the import",
      label: "Rows of an Excel sheet become entries of the glossary, then one reader file"
    },
    layout: {
      title: "The team decides how an entry reads by dragging its parts into order",
      lede: "Ten ready layouts or your own: every column of the sheet becomes a part, and the page changes as you drag. Arrow keys move a part too.",
      inShort: "In short",
      handle: "Drag to reorder, or use the arrow keys: ",
      moved: " moved to place ",
      label: "Parts of an entry with drag handles beside a preview of the entry"
    },
    invented: "Every term, deck and slide shown is an invented sample.",
    footer: "Designed and built by Rayane El Metni."
  }
});
