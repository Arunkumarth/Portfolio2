
function Cvflex(props) {
   return props.inverted?
        <div className="flex">
            <div className="flex-content">    
                {props.Info}
           </div>
           <div className="flex-img-container">
            <img className="flexImage" src={props.imgUrl} alt="image"></img>
            </div>
        </div>
     : 
        <div className="flex">
        <div className="flex-img-container">
        <img className="flexImage" src={props.imgUrl} alt="image"></img>
        </div>
        <div className="flex-content">    
            {props.Info}
        </div>
    </div>
    

}
export default Cvflex;