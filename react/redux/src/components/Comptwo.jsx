import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

function Comptwo() {
    const dispatch = useDispatch();
    const {add, reduce} = bindActionCreators(actionCreators, dispatch);

    return (
        <>
            <button onClick={() => { add(15) }}>click to add</button>
            <button onClick={() => { reduce(5) }}>click to deduct</button>
        </>
    );
}

export default Comptwo;