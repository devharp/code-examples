import { useContext, useState } from 'react'
import './App.css'
import HarpBody from './components/HarpBody';
import HarpAppContext from './context/HarpAppContext'
import { Scrollbars } from 'react-custom-scrollbars';
import HarpPanel from './components/HarpPanel';

function App() {
  const context = useContext(HarpAppContext);

  return (
    <>
      <HarpPanel />
      <div style={{ margin: '50px 0 0 80px', height: 'calc(100vh - 50px)', width: 'calc(100vw - 80px)', backgroundColor: 'red' }}>

        <HarpBody>
          <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <div className='p-2' style={{ width: '60%', backgroundColor: 'white', border: '1px solid rgb(150, 150, 150, 0.3)', borderRadius: '0.3em' }}>
              <svg width='100%' height='200px' style={{ backgroundColor: 'red' }}>
                <text text-anchor="start" alignmentBaseline='hanging' x='0' y='0' stroke='none' fill='black' style={{ fontFamily: 'Roboto', fontWeight: '500', fontSize: '1.5em' }}>Helo</text>
              </svg>
            </div>
          </div>
        </HarpBody>
      </div>
    </>
  )
}

export default App
