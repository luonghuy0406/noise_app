import './App.scss';
import AppContainer from './components/AppContainer';
import ButtonTest from './components/ButtonTest';
import Header from './components/Header';
import MainControl from './components/MainControl';

function App() {
  return (
    <div className="App">
        <Header/>
        <MainControl/>
        <AppContainer/>
        {/* <ButtonTest/> */}
    </div>
  );
}

export default App;
