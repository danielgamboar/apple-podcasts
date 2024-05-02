import Router from "./router";
import Header from "./components/Header";

function App() {
  return (
    <div className="m-10">
      <Header />
      <main className="">
        <Router />
      </main>
    </div>
  );
}

export default App;
