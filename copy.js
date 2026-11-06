/* Every word on the site lives here. Edit a string, save, reload the page.
   Classic script (works from file://): both pages load it before their own script.
   Pictures drawn inside the app objects (the dial's numerals) are artwork, not copy. */
window.COPY = {

  /* ---------- the home page ---------- */
  site: {
    name: "Rayane El Metni",
    /* PLACEHOLDER tagline: his seed line, kept until he picks the final one. */
    tagline: "Problem solver in Brussels. Mostly my own problems, so far.", // placeholder = option 1 until Rayane picks (HANDOFF.md)
    taglineIsPlaceholder: true,
    /* PLACEHOLDER slot: one short line under the tagline (role, school). Hidden while empty; shows as soon as it holds text. */
    role: "",
    /* PLACEHOLDER contact: each link renders when it holds a value (an empty string hides it). Swap in the real ones. */
    contact: {
      email: "",                          /* PLACEHOLDER address */
      linkedin: ""  /* PLACEHOLDER profile URL */
    },
    linkedin: "LinkedIn",
    title: "Rayane El Metni",
    description: "Rayane El Metni: four apps, designed and built by hand.",
    mail: "Write to me",
    list: "List",
    listLabel: "The four apps",
    theme: "Switch light or dark",
    bench: "Bench",
    benchBack: "Back to the bench",
    replay: "Replay",
    opensWorld: "Opens its world.",
    openPage: "Open the page"
  },

  /* name, one line, platform, the short line under its object on the bench */
  apps: {
    crux:     { name: "crux", line: "A focus guard for deep work.", platform: "Mac", bench: "focus guard for deep work" },
    coach:    { name: "case coach", line: "A spoken case-interview coach.", platform: "Web, spoken", bench: "spoken case-interview coach",
                world: "A spoken case-interview coach. One interviewer, a desk, paper.", fact: "Web, spoken" },
    moat:     { name: "Moat", line: "Don't fight the urge. Moat it.", platform: "iPhone", bench: "iPhone app blocker",
                world: "Don't fight the urge. Moat it.", fact: "iPhone app blocker" },
    stakes:   { name: "stakes", line: "One ring per deadline, shrinking to zero.", platform: "Web", bench: "commitment engine",
                world: "A commitment engine. Declare a task, a deadline and a consequence; the ring keeps time.", fact: "Web" }
  },

  /* what plays inside each world (invented content only) */
  worlds: {
    coach: { asks: "So, where would you start?", exhibitLine: "Here's what they pay per keg.", exhibitTitle: "Keg cost per year", bars: ["Lease", "Buy", "Mixed"] },
    stakes: { title: "Finish stats problem set", due: "Fri 7 Nov, 18:00",
      others: ["Draft essay intro", "Read chapter 4", "Book dentist", "Clean the bike", "Gym, 3 times"] }
  },

  /* ---------- crux's page ---------- */
  crux: {
    title: "crux",
    description: "crux: a focus guard for deep work, on the Mac.",
    tagline: "A focus guard for deep work.",
    fact: "Mac",
    sections: { takeover: "Takeover", pill: "Pill", discs: "Level discs", planner: "Planner", spec: "Spec", menu: "Parts" },
    folder: "Stats",
    task: "Chapter 3: hash indexes",
    summary: "Exercises 3 to 5, then the split rule in your own words",
    steps: ["hashing exercise", "index the sample table", "verify checksums"],
    minUnit: "MIN", min: "min",
    start: "Start",
    lengthLabel: "Block length",
    wholeDay: "Whole day or arc (D)", wholeDayShort: "Whole day",
    replay: "Replay the start", replayShort: "Replay",
    date: "FRI 6 NOV",
    takeover: {
      lede: "Drift off task and the page goes grey behind one line.",
      quip: "The feed refills.", quipTail: "The chapter does not.",
      why: "YouTube, 40 s so far, during Chapter 3: hash indexes.",
      back: "Back to task", closes: "closes youtube.com", keep: "Keep it open", need: "I need this",
      stalled: "40 s"
    },
    pill: { lede: "The block, floating over your work. Drag it, shrink it to a disc, or to a bar that drains.",
      shapes: ["Pill", "Disc", "Drain bar"], shapeGroup: "Pill shape" },
    discs: { lede: "One mark at every size. The filled area is the share of the block you spent on task.",
      words: ["mostly on task", "partly on task", "mostly elsewhere"], slider: "Share on task",
      sizes: ["menu bar", "list", "chip", "minimised", "popover"],
      states: { running: "running", locked: "locked", planned: "planned", deadline: "deadline", drifted: "drifted:", noMark: "no mark" } },
    planner: { lede: "Drag a task onto the day. It snaps to five minutes and never lands on top of another.",
      planned: "planned", empty: "Nothing left to plan.", undo: "Undo", reset: "Reset", notPlanned: "Not planned yet",
      onDay: [{ title: "Statistics resit: past paper", from: 14.5, to: 15.25 }, { title: "Chapter 3: hash indexes", from: 16, to: 16.75 }, { title: "Gym", from: 18, to: 19 }],
      bench: [{ title: "Read chapter 4", minutes: 40 }, { title: "Market sizing drill", minutes: 25 }, { title: "Email the study group", minutes: 15 }] },
    spec: [
      { title: "On the Mac", text: "Menu bar, floating pill, full-screen takeover." },
      { title: "Your own task list", text: "Pick a task from your notes. crux writes the time back." },
      { title: "Sees the site, not the page", text: "It knows when you drift, never what you read." },
      { title: "Ember and Ivory", text: "The accent means one thing: time you still have." }
    ],
    footer: "Designed and built by Rayane El Metni."
  },

  /* ---------- case coach's page (dark only: the room at night). Case, figures and verdicts are invented. ---------- */
  caseCoach: {
    title: "case coach",
    description: "case coach: a spoken case-interview coach. One interviewer, a desk, paper.",
    tagline: "Case interviews, practised out loud.",
    fact: "Web, spoken. Headphones on, paper and pen.",
    facts: ["Web, spoken both ways", "Headphones on", "Paper and pen"],
    back: "Back to Rayane's bench",
    nav: { exhibit: "Exhibit", maths: "Maths", verdict: "Verdict", tonight: "Tonight" },
    name: "Claire",
    pause: "Pause", play: "Play",
    room: {
      label: "Claire asks a case question, listens to the answer, thinks, then asks the next one",
      lines: [
        "A regional brewer wants its lager in supermarkets. Where would you start?",
        "Fine. How big is that market, roughly?",
        "Good. Now give me the answer first, then the why."
      ],
      moment: "Take your time.",
      controls: { done: "Done", moment: "Need a moment", repeat: "Repeat" }
    },
    exhibit: {
      title: "Paper on the desk",
      lede: "The exhibit lands on paper. She looks at it before you do.",
      says: ["Here is what they sell, by channel.", "And the margin on each crate."],
      asks: "What do you see in it?",
      shown: "Shown", show: "Show exhibit",
      label: "Claire puts an exhibit on the desk, glances at it, then asks what you see",
      chart: { title: "Lager sold by channel, €m", series: ["2022", "2025"],
        rows: [["Supermarkets", 38, 52], ["Bars and pubs", 61, 57], ["Off-licences", 14, 13], ["Online", 3, 9]] },
      table: { title: "Margin per crate, €", head: ["Channel", "Margin"],
        rows: [["Supermarkets", "4.10"], ["Bars and pubs", "7.80"], ["Off-licences", "5.20"], ["Online", "6.40"]] },
      note: "Invented figures."
    },
    maths: {
      title: "Ten quick sums",
      lede: "Said out loud, answered out loud. Three right in a row and the dots join up.",
      label: "A maths drill: Claire says a sum, a dot per answer, hits join into a streak",
      sums: [
        ["What is 25% of 480?", "hit"], ["Eight times 45?", "hit"], ["1.2 billion over 40?", "hit"],
        ["What is 12% of 300 million?", "miss", "No. It's 36 million."], ["7% of 2 billion?", "hit"], ["640 divided by 16?", "hit"],
        ["35 times 60?", "hit"], ["From 80 to 92, growth in percent?", "skip"], ["Half of 3.8 billion?", "hit"], ["4% of 950 million?", "hit"]
      ],
      score: "8", of: "/10"
    },
    debrief: {
      title: "The verdict, on a sheet",
      lede: "One word, the moment it slipped, and a second go at it.",
      ask: "How do you think it went?",
      his: "The structure held. The maths felt slow.",
      skip: "Skip",
      writing: "Writing up the verdict",
      verdictLine: "Here is my verdict",
      hearVerdict: "Hear the verdict",
      verdictLabel: "Verdict", verdict: "Yes",
      words: "You found the margin early and the maths held. The close came late: you listed findings before you gave the answer.",
      gap: "You said the maths felt slow. It was the close.",
      momentLabel: "The moment",
      said: "“So there are a few things we could look at, maybe margins first…”",
      stamp: "31:08",
      hearYourself: "Hear yourself",
      playing: "You, at 31:08",
      why: "She asked for an answer. This opened a list.",
      couldLabel: "You could say",
      could: "“Yes, go in through two supermarket chains: the margin pays back in 14 months.”",
      nextLabel: "Practise next", next: "Lead with the answer in the close.",
      again: "Say it again",
      againQ: "So, what do you recommend?",
      before: "Before", after: "After",
      beforeLine: "“So there are a few things we could look at, maybe margins first…”",
      afterLine: "“Yes. Two supermarket chains first: the margin pays back in 14 months.”",
      fixed: "Fixed",
      backToSheet: "Back to the sheet"
    },
    tonight: {
      title: "Tonight's plan",
      lede: "Three lines at most. Each one gets a tick in pen.",
      when: "12 days to the final round",
      rest: ["Today: one case, one chart, one story.", "Today: one chart, one story.", "Today: one story.", "Today is done."],
      sheet: "Today", total: "46 min",
      lines: [
        { title: "Regional brewer: supermarket entry", sub: "From last time: give the answer first", min: "35 min" },
        { title: "Chart: lager sold by channel", sub: "Two missed last week", min: "5 min" },
        { title: "Story: the deadline you moved", sub: "", min: "6 min" }
      ],
      start: "Start", done: "Nothing more is needed tonight."
    },
    invented: "Invented case, figures and verdicts.",
    footer: "Designed and built by Rayane El Metni."
  }
};
