import './App.css';
import { Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import Landingpage from './pages/Landingpage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Landingpage} exact/>
      <Route path="/register"component={HomePage} />
      <Route path="/chats" component={ChatPage}/>
    </div>
  );
}

export default App;     
