import './App.css';
import { Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import Landingpage from './pages/Landingpage';
import UserHomePage from './pages/UserHomePage';
import UserChatPage from './pages/UserChatPage'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Landingpage} exact/>
      <Route path="/register"component={HomePage} />
      <Route path="/chats" component={ChatPage}/>
      <Route path="/UserRegister" component={UserHomePage}/>
      <Route path="/Userchats" component={UserChatPage}/>
    </div>
  );
}

export default App;     
