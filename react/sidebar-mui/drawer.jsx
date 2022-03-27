import Navbar from '../../components/Navbar'

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        setState(open);
    };

    return (
        <>
            <div>
                <div>
                    <Button onClick={toggleDrawer(true)}>left</Button>
                    <Drawer
                        anchor='left'
                        open={state}
                        onClose={toggleDrawer(false)}
                    >
                        <div className='h3 m-4'>
                            Hello
                        </div>
                    </Drawer>
                </div>
            </div>
            Hello
        </>
    );
}

