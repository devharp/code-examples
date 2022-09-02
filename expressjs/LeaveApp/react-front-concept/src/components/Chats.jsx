import { Box, Button } from '@mui/material'
import { useContext } from 'react';
import ChatAppContext from '../context/ChatAppContext';
import modules from "../modules";


function ChatSessions(props) {
    
    const context = useContext(ChatAppContext);

    function SessionBanner(props) {
        return (
            <Box onClick={() => { context.setSessionPage(); }} className="d-flex align-items-center b-dark mb-3 px-3 py-2" sx={{ userSelect: 'none', cursor: 'pointer', boxShadow: '0 0 8px 1px rgb(150, 150, 150, 0.2)', borderRadius: '4px', backgroundColor: 'rgb(248, 248, 248)', '&:hover': { backgroundColor: 'rgb(255, 255, 255)' } }}>
                <div className="me-2" style={{ height: '3em', width: '3em', backgroundColor: modules.getRanExColor(), borderRadius: '50%' }}></div>
                <div className="d-flex flex-column justify-content-between" style={{ height: '2.5em', fontSize: '1.25em' }}>
                    <div style={{ fontWeight: '700', color: 'rgb(80, 80, 80)' }}>{props.name}</div>
                    <div style={{ fontSize: '0.7em', color: 'rgb(150, 150, 150)' }}>&nbsp;&nbsp;&nbsp;{props.msg}</div>
                </div>
            </Box>
        );
    }
    

    return (
        <>
            <div className="px-5" style={{ margin: '5em 0 0 0' }}>
                <SessionBanner name='Harpreet Singh' msg='Hello' />
                <SessionBanner name='Harpreet Singh' msg='Hello' />
                <SessionBanner name='Harpreet Singh' msg='Hello' />
                <SessionBanner name='Harpreet Singh' msg='Hello' />
                <SessionBanner name='Harpreet Singh' msg='Hello' />
                <SessionBanner name='Harpreet Singh' msg='Hello' />
                <SessionBanner name='Harpreet Singh' msg='Hello' />
                <SessionBanner name='Harpreet Singh' msg='Hello' />
                <SessionBanner name='Harpreet Singh' msg='Hello' />
            </div>
            
        </>
    );
}

export default ChatSessions;