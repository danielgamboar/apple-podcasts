import Router from "./router";
import Header from "./components/Header";

function App() {
  return (
    <div className="m-10">
      <Header />
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
