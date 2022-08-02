import { useEffect, useState } from 'react';
import HarpAppContext from './HarpAppContext'

import HarpThemes from '../themes/HarpThemes'

const HarpAppState = (props) => {
    const theme = {
        light: HarpThemes.light,
        dark: HarpThemes.dark
    }
    const page = [0, 1, 2, 3, 4, 5, 6, 7]
    const [state, setState] = useState({ theme: getDefaultTheme(), page: page[0] });


    function getDefaultTheme() {
        return theme.light;
    }

    function setTheme(name) {
        switch (name) {
            case 'light':
                setState({ ...state, theme: theme.light })
                break;
            case 'dark':
                setState({ ...state, theme: theme.dark })
                break;
        }
    }

    function setPage(i){
        setState({...state, page: i});
    }

    useEffect(() => {
        document.body.style.backgroundColor = state.theme.body.backgroundColor;
        // console.log();
    });

    return (
        <HarpAppContext.Provider value={{ theme: state.theme, setTheme, page: state.page, setPage }}>
            {props.children}
        </HarpAppContext.Provider>
    );
}

export default HarpAppState;