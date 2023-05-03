import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import LeftPanel from "./left-panel/LeftPanel";
import RightPanel from "./right-panel/RightPanel";
import AllSections from "./all-sections/AllSections";
import Footer from "./footer/Footer";
import { Routes, Route } from "react-router-dom";
import { PortfolioBuilder } from "./recommendations/PortfolioBuilder";
import "./Main.css";

export default function Main() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main">
      <Header></Header>
      {width > 500 && (
        <>
          <LeftPanel></LeftPanel>
          <RightPanel></RightPanel>
        </>
      )}

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<AllSections />} />
          <Route path="/build-portfolio" element={<PortfolioBuilder />} />
          <Route
            path="*"
            element={
              <div className="wrong-url">
                <h1>404 not found</h1>
              </div>
            }
          />
        </Routes>
      </div>
      {width <= 500 && <LeftPanel />}
      <Footer></Footer>
    </div>
  );
}
