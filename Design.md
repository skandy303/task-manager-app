# Task Manager App

## Core Features

* **View Tasks:** See all tasks clearly listed.
* **Create Tasks:** Easily add new tasks with a title and optional description.
* **Toggle Completion:** Quickly mark tasks as complete or incomplete.

## Additional Features

### 1. Search Tasks

* **Purpose:** Find tasks quickly by typing phrases from titles or descriptions.
* **Current Implementation:** Simple client-side search, easy and quick for small lists.
* **Future Plan:** Switch to backend search if the task list grows large for better performance.

### 2. Edit Tasks

* **Purpose:** Change task details directly on the page.
* **How it works:** Edit tasks inline using React components.
* **Communication:** Changes saved through backend API requests.

### 3. Bulk Delete Completed Tasks

* **Purpose:** Remove all completed tasks at once.
* **How it works:** Backend handles bulk deletion, by sending multiple requests through frontend keeping fewer API Endpoints.

## Architecture and Design Patterns

### Backend (.NET 9 Minimal API)

* **Minimal API:** Chosen for easy setup, quick development, and suitability for smaller apps.
* **Entity Framework Core:** Simple database management using SQLite.
* **Repository Pattern:** Makes database operations clear and easy to maintain.
* **Service Pattern:** Separates the main logic from database operations, making testing and maintenance easier.

### Frontend (React & Material UI)

* **Components:** Reusable and straightforward React components.
* **Material UI:** Clean and responsive user interface.
* **Custom Hooks:** Handle data fetching and state efficiently.
* **RESTful API:** Clear and simple communication with the backend.

## Trade-offs and Assumptions

A key assumption was to keep the project straightforward and only include functionality that adds value without deviating from the main requirements.

Another assumption was that the toggle completion feature simply marks tasks as completed. Some task management apps automatically delete completed tasks, but this app assumes tasks should stay until the user manually deletes them. However, if automatic deletion were required, this could easily be adjusted.

Given the intended lightweight and small-scale use of the app, many features, such as search filtering and deletion of tasks, are handled on the client-side. Client-side operations were chosen for simplicity and performance efficiency for this scale.

## Future Enhancements 

* User login and security.
* Add task tags and categories.
* Set task due dates and reminders.
* Add pagination to handle large task lists smoothly.


