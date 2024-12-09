import React from "react";
import "./App.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { Component as Sidebar } from "./components/Sidebar/Sidebar";
import "flowbite/dist/flowbite.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
function App() {
  const editor = useCreateBlockNote();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 border-r dark:bg-gray-800">
        <Sidebar />
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col p-6">
        {/* Page Title */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Hi. Leave your idea here and I will structure it!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Type your content below or use the "/" command to add blocks.
          </p>
        </div>

        {/* Editor Area */}
        <div className="flex-1 bg-white rounded-lg shadow p-6 dark:bg-gray-900 dark:text-gray-100">
          <BlockNoteView editor={editor} />
        </div>
      </div>
    </div>
  );
}

export default App;
