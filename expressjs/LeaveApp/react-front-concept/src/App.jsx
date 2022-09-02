import axios from 'axios';
import { useEffect, useState, useContext } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import ChatAppContext from './context/ChatAppContext';
import Chats from './components/Chats';
import ChatSettings from './components/ChatSettings';
import modules from './modules';
import ChatSession from './components/ChatSession';
import SignInUp from './components/SignInUp'

function App() {
  let once = false;
  const context = useContext(ChatAppContext);
  useEffect(() => {
    if (!once) {
      console.clear();
      init();
      once = true;
    }
  }, []);

  async function init() {
    const payload = (await axios.get(context.host)).data;
    console.log(payload);
    console.log(context);
    // console.log(modules.genRanHex(50));
  }

  function Page() {
    let page;
    switch (context.page) {
      case 'chats':
        page = <Chats />;
        break;

      case 'session':
        page = <ChatSession />;
        break;

      case 'settings':
        page = <ChatSettings />;
        break;

      default:
        page = 'Unknown Page';
        break;
    }
    return (
      <>
        {page}
      </>
    );
  }

  return (
    <>
      {(context.page === 'signin' || context.page === 'signup') ? (<SignInUp/>) : (<><NavBar/><Page/></>) }
    </>
  )
}

export default App
