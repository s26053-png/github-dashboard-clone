import React, { useState } from "react";

export default function HeaderTabs({
  repoCount = 9,
  starCount = 1,
  defaultTab = "overview",
  onTabChange,
}) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Z" />
        </svg>
      ),
    },
    {
      id: "repositories",
      label: "Repositories",
      count: repoCount,
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v1.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25Z" />
        </svg>
      ),
    },
    {
      id: "projects",
      label: "Projects",
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25ZM3 3h3v10H3Zm4.5 0h3v10h-3ZM12 3h1v10h-1Z" />
        </svg>
      ),
    },
    {
      id: "packages",
      label: "Packages",
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M8.878 1.08a2.25 2.25 0 0 0-1.756 0l-5.25 2.1a2.25 2.25 0 0 0-1.372 2.08v6.58a2.25 2.25 0 0 0 1.372 2.08l5.25 2.1a2.25 2.25 0 0 0 1.756 0l5.25-2.1a2.25 2.25 0 0 0 1.372-2.08V5.26a2.25 2.25 0 0 0-1.372-2.08ZM7.875 2.47a.75.75 0 0 1 .584 0l5.12 2.048-2.613 1.045-5.25-2.1ZM2.13 6.028l5.12-2.048v5.195l-5.12 2.048ZM8.75 14.253V9.175l5.12-2.048v5.078Z" />
        </svg>
      ),
    },
    {
      id: "stars",
      label: "Stars",
      count: starCount,
      icon: (
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
        </svg>
      ),
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <nav style={styles.nav} aria-label="User profile tabs">
      <ul style={styles.ul}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <li key={tab.id} style={styles.li}>
              <button
                type="button"
                onClick={() => handleTabClick(tab.id)}
                style={{
                  ...styles.button,
                  ...(isActive ? styles.activeButton : {}),
                }}
              >
                <span style={styles.icon}>{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    style={{
                      ...styles.badge,
                      ...(isActive ? styles.activeBadge : {}),
                    }}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    width: "100%",
    borderBottom: "1px solid #d0d7de",
    backgroundColor: "#ffffff",
    paddingLeft: "16px",
    boxSizing: "border-box",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  ul: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "8px",
    overflowX: "auto",
  },
  li: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "transparent",
    border: "none",
    padding: "8px 12px",
    fontSize: "14px",
    color: "#636c76",
    fontWeight: 400,
    cursor: "pointer",
    borderBottom: "2px solid transparent",
    marginBottom: "-1px",
    whiteSpace: "nowrap",
  },
  activeButton: {
    color: "#1f2328",
    fontWeight: 600,
    borderBottomColor: "#fd8c73",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  badge: {
    display: "inline-block",
    padding: "0 6px",
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "18px",
    color: "#636c76",
    backgroundColor: "rgba(175, 184, 193, 0.2)",
    borderRadius: "20px",
  },
  activeBadge: {
    backgroundColor: "rgba(175, 184, 193, 0.3)",
    color: "#1f2328",
  },
};
