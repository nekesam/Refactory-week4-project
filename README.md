
# ✅ To-Do List Application

A simple and responsive To-Do List web application built with **HTML**, **CSS**, and **vanilla JavaScript**.  
It allows users to create tasks, edit existing tasks, delete tasks, mark tasks as completed, and persist task data using browser Local Storage.

---

## 📌 Project Description

This project is a front-end task management app designed to practice core JavaScript DOM manipulation and state persistence without external libraries.  
Tasks are created through a modal form and displayed in a list with action buttons for task management.

---

## ✨ Features Implemented

Based on the current codebase, the app includes:

- ➕ Add new tasks with:
  - Title
  - Description
  - Due date/time
- ✏️ Edit existing tasks through the same modal form
- 🗑️ Delete tasks from the list
- ✅ Mark tasks as completed (toggle complete/undo)
- 💾 Save tasks to `localStorage`
- 🔄 Load saved tasks from `localStorage` on page refresh
- 📱 Basic responsive layout for smaller screens

---

## 🛠️ Technologies Used

- **HTML5** for page structure
- **CSS3** for styling and responsive behavior
- **Vanilla JavaScript (ES6)** for:
  - DOM manipulation
  - Event handling
  - Local Storage integration

---

## 📁 Project Structure

```text
refactory-week4-todo/
├── index.html    # Main HTML layout (task list + modal form)
├── style.css     # Application styling and responsive rules
└── index.js      # App logic (CRUD operations, rendering, localStorage)
```

---

## 🚀 Installation and Usage

1. Clone or download this repository.
2. Open the project folder.
3. Run the app by opening index.html in your browser.

No build tools or package installation are required.

---

## 💾 Local Storage Usage

The application stores tasks in the browser under the key:

- `tasks`

How it works:

1. On startup, JavaScript reads saved tasks using:
   - `JSON.parse(localStorage.getItem("tasks")) || []`
2. Each task object is rendered into the task list.
3. On form submission, task data is pushed to the in-memory array and saved with:
   - `localStorage.setItem("tasks", JSON.stringify(tasks))`

This ensures tasks persist after page reloads.

---

## 🖼️ Screenshots

## 🖼️ Screenshot

![To-Do List App](assets/screenshot.png)

Suggested placeholders:
- `assets/screenshot-main.png` (main task list view)
- `assets/screenshot-modal.png` (add/edit modal view)

---

## 🔮 Future Improvements

Based on the current implementation, possible next improvements include:

- Keep task edits and deletes fully synchronized with the `tasks` array in memory and Local Storage
- Add task IDs for more reliable edit/delete targeting
- Add overdue task highlighting logic using due date comparisons
- Improve accessibility (keyboard navigation and ARIA labels for modal/actions)
- Add task filtering (All / Completed / Pending)
- Add confirmation dialog before delete

---

## 👤 Author

Martha Nekesa

## 📄 License

This project is open source and available under the MIT License.