/* case coach page copy, split out of copy.js on 9 Nov 2026 so each page owns its words. Loads after copy.js. */
window.COPY = window.COPY || {};
Object.assign(window.COPY, {
  /* ---------- case coach's page (dark only: the room at night). Case, figures and verdicts are invented. ---------- */
  caseCoach: {
    title: "case coach",
    description: "case coach: a case-interview coach you talk to. An interviewer runs a whole case out loud, drills train each skill, a debrief names the moment it slipped.",
    tagline: "A case-interview coach you talk to: an interviewer runs a whole case with you, out loud.",
    whoFor: "For candidates preparing for consulting case interviews.",
    howLabel: "How it works",
    how: ["A mock case, spoken both ways", "A debrief that names the moment it slipped", "Drills for each skill, one at a time"],
    fact: "Web, spoken. Headphones on, paper and pen.",
    facts: ["Web, spoken both ways", "Headphones on", "Paper and pen"],
    back: "Back to Rayane's bench",
    nav: { exhibit: "Exhibits", verdict: "Debrief", drills: "Drills", prep: "Prep pack" },
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
      clock: "into the case",
      controls: { done: "Done", moment: "Need a moment", repeat: "Repeat" }
    },
    exhibit: {
      title: "Exhibits land on the desk mid-case, the way they do in the real interview",
      lede: "She hands over a chart or a table, looks at it first, then asks what you see. Every exhibit she has shown stays in a tray you can reopen.",
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
      title: "Ten sums, said out loud",
      lede: "",
      label: "A maths drill: Claire says a sum, a dot per answer, hits join into a streak",
      sums: [
        ["What is 25% of 480?", "hit"], ["Eight times 45?", "hit"], ["1.2 billion over 40?", "hit"],
        ["What is 12% of 300 million?", "miss", "No. It's 36 million."], ["7% of 2 billion?", "hit"], ["640 divided by 16?", "hit"],
        ["35 times 60?", "hit"], ["From 80 to 92, growth in percent?", "skip"], ["Half of 3.8 billion?", "hit"], ["4% of 950 million?", "hit"]
      ],
      score: "8", of: "/10"
    },
    debrief: {
      title: "The debrief names the moment the case slipped, then lets you say it again",
      lede: "One verdict word, your own words at a timestamp you can play back, the line you could have said, then a second try with before and after side by side.",
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
    drills: {
      title: "Seven drills train the skills a case tests, one at a time",
      lede: "Each drill is timed and answered out loud. Feedback comes back the moment you finish, and every miss comes back until it sticks.",
      label: "Drill types",
      you: "You", back: "What comes back",
      fixLabel: "One fix", of: "/ 5",
      marks: { hit: "met", part: "partly", miss: "missing" },
      kinds: {
        framework: {
          name: "Framework", time: "2:00 to structure", level: "Easy, medium or hard", source: "From real case prompts",
          prompt: "A chain of 40 gyms grew its members by a fifth in two years, yet profit fell. Why, and what should it do?",
          yours: ["Revenue per member", "Cost per site", "Competition"],
          score: 3, line: "Sound buckets, but the second layer is generic and you never said which to test first.",
          fix: "Name the bucket you test first, and why, before you list the rest.",
          modelLabel: "Model structure, against yours",
          model: [["Revenue per member", "hit", "yours"], ["Cost per site", "hit", "yours"], ["Member mix: cheaper plans", "miss", "missing"], ["Discount gyms nearby", "part", "too broad"]],
          firstLabel: "Test first", first: "Revenue per member: members rose and profit fell, so the yield is the likeliest break.",
          trapsLabel: "Traps", traps: ["A generic second layer under every bucket", "Solutions before causes"]
        },
        maths: {
          name: "Maths", time: "About 10 s a sum", level: "26 operation families", source: "New numbers every time",
          families: "Percentages, growth and CAGR, break-even, payback, margins, market share and twenty more families, generated fresh each run.",
          chip: "Right digits, wrong magnitude",
          q: "What is 12% of 300 million?",
          youLabel: "You", you: "3.6 million", answerLabel: "Answer", answer: "36 million",
          stepsLabel: "Steps", steps: ["10% of 300 million is 30 million", "2% is 6 million", "30 + 6 = 36 million"],
          trickLabel: "Trick", trick: "Take 10% first, then add the rest. Say the unit before the number."
        },
        sizing: {
          name: "Sizing", time: "4:00 to size", level: "Medium", source: "Anchors checked against a range",
          prompt: "How many e-bikes are sold each year in a country of 12 million people?",
          route: ["12 million people", "÷ 2.4 a household: 5 million households", "× 20% own an e-bike: 1 million in use", "÷ a 6-year life: about 170 000 a year"],
          verdict: "In range", line: "A clean bottom-up route with a sane replacement cycle.",
          fix: "Add first-time buyers: the market is still growing, so replacement alone undercounts.",
          bandLabel: "Accepted range", band: { min: 0, max: 400000, lo: 120000, hi: 250000, you: 170000 },
          ticks: ["0", "120 000", "250 000", "400 000"], youMark: "You: 170 000"
        },
        charts: {
          name: "Charts", time: "0:20 to read", level: "Easy", source: "One question, one chart",
          chartTitle: "Lager sold by channel, €m", series: ["2022", "2025"],
          prompt: "Which channel grew fastest?",
          you: "Online. It tripled, from 3 to 9.",
          score: 4, line: "Right read: growth, not size.",
          fix: "Add the so-what: online is still small, so it cannot carry the brand alone.",
          parts: [["Headline", "hit"], ["So what", "part"]]
        },
        exhibits: {
          name: "Exhibits", time: "1:30 to answer", level: "Medium", source: "Tables and charts from real cases",
          tableTitle: "Cost per truck, per year, €", head: ["", "Diesel", "Hybrid"],
          rows: [["Purchase, over 10 years", "10 000", "15 000"], ["Fuel", "18 000", "9 000"], ["Maintenance", "5 000", "8 000"], ["Total", "33 000", "32 000"]],
          prompt: "What does this tell you about the client's costs?",
          you: "Hybrids cost more to buy but save on fuel, so a year comes out about the same.",
          score: 2, line: "An accurate read, but no so-what for a client who wants lower costs.",
          fix: "Say what it means: switching saves €1 000 a truck, so look for savings elsewhere first.",
          parts: [["Takeaway", "hit"], ["So what", "miss"], ["Next step", "part"]]
        },
        synthesis: {
          name: "Synthesis", time: "0:30 to think, 1:00 to answer", level: "Medium", source: "The close of a whole case",
          prompt: "The CEO walks in. What do you recommend?",
          facts: ["Supermarket sales grew from €38m to €52m", "Margin per crate: €4.10 in supermarkets, €7.80 in bars", "Two supermarket chains asked for a listing"],
          you: "Yes, go into supermarkets, starting with the two chains that asked. Sales there grew by more than a third…",
          score: 4, line: "Answer first, with numbers, inside the minute.",
          fix: "Close with the risk: a lower margin per crate than in bars.",
          parts: [["Answer first", "hit"], ["Three reasons", "hit"], ["Numbers", "hit"], ["Risks and next steps", "miss"], ["Time", "hit"]]
        },
        fit: {
          name: "Fit", time: "2:00 to tell", level: "Medium", source: "Then the follow-up a partner asks",
          prompt: "Tell me about a time you changed how a group acted, without any authority over them.",
          you: "On a group project, two of us wanted to drop the survey and the others did not…",
          score: 3, line: "A clear story with your own part in it, but it ends without a result.",
          fix: "End with what changed, and by how much.",
          parts: [["Specific", "hit"], ["Your part", "hit"], ["Result", "miss"], ["Structure", "hit"], ["Length", "hit"]],
          probeLabel: "A partner would press on", probe: "What did you say that finally moved them?"
        }
      },
      weak: {
        title: "Weak areas", text: "The skills you miss most rise to the top, each with a way straight back in.",
        rows: [["Second layer", "Framework", 40, "framework"], ["CAGR", "Maths", 55, "maths"], ["So what", "Exhibits", 62, "exhibits"]],
        drill: "Drill this", retry: "Retry 4 misses"
      }
    },
    prep: {
      title: "A prep pack turns one interview date into a guide and a drill plan",
      lede: "The countdown sits on top, then the interview's guide with a read tick, then the drill sets in order, each with its own progress.",
      days: "11", unit: "days",
      what: "until the final-round interview",
      when: "Friday 20 November, 14:00",
      rest: ["Next: read the guide.", "Next: the market-entry set.", "Next: the maths set.", "Everything in the pack is done."],
      sheet: "Final-round pack", total: "1 h 20 min",
      lines: [
        { title: "Read the guide", sub: "The format, the case types, what the round weighs", min: "25 min" },
        { title: "Framework set: market entry", sub: "6 prompts, 2:00 each", min: "40 min" },
        { title: "Maths set: percentages and growth", sub: "20 sums, 0:45 each", min: "15 min" }
      ],
      start: "Start the next set", done: "Nothing more is needed before the interview."
    },
    invented: "Invented cases, figures and verdicts.",
    footer: "Designed and built by Rayane El Metni."
  }
});
