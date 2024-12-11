import React from "react";
import "./App.css";
import { BlockNoteView } from "@blocknote/mantine";
import {
  BasicTextStyleButton,
  BlockTypeSelect,
  ColorStyleButton,
  CreateLinkButton,
  FileCaptionButton,
  FileReplaceButton,
  FormattingToolbar,
  FormattingToolbarController,
  NestBlockButton,
  TextAlignButton,
  UnnestBlockButton,
  useCreateBlockNote,
} from "@blocknote/react";
import { Component as Sidebar } from "./components/Sidebar/Sidebar";
import { Component as TopBar } from "./components/TopBar/TopBar"; // Import TopBar
import { BlueButton } from "./components/BlueButton/BlueButton"; // Ensure you have the custom BlueButton component
import "flowbite/dist/flowbite.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

function App() {
  // Creates a new editor instance with initial content
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "You can now toggle ", styles: {} },
          {
            type: "text",
            text: "blue",
            styles: { textColor: "blue", backgroundColor: "blue" },
          },
          { type: "text", text: " and ", styles: {} },
          { type: "text", text: "code", styles: { code: true } },
          {
            type: "text",
            text: " styles with new buttons in the Formatting Toolbar",
            styles: {},
          },
        ],
      },
      {
        type: "paragraph",
        content: "Select some text to try them out",
      },
      {
        type: "paragraph",
      },
    ],
  });

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
              Hi. Leave your idea here and I will structure it!
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Type your content below or use the "/" command to add blocks.
            </p>
          </div>

          {/* Editor Area with Enhanced Toolbar */}
          <div className="editor-area flex-1 bg-white rounded-lg shadow p-6 dark:bg-gray-900">
            <BlockNoteView editor={editor} formattingToolbar={false}>
              <FormattingToolbarController
                formattingToolbar={() => (
                  <FormattingToolbar>
                    <BlockTypeSelect key={"blockTypeSelect"} />

                    {/* Extra button to toggle blue text & background */}
                    <BlueButton key={"customButton"} />

                    <FileCaptionButton key={"fileCaptionButton"} />
                    <FileReplaceButton key={"replaceFileButton"} />

                    <BasicTextStyleButton
                      basicTextStyle={"bold"}
                      key={"boldStyleButton"}
                    />
                    <BasicTextStyleButton
                      basicTextStyle={"italic"}
                      key={"italicStyleButton"}
                    />
                    <BasicTextStyleButton
                      basicTextStyle={"underline"}
                      key={"underlineStyleButton"}
                    />
                    <BasicTextStyleButton
                      basicTextStyle={"strike"}
                      key={"strikeStyleButton"}
                    />
                    <BasicTextStyleButton
                      key={"codeStyleButton"}
                      basicTextStyle={"code"}
                    />

                    <TextAlignButton
                      textAlignment={"left"}
                      key={"textAlignLeftButton"}
                    />
                    <TextAlignButton
                      textAlignment={"center"}
                      key={"textAlignCenterButton"}
                    />
                    <TextAlignButton
                      textAlignment={"right"}
                      key={"textAlignRightButton"}
                    />

                    <ColorStyleButton key={"colorStyleButton"} />

                    <NestBlockButton key={"nestBlockButton"} />
                    <UnnestBlockButton key={"unnestBlockButton"} />

                    <CreateLinkButton key={"createLinkButton"} />
                  </FormattingToolbar>
                )}
              />
            </BlockNoteView>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer bg-gray-100 dark:bg-gray-800 py-4 border-t dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 flex justify-center items-center">
        <div className="footer-links flex space-x-4">
          <a href="/pro" className="hover:underline">
            Pro
          </a>
          <a href="/enterprise" className="hover:underline">
            Enterprise
          </a>
          <a href="/store" className="hover:underline">
            Store
          </a>
          <a href="/blog " className="hover:underline">
            Blog
          </a>
          <a href="/careers" className="hover:underline">
            Careers
          </a>
          <a href="/language" className="hover:underline">
            English (English)
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
