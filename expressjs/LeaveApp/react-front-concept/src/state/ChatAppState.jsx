import { useState } from "react";
import ChatAppContext from "../context/ChatAppContext";

function ChatAppState(props) {
    const host = 'http://192.168.1.3:3001';
    
    const [page, setPage] = useState('signin');

    const nav = {
        chats: { color: (page === 'chats') ? ('rgb(25, 118, 210)') : ('rgb(80, 80, 80, 0.7)') },
        settings: { color: (page === 'settings') ? ('rgb(25, 118, 210)') : ('rgb(80, 80, 80, 0.7)') }
    }

    function setChatsPage(){
        setPage('chats');
    }

    function setSessionPage(){
        setPage('session');
    }
    
    function setSettingsPage(){
        setPage('settings');
    }

    function setSignInPage(){
        setPage('signin');
    }

    function setSignUpPage(){
        setPage('signup');
    }

    return (
        <ChatAppContext.Provider value={{ host, nav, page, setSignInPage, setSignUpPage, setChatsPage, setSessionPage, setSettingsPage }}>
            {props.children}
        </ChatAppContext.Provider>
    );
}

export default ChatAppState;