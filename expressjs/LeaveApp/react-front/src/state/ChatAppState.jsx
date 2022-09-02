import { useState } from "react";
import ChatAppContext from "../context/ChatAppContext";

function ChatAppState(props) {
    // const host = 'http://localhost:3001';
    const host = '';
    
    const [page, setPage] = useState('signin');
    const [sessionid, setSessionId] = useState('');
    const [username, setUsername] = useState('');
    // const [page, setPage] = useState('chats');

    const nav = {
        chats: { color: (page === 'chats') ? ('rgb(25, 118, 210)') : ('rgb(80, 80, 80, 0.7)') },
        search: { color: (page === 'search') ? ('rgb(25, 118, 210)') : ('rgb(80, 80, 80, 0.7)') },
        settings: { color: (page === 'settings') ? ('rgb(25, 118, 210)') : ('rgb(80, 80, 80, 0.7)') }
    }

    function setChatsPage(){
        setPage('chats');
    }

    function setSessionPage(){
        setPage('session');
    }

    function setSearchPage(){
        setPage('search');
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
        <ChatAppContext.Provider value={{ host, nav, page, setSignInPage, setSignUpPage, setChatsPage, setSearchPage, setSessionPage, setSettingsPage, username, setUsername, sessionid, setSessionId }}>
            {props.children}
        </ChatAppContext.Provider>
    );
}

export default ChatAppState;