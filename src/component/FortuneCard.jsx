import '../styles/Fortune.css'
const FortuneCard = ({data, changeFondo}) => {


    return (
        <div id='fortune' className="main__fortune" >
            
            <div className="cardPhrase">
            <p className="phrase">{data.phrase}</p>
           
            </div>
            <button className='boton' onClick={changeFondo}>Probar Suerte</button>

        </div>
    )
}
export default FortuneCard