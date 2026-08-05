"use client";

import { useState } from "react";
import ExperienceSection from "./ExperienceSection";
import ScreensSection from "./ScreensSection";

export default function PortfolioContent() {
  const [activeKey, setActiveKey] = useState("efanamby-fulltime");

  return (
    <>
      {/* ============================================================
          EXPERIENCE
      ============================================================ */}
      <section style={{ marginBottom: "4rem" }} id="experience">
        <div className="section-header">
          <h2>
            <span className="slash">/</span> experience
          </h2>
          <span className="line"></span>
        </div>

        <ExperienceSection activeKey={activeKey} onChange={setActiveKey} />
      </section>

      {/* ============================================================
          SCREENS
      ============================================================ */}
      <section style={{ marginBottom: "4rem" }} id="screens">
        <div className="section-header">
          <h2>
            <span className="slash">/</span> screens
          </h2>
          <span className="line"></span>
        </div>

        <ScreensSection activeKey={activeKey} />
      </section>
    </>
  );
}