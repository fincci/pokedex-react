import './App.css';
import { Header } from './components/header/header';
import { PokeList } from './components/pokemon-list/poke-list';
import { Button } from './components/button/button';

function App() {
  return (
    <>
      <Header />
      <PokeList />
      <Button />
    </>
  );
}

export default App;
