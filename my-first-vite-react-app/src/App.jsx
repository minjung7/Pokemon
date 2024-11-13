import "./App.css";
import Router from "./shared/Router";
import { PokemonProvider } from "./PokemonContext";

function App() {
  return (
    <>
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
