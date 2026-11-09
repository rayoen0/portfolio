/* Moat page copy (9 Nov 2026). Loads after copy.js. Every word on moat.html lives here.
   Block names, reasons, counts and times on the phones are invented demo data. */
window.COPY = window.COPY || {};
Object.assign(window.COPY, {
  moat: {
    title: "Moat",
    description: "Moat: an iPhone app that closes the apps you lose time to, and makes getting back in cost a small effort you chose.",
    back: "Back to Rayane's bench",
    nav: { guard: "Guard", urge: "The urge", cross: "Cross", insights: "Insights" },
    tagline: "Don't fight the urge. Moat it.",
    facts: {
      whatLabel: "What", what: "An iPhone app that closes the apps you lose time to.",
      whoLabel: "For", who: "Anyone who opens a feed on reflex and wants the phone to hold the line at work and at night.",
      howLabel: "How", how: "You pick the apps and when they close; getting back in costs a small effort you chose in advance."
    },
    heroAria: "Moat's Today screen: a moat of water around a keep counts down a 25-minute block while app icons are thrown at it and splash into the water",

    /* the phones: words as they appear in the app */
    ui: {
      time: "09:41",
      block: "Deep work",
      reason: "You set this time aside for work that matters.",
      count: "25m",
      tabs: { today: "Today", lite: "Lite", insights: "Insights", settings: "Settings" },
      editor: { blockList: "Block list", block: "Block", only: "Only", when: "When", unblock: "To unblock",
        when3: ["Schedule", "Place", "Limit"],
        challenges: ["Hold", "Wait", "Type", "Sums", "Breathe", "Passcode", "Tag", "Strict"] },
      shield: { close: "Close", lite: "Open lite", unblock: "Unblock…" },
      challenge: { stay: "Stay focused", hold: "Hold to open", held: "Open", until: "until", closeNow: "Close now", done: "Done" },
      insights: { title: "Insights", days: ["M", "T", "W", "T", "F", "S", "S"], stopped: "Stopped", unblocked: "Unblocked",
        resisted: "Resisted", unblocks: "Unblocks", focus: "Focus", focusValue: "30m" }
    },

    guard: {
      title: "You pick what to guard and when the moat fills",
      sub: "Ready-made lists or single apps and sites. A block closes by hand, for a focus session, on a schedule, at a place or after a daily limit, and you choose its toll in advance.",
      aria: "Moat's block editor: the block Deep work guards three apps, closes on a schedule, and unblocking costs a press and hold",
      hint: "Tap a toll to choose it"
    },
    urge: {
      title: "Reach for a guarded app and the shield is already up",
      sub: "The shield shows the reason you wrote for the block. Close is the big button; unblocking is the quiet one beside it.",
      aria: "A thumb taps a video app on the home screen and Moat's shield appears over it with the block's name, its reason and a Close button"
    },
    cross: {
      title: "Crossing costs the effort you chose; staying out costs one tap",
      sub: "Hold for a second and a half, wait out a draining ring, type a line, solve sums, breathe or scan a tag. Then the drawbridge drops for the minutes you allowed and lifts again on its own.",
      aria: "Moat's toll screen: press and hold the circle to open the app for five minutes, or tap Stay focused",
      try: "Press and hold the circle on the phone",
      keepAria: "The keep in its moat: the drawbridge drops when you cross and splashes land in the water when you stay",
      again: "Again",
      crossed: "The drawbridge is down for five minutes.",
      stayed: "The urge splashed into the moat."
    },
    insights: {
      title: "Afterwards, Insights shows how often the moat held",
      sub: "Seven days of stops against unblocks, with urges resisted and minutes of focus beside them.",
      aria: "Moat's Insights screen: 6 stops this week, 4 urges resisted, 2 unblocks, 30 minutes of focus, with stops and unblocks per day"
    },

    invented: "Block names, counts and times on the phones are invented.",
    footer: "Designed and built by Rayane El Metni."
  }
});
