import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Outlet,
  useParams,
  useNavigate,
} from "react-router-dom";
import "../style.css";
const Main = () => {
  return (
    <div className="main-container">
      <header className="header">
        <h1>Welcome to Netflix</h1>
        <p>Discover where to watch your favorite movies and series</p>
      </header>
      <main className="content">
        <section className="card">
          <div>
            <img src="https://mensfolio.vn/wp-content/uploads/2022/05/20220405_MFonline_netflix2022-4-1024x551.jpg"></img>
          </div>
          <Link to="/Home" className="navigate-button">
            Go to Home
          </Link>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Netflix. All rights reserved.</p>
      </footer>

      <style jsx>{`
        body {
          // margin: 0;
          font-family: Arial, sans-serif;
        }

        .main-container {
          background: linear-gradient(rgba(255,255,255,.3), rgba(255,255,255,.3)), url("https://wallpapercat.com/w/full/6/a/e/115875-1920x1080-desktop-full-hd-netflix-background-image.jpg");
          background-size: cover;
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .header {
          padding: 20px 20px;
        }

        .content {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }

        .card {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          padding: 10px;
          margin: 15px;
          height: 500px;
          width: 700px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .navigate-button {
          display: inline-block;
          background-color: #ff6347;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          padding: 10px 15px;
          margin: 25px;
          transition: background-color 0.3s;
        }

        .navigate-button:hover {
          background-color: #ff4500;
        }

        .footer {
          margin-top: auto;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};
export default Main;
