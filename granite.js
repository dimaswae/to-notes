import Replicate from "replicate";
import dotenv from "dotenv";

dotenv.config();

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

async function runGranite() {
    const prompt = `You are a professional web developer. 
    Generate a complete web application called "ToNotes" that combines a To-Do List and a Notes app in one interface.

    Requirements:
    1. Use HTML, CSS, and JavaScript only (no frameworks).
    2. Store all data (tasks and notes) in localStorage.
    3. Create a header with the app title "ToNotes".
    4. Add two navigation tabs: "To-Do" and "Notes".
    - When clicking "To-Do", show the To-Do section.
    - When clicking "Notes", show the Notes section.
    - Only one section is visible at a time.
    5. To-Do Section:
    - Input field + button to add a task.
    - Display task list with options: mark as done, edit, delete.
    - Task marked as done should have strikethrough text.
    6. Notes Section:
    - Input field for title, textarea for content, button to add a note.
    - Display notes in card layout with title, content, delete button.
    - Support edit note functionality.
    7. Style with a "Blue Ocean + Pastel" palette:
    - Background: soft pastel blue (#EAF6FF)
    - Primary: ocean blue (#0077B6)
    - Secondary pastel shades: #90E0EF, #CAF0F8, #ADE8F4
    - Rounded corners, clean spacing, modern simple UI.
    8. Make layout responsive and mobile-friendly.
    9. Write all code (HTML, CSS, JS) in one response, separated clearly.
    10. Comment important parts in the JavaScript code for clarity.

    🎯 Deliverable:
    - index.html
    - style.css
    - script.js
    Complete code ready to run locally.
  `;

    const output = await replicate.run(
        "ibm-granite/granite-3.3-8b-instruct",  // model Granite instruct
        { input: { prompt } }
    );

    console.log(output);
}

runGranite();
