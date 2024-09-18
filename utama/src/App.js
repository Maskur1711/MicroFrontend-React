// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="p-6 bg-blue-500 text-white">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/app1" className="mr-4">
            App 1
          </Link>
          <Link to="/app2" className="mr-4">
            App 2
          </Link>
        </nav>

        <div className="p-6">
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="text-2xl">Welcome to the Shell Application</h1>
              }
            />
            <Route
              path="/app1"
              element={
                <iframe
                  src="http://localhost:3001"
                  title="App1"
                  style={{ width: "100%", height: "80vh" }}
                />
              }
            />
            <Route
              path="/app2"
              element={
                <iframe
                  src="http://localhost:3002"
                  title="App2"
                  style={{ width: "100%", height: "80vh" }}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
