/* Prioritisation matrix page copy (9 Nov 2026). Loads after copy.js. Every idea, score, group and roadmap item is invented. */
window.COPY = window.COPY || {};
Object.assign(window.COPY, {
  matrixPage: {
    title: "Prioritisation matrix",
    description: "Prioritisation matrix: a workshop tool that turns a long list of ideas into a scored matrix, a shortlist and a roadmap.",
    back: "Back to Rayane's bench",
    nav: { collect: "Collect", score: "Score", matrix: "Matrix", shortlist: "Shortlist", roadmap: "Roadmap", export: "Export" },

    what: "Turns a workshop's long list of ideas into a shortlist and a roadmap.",
    who: "For the facilitator running a prioritisation workshop on the big screen.",
    how: "Paste the list, drag each idea onto value and feasibility, ring the best; the roadmap fills itself.",
    facts: ["Web", "Excel in, PowerPoint out", "Full screen"],
    live: "Open the live tool",
    invented: "Every idea, score and roadmap item on this page is invented.",
    footer: "Designed and built by Rayane El Metni.",

    app: { name: "Prioritisation matrix", matrix: "Matrix", roadmap: "Roadmap", replay: "Replay", stageLabel: "Ideas drop from the Not yet scored tray onto a value and feasibility matrix; the shortlisted ones are ringed and arrows show what comes before what" },
    axes: { x: "Feasibility", y: "Value", low: "Low", high: "High" },
    quadrants: { tl: "Strategic bets", tr: "Quick wins", bl: "Deprioritise", br: "Fill-ins" },
    tray: "Not yet scored",
    groups: ["Finance", "IT & data", "Operations"],
    ideas: ["Invoice matching", "Credit check form", "Cash forecast", "Data catalogue", "Order dashboard", "New ERP",
            "Onboarding chatbot", "Approval limits", "Supplier portal", "Route planner", "Shift swap app", "Self-service returns"],
    phases: ["Now", "Next", "Later"],

    collect: {
      title: "Ideas come in the way the room wrote them, from a pasted list or a spreadsheet",
      lede: "Group headings become groups, headers in English, Dutch or French are recognised, and any column the tool does not know is kept as your own.",
      label: "A pasted list with group headings becomes the initiatives sheet, one group per heading",
      pasteLabel: "Paste anything",
      paste: ["Finance:", "Invoice matching", "Credit check form", "Cash forecast", "", "IT & data:", "Data catalogue", "Order dashboard", "New ERP", "…"],
      add: "Add items",
      sheetLabel: "Initiatives sheet",
      cols: ["Initiative", "Value", "Feasibility"],
      unscored: "not yet scored",
      toast: "Added 12 initiatives in 3 groups"
    },
    score: {
      title: "Scoring is a drag onto the grid, so the room argues about position, not numbers",
      lede: "Each idea waits in the tray until someone drags it; where it lands sets its value and feasibility at once. Arrow keys move a selected dot.",
      label: "Matrix with three ideas still in the Not yet scored tray; drag one onto the grid to score it",
      hint: "Drag a dot from the tray onto the grid.",
      readout: "{name}: value {v}, feasibility {f}, {q}."
    },
    matrix: {
      title: "Where an idea lands says what to do with it, and arrows say what must come first",
      lede: "Quick wins top right, strategic bets top left, fill-ins bottom right. Shift-drag from one dot to another records that it comes before; Alt-click traces the whole chain.",
      label: "The full matrix with dependency arrows; pick a dot to trace what it is linked to",
      hint: "Pick a dot to trace its chain.",
      traced: "{name}: linked to {n}.",
      none: "{name}: no links."
    },
    shortlist: {
      title: "A double-click rings the ideas the room commits to",
      lede: "Shortlisted ideas get a bold ring and a bold name; Focus shortlist fades the rest so the vote stays on what made the cut.",
      label: "The matrix with shortlisted ideas ringed; double-click a dot to add or remove it",
      focus: "Focus shortlist",
      count: "{n} shortlisted",
      hint: "Double-click a dot, or press Enter on it."
    },
    roadmap: {
      title: "The roadmap builds itself from the shortlist, one lane per group",
      lede: "Quick wins land in Now, strategic bets in Next, fill-ins in Later. A card follows its dot when it changes quadrant, and an order that breaks a dependency turns red.",
      label: "Roadmap board: three lanes, Now, Next and Later; a red dashed arrow marks an order conflict",
      conflict: "Order conflict: Data catalogue must come before Order dashboard",
      legend: "Order conflict"
    },
    export: {
      title: "The result leaves the workshop as slides and sheets people can still edit",
      lede: "PowerPoint with editable shapes and full names, Excel that imports back exactly, or one HTML file that opens the whole matrix offline.",
      label: "An exported slide of the matrix, with the four ways to take the result away",
      slideTitle: "Initiatives: value and feasibility",
      files: [
        { ext: "pptx", name: "PowerPoint", line: "Editable shapes, full names" },
        { ext: "xlsx", name: "Excel", line: "Imports back exactly, layout included" },
        { ext: "html", name: "One HTML file", line: "The whole matrix, opens offline" },
        { ext: "png", name: "PNG or SVG", line: "A picture for the minutes" }
      ]
    }
  }
});
