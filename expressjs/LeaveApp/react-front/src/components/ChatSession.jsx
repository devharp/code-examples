import { Button } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import ChatAppContext from "../context/ChatAppContext";


function ChatSession() {
    
    const context = useContext(ChatAppContext);
    
    useEffect(() => {
        console.log('Chat session page loaded');
        const msgbox = document.getElementById('message-box');
        msgbox.scrollTop = msgbox.scrollHeight - msgbox.clientHeight;
        console.log(msgbox.clientHeight);

    }, []);

    function OthersMessage(props) {
        return (
            <>
                <div className='ps-4 mb-3 d-flex justify-content-start'>
                    <div className='' style={{ minWidth: '7em', backgroundColor: 'white' }}>
                        <div className='px-2 py-1' style={{ color: 'rgb(25, 118, 210)', border: '1px solid rgb(25, 118, 210, 0.5)', borderRadius: '4px' }}>
                            <div style={{ fontWeight: '500', fontSize: '0.8em' }}>{props.name}</div>
                            <div style={{ fontWeight: '500', fontSize: '1.25em' }}>{props.msg}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    function YourMessage(props) {
        return (
            <>
                <div className='px-4 mb-3 d-flex justify-content-end'>
                    <div className='' style={{ minWidth: '7em' }}>
                        <div className='px-2 py-1' style={{ backgroundColor: 'rgb(25, 118, 210)', color: 'white', border: '1px solid rgb(25, 118, 210, 0.5)', borderRadius: '4px' }}>
                            <div style={{ fontWeight: '500', fontSize: '0.8em' }}>You</div>
                            <div style={{ fontWeight: '500', fontSize: '1.25em' }}>{props.msg}</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div className="d-flex flex-column" style={{ height: '100%', padding: '5em 0 0 0' }}>
            <div id='message-box' className="flex-grow-1" style={{ overflowY: 'scroll' }}>
                <OthersMessage name='Other Guy' msg='Hello' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
                <YourMessage msg='Hii' />
                <OthersMessage name='Other Guy' msg='Hello' />
                <YourMessage msg='Hii' />
            </div>
            <div className="py-3 d-flex px-3">
                <Button onClick={context.setChatsPage} variant="contained">BACK</Button>
                <textarea className="flex-grow-1 mx-3" placeholder="Type message here" style={{ resize: 'none', columnCount: '2', border: '1px solid rgb(150, 150, 150, 0.4)', outline: 'none' }}></textarea>
                <Button variant="contained">SEND</Button>
            </div>
        </div>
    );
}

export default ChatSession;