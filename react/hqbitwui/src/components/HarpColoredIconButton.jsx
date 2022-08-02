import { Box } from "@mui/material";
import { useContext, cloneElement } from "react";
import HarpAppContext from "../context/HarpAppContext";

function HarpColoredIconButton(props) {
    const context = useContext(HarpAppContext)
    return (
        <>
            <Box onClick={props.onClick} className={props.className} sx={context.theme.colorediconbutton}>
                { cloneElement(props.children, { sx: { height: '0.75em' } }) }
            </Box>
        </>
    );
}

export default HarpColoredIconButton;