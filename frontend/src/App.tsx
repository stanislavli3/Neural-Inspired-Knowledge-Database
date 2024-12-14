import React from 'react';
import './App.css';
import { Component as Sidebar } from './components/Sidebar/Sidebar';
import { Component as TopBar } from './components/TopBar/TopBar';
import TiptapEditor from './components/TiptapEditor/TiptapEditor'; 

function App() {
  return (
    <div className="app-container flex flex-col h-screen">
      {/* Top Bar */}
      <TopBar />

      {/* Main Layout */}
      <div className="main-layout flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="sidebar w-64 bg-gray-50 border-r dark:bg-gray-800">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content flex-1 flex flex-col p-6 overflow-y-auto">
          {/* Page Title */}
          <div className="page-title mb-4">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Welcome to TipTap!
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Use the editor below to create and style your content.
            </p>
          </div>

          {/* TipTap Editor */}
          <div className="editor-area flex-1 bg-white rounded-lg shadow p-6 dark:bg-gray-900">
            <TiptapEditor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
