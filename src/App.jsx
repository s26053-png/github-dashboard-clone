import HeaderLeft from "./components/headerLeft";
import HeaderActions from "./components/HeaderActions";
import HeaderTabs from "./components/한승희천재";
import "./App.css";

function App() {
  return (
    <>
      <header className="github-header">
        <HeaderLeft />
        <HeaderActions />
      </header>

      <HeaderTabs repoCount={9} starCount={1} />
    </>
  );
}

export default App;