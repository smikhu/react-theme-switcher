import './App.css';
import { GlobalStyles } from './components/styles/Global';
import { Header } from './components/styles/Header.styled';
import { Footer } from './components/styles/Footer.styled';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header>Game of Thrones Quotes</Header>

      <Footer>
        <p>
          Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
        </p>
      </Footer>
    </div>
  );
}

export default App;
