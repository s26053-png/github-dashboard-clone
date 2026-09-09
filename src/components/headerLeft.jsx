import { useState } from "react";
import githubLogo from "../assets/github.jpg";

function HeaderLeft() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-left">
      <button className="menu-button">☰</button>

      <img className="github-logo" src={githubLogo} alt="GitHub" />

      <div className="repo-dropdown">
        <button className="repo-button" onClick={() => setIsOpen(!isOpen)}>
          <span>S26053-PNG</span>
          <span>/ GitHub-dashboard-clone</span>
          <span>▼</span>
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <div>GitHub-dashboard-clone</div>
            <div>저장소 보기</div>
            <div>설정</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderLeft;
