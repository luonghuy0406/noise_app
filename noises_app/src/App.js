import './App.scss';
import AppContainer from './components/AppContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import MainControl from './components/MainControl';

function App() {
  return (
    <div className="App">
        <Header/>
        <MainControl/>
        <AppContainer/>
        <Footer/>
    </div>
  );
}

export default App;
