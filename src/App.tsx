import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import NotFound from "./Component/Not Found/NotFound";
import Home from './Component/Home/Home'



function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route  path='/'/>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Call the function to add a library */}
      </HashRouter>
    </>
  );
}

export default App;
