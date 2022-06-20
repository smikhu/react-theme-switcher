import './App.css';
import { GlobalStyles } from './components/styles/Global';
import { Header } from './components/styles/Header.styled';
import { Footer } from './components/styles/Footer.styled';
import Quotes from './components/Quotes';
import { ThemeContainer, ThemeButton } from './components/styles/ThemeSwitching.styled';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header>Game of Thrones Quotes</Header>

      <ThemeContainer>
        <span>Themes: </span>
        <ThemeButton className="light active"></ThemeButton>
        <ThemeButton className="dark"></ThemeButton>
        <ThemeButton className="blue"></ThemeButton>
        <ThemeButton className="green"></ThemeButton>
        <ThemeButton className="brown"></ThemeButton>
        <ThemeButton className="pink"></ThemeButton>
      </ThemeContainer>

      <Quotes />

      <Footer>
        <p>
          Made with love by <a href="http://bio.link/timonwa">Timonwa</a>
        </p>
      </Footer>
    </div>
  );
}

export default App;
