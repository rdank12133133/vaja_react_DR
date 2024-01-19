import {useEffect, useState} from 'react';
import { useRef } from 'react';
function Neke(){

    const [tekst,setTekst]=useState(false);
    const reference=useRef(0);
    useEffect((e) =>{
        reference.current++;
    }, [tekst])
    return(

      <>
      <div id='neke'>Tekst v Nekaj Funkciji</div>
      <p>nekaj nove</p>
      <button onClick={(e)=>(setTekst(!tekst))}>klikni</button>
      <div>{reference.current}</div>
      </>
    );
  }
  export default Neke;