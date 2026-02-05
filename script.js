const levels = [
    {
        title: "Level 1: Image Alt Text",
        instructions: "Add an 'alt' attribute to describe the image.",
        initialCode: '<img src="https://picsum.photos/id/237/150/150">\n<h3>My Dog, Buddy</h3>',
        validate: (doc) => {
            const img = doc.querySelector('img');
            if (!img.hasAttribute('alt')) return "Missing 'alt' attribute!";
            if (img.getAttribute('alt').length < 3) return "Description too short.";
            return true;
        }
    },
    {
        title: "Level 2: Text Contrast",
        instructions: "The text is too light. Change the color to 'black' or '#000000'.",
        initialCode: '<p style="color: #eee;">I am very hard to read!</p>',
        validate: (doc) => {
            const p = doc.querySelector('p');
            if (!p) return "Wait, where did the text go?";
            const color = p.style.color.toLowerCase();
            if (color === 'rgb(238, 238, 238)' || color === '#eee') return "Still too light!";
            return true;
        }
    },
    {
        title: "Level 3: Accessible Buttons",
        instructions: "A <div> isn't a button. Change it to a <button> tag.",
        initialCode: '<div onclick="alert(\'Sent!\')" style="padding:10px; background:blue; color:white; display:inline-block; cursor:pointer;">Send Email</div>',
        validate: (doc) => {
            const div = doc.querySelector('div');
            const btn = doc.querySelector('button');
            if (div) return "A <div> cannot be focused by a keyboard. Use a <button> tag instead.";
            if (btn) return true;
            return false;
        }
    },
    {
        title: "Level 4: Form Labels",
        instructions: "Connect the label to the input using 'id' and 'for'.",
        initialCode: '<label>Email Address</label>\n<input type="email">',
        validate: (doc) => {
            const label = doc.querySelector('label');
            const input = doc.querySelector('input');
            if (!label || !input) return "Ensure you have both a label and an input!";
            const labelFor = label.getAttribute('for');
            const inputId = input.id;
            if (!labelFor || !inputId || labelFor !== inputId) return "The label 'for' must match the input 'id'.";
            return true;
        }
    }
];

let currentLevel = 0;
const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const feedback = document.getElementById('feedback');
const title = document.getElementById('level-title');

function loadLevel() {
    currentLevel = document.getElementById('level-select').value;
    const lvl = levels[currentLevel];
    title.innerText = lvl.title;
    editor.value = lvl.initialCode;
    feedback.className = "hint";
    feedback.innerText = lvl.instructions;
    updatePreview();
}

function updatePreview() {
    preview.innerHTML = editor.value;
}

function validate() {
    const parser = new DOMParser();
    const doc = parser.parseFromString(editor.value, 'text/html');
    const result = levels[currentLevel].validate(doc);

    if (result === true) {
        feedback.className = "pass";
        feedback.innerText = "🎉 Correct! You've followed WCAG best practices.";
    } else {
        feedback.className = "hint";
        feedback.innerText = "❌ " + result;
    }
}

// Initialize first level on page load
window.onload = loadLevel;