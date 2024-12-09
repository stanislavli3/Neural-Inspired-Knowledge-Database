import React from "react";
import "./App.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { Component as Sidebar } from "./components/Sidebar/Sidebar";
import { Component as TopBar } from './components/TopBar/TopBar'; // Import TopBar
import "flowbite/dist/flowbite.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
function App() {
  const editor = useCreateBlockNote();

  return (
    <div className="app-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <span className="logo">PipeCogs.ai</span>
        </div>
        {/*
        <div className="top-bar-right">
          <button className="action-button">Upgrade to Pro</button>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="profile-pic"
          />
        </div>
        */}
      </div>

      {/* Main Layout */}
      <div className="main-layout">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Page Title */}
          <div className="page-title">
            <h1>Hi. Leave your idea here and I will structure it!</h1>
            <p>Type your content below or use the "/" command to add blocks.</p>
          </div>

          {/* Editor Area */}
          <div className="editor-area">
            <BlockNoteView editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
