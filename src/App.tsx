import { Header } from "./components/Header/Header";
import { Router } from "./router/Router";

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
