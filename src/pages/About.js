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
const About = () => {
  return (
    <div width="100%" className="bg-dark">
      <div style={styles.container}>
        <h1 style={styles.title}>About Me</h1>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Personal Information</h2>
          <p style={styles.paragraph}>
            <strong>Name:</strong> Kush Vachhani
          </p>
          <p style={styles.paragraph}>
            <strong>University:</strong> Darshan University, Rajkot
          </p>
          <p style={styles.paragraph}>
            <strong>Age:</strong> 19 years
          </p>
          <p style={styles.paragraph}>
            <strong>Mobile No:</strong> 78998 24563
          </p>
          <p style={styles.paragraph}>
            <strong>Email:</strong> kush@example.com
          </p>
        </section>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Education</h2>
          <p style={styles.paragraph}>
            “I am currently pursuing a degree in Computer Science and
            Engineering, where I delve into the dynamic world of technology and
            innovation. My studies encompass a broad range of topics, from
            understanding the fundamentals of computer systems and networks to
            mastering advanced programming languages and software development
            techniques. I am passionate about solving complex problems through
            logical thinking and creativity, and I enjoy working on projects
            that challenge my skills and expand my knowledge. My goal is to
            leverage my education to contribute to cutting-edge technological
            advancements and make a meaningful impact in the field of computer
            science.”
          </p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  section: {
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  subtitle: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#007BFF",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  projectList: {
    listStyleType: "disc",
    marginLeft: "20px",
  },
  projectItem: {
    fontSize: "1.1rem",
    marginBottom: "5px",
  },
  skillsList: {
    listStyleType: "circle",
    marginLeft: "20px",
  },
};
export default About;
