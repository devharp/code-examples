import { useSelector } from "react-redux";

function Compone(){
  const value = useSelector(state => state.value)

    return(
    <>
        <div>Amount: {value}</div>
    </>
    );
}

export default Compone;