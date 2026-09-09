import { useState } from "react";
import githubLogo from "../assets/github.jpg";

function HeaderLeft() {
  const [isOpen, setIsOpen] = useState(false);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="header-left">
      <button className="menu-button">☰</button>

      <img className="github-logo" src={githubLogo} alt="GitHub" />

      <div className="repo-dropdown">
        <span className="user-name">S26053-PNG</span>

        <button className="repo-button" onClick={refreshPage}>
          / GitHub-dashboard-clone
        </button>

        <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
          ▼
        </button>

        {isOpen && (
          <div className="dropdown-menu">
            <button>GitHub-dashboard-clone</button>
            <button>저장소 보기</button>
            <button>설정</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderLeft;
