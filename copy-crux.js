/* crux page copy, split out of copy.js on 9 Nov 2026 so each page owns its words. Loads after copy.js. */
window.COPY = window.COPY || {};
Object.assign(window.COPY, {
  /* ---------- crux's page ---------- */
  crux: {
    title: "crux",
    description: "crux: a focus guard for deep work, on the Mac.",
    tagline: "A focus guard for deep work.",
    fact: "Mac",
    /* the first screen: what it is, who it is for, how it works (round 4, 9 Nov 2026) */
    what: "crux is a Mac app that guards one block of deep work at a time.",
    who: "For students and anyone who plans the day in notes and loses time to open tabs.",
    how: "Plan the day on a 24-hour dial, press Start, and crux calls you back when you drift.",
    heroAria: "Start a block: the whole-day ring turns, then moves in on the time left, the count staying on screen",
    /* short labels for the nav; the section titles below carry the point */
    sections: { takeover: "Takeover", pill: "Pill", discs: "Level discs", planner: "Planner", spec: "Spec", menu: "Parts" },
    titles: {
      planner: "You plan the day by dragging tasks onto a 24-hour dial",
      takeover: "Open a distracting site mid-block and the screen hands you back your task",
      pill: "The time left floats over your work, so you never open the app to check it",
      discs: "Every block leaves a disc filled to the share you spent on task",
      spec: "It runs on the Mac and works from the task list you already keep"
    },
    specLede: "Tasks stay plain lines in your own notes, so nothing is locked inside the app.",
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
      lede: "The page greys behind one line that names the site, the time lost and the task. Return closes the tab.",
      quip: "The feed refills.", quipTail: "The chapter does not.",
      why: "YouTube, 40 s so far, during Chapter 3: hash indexes.",
      back: "Back to task", closes: "closes youtube.com", keep: "Keep it open", need: "I need this",
      stalled: "40 s"
    },
    pill: { lede: "Drag the block anywhere on screen, or shrink it to a disc or to a bar that drains as the minutes go.",
      shapes: ["Pill", "Disc", "Drain bar"], shapeGroup: "Pill shape" },
    discs: { lede: "The same mark runs from 11 pt in the menu bar to 64 pt in the popover. Drag the waterline to try it.",
      words: ["mostly on task", "partly on task", "mostly elsewhere"], slider: "Share on task",
      sizes: ["menu bar", "list", "chip", "minimised", "popover"],
      states: { running: "running", locked: "locked", planned: "planned", deadline: "deadline", drifted: "drifted:", noMark: "no mark" } },
    planner: { lede: "Midnight sits at the top. A task snaps to five minutes, wears its folder's colour and never lands on top of another; \u2318Z takes it back.",
      dialAria: "Today, the whole day, midnight at the top", done: [{ from: 9, to: 10.5, level: .91 }, { from: 11, to: 11.75, level: .62 }, { from: 13, to: 13.67, level: .38 }],
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
  }
});
