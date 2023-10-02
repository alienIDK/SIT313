import Footer from "./Footer";
import React, { useState } from "react";
import SecondHeader from "./SecondHeader";
import SpecialHuman from "./SpecialHuman";
import humanlist from "./humanlist"
import boneType from "./boneType";



const Home = () => {
    const [showMore, setShowMore] = useState(false);
    return ( 
        <div className="home">
            <div className="niceBackground-container">
                <img src={require('./images/niceBG.png')} alt="niceBG" className="niceBackground-image" />
            </div>
            <SecondHeader SpecialTitle="Special Human " />
    
            <div className="profile-wrapper ">
                {humanlist.slice(0, showMore ? humanlist.length : 5).map((item, index) => (
                <SpecialHuman
                    key={index}
                    name={item.name}
                    img={item.img}
                    description={item.desciption}
                />
                ))}
            </div>


            <SecondHeader SpecialTitle="Special Alien Bone " />

            <div className="profile-wrapper ">
                {boneType.slice(0, showMore ? boneType.length : 5).map((item, index) => (
                <SpecialHuman
                    key={index}
                    name={item.name}
                    img={item.img}
                    description={item.desciption}
                />
                ))}
            </div>



            {boneType.length > 5 ? (
            
                <button class='more-button' onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show Less" : "Show More"}
                </button>
            ) : null}


            <Footer/>

        </div>
        
     );
}
 
export default Home;