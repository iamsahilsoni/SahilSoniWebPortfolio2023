import React, { useEffect, useState, lazy, Suspense } from "react";
import Header from "./header/Header";
import LeftPanel from "./left-panel/LeftPanel";
import RightPanel from "./right-panel/RightPanel";
import AllSections from "./all-sections/AllSections";
import Footer from "./footer/Footer";
import { Routes, Route } from "react-router-dom";
import "./Main.css";

const LazyPortfolioBuilder = lazy(() =>
  import("./portfolio-builder/PortfolioBuilderWrapper")
);

export default function Main({
  headerData,
  footerData,
  socialMediaLinks,
  emails,
  userData,
}) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main">
      <Header {...headerData} socialMediaLinks={socialMediaLinks} />
      {width > 500 && (
        <>
          <LeftPanel {...socialMediaLinks}></LeftPanel>
          <RightPanel emails={emails}></RightPanel>
        </>
      )}

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<AllSections {...userData} />} />
          <Route
            path="/build-your-portfolio"
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                <LazyPortfolioBuilder />
              </Suspense>
            }
          />
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
      {width <= 500 && <LeftPanel {...socialMediaLinks} />}
      <Footer {...footerData} />
    </div>
  );
}
