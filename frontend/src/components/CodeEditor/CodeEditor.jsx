import React from "react";
import Editor from "@monaco-editor/react";
import "./CodeEditor.css";

const CodeEditor = ({ language = "python", value = "", onChange }) => {
  return (
    <div className="code-editor-container">
      <Editor
        height="300px"
        defaultLanguage={language}
        defaultValue={value}
        theme="vs-dark"
        onChange={onChange}
      />
    </div>
  );
};

export default CodeEditor;
