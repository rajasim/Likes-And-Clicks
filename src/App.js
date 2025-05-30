import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Metro from "./Metro";
import Boxes from "./Boxes";
import Boxone from "./Boxone";
import Boxestwo from "./Boxestwo";
import Boxethree from "./Boxethree";
import Boxfour from "./Boxfour";
import Stackpage from "./Stackpage";
import Custome from "./Custome";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop"; 



function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Always scrolls to top on navigation */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Metro />
              <Boxes />
             
              <Stackpage />
              <Footer />
              
            </>
          }
        />
        <Route path="/Boxone" element={<Boxone />} />
        <Route path="/Boxtwo" element={<Boxestwo />} />
        <Route path="/Boxthree" element={<Boxethree />} />
        <Route  path="/Boxfour" element={<Boxfour />} />
      </Routes>
    </Router>
  );
}

export default App;
