# 👽 Character Explorer

A React application that consumes the [Rick and Morty API](https://rickandmortyapi.com/) to fetch and display character data in real time, with live search, loading states, and graceful error handling.

## 🔗 Live Demo
[https://country-explorer-five-black.vercel.app/](https://country-explorer-five-black.vercel.app/)

## ✨ Features

- **Live data fetching** — pulls character data directly from a public REST API
- **Loading state** — animated spinner while data is being fetched
- **Error handling** — friendly, human-readable message if the API call fails (no blank screens)
- **Real-time search** — filter characters instantly by name as you type
- **Responsive grid layout** — adapts smoothly from mobile to desktop
- **Empty state handling** — clear feedback when a search returns no matches

## 🛠️ Built With

- [React](https://react.dev/) (Vite)
- [Rick and Morty API](https://rickandmortyapi.com/)
- Vanilla CSS (Flexbox & CSS Grid)

The app will be available at `http://localhost:5173`.

## 📁 Project Structure

```
countries-explorer/
├── src/
│   ├── App.jsx        # Main component: fetch logic, search, states
│   ├── App.css         # Component styling
│   ├── index.css       # Global base styles
│   └── main.jsx         # App entry point
├── package.json
└── README.md
```

## 🎯 What This Project Demonstrates

This project was built to practice real-world frontend patterns:

- Handling asynchronous data fetching with `useEffect` and `useState`
- Managing three UI states (loading, error, success) instead of assuming the happy path
- Building responsive, filterable UI driven by user input
- Structuring a small React app cleanly with separation of concerns

## 📹 Demo Video

A walkthrough video showing loading, successful data rendering, search/filtering, and the error state is available here: [LinkedIn post link](https://www.linkedin.com/your-actual-post-url-here)

## 🚀 Getting Started

Clone the repository and run it locally:

```bash
git clone https://github.com/sarashafique225/countries-explorer.git
cd countries-explorer
npm install
npm run dev
```

## 👩‍💻 Author

Sara Shafiq — Full Stack Web Development Intern, NeuroFive Solutions