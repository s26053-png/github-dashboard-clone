import HeaderTabs from "./components/한승희천재";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      {/* 승희님이 만든 하단 탭 메뉴 컴포넌트! */}
      <HeaderTabs repoCount={9} starCount={1} />
    </div>
  );
}

export default App;
