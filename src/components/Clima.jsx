import { useState, useEffect } from "react"
import axios from 'axios'
const Clima = () => {
    const [clima, setClima] = useState()

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(show_location)
    }, [])
    const show_location = (location) =>{

        let lat = location.coords.latitude
        let lng = location.coords.longitude

        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a9abf4f1039bf92f67cfb90a1278bef7&lang=es`)
        .then(resp => {
            setClima(resp.data)
            console.log(resp.data)
        })
        .catch(err => console.log(err))
    }

    return (
       <>
       <div className="container">
        
        <div className="search">
            <input type="text" />
            <button>Entrar</button>
            <div className="card">
                
            </div>
            <button>Cambiar a Kelvin</button>
        </div>
        <div className="darkMode">
            <button>darkMode</button>
        </div>

       </div>
       
       </> 
    )
}
export default Clima