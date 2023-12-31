import './App.css'
import phrases from './data/phrases.json'
import FortuneCard from './component/FortuneCard'
import fondo1 from '/fondos/fondo1.2.jpg'
import fondo2 from '/fondos/fondo2.2.jpg'
import fondo3 from '/fondos/fondo3.2.jpg'
import fondo4 from '/fondos/fondo4.2.jpg'
import { useState } from 'react'

function App() {
  const [fondo, setFondo] = useState(fondo1)
  const [index, setIndex] = useState(0)

  

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const changeFondo = () => {
    if(fondo === fondo1) setFondo(fondo2)
    if(fondo === fondo2) setFondo(fondo3)
    if(fondo === fondo3) setFondo(fondo4)
    if(fondo === fondo4) setFondo(fondo1)
    document.getElementById('main__app').style.backgroundImage = `url(${fondo})`
    addIndex()
  }
const addIndex = ()=>{
  
    setIndex(randomNumberInRange(0,phrases.length -1))
 
  
}
window.addEventListener('load', e => {
  document.getElementById('main__app').style.backgroundImage = `url(${fondo})`
})

  return (
    <div id='main__app' className='main__app'>
     <FortuneCard 
     data={phrases[index]}
     changeFondo={changeFondo}
     />
    
    </div>
  )
}

export default App
