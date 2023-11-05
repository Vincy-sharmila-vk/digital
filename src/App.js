import './App.css';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Footer1 from './Components/Footer1';
import Main from './Components/Main';
import Menu from './Components/Menu'
function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Content />
      <Footer />
      <Footer1 />
    </div>
  );
}

export default App;
