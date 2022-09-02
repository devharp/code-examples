import { Button, TextField } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import ChatAppContext from "../context/ChatAppContext";

function ThisPage() {
    const context = useContext(ChatAppContext);
    const [users, setUsers] = useState([]);
    let once = false;
    useEffect(() => {
        if(!once){
            init();
            once = true;
        }
    }, []);

    function init(){
        
    }

    function onQueryChange(e){
        const str = e.target.value;
        if(str.length > 0){
            searchQuery(str);
        }
        else{
            setUsers([]);
        }
    }

    function searchQuery(query){
        const xhr = new XMLHttpRequest();
        xhr.open('POST', context.host + '/search')
        xhr.onreadystatechange = () => {
            if(xhr.readyState === XMLHttpRequest.DONE){
                try{

                    const payload = JSON.parse(xhr.response);
                    setUsers(payload);
                }catch(err){
                    console.error('Caught an error while parsing the data');
                }
            }
        }
        xhr.send(JSON.stringify({ query }));
    }

    function UserResult(props) {
        
        function onMessageBtnClick(){
            const xhr = new XMLHttpRequest();
            xhr.open('POST', context.host + '/session');
            xhr.onreadystatechange = () => {
                if(xhr.readyState === XMLHttpRequest.DONE){
                    try{

                        const payload = JSON.parse(xhr.response);
                        console.log(payload);
                        // context.setSessionId(payload.sessionid);
                        // context.setPage('session')
                    }
                    catch(err){
                        console.log('Something went wrong');
                    }
                }
            }
            xhr.send(JSON.stringify({ command: 'message', username: props.name }));
            console.log('Sent request to the server to begin chat with the username ', props.name);
        }

        return (
            <>
                <div className="px-3 d-flex justify-content-between my-2" style={{ boxShadow: '0px 0px 5px 1px rgb(150, 150, 150, 0.4)', borderRadius: '4px', color: 'black', fontWeight: '500', fontSize: '1.5em' }}>
                    <div className="d-flex align-items-center">{props.name}</div>
                    <div className="py-2">
                        <Button variant='contained' onClick={onMessageBtnClick}>Message</Button>
                    </div>
                </div>
            </>
        );
    }
    return (
        <div style={{ padding: '5em 0 0 0' }}>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <h3 className="mb-3">Search Users Here</h3>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <TextField onChange={onQueryChange} label='search' size='small' />
                </div>
                <div className="d-flex flex-column px-3">
                    {
                        users.map((e, i) => {
                            return(
                                
                                (e !== context.username) ? <UserResult key={i} name={e} /> : <></>
                                
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default ThisPage;