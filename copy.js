/* Every word on the site lives here. Edit a string, save, reload the page.
   Classic script (works from file://): both pages load it before their own script.
   Pictures drawn inside the app objects (the dial's numerals) are artwork, not copy. */
window.COPY = {

  /* ---------- the home page ---------- */
  site: {
    name: "Rayane El Metni",
    
    tagline: "Problem solver in Brussels. Mostly my own problems, so far.",
    taglineIsPlaceholder: true,
    /* one plain line under the tagline: what the bench is and how to use it (hidden while empty) */
    role: "Seven apps I designed and built. Open any of them to see how it works.",
    
    contact: {
      email: "",                          
      linkedin: ""  
    },
    linkedin: "LinkedIn",
    title: "Rayane El Metni",
    description: "Rayane El Metni: seven apps, designed and built by hand.",
    mail: "Write to me",
    list: "List",
    listLabel: "The seven apps",
    theme: "Switch light or dark",
    bench: "Bench",
    benchBack: "Back to the bench",
    replay: "Replay",
    opensWorld: "Opens its world.",
    openPage: "Open the page"
  },

  /* name, one line, platform, the short line under its object on the bench */
  apps: {
    crux:     { name: "crux", line: "Times each deep-work block on your Mac and pulls you back the moment you drift.", platform: "Mac",
                bench: "keeps deep work on the Mac on task" },
    coach:    { name: "case coach", line: "Practise case interviews out loud, with a spoken interviewer, exhibits and drills.", platform: "Web, spoken",
                bench: "case-interview practice, out loud",
                world: "For consulting candidates: a spoken interviewer runs the case, puts exhibits on the desk, then drills what slipped.", fact: "Web, spoken" },
    moat:     { name: "Moat", line: "Locks the iPhone apps that eat your time; getting back in costs an effort you chose.", platform: "iPhone",
                bench: "locks the iPhone apps that eat time",
                world: "Locks the iPhone apps that eat your time, on a schedule, a place or a daily limit. Getting back in costs an effort you chose in advance.", fact: "iPhone" },
    drive:    { name: "Drive", line: "A knowledge check for teams: one quiz, a pass mark on every topic, the score on a speedometer.", platform: "Web",
                bench: "knowledge check for teams",
                world: "A knowledge check before a training: one quiz across every topic, 80% to pass each, the result on a speedometer and a certificate.", fact: "Web" },
    glossary: { name: "Literacy glossary", line: "Business-technology terms in plain English, filed by architecture layer.", platform: "Web",
                bench: "tech terms in plain English",
                world: "For business people who meet technical terms: each one spelled out, explained in a sentence and filed under its architecture layer.", fact: "Web" },
    matrix:   { name: "Prioritisation matrix", line: "Scores workshop ideas on value and feasibility, then fills the Now, Next, Later roadmap.", platform: "Web",
                bench: "ranks workshop ideas into a roadmap",
                world: "For prioritisation workshops: the room scores each idea on value and feasibility on screen, shortlists the best, and the roadmap fills itself.", fact: "Web, for workshops" },
    stakes:   { name: "stakes", line: "Puts a deadline and a consequence on a task; one ring counts down until it is done.", platform: "Web",
                bench: "deadlines with a real consequence",
                world: "Name a task, a deadline and what missing it will cost you. The ring counts down and only fills once the work is checked.", fact: "Web" }
  },

  /* what plays inside each world (invented content only) */
  worlds: {
    crux: { date: "FRI 6 NOV" },
    coach: { asks: "So, where would you start?", exhibitLine: "Here's what they pay per keg.", exhibitTitle: "Keg cost per year", bars: ["Lease", "Buy", "Mixed"] },
    drive: { overall: "Overall", topics: ["Data", "Cloud", "Security"], passMark: "Pass mark 80%", passed: "Passed", certificate: "Data and cloud basics, 86%" },
    glossary: {
      layers: ["Applications", "Integration", "Data", "Security", "Infrastructure"],
      also: "Also",
      entries: [
        { layer: 1, word: "API gateway", expansion: "application programming interface gateway", sense: "One front door for many services: it checks who is calling, routes the request and limits traffic.", also: "edge API, gateway" },
        { layer: 3, word: "Multi-factor authentication", expansion: "mfa", sense: "Signing in with two proofs of who you are, such as a password and a code on your phone.", also: "two-step verification" },
        { layer: 4, word: "Landing zone", expansion: "", sense: "A prepared cloud account with the network, security and rules in place before the first workload moves in.", also: "cloud foundation" },
        { layer: 0, word: "CI/CD", expansion: "continuous integration, continuous delivery", sense: "An automated assembly line that tests every change and delivers it to users quickly and safely.", also: "pipeline" },
        { layer: 2, word: "Data lake", expansion: "", sense: "One store that keeps raw data in its original form until someone needs it.", also: "raw zone" },
        { layer: 4, word: "Kubernetes", expansion: "k8s", sense: "Software that runs and looks after many containers at once: it starts them, restarts them when they fail and adds more when demand rises.", also: "container orchestration" }
      ]
    },
    matrix: {
      quadrants: ["Strategic bets", "Quick wins", "Deprioritise", "Fill-ins"],
      x: "Feasibility", y: "Value", low: "Low", high: "High", tray: "Not yet scored",
      ideas: ["Self-service returns", "Route planner", "Invoice matching", "Data catalogue", "Supplier portal", "Shift swap app", "Onboarding chatbot"]
    },
    stakes: { title: "Finish stats problem set", due: "Fri 7 Nov, 18:00",
      others: ["Draft essay intro", "Read chapter 4", "Book dentist", "Clean the bike", "Gym, 3 times"] }
  }
};
