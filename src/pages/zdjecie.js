import { useState } from 'react';
import noImage from './noImage.png'
import Image from './Piter.jpg'
import '../style/zdjecie.css'

function Zdjecie(){
    const [show,setshow]= useState(false);
    const [ccolor,setColor]=useState("#ffffffff");
    function changeImg(){
        setshow(!show);
    }
    function changeColor(event){
        setColor(event.target.value);
    }

    return(
    <div>
    <div id="nagłowek" style={{backgroundColor:ccolor}}>
    <h2 style={{color:ccolor}} id="naglowek_zdjecie">Cześć nazywam się Piter</h2>
    </div>
    <input type="checkbox" onClick={changeImg}></input>
    <br/>
    <img src={ show ? Image : noImage}/>
    <br/>
    {show ? <><input type='color' onChange={changeColor} value={ccolor}/> <br/><span>Zmień kolor tła</span></> :<span>Brak zdjęcia</span>}
    </div>
    )
}
export default Zdjecie;