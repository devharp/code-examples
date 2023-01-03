import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [loggedin, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function auth(){

    const token = window.localStorage.getItem('token');
    fetch(`http://localhost:3001/?token=${token}`).then(async (res) => {
      if(res.status === 200){
        setLoggedIn(true);
      }
      else{
        setLoggedIn(false);
      }
    })
  }

  useEffect(() => {
    auth();
  }, []);

  async function handleSubmit() {
    const res = await fetch(`http://localhost:3001/login?username=${username}&password=${password}`)
    if (res.status !== 200) return;

    const { token } = await res.json();
    window.localStorage.setItem('token', token);
    auth();
  }

  async function handleLogout(){
    window.localStorage.removeItem('token');
    auth();
  }

  return (
    <>
      {!loggedin && <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1>Login Here</h1>
          <input onChange={(e) => { setUsername(e.target.value) }} type='username' placeholder='username' />
          <input onChange={(e) => { setPassword(e.target.value) }} type='text' placeholder='password' />
          <button onClick={handleSubmit}>submit</button>
        </div>}
      {loggedin && <SecretPage/>}
    </>
  );
  function SecretPage() {
    return (
      <>
        <h1>This is a secret page</h1>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  }

  function LoginPage() {
    return (
      <>
        
      </>
    )
  }
}




export default App
