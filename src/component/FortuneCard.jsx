
const FortuneCard = ({data}) => {
    
    return (
        <div className="main" >
            <div className="cardPhrase">
            <p className="phrase">{data.phrase}</p>
            </div>
           
        </div>
    )
}
export default FortuneCard