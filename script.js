/**
 * WCAG Content Structure + Tutor Engine
 * - Dropdown starts CLOSED
 * - W3C Understanding link per criterion
 * - Video link per criterion (W3C Perspectives videos, reused by topic)
 * - Quizzes are Q&A (not MCQ), 5-10 per principle
 */

/* ----------------------------
   OFFICIAL LINKS (W3C)
---------------------------- */
const WCAG_UNDERSTANDING_BASE = "https://www.w3.org/WAI/WCAG22/Understanding/";

/** W3C Understanding slugs by SC id (you can extend anytime) */
const understandingSlugById = {
    "1.1.1": "non-text-content",
    "1.2.1": "audio-only-and-video-only-prerecorded",
    "1.2.2": "captions-prerecorded",
    "1.2.3": "audio-description-or-media-alternative-prerecorded",
    "1.2.4": "captions-live",
    "1.2.5": "audio-description-prerecorded",
    "1.3.1": "info-and-relationships",
    "1.3.2": "meaningful-sequence",
    "1.3.3": "sensory-characteristics",
    "1.3.4": "orientation",
    "1.3.5": "identify-input-purpose",
    "1.4.1": "use-of-color",
    "1.4.2": "audio-control",
    "1.4.3": "contrast-minimum",
    "1.4.4": "resize-text",
    "1.4.5": "images-of-text",
    "1.4.10": "reflow",
    "1.4.11": "non-text-contrast",
    "1.4.12": "text-spacing",
    "1.4.13": "content-on-hover-or-focus",

    "2.1.1": "keyboard",
    "2.1.2": "no-keyboard-trap",
    "2.1.4": "character-key-shortcuts",
    "2.2.1": "timing-adjustable",
    "2.2.2": "pause-stop-hide",
    "2.3.1": "three-flashes-or-below-threshold",
    "2.4.1": "bypass-blocks",
    "2.4.2": "page-titled",
    "2.4.3": "focus-order",
    "2.4.4": "link-purpose-in-context",
    "2.4.5": "multiple-ways",
    "2.4.6": "headings-and-labels",
    "2.4.7": "focus-visible",
    "2.5.1": "pointer-gestures",
    "2.5.2": "pointer-cancellation",
    "2.5.3": "label-in-name",
    "2.5.4": "motion-actuation",

    "3.1.1": "language-of-page",
    "3.1.2": "language-of-parts",
    "3.2.1": "on-focus",
    "3.2.2": "on-input",
    "3.2.3": "consistent-navigation",
    "3.2.4": "consistent-identification",
    "3.3.1": "error-identification",
    "3.3.2": "labels-or-instructions",
    "3.3.3": "error-suggestion",
    "3.3.4": "error-prevention-legal-financial-data",

    "4.1.1": "parsing",
    "4.1.2": "name-role-value",
    "4.1.3": "status-messages",
};

function getUnderstandingLinkForId(id) {
    const slug = understandingSlugById[id];
    return slug ? `${WCAG_UNDERSTANDING_BASE}${slug}` : null;
}

/**
 * Video URLs: W3C Perspectives videos (re-used by topic)
 * - captions: https://www.w3.org/WAI/perspective-videos/captions/ :contentReference[oaicite:1]{index=1}
 * - contrast: https://www.w3.org/WAI/perspective-videos/contrast/ :contentReference[oaicite:2]{index=2}
 * - keyboard: https://www.w3.org/WAI/perspective-videos/keyboard/ :contentReference[oaicite:3]{index=3}
 * - notifications: https://www.w3.org/WAI/perspective-videos/notifications/ :contentReference[oaicite:4]{index=4}
 * - layout: https://www.w3.org/WAI/perspective-videos/layout/ :contentReference[oaicite:5]{index=5}
 * - speech (screen readers / semantics): https://www.w3.org/WAI/perspective-videos/speech/ :contentReference[oaicite:6]{index=6}
 * - customizable text: https://www.w3.org/WAI/perspective-videos/customizable/ :contentReference[oaicite:7]{index=7}
 */
const videoByTopic = {
    captions: "https://www.w3.org/WAI/perspective-videos/captions/",
    contrast: "https://www.w3.org/WAI/perspective-videos/contrast/",
    keyboard: "https://www.w3.org/WAI/perspective-videos/keyboard/",
    notifications: "https://www.w3.org/WAI/perspective-videos/notifications/",
    layout: "https://www.w3.org/WAI/perspective-videos/layout/",
    speech: "https://www.w3.org/WAI/perspective-videos/speech/",
    customizable: "https://www.w3.org/WAI/perspective-videos/customizable/",
};

const videoTopicById = {
    // Perceivable
    "1.1.1": "speech",
    "1.2.1": "captions",
    "1.2.2": "captions",
    "1.2.3": "captions",
    "1.2.4": "captions",
    "1.2.5": "captions",
    "1.3.1": "layout",
    "1.3.2": "layout",
    "1.3.3": "layout",
    "1.3.4": "layout",
    "1.3.5": "layout",
    "1.4.1": "contrast",
    "1.4.2": "captions",
    "1.4.3": "contrast",
    "1.4.4": "customizable",
    "1.4.5": "speech",
    "1.4.10": "customizable",
    "1.4.11": "contrast",
    "1.4.12": "customizable",
    "1.4.13": "layout",

    // Operable
    "2.1.1": "keyboard",
    "2.1.2": "keyboard",
    "2.1.4": "keyboard",
    "2.2.1": "notifications",
    "2.2.2": "notifications",
    "2.3.1": "notifications",
    "2.4.1": "keyboard",
    "2.4.2": "layout",
    "2.4.3": "keyboard",
    "2.4.4": "layout",
    "2.4.5": "layout",
    "2.4.6": "layout",
    "2.4.7": "keyboard",
    "2.5.1": "keyboard",
    "2.5.2": "keyboard",
    "2.5.3": "notifications",
    "2.5.4": "notifications",

    // Understandable
    "3.1.1": "understandable", // not in videoByTopic, fallback used below
    "3.1.2": "understandable",
    "3.2.1": "notifications",
    "3.2.2": "notifications",
    "3.2.3": "layout",
    "3.2.4": "layout",
    "3.3.1": "notifications",
    "3.3.2": "notifications",
    "3.3.3": "notifications",
    "3.3.4": "notifications",

    // Robust
    "4.1.1": "speech",
    "4.1.2": "speech",
    "4.1.3": "notifications",
};

const understandableVideoFallback = "https://www.w3.org/WAI/perspective-videos/understandable/"; // :contentReference[oaicite:8]{index=8}

function getVideoLinkForId(id) {
    const topic = videoTopicById[id];
    if (!topic) return "";
    if (topic === "understandable") return understandableVideoFallback;
    return videoByTopic[topic] || "";
}

/* ----------------------------
   HELPERS
---------------------------- */
function normalizeText(s = "") {
    return String(s).trim().toLowerCase();
}

/**
 * Q&A grading: each question defines required keyword groups
 * - Pass a question if ALL groups have at least one keyword present.
 */
function qaPass(userAnswer, keywordGroups) {
    const a = normalizeText(userAnswer);
    return keywordGroups.every(group => group.some(k => a.includes(normalizeText(k))));
}

/* ----------------------------
   CURRICULUM
---------------------------- */
const curriculum = [
    {
        principle: "1. Perceivable",
        criteria: [
            {
                id: "1.1.1",
                title: "Non-text Content",
                type: "code",
                initial: '<img src="https://picsum.photos/id/237/200/200">\n<p>My pet dog.</p>',
                desc: "Add an 'alt' attribute to the image so screen readers can describe it.",
                validate: (doc) => {
                    const img = doc.querySelector("img");
                    return img && img.hasAttribute("alt") && img.alt.trim().length > 2
                        ? true
                        : "The image needs a descriptive 'alt' attribute.";
                }
            },

            {
                id: "1.2.1",
                title: "Audio-only / Video-only",
                type: "code",
                initial: '<video src="lecture.mp4" controls></video>',
                desc: "Provide a visible link to a text transcript for this media.",
                validate: (doc) => {
                    const link = [...doc.querySelectorAll("a")].find(a => /transcript/i.test(a.innerText));
                    return link ? true : "Add an <a> link that includes the word 'Transcript'.";
                }
            },

            {
                id: "1.2.2",
                title: "Captions (Prerecorded)",
                type: "code",
                initial: '<video controls>\n  <source src="vid.mp4">\n</video>',
                desc: "Add a <track> element with kind='captions', srclang='en', and a label.",
                validate: (doc) => {
                    const track = doc.querySelector("track");
                    const ok = track &&
                        track.getAttribute("kind") === "captions" &&
                        track.getAttribute("srclang") === "en" &&
                        (track.getAttribute("label") || "").trim().length > 0;
                    return ok ? true : "Add <track kind='captions' srclang='en' label='English' ...>.";
                }
            },

            {
                id: "1.2.3",
                title: "Audio Description",
                type: "code",
                initial: '<video src="movie.mp4" controls></video>\n<p>Watch the movie.</p>',
                desc: "Provide a link to a version that includes 'Audio Description'.",
                validate: (doc) => /audio description/i.test(doc.body.innerText)
                    ? true
                    : "Add visible text or a link mentioning 'Audio Description'."
            },

            {
                id: "1.2.4",
                title: "Captions (Live)",
                type: "code",
                initial: '<div id="player">Live Stream Player</div>',
                desc: "Add visible text confirming that 'Live Captions' are provided.",
                validate: (doc) => /live captions/i.test(doc.body.innerText)
                    ? true
                    : "Add visible text confirming 'Live Captions' are available."
            },

            {
                id: "1.2.5",
                title: "Audio Description (Prerecorded)",
                type: "code",
                initial: '<video src="film.mp4" controls></video>',
                desc: "Add a control/button to enable audio description (example UI).",
                validate: (doc) => {
                    const btn = [...doc.querySelectorAll("button")].find(b => /description/i.test(b.innerText));
                    return btn ? true : "Add a <button> that includes the word 'Description'.";
                }
            },

            {
                id: "1.3.1",
                title: "Info and Relationships",
                type: "code",
                initial: '<div>User:</div><input id="u">',
                desc: "Use a <label for='u'> that matches the input id.",
                validate: (doc) => {
                    const label = doc.querySelector("label");
                    return label && label.getAttribute("for") === "u"
                        ? true
                        : "Use <label for='u'>User:</label> and keep input id='u'.";
                }
            },

            {
                id: "1.3.2",
                title: "Meaningful Sequence",
                type: "code",
                initial: '<div style="display:flex; flex-direction:column-reverse">\n  <p>End of story.</p>\n  <p>Beginning of story.</p>\n</div>',
                desc: "Fix the source order so 'Beginning' comes before 'End' in the HTML.",
                validate: (doc) => {
                    const t = doc.body.innerText.replace(/\s+/g, " ");
                    return t.indexOf("Beginning") < t.indexOf("End")
                        ? true
                        : "Put 'Beginning' before 'End' in the HTML source order.";
                }
            },

            {
                id: "1.3.3",
                title: "Sensory Characteristics",
                type: "code",
                initial: '<p>To continue, click the green button on the right.</p>\n<button style="background:green;color:white">Continue</button>',
                desc: "Remove instructions relying on color/position/shape. Make instruction generic.",
                validate: (doc) => {
                    const text = normalizeText(doc.body.innerText);
                    const bad = ["green", "right", "left", "square", "circle", "above", "below"];
                    return bad.some(w => text.includes(w))
                        ? "Remove sensory words (green/right/left/etc.) from the instruction."
                        : true;
                }
            },

            /**
             * ✅ UPDATED: 1.3.4 Orientation
             * (Old rotation trick was unrealistic)
             */
            {
                id: "1.3.4",
                title: "Orientation",
                type: "code",
                initial:
                    `<style>
/* BAD: locks users out in portrait */
@media (orientation: portrait) {
  main { display:none; }
  .lock { display:block; }
}
.lock{ display:none; padding:12px; background:#fee; border:1px solid #c00;}
</style>
<div class="lock">Rotate to landscape to use this site.</div>
<main>
  <h1>Dashboard</h1>
  <p>Content...</p>
</main>`,
                desc: "Don't restrict content to one orientation. Remove the portrait-locking CSS rule.",
                validate: (doc) => {
                    const css = doc.querySelector("style")?.textContent || "";
                    return css.includes("@media (orientation: portrait)")
                        ? "Remove the @media (orientation: portrait) rule that hides content."
                        : true;
                }
            },

            {
                id: "1.3.5",
                title: "Identify Input Purpose",
                type: "code",
                initial: '<label for="email">Email</label>\n<input id="email" type="email">',
                desc: "Add autocomplete='email' so assistive tech can identify the purpose.",
                validate: (doc) =>
                    doc.querySelector("input")?.getAttribute("autocomplete") === "email"
                        ? true
                        : "Add autocomplete='email' to the input."
            },

            /**
             * ✅ UPDATED: 1.4.1 Use of Color (now clearly NOT contrast)
             * The user must add a non-color cue like text or icon.
             */
            {
                id: "1.4.1",
                title: "Use of Color",
                type: "code",
                initial:
                    `<style>
.field { margin: 10px 0; }
input { padding: 8px; border: 2px solid #ccc; }
input.required { border-color: red; } /* BAD: only color indicates required */
</style>

<div class="field">
  <label for="name">Name</label><br/>
  <input id="name" class="required" />
</div>`,
                desc: "Don’t rely on color alone. Add visible text like '(required)' near the label.",
                validate: (doc) => {
                    const text = normalizeText(doc.body.innerText);
                    return text.includes("required")
                        ? true
                        : "Add visible text such as '(required)' so color isn't the only indicator.";
                }
            },

            {
                id: "1.4.2",
                title: "Audio Control",
                type: "code",
                initial: '<audio src="bg.mp3" autoplay></audio>',
                desc: "Remove autoplay so users control audio.",
                validate: (doc) =>
                    !doc.querySelector("audio")?.hasAttribute("autoplay")
                        ? true
                        : "Remove the autoplay attribute."
            },

            {
                id: "1.4.3",
                title: "Contrast (Min)",
                type: "code",
                initial: '<p style="color:#bdbdbd; background:#fff">Low contrast text</p>',
                desc: "Change the text color to a darker value (example: #000).",
                validate: (doc) => {
                    const p = doc.querySelector("p");
                    const c = (p?.style.color || "").replace(/\s/g, "").toLowerCase();
                    return (c === "rgb(0,0,0)" || c === "#000" || c === "#000000")
                        ? true
                        : "Set the color to #000 (or another high-contrast dark color).";
                }
            },

            {
                id: "1.4.4",
                title: "Resize Text",
                type: "code",
                initial: '<style>p{font-size:12px;height:20px;overflow:hidden}</style><p>This text will be clipped when zoomed.</p>',
                desc: "Don’t clip text when resized. Remove overflow:hidden (and fixed height).",
                validate: (doc) => {
                    const css = doc.querySelector("style")?.textContent || "";
                    return css.includes("overflow:hidden") || css.includes("height:20px")
                        ? "Remove overflow:hidden and fixed height so text can grow."
                        : true;
                }
            },

            {
                id: "1.4.5",
                title: "Images of Text",
                type: "code",
                initial: '<img src="heading.png" alt="Welcome">',
                desc: "Use real text (<h1>) instead of an image of text.",
                validate: (doc) =>
                    doc.querySelector("h1") ? true : "Replace the <img> with an <h1>Welcome</h1>."
            },

            {
                id: "1.4.10",
                title: "Reflow",
                type: "code",
                initial: '<div style="width: 2000px">Wide content</div>',
                desc: "Avoid large fixed widths. Set width to 100% (or remove width).",
                validate: (doc) => {
                    const d = doc.querySelector("div");
                    const w = (d?.style.width || "").trim();
                    return (w === "100%" || w === "")
                        ? true
                        : "Set width: 100% (or remove the fixed width).";
                }
            },

            {
                id: "1.4.11",
                title: "Non-text Contrast",
                type: "code",
                initial: '<div style="border:1px solid #ddd; padding:10px;">Input Border</div>',
                desc: "Increase non-text contrast. Make border darker (example #333).",
                validate: (doc) => {
                    const b = doc.querySelector("div")?.style.border || "";
                    const v = b.replace(/\s/g, "").toLowerCase();
                    return v.includes("#333") || v.includes("rgb(51,51,51)")
                        ? true
                        : "Set border color to #333 (or similar dark color).";
                }
            },

            {
                id: "1.4.12",
                title: "Text Spacing",
                type: "code",
                initial: '<p style="line-height:1;">Tight line spacing makes reading harder.</p>',
                desc: "Set line-height to 1.5 (example requirement for the challenge).",
                validate: (doc) =>
                    doc.querySelector("p")?.style.lineHeight === "1.5"
                        ? true
                        : "Set line-height: 1.5 on the paragraph."
            },

            /**
             * (Simplified) requirement: remove title tooltip, add accessible button label
             */
            {
                id: "1.4.13",
                title: "Content on Hover",
                type: "code",
                initial: '<div title="Tip">Hover me</div>',
                desc: "Avoid relying on native title tooltips. Replace with a button and aria-label.",
                validate: (doc) => {
                    const hasTitle = doc.querySelector("[title]");
                    const btn = doc.querySelector("button");
                    return (!hasTitle && btn && btn.hasAttribute("aria-label"))
                        ? true
                        : "Remove title= and use a <button aria-label='...'> instead.";
                }
            },

            /* ----------------------------
               Q1: Perceivable (Q&A Quiz)
            ---------------------------- */
            {
                id: "Q1",
                title: "Perceivable Quiz (Short Answers)",
                type: "quiz",
                mode: "qa",
                passPercent: 70,
                questions: [
                    {
                        q: "1) What attribute provides text alternative for an image?",
                        groups: [["alt"]],
                    },
                    {
                        q: "2) For prerecorded video, what do captions provide?",
                        groups: [["captions"], ["text"]],
                    },
                    {
                        q: "3) What is the goal of contrast minimum (1.4.3)?",
                        groups: [["contrast"], ["text"], ["background"]],
                    },
                    {
                        q: "4) Give one example of relying on color only (bad).",
                        groups: [["color"], ["only"]],
                    },
                    {
                        q: "5) What should happen to content when users increase text size/spacing?",
                        groups: [["not"], ["lose"], ["content"]],
                    },
                    {
                        q: "6) What’s better than images of text for headings?",
                        groups: [["real"], ["text"]],
                    },
                    {
                        q: "7) Why is reflow important on small screens?",
                        groups: [["no"], ["horizontal"], ["scroll"]],
                    },
                    {
                        q: "8) What is non-text contrast mainly about?",
                        groups: [["icons"], ["controls"], ["borders"]],
                    },
                ],
            },
        ]
    },

    /* ----------------------------
       2. Operable
    ---------------------------- */
    {
        principle: "2. Operable",
        criteria: [
            {
                id: "2.1.1", title: "Keyboard", type: "code",
                initial: '<div onclick="alert(\'Hi\')">Click</div>',
                desc: "Make it a <button> so it’s keyboard accessible.",
                validate: (doc) => doc.querySelector("button") ? true : "Use a <button> tag."
            },
            {
                id: "2.1.2", title: "No Keyboard Trap", type: "code",
                initial: '<div onkeydown="event.preventDefault()">Trap</div>',
                desc: "Remove code that blocks normal keyboard behavior.",
                validate: (doc) => !doc.body.innerHTML.includes("preventDefault") ? true : "Remove preventDefault()."
            },
            {
                id: "2.1.4", title: "Character Key Shortcuts", type: "code",
                initial: '<script>window.onkeypress = () => alert("Shortcut!")</script>',
                desc: "Add a control to disable shortcuts (example: a button).",
                validate: (doc) => /disable/i.test(doc.body.innerText) ? true : "Add a button that includes 'Disable'."
            },
            {
                id: "2.2.1", title: "Timing Adjustable", type: "code",
                initial: '<div id="timer">Session ends in 10s</div>',
                desc: "Add an 'Extend Session' button.",
                validate: (doc) => /extend/i.test(doc.body.innerText) ? true : "Add an 'Extend Session' button."
            },
            {
                id: "2.2.2", title: "Pause, Stop, Hide", type: "code",
                initial: '<marquee>Scrolling news...</marquee>',
                desc: "Replace marquee and provide a Pause button.",
                validate: (doc) => !doc.querySelector("marquee") && /pause/i.test(doc.body.innerText)
                    ? true
                    : "Remove <marquee> and add a Pause button."
            },
            {
                id: "2.3.1", title: "Three Flashes or Below", type: "code",
                initial: '<div class="flash">Dangerous Flash</div>',
                desc: "Remove flashing (remove the class).",
                validate: (doc) => !doc.querySelector(".flash") ? true : "Remove the flash class."
            },
            {
                id: "2.4.1", title: "Bypass Blocks", type: "code",
                initial: '<nav>Menu</nav>\n<main id="main">Content</main>',
                desc: "Add a skip link to #main at the start.",
                validate: (doc) => {
                    const a = doc.querySelector("a");
                    return a && /skip/i.test(a.innerText) && a.getAttribute("href") === "#main"
                        ? true
                        : "Add <a href='#main'>Skip to content</a> as the first element.";
                }
            },
            {
                id: "2.4.2", title: "Page Titled", type: "code",
                initial: "<html><head></head><body></body></html>",
                desc: "Add a <title> inside <head>.",
                validate: (doc) => doc.querySelector("title") ? true : "Add a <title> element."
            },
            {
                id: "2.4.3", title: "Focus Order", type: "code",
                initial: '<input tabindex="2">\n<input tabindex="1">',
                desc: "Remove custom tabindex to keep natural order.",
                validate: (doc) => !doc.querySelector("[tabindex]") ? true : "Remove tabindex attributes."
            },
            {
                id: "2.4.4", title: "Link Purpose (In Context)", type: "code",
                initial: '<a href="doc.pdf">Click here</a>',
                desc: "Make link text descriptive (e.g., 'Download PDF').",
                validate: (doc) => /download/i.test(doc.querySelector("a")?.innerText || "") ? true : "Use descriptive link text."
            },
            {
                id: "2.4.5", title: "Multiple Ways", type: "code",
                initial: "<nav>Menu</nav>",
                desc: "Add a search input as a second way to find content.",
                validate: (doc) => doc.querySelector('input[type="search"]') ? true : "Add <input type='search'>."
            },
            {
                id: "2.4.6", title: "Headings and Labels", type: "code",
                initial: "<section>Content</section>",
                desc: "Add an <h2> heading for the section.",
                validate: (doc) => doc.querySelector("h2") ? true : "Add an <h2> heading."
            },
            {
                id: "2.4.7", title: "Focus Visible", type: "code",
                initial: "<style>*:focus { outline: none; }</style>",
                desc: "Don’t remove focus outlines. Delete that CSS.",
                validate: (doc) => !((doc.querySelector("style")?.textContent || "").includes("outline: none"))
                    ? true
                    : "Remove outline: none."
            },
            {
                id: "2.5.1", title: "Pointer Gestures", type: "code",
                initial: '<div ondrag="move()">Swipe to Delete</div>',
                desc: "Provide a simple alternative like a Delete button.",
                validate: (doc) => /delete/i.test(doc.body.innerText) ? true : "Add a Delete button."
            },
            {
                id: "2.5.2", title: "Pointer Cancellation", type: "code",
                initial: '<button onmousedown="delete()">Delete</button>',
                desc: "Use onclick instead of onmousedown.",
                validate: (doc) => !doc.querySelector("button")?.hasAttribute("onmousedown")
                    ? true
                    : "Remove onmousedown (use onclick)."
            },
            {
                id: "2.5.3", title: "Label in Name", type: "code",
                initial: '<button aria-label="Submit Form">Save</button>',
                desc: "Visible label must be in aria-label (include the word 'Save').",
                validate: (doc) => (doc.querySelector("button")?.getAttribute("aria-label") || "").includes("Save")
                    ? true
                    : "Include 'Save' in aria-label."
            },
            {
                id: "2.5.4", title: "Motion Actuation", type: "code",
                initial: "<div>Shake to undo</div>",
                desc: "Add an Undo button alternative.",
                validate: (doc) => /undo/i.test(doc.body.innerText) ? true : "Add an Undo button."
            },

            {
                id: "Q2",
                title: "Operable Quiz (Short Answers)",
                type: "quiz",
                mode: "qa",
                passPercent: 70,
                questions: [
                    { q: "1) What is the main input method focus of Operable?", groups: [["keyboard"]] },
                    { q: "2) What is a 'keyboard trap'?", groups: [["cannot"], ["escape"], ["keyboard"]] },
                    { q: "3) Why do we need a visible focus indicator?", groups: [["focus"], ["visible"]] },
                    { q: "4) What does a skip link do?", groups: [["skip"], ["navigation"], ["main"]] },
                    { q: "5) Give one example of a descriptive link text.", groups: [["download"], ["pdf"]] },
                    { q: "6) What is the rule with complex gestures?", groups: [["alternative"], ["simple"]] },
                ],
            },
        ]
    },

    /* ----------------------------
       3. Understandable
    ---------------------------- */
    {
        principle: "3. Understandable",
        criteria: [
            {
                id: "3.1.1", title: "Language of Page", type: "code",
                initial: '<html lang="">',
                desc: "Set document language to 'en'.",
                validate: (doc) => doc.documentElement.getAttribute("lang") === "en" ? true : "Set lang='en'."
            },
            {
                id: "3.1.2", title: "Language of Parts", type: "code",
                initial: "<p>Spanish: Hola</p>",
                desc: "Wrap 'Hola' in <span lang='es'>.",
                validate: (doc) => doc.querySelector("span")?.getAttribute("lang") === "es" ? true : "Add <span lang='es'>Hola</span>."
            },
            {
                id: "3.2.1", title: "On Focus", type: "code",
                initial: '<input onfocus="submit()">',
                desc: "Don’t trigger actions on focus. Remove onfocus.",
                validate: (doc) => !doc.querySelector("input")?.hasAttribute("onfocus") ? true : "Remove onfocus."
            },
            {
                id: "3.2.2", title: "On Input", type: "code",
                initial: "<select onchange=\"location.href='new.html'\"></select>",
                desc: "Don’t auto-navigate on change. Add a Go button instead.",
                validate: (doc) => doc.querySelector("button") ? true : "Add a Go button."
            },
            {
                id: "3.2.3", title: "Consistent Navigation", type: "code",
                initial: "<!-- Menu -->",
                desc: "Add a nav with a Home link (consistency).",
                validate: (doc) => /home/i.test(doc.body.innerText) ? true : "Add a Home link."
            },
            {
                id: "3.2.4", title: "Consistent Identification", type: "code",
                initial: "<button>Save</button>\n<button>Submit</button>",
                desc: "Use consistent labels for same action. Change Submit to Save.",
                validate: (doc) => doc.querySelectorAll("button")[1]?.innerText === "Save" ? true : "Use 'Save' consistently."
            },
            {
                id: "3.3.1", title: "Error Identification", type: "code",
                initial: '<div id="err"></div>',
                desc: "Add clear error text (example: 'Invalid email').",
                validate: (doc) => (doc.getElementById("err")?.innerText || "").trim().length > 5 ? true : "Add descriptive error text."
            },
            {
                id: "3.3.2", title: "Labels or Instructions", type: "code",
                initial: '<input placeholder="Search">',
                desc: "Add a real <label> (placeholder is not a label).",
                validate: (doc) => doc.querySelector("label") ? true : "Add a <label>."
            },
            {
                id: "3.3.3", title: "Error Suggestion", type: "code",
                initial: "<div>Error in date.</div>",
                desc: "Suggest how to fix it (MM/DD/YYYY).",
                validate: (doc) => /mm\/dd\/yyyy/i.test(doc.body.innerText) ? true : "Add 'MM/DD/YYYY'."
            },
            {
                id: "3.3.4", title: "Error Prevention (Legal/Financial)", type: "code",
                initial: "<button>Delete Account</button>",
                desc: "Add confirmation checkbox before destructive action.",
                validate: (doc) => doc.querySelector('input[type="checkbox"]') ? true : "Add a confirmation checkbox."
            },

            {
                id: "Q3",
                title: "Understandable Quiz (Short Answers)",
                type: "quiz",
                mode: "qa",
                passPercent: 70,
                questions: [
                    { q: "1) Why set <html lang='en'>?", groups: [["screen"], ["reader"], ["language"]] },
                    { q: "2) What’s wrong with submitting on focus?", groups: [["unexpected"], ["change"]] },
                    { q: "3) Why are placeholders not labels?", groups: [["disappear"], ["not"], ["label"]] },
                    { q: "4) What should an error message include?", groups: [["what"], ["wrong"], ["how"], ["fix"]] },
                    { q: "5) Give one way to prevent accidental destructive actions.", groups: [["confirm"], ["checkbox"]] },
                ],
            },
        ]
    },

    /* ----------------------------
       4. Robust
    ---------------------------- */
    {
        principle: "4. Robust",
        criteria: [
            {
                id: "4.1.1", title: "Parsing", type: "code",
                initial: '<div id="a"></div>\n<div id="a"></div>',
                desc: "IDs must be unique. Change second id to 'b'.",
                validate: (doc) => doc.querySelectorAll("#a").length === 1 ? true : "Make IDs unique (only one #a)."
            },
            {
                id: "4.1.2", title: "Name, Role, Value", type: "code",
                initial: '<div role="button">Click</div>',
                desc: "Use semantic <button> instead of role on a div.",
                validate: (doc) => doc.querySelector("button") ? true : "Use a <button> element."
            },
            {
                id: "4.1.3", title: "Status Messages", type: "code",
                initial: '<div id="status">Search complete</div>',
                desc: "Add role='status' so screen readers announce it.",
                validate: (doc) => doc.getElementById("status")?.getAttribute("role") === "status" ? true : "Add role='status'."
            },

            {
                id: "Q4",
                title: "Robust Quiz (Short Answers)",
                type: "quiz",
                mode: "qa",
                passPercent: 70,
                questions: [
                    { q: "1) What does 'Robust' mean in WCAG?", groups: [["compatible"], ["assistive"], ["technology"]] },
                    { q: "2) Why must IDs be unique?", groups: [["unique"], ["reference"]] },
                    { q: "3) Why is semantic HTML better than div role hacks?", groups: [["built-in"], ["accessibility"]] },
                    { q: "4) What role helps screen readers announce status updates?", groups: [["role"], ["status"]] },
                    { q: "5) Name one assistive technology.", groups: [["screen reader"]] },
                ],
            },
        ]
    },
];

/* ----------------------------
   FLATTEN NAV
---------------------------- */
const flatCurriculum = [];
curriculum.forEach(p => p.criteria.forEach(c => flatCurriculum.push({ ...c, principleName: p.principle })));

/* ----------------------------
   STATE
---------------------------- */
let currentIndex = 0;
let mastery = new Set();

/** ✅ CLOSED by default */
let expandedSections = new Set();

/* ----------------------------
   DOM
---------------------------- */
const sidebarEl = document.getElementById("sidebar-content");
const editorEl = document.getElementById("code-editor");
const previewEl = document.getElementById("live-preview");
const feedbackEl = document.getElementById("status-message");
const nextBtn = document.getElementById("next-btn");
const totalProgressEl = document.getElementById("total-progress");

/* ----------------------------
   INIT
---------------------------- */
function init() {
    renderSidebar();
    loadStep(0);
    updateMasteryUI();
}

function toggleSection(principle) {
    if (expandedSections.has(principle)) expandedSections.delete(principle);
    else expandedSections.add(principle);
    renderSidebar();
}

function renderSidebar() {
    let html = "";
    curriculum.forEach(section => {
        const isExpanded = expandedSections.has(section.principle);

        html += `
      <div class="section-group">
        <div class="section-header" onclick="toggleSection('${section.principle}')">
          <span>${section.principle}</span>
          <i class="fa-solid ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"}"></i>
        </div>
        <div class="section-items ${isExpanded ? "" : "hidden"}">`;

        section.criteria.forEach(item => {
            const isCompleted = mastery.has(item.id);
            const isActive = flatCurriculum[currentIndex].id === item.id;

            html += `
        <div class="sidebar-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}"
             onclick="loadById('${item.id}')">
          <i class="fa-solid ${item.type === "quiz" ? "fa-circle-question" : (isCompleted ? "fa-circle-check" : "fa-circle")} status-icon"></i>
          <span>${item.id}. ${item.title}</span>
        </div>`;
        });

        html += `</div></div>`;
    });

    sidebarEl.innerHTML = html;
}

function loadById(id) {
    const idx = flatCurriculum.findIndex(i => i.id === id);
    if (idx !== -1) loadStep(idx);
}

function loadStep(index) {
    currentIndex = index;
    const item = flatCurriculum[index];

    document.getElementById("section-label").innerText = item.principleName;
    document.getElementById("lesson-label").innerText = `${item.id} ${item.title}`;
    document.getElementById("content-title").innerText = item.title;
    document.getElementById("content-desc").innerText =
        item.type === "quiz" ? "Answer all questions below, then click Submit Answers." : item.desc;


    // W3C Understanding link
    const wcagLinkEl = document.getElementById("wcag-link");
    const u = item.type === "code" ? getUnderstandingLinkForId(item.id) : null;
    if (u) {
        wcagLinkEl.href = u;
        wcagLinkEl.classList.remove("hidden");
        wcagLinkEl.innerHTML = `<i class="fa-solid fa-book"></i> Official WCAG (Understanding ${item.id})`;
    } else {
        wcagLinkEl.href = "#";
        wcagLinkEl.classList.add("hidden");
    }

    // Video link / embed
    const videoUrl = item.type === "code" ? getVideoLinkForId(item.id) : "";
    const player = document.getElementById("video-player");
    player.src = videoUrl || "";

    if (item.type === "quiz") {
        document.getElementById("editor-view").classList.add("hidden");
        document.getElementById("quiz-view").classList.remove("hidden");
        renderQuiz(item);

    } else {
        document.getElementById("editor-view").classList.remove("hidden");
        document.getElementById("quiz-view").classList.add("hidden");
        editorEl.value = item.initial;
        runPreview();
    }

    nextBtn.classList.add("hidden");
    feedbackEl.className = "status-msg default";
    feedbackEl.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${item.type === "quiz" ? "Answer the questions and submit." : "Fix the code to meet the requirement."
        }`;

    renderSidebar();
}

/* ----------------------------
   PREVIEW (sandbox iframe)
---------------------------- */
function runPreview() {
    // If live-preview is an iframe (recommended)
    if (previewEl && previewEl.tagName === "IFRAME") {
        const doc = previewEl.contentDocument || previewEl.contentWindow.document;
        doc.open();
        doc.write(editorEl.value);
        doc.close();
    } else {
        // fallback if you still use a div
        previewEl.innerHTML = editorEl.value;
    }
}

/* ----------------------------
   CHECK WORK
---------------------------- */
function checkCurrentStep() {
    const item = flatCurriculum[currentIndex];

    if (item.type !== "code") {
        showFeedback("This is a quiz. Answer the questions and submit.", false);
        return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(editorEl.value, "text/html");
    const result = item.validate(doc);

    if (result === true) handleSuccess();
    else showFeedback(result, false);
}

/* ----------------------------
   QUIZ (Q&A, not MCQ)
---------------------------- */
function renderQuiz(item) {
    const cardTitle = document.getElementById("quiz-q-text");
    const container = document.getElementById("quiz-options");

    cardTitle.innerText = item.title;

    container.innerHTML = item.questions.map((qq, i) => `
    <div style="text-align:left; margin-bottom:14px;">
      <div style="font-weight:700; margin-bottom:6px;">${qq.q}</div>
      <input
        class="qa-input"
        id="qa-${i}"
        type="text"
        placeholder="Type your answer..."
        style="width:100%; padding:12px; border-radius:8px; border:1px solid #313244; background:#11111b; color:#cad3f5;"
      />
    </div>
  `).join("") + `
    <button class="btn-check" onclick="submitQAQuiz()">Submit Answers</button>
    <div id="qa-score" style="margin-top:14px; color:#939ab7;"></div>
  `;
}

function submitQAQuiz() {
    const item = flatCurriculum[currentIndex];
    if (item.type !== "quiz" || item.mode !== "qa") return;

    let correct = 0;
    item.questions.forEach((qq, i) => {
        const ans = document.getElementById(`qa-${i}`)?.value || "";
        if (qaPass(ans, qq.groups)) correct++;
    });

    const percent = Math.round((correct / item.questions.length) * 100);
    document.getElementById("qa-score").innerText = `Score: ${correct}/${item.questions.length} (${percent}%)`;

    if (percent >= (item.passPercent || 70)) {
        handleSuccess();
    } else {
        showFeedback("Not enough to pass yet — review the Learn notes and try again.", false);
    }
}

/* ----------------------------
   MASTERY / PROGRESS
---------------------------- */
function handleSuccess() {
    const item = flatCurriculum[currentIndex];
    mastery.add(item.id);
    showFeedback("✅ Mastery Achieved!", true);
    nextBtn.classList.remove("hidden");
    updateMasteryUI();
    renderSidebar();
}

function showFeedback(msg, isSuccess) {
    feedbackEl.className = `status-msg ${isSuccess ? "success" : "error"}`;
    feedbackEl.innerHTML = `<i class="fa-solid ${isSuccess ? "fa-check-circle" : "fa-circle-xmark"}"></i> ${msg}`;
}

function updateMasteryUI() {
    const percentage = Math.round((mastery.size / flatCurriculum.length) * 100);
    totalProgressEl.innerText = `${percentage}%`;
}

function goToNext() {
    if (currentIndex < flatCurriculum.length - 1) loadStep(currentIndex + 1);
    else showFeedback("🎉 Congratulations! You completed the curriculum.", true);
}

/* ----------------------------
   TABS (fixed: no global event)
---------------------------- */
function setTab(tab, btn) {
    document.querySelectorAll(".tab-link").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(`${tab}-tab`).classList.add("active");
}

window.onload = init;
