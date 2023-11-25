import React from 'react';
import Card from './Carddata';
import './Home.css';
const Cards=()=>{

    return(
        <>
        <div className='cardpos'>
        {
        Card.map((val)=>{
        const{alt,src,Trip,para,id}=val;    
        return(
        <div className='card' key={id}>
        <div className='cardimg'>
        <img alt={alt} src={src}/>
        </div>
        <h4>{Trip}</h4>
        <p>{para}</p>
        </div>
       )})}
        </div>
        </>
    )
}
export default Cards;