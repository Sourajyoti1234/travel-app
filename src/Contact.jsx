import React, { useState } from "react";
import './Home.css';
const Contact=()=>
{
    const[data,setdata]=useState(
       {fName:"",
        Email:"",
        Subject:"",
        Message:"",
        });
    const[alldata,setAlldata]=useState()
    const inputevent=(events)=>{
    const val=events.target.value;
    const naam=events.target.name;
    
    setdata((preval)=>{
        // console.log(preval);
        return{
            ...preval,
            [naam]: val,
        }
    })
}

// console.log(data)

    const fun2=(event)=>{
    event.preventDefault();
    if((data.fName) && (data.Email) && (data.Message) && (data.Subject)) {
    alert('submitted');  
    const newdata={...data}
    setAlldata({...alldata,newdata}); 
    setdata({
            fName:"",
            Email:"",
            Subject:"",
            Message:"",})
    }
    else{
        alert("Please Enter valid data")
    }
    // setdata({
    //     fName:"",
    //     Email:"",
    //     Subject:"",
    //     Message:"",})
    // console.log(alldata)
}

// else{
//     alert("please enter something")
// }
    
    // setStory({
    // fName:"",
    // Email:"",
    // Subject:"",
    // Message:"",
    // })
    // console.log(Store);
    // }
    return(
        <>
       <div className="contact">
        <form onSubmit={fun2}>
        <input type="text" onChange={inputevent} required autoComplete="off" name="fName" value={data.fName} placeholder="Enter your name.."/>
        <input type="text" onChange={inputevent} autoComplete="off" name="Email" value={data.Email} placeholder="Enter your email"/>
        <input type="text" onChange={inputevent} autoComplete="off" name="Subject" value={data.Subject} placeholder="Enter your subject"/>
        <textarea type="text" onChange={inputevent} autoComplete="off" name="Message" value={data.Message} placeholder="Message us"/>
        <button className="botn">Submit</button>
        </form>
        </div>
        </>
    )
}
export default Contact;