import HarpAppContext from '../context/HarpAppContext';
import { useContext } from 'react';

import HarpIconButton from './HarpIconButton';
import HarpBigIconButton from './HarpBigIconButton';
import HarpColoredIconButton from './HarpColoredIconButton';
import HarpColoredBigIconButton from './HarpColoredBigIconButton';

function HarpPageStateButtons(props) {
    const context = useContext(HarpAppContext);
    return (
        <>
            {props.buttonicons.map((e, i) => {
                const page = context.page === i;
                return (
                    <div key={i}>
                        { (context.page === i) ? <HarpColoredBigIconButton className='my-2'>{e}</HarpColoredBigIconButton> : <HarpBigIconButton onClick={() => { props.onClick(i) }} className='my-2'>{e}</HarpBigIconButton> }
                    </div>
                );
            })}
        </>
    );
}

export default HarpPageStateButtons;