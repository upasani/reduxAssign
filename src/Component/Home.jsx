import { useSelector } from "react-redux"
export const Home=()=>{
    const state=useSelector((state)=>state);
    console.log(state);
    return(
        <div>
            <h1>This is home route</h1>
        </div>
    )
}