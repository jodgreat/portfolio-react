import React  from "react";

function CardImage(props){
 return  <div>
 <div className="card-image-illustration">
     <img src={props.image} alt="" />
 </div>
</div>
}
export default CardImage;