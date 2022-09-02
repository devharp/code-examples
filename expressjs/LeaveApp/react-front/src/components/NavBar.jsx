import { Button } from "@mui/material";
import { useContext } from "react";
import ChatAppContext from "../context/ChatAppContext";

function NavBar(props) {
    const context = useContext(ChatAppContext);

    function onChatsButtonClick() {
        context.setChatsPage();
    }

    function onSettingsButtonClick() {
        context.setSettingsPage();
    }

    function onSearchButtonClick(){
        context.setSearchPage();
    }

    function onLogoutButtonClick() {
        // context.setSignInPage();
        const xhr = new XMLHttpRequest();
        xhr.open('POST', context.host + '/logout');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                switch (xhr.status) {
                    case 200:
                        console.log('Logout Success');
                        context.setSignInPage();
                        break;
                    case 500:
                        console.log('User failed to Logout');
                        break;
                    default:
                        console.log('Unknown code received');
                        break;
                }
            }
        }
        xhr.send();
    }

    return (

        <div className="d-flex align-items-center justify-content-center" style={{ position: 'fixed', top: '0', height: '4em', width: '100%', backgroundColor: 'white', boxShadow: '0 2px 10px 1px rgb(80, 80, 80, 0.2)' }}>
            <div onClick={onChatsButtonClick} className='me-3' style={{ fontSize: '1.25em', cursor: 'pointer', userSelect: 'none', color: context.nav.chats.color }}>Chats</div>
            <div onClick={onSearchButtonClick} className="me-3" style={{ fontSize: '1.25em', cursor: 'pointer', userSelect: 'none', color: context.nav.search.color }}>Search</div>
            <div onClick={onSettingsButtonClick} className="me-3" style={{ fontSize: '1.25em', cursor: 'pointer', userSelect: 'none', color: context.nav.settings.color }}>Settings</div>
            <div onClick={onLogoutButtonClick} className='' style={{ fontSize: '1.25em', cursor: 'pointer', userSelect: 'none', color: 'rgb(80, 80, 80, 0.7)' }}>Logout</div>
        </div>

    );
}

export default NavBar;