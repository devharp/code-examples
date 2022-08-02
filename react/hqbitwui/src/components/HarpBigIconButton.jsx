import { Box } from "@mui/material";
import { useContext, useEffect, cloneElement } from "react";
import HarpAppContext from "../context/HarpAppContext";

function HarpIconButton(props) {
    const context = useContext(HarpAppContext);
    useEffect(() => {
    });
    return (
        <>
            <Box onClick={props.onClick} className={props.className} sx={context.theme.bigiconbutton}>
                {/* {props.children} */}
                {cloneElement(props.children, { sx:{ height: '0.75em' } })}
            </Box>
        </>
    );
}

export default HarpIconButton;