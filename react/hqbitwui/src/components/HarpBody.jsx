import { useContext, useEffect } from "react";

import HarpAppContext from '../context/HarpAppContext';
import { Scrollbars } from 'react-custom-scrollbars';


export default function HarpBody(props) {
    const context = useContext(HarpAppContext);
    useEffect(() => {
        // console.log(context.theme.body);
        // context.setTheme('dark');
    }, []);
    return (
        <div style={context.theme.body}>
            <Scrollbars autoHide={true} >
                {props.children}
            </Scrollbars>
        </div>
    );
}