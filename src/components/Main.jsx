import React from "react";
import Header from "./header/Header";
import LeftPanel from "./left-panel/LeftPanel";
import RightPanel from "./right-panel/RightPanel";
import AllSections from "./all-sections/AllSections";
import Footer from "./footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Recommendations } from "./recommendations/Recommendations ";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Header></Header>
      <LeftPanel></LeftPanel>
      <RightPanel></RightPanel>
      <Routes>
        <Route path="/" element={<AllSections />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route
          path="*"
          element={
            <div className="wrong-url">
              <h1>404 not found</h1>
            </div>
          }
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
