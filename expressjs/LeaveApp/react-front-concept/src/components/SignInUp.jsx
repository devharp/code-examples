import { Button, TextField } from '@mui/material';
import { useContext } from 'react';
import ChatAppContext from '../context/ChatAppContext';
function ThisPage() {

    const context = useContext(ChatAppContext);

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: '100%', width: '100%' }}>
            <div className='d-flex flex-column'>
                <h3 className='mb-3'>
                    {(context.page === 'signin') ? ('LOGIN') : (<></>)}
                    {(context.page === 'signup') ? ('SIGN UP') : (<></>)}
                </h3>
                <TextField className='mb-3' label='username' size='small' type='text' />
                <TextField className='mb-3' label='password' size='small' type='password' />
                {(context.page === 'signup') ? (<TextField className='mb-3' label='email' size='small' type='email' />) : (<></>)}

                {(context.page === 'signin') ? <Button onClick={context.setChatsPage} variant='contained'>sign in</Button> : <></>}
                {(context.page === 'signup') ? <Button variant='contained'>sign up</Button> : <></>}

                <div className='d-flex justify-content-center my-1'><h5 style={{ color: 'rgb(150, 150, 150)' }}>- or -</h5></div>

                {(context.page === 'signin') ? (<Button onClick={context.setSignUpPage} variant='contained'>create account</Button>) : (<></>)}
                {(context.page === 'signup') ? (<Button onClick={context.setSignInPage} variant='contained'>have account</Button>) : (<></>)}

            </div>
        </div>
    );
}

export default ThisPage;