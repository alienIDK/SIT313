import React from 'react';

function SpecialHuman(props){
    return (

        <div class= 'profile-container '>
           <div class="profile">
                <img src={props.img} alt='human'/>
                <h2 class="name">{props.name}</h2>
                <b class="description-heading">Description:</b>
                <p class="description">{props.description}</p>
            </div>

        </div>
    
    
    
    
    )
  
}


export default SpecialHuman