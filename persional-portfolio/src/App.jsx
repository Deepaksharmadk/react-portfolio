import React from "react";

import UserContextProvider from "./context/UserContextProvider";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserContextProvider />} />
      <Route
        path="/s"
        element={
          <header className="fixed top-0 z-10 mx-auto w-full max-w-full bg-[#121212] p-6 text-white lg:px-10">
            <h1>DevUI</h1>
          </header>
        }
      />
    </Routes>
  );
}

export default App;
