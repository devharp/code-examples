import { Button, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useState, useContext } from 'react';
import ChatAppContext from '../context/ChatAppContext';
function ThisPage() {

    const context = useContext(ChatAppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState({ color: 'transparent', text: '' });

    let once = false;
    useEffect(() => {
        if (!once) {
            authenticateSession();
            once = true;
        }
    }, []);

    function authenticateSession() {
        try {


            const xhr = new XMLHttpRequest();
            xhr.open('POST', context.host);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    switch (xhr.status) {
                        case 200:
                            const payload = JSON.parse(xhr.response);
                            console.log('Auth success');
                            context.setChatsPage();
                            console.log('Your username: ', payload.username);
                            context.setUsername(payload.username);
                            break;
                        case 500:
                            console.log('Auth failed');
                            break;
                        default:
                            console.log('Unknown status received');
                            break;
                    }
                }
            }
            xhr.send();
        } catch (err) {
            console.error(err);
        }
    }

    function loginBtnClicked() {
        const credentials = { username, password };
        const xhr = new XMLHttpRequest();
        xhr.open('POST', context.host + '/login');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                switch (xhr.status) {
                    case 200:
                        setMessage({ color: 'green', text: 'Login Successful!' });
                        authenticateSession();
                        // context.setChatsPage();
                        break;
                    case 500:
                        console.log('Received an Error');
                        setMessage({ color: 'red', text: 'Error Occurred!' });
                        break;
                    default:
                        console.log('Unknown code received');
                }
            }
        }
        xhr.onerror = () => { console.log('error'); }
        xhr.send(JSON.stringify(credentials));
    }

    function signUpBtnClicked() {
        const credentials = { username, password, email };
        const xhr = new XMLHttpRequest();
        xhr.open('POST', context.host + '/signup');

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                switch (xhr.status) {
                    case 200:
                        setMessage({ color: 'green', text: 'Account created' });
                        setUsername('');
                        setPassword('');
                        setEmail('');
                        context.setSignInPage();
                        break;
                    case 500:
                        break;
                    default:
                        break;
                }
            }
        }

        xhr.send(JSON.stringify(credentials));
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', width: '100%' }}>
            <div className='d-flex flex-column'>
                <h3 className='mb-1'>
                    {(context.page === 'signin') ? ('LOGIN') : (<></>)}
                    {(context.page === 'signup') ? ('SIGN UP') : (<></>)}
                </h3>
                <div className='bg-darka mb-1' style={{ height: '2em', color: message.color }}>{message.text}</div>
                <TextField onChange={handleUsernameChange} value={username} className='mb-3' label='username' size='small' type='text' />
                <TextField onChange={handlePasswordChange} value={password} className='mb-3' label='password' size='small' type='password' />
                {(context.page === 'signup') ? (<TextField onChange={handleEmailChange} value={email} className='mb-3' label='email' size='small' type='email' />) : (<></>)}

                {(context.page === 'signin') ? <Button onClick={loginBtnClicked} variant='contained'>sign in</Button> : <></>}
                {(context.page === 'signup') ? <Button onClick={signUpBtnClicked} variant='contained'>sign up</Button> : <></>}

                <div className='d-flex justify-content-center my-1'><h5 style={{ color: 'rgb(150, 150, 150)' }}>- or -</h5></div>

                {(context.page === 'signin') ? (<Button onClick={context.setSignUpPage} variant='contained'>create account</Button>) : (<></>)}
                {(context.page === 'signup') ? (<Button onClick={context.setSignInPage} variant='contained'>have account</Button>) : (<></>)}

            </div>
        </div>
    );
}

export default ThisPage;