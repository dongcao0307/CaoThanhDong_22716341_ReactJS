import { useEffect, useState } from "react";
import Item from './Item'
function Menu() {
    const [array, setArray] = useState([]);
    useEffect (() => {
        var fn = fetch ('https://67c8220a0acf98d070850982.mockapi.io/Picture')
        var fn1 = fn.then((res) => {return res.json();})
        var fn2 = fn1.then((data) => {
            setArray(data);
        })
    }, [])
    return (
        <>
        <ul>{
            
            array.map((item, index) => {
                return (
                    <li key = {index} > {item.item} </li>
                )
            })
        }
        </ul>
        </>
    )
}
export default Menu