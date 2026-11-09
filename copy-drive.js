/* Drive page copy (9 Nov 2026). Loads after copy.js. Every question, topic, name, score and date here is invented. */
window.COPY = window.COPY || {};
Object.assign(window.COPY, {
  drive: {
    title: "Drive",
    description: "Drive: a multiple-choice knowledge test you read like a car's instrument cluster. Every topic has to cross the 80 % mark.",
    back: "Back to Rayane's bench",
    nav: { briefing: "Briefing", answering: "Answering", topics: "Topics", certificate: "Certificate", sheet: "Your test" },

    hero: {
      name: "Drive",
      what: "A knowledge test you read like an instrument cluster.",
      who: "For teams who want to know what people know before training.",
      how: "One multiple-choice run covers every topic, and you pass when each topic reaches 80 %.",
      facts: ["≈ 30 min", "25 questions", "3 topics"],
      open: "Open Drive",
      gaugeLabel: "A speedometer sweeps through its full range and settles at 84 percent overall, past the chequered pass mark at 80. The outer ring holds one tick per question, grouped by topic: Data, Cloud and Security."
    },

    gauge: { overall: "Overall", passMark: "Pass mark 80 %", key: ["Overall score", "One tick per question"] },
    topics: ["Data", "Cloud", "Security"],

    briefing: {
      title: "The briefing card shows the length, the pass mark and every topic before the first question",
      lede: "Six readings on one stitched card, so nobody starts without knowing what the run asks of them.",
      kicker: "Data and cloud basics",
      head: "Before you begin",
      cells: [
        { k: "Duration", v: "≈ 30", u: "min" },
        { k: "Questions", v: "25", u: "" },
        { k: "Every topic", v: "≥ 80", u: "%" },
        { k: "Per question", v: "1", u: "point" },
        { k: "Answers", v: "No going back", u: "" },
        { k: "Timing", v: "No time limit", u: "" }
      ],
      topicsLabel: "Topics",
      counts: ["10", "8", "7"],
      begin: "Begin",
      backBtn: "Back"
    },

    answering: {
      title: "One click submits, and a wrong pick shows the right answer and the reason straight away",
      lede: "Green marks the right option, red marks your pick, and the explanation comes from the test itself. Pick an answer to try it.",
      quiz: "Data and cloud basics",
      submit: "Submit", next: "Next", finish: "See result", restart: "Start again",
      right: "Correct", wrong: "Not quite", why: "Why",
      progress: "of",
      questions: [
        {
          sub: "Service models", n: 7,
          q: "Which service model leaves the operating system and its patches to the provider, while you deploy your own code?",
          opts: ["Infrastructure as a service", "Platform as a service", "On-premises hosting", "A rented colocation rack"],
          correct: 1,
          why: "On a platform service the provider runs and patches the operating system; you bring the code. Infrastructure as a service hands the operating system back to you."
        },
        {
          sub: "Data quality", n: 8,
          q: "Two reports give different customer counts for the same month. What do you check first?",
          opts: ["Which report uses the newer chart style", "Whether both count a customer the same way", "Which report the manager prefers", "The file size of each export"],
          correct: 1,
          why: "Two numbers for one month usually mean two definitions, such as active against registered customers. Agree the definition before comparing anything else."
        },
        {
          sub: "Phishing", n: 9,
          q: "An email signed by the help desk asks you to confirm your password through a link. What is the right move?",
          opts: ["Reply with the password so they can check it", "Open the link but type a made-up password", "Report the email and leave the link alone", "Forward it to colleagues to ask if it is real"],
          correct: 2,
          why: "A help desk never asks for a password by email. Reporting it lets the security team block the sender for everyone, and forwarding it only spreads the link."
        }
      ]
    },

    topicsScene: {
      title: "Each topic is read against the 80 % line, so a strong overall score cannot hide a weak topic",
      lede: "Both candidates answer 21 of 25 questions right. One passes; the other is Almost there because Cloud stops at 63 %.",
      switchLabel: "Show the result of",
      people: ["Candidate A", "Candidate B"],
      overall: "Overall",
      mark: "≥ 80 %",
      passed: "Passed",
      almost: "Almost there",
      open: "Open the subtopics of",
      goodAt: "Good at",
      workOn: "Almost there",
      subs: [
        ["Data models", "Data quality", "Reporting"],
        ["Service models", "Cost", "Storage"],
        ["Access", "Phishing", "Data protection"]
      ]
    },

    cert: {
      title: "A pass turns the speedometer into a stitched certificate with the candidate's name and the date",
      lede: "The card flips by itself after the reading; tap it to turn back. Almost there keeps the speedometer and lists the subtopics to work on.",
      kicker: "Certified",
      test: "Data and cloud basics",
      passed: "Passed",
      name: "Noor Peeters",
      date: "09.11.2026",
      flipLabel: "Turn the card between the certificate and the speedometer",
      verdict: "Passed",
      stats: [{ k: "Questions", v: "25" }, { k: "At the mark", v: "3", of: "of", w: "3" }, { k: "Time", v: "27:40" }],
      again: "Start again", home: "Home"
    },

    sheet: {
      title: "The whole test comes from one spreadsheet: questions, pass mark and every word on screen",
      lede: "Import the Excel file and the dial, the briefing and the topics redraw from it. A faulty row is named before anything is kept, and the export is one file that opens anywhere.",
      tabs: ["Questions", "Settings", "Texts"],
      file: "data-and-cloud-basics.xlsx",
      cols: ["ID", "Topic", "Subtopic", "Question", "A", "B", "C", "D", "Correct"],
      rows: [
        ["dc-07", "Cloud", "Service models", "Which service model leaves the operating system to the provider?", "Infrastructure", "Platform", "On-premises", "Colocation", "B"],
        ["dc-08", "Data", "Data quality", "Two reports give different customer counts. What do you check first?", "Chart style", "Definition", "Preference", "File size", "B"],
        ["dc-09", "Security", "Phishing", "An email asks you to confirm your password through a link.", "Reply", "Fake password", "Report it", "Forward it", "C"],
        ["dc-10", "Cloud", "Cost", "Which line on a cloud bill grows with stored data?", "Compute hours", "Storage", "Licences", "Support", "B"]
      ],
      settings: [["Title", "Data and cloud basics"], ["Pass mark", "80 %"], ["Pass rule", "≥, on every topic"], ["Questions per subtopic", "All"], ["Shuffle questions", "No"]],
      texts: [["home.start", "Start"], ["q.submit", "Submit"], ["result.pass", "Passed"], ["result.almost", "Almost there"]],
      keyCol: "Key", textCol: "Text", settingCol: "Setting", valueCol: "Value"
    },

    invented: "Invented questions, topics, names and scores.",
    footer: "Designed and built by Rayane El Metni."
  }
});
