import { useState, useEffect } from "react"
import axios from 'axios'
const Clima = () => {

//-----------ESTADOS---------------------------------------

    const [clima, setClima] = useState()
    const [centigrados, setCentigrados] = useState(false)
    const [ciudad, setCiudad] = useState('')
    
//-----------OBTENER COORDENADAS-------------------------------

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(show_location)
    }, [])
    const show_location = (location) =>{

        let lat = location.coords.latitude
        let lng = location.coords.longitude

//-----------SOLICITUD API-------------------------------------

        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a9abf4f1039bf92f67cfb90a1278bef7&lang=es`)
        .then(resp => {
            setClima(resp.data)
            console.log(resp.data)
        })
        .catch(err => console.log(err))
    }

//-----------CAMBIO UNIDADES-----------------------------------

   const temperatura = Math.round(clima?.main?.temp -  273.15)
   const changeUnit =() => {
    setCentigrados(!centigrados)
   }

//------------iMAGENES TIEMPO----------------------------------

   const imagenTiempo = () => {
    const image = {
        1: "/iconos/1.svg",
        2: '/iconos/2.svg',
        3: '/iconos/3.svg',
        4: '/iconos/4.svg',
        5: '/iconos/5.svg',
        6: '/iconos/6.svg',
        7: '/iconos/7.svg',
        8: '/iconos/8.svg',
        9: '/iconos/9.svg'

    }
    if(clima?.weather?.[0].main === 'Clear') return image[1]
    if(clima?.weather?.[0].main === 'Clouds') return image[2]
    if(clima?.weather?.[0].main === 'Rain') return image[5]
    if(clima?.weather?.[0].main === 'Snow') return image[7]
    if(clima?.weather?.[0].main === 'Thunderstorm') return image[9]
    if(clima?.weather?.[0].main === 'Mist') return image[4]
}

//-----------Buscar Ciudad---------------------------

useEffect(() => {
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=a9abf4f1039bf92f67cfb90a1278bef7&lang=es`)
    .then(resp => {
        setClima(resp.data)
        console.log(resp.data)
    })
    .catch(err => console.log(err))
}, [ciudad])
    
//-----------REENDERIZADO---------------------------
    return (
       <>
       <div className="container">
        
        <div className="search">
            <form onSubmit={ev => {
                ev.preventDefault();
                setCiudad(ev.target.search.value)
                }}>
                <input name="search" type="text" placeholder="Buscar Ciudad"/>
                <button>Entrar</button>    
            </form>
        <div className="card">
            <img src={imagenTiempo()} alt=""/>
            <h1>{clima?.name}</h1>
            <h4>{clima?.sys?.country}</h4>
            <h4>{ centigrados ? temperatura : clima?.main?.temp}{centigrados ? '°C' : '°K'}</h4>
            <h4>{clima?.weather?.[0].main}</h4>
            <h4>{clima?.weather?.[0].description}</h4>
        </div>
            <button onClick={changeUnit}>{!centigrados ? 'Cambiar a Centigrados' : 'Cambiar a Kelvin'}</button>
        </div>
        
        <div className="darkMode">
            <button>darkMode</button>
        </div>

       </div>
       
       </> 
    )
}
export default Clima