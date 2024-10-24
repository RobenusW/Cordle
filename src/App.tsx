import Home from './Home';
import CodeEditor from './CodeEditor';

import {HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
