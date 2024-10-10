import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import './style.css';

const Layout = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" height="20px" width="50px">
            <img src="https://i.pinimg.com/236x/51/2a/38/512a384c596db77c1e7993415530e796.jpg" height="40px" width="100px"></img>
          </Link>
          <div className="space-x-4">
            <Link to="/home" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
              Home
            </Link>
            <Link to="/About" className="text-white hover:bg-gray-700 px-4 py-2 rounded transition duration-300">
              About
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;