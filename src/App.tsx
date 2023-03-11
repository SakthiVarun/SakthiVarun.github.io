import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import NotFound from "./Component/Not Found/NotFound";
// import Home from './Component/Home/Home'

/**
 * This function includes the external library that is passed to the script tag
 * @param {String} [externalLibraryUrl] - Holds the url that needs to be added on the script tag.
 */
export function AddLibrary(externalLibraryUrl: string) {
  const script = document.createElement("script");
  script.src = externalLibraryUrl;
  script.async = true;
  document.body.appendChild(script);
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route  path='/' element={<Home/>} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Call the function to add a library */}
      </BrowserRouter>

      
      {AddLibrary(
        "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
      )}
    </>
  );
}

export default App;
