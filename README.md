# Task Manager App

A full-stack task management application with a .NET Minimal API backend and a React + Material-UI frontend.

---

## Prerequisites
- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- [Node.js (v18+ recommended)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Backend Setup (.NET Minimal API)

1. **Navigate to the backend directory:**
   ```sh
   cd backend
   ```

2. **Restore dependencies:**
   ```sh
   dotnet restore
   ```

3. **Apply database migrations:**
   ```sh
   dotnet ef database update
   ```
   > If you don't have the EF CLI, install it with:
   > ```sh
   > dotnet tool install --global dotnet-ef
   > ```

4. **Run the backend server:**
   ```sh
   dotnet run
   ```
   The API will be available at `http://localhost:5209`

---

## Frontend Setup (React + MUI)

1. **Navigate to the frontend directory:**
   ```sh
   cd frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173` 

---

## Configuration
- The frontend expects the backend API to be running at `http://localhost:5209/api`.
- If you change the backend port, update the `API_BASE_URL` in `frontend/src/api/taskService.js` accordingly.

---

## Project Structure

```
root/
  backend/      # .NET Minimal API backend
  frontend/     # React + MUI frontend
```

---

## Useful Commands

### Backend
- `dotnet run` — Start the backend server

### Frontend
- `npm run dev` — Start the frontend dev server

---

## Troubleshooting
- Make sure both backend and frontend servers are running.
- If you change ports, update the API base URL in the frontend.
