import "../components/Bai3.css"
import {useState} from 'react'




function Bai3() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    return(
        <>
        <input type="text" name="" id="" placeholder="Nhap a"/> <br />
        <input type="text" name="" id="" placeholder="Nhap b"/> <br />
        <input type="radio" name = "group"/>
        <span>+</span> 
        <input type="radio" name = "group"/>
        <span>-</span>
        <input type="radio" name = "group"/>
        <span>*</span> 
        <input type="radio" name = "group"/>
        <span>/</span> <br />
        <button id="btnResult">Result</button> <br />
        <span id = "Result">Result is: </span>
        </>
    )
}
 
export default Bai3;