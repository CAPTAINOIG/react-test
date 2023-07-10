import axios from 'axios'
import React, { useState } from 'react'
import '../assets/Styles/Api.css'
// import sun from '../assets/Image/sun.jpg'




const Api =()=>{
    
    const [user3, setuser3] = useState({})
    const [city, setcity] = useState("")
        
        var apikey = "ee26ec43891666e8d4e8069a734cddff"
        let endpoint3 =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
        const getData3 =()=>{
            axios.get(endpoint3)
            .then((response)=>{
                console.log(response.data);
                setuser3(response.data)
                // console.log(user3);
                setcity("")
            })
            .catch((err)=>{
                console.log(err);
            })
        }  
    return (
        <>
        <div id='div'> 
        
        <input id='input' type="text" placeholder='enter your city'  onChange={(e) =>setcity(event.target.value)} value={city}/>
        <button id='button' onClick={getData3}>Get Data3</button>
        
        <div id='divv'>
        <h1>Name of city: {user3.name}</h1>
        <h1>Timezone: {user3.timezone}</h1>
        <h1>Visibility: {user3.visibility}</h1>
        <h1>{user3.base}</h1>
        <h1>{user3.cod}</h1>
        <h1>{user3.dt}</h1>
        </div>

        </div>

       
     
        </>
        )
    }
    
    export default Api