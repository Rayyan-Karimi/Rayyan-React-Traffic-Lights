import "./App.css";
import Traffic from "./Traffic";

function Hero() {
  return (
    <div className="py-6 text-center shadow-lg w-full text-xl font-semibold">
      <h2>Traffic lights</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="flex flex-col justify-center items-center">
        <Traffic />
      </div>
    </div>
  );
}

export default App;
