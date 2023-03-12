import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import NotFound from "./Component/Not Found/NotFound";
import Home from './Component/Home/Home'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path='/'/>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Call the function to add a library */}
      </BrowserRouter>
    </>
  );
}

export default App;
