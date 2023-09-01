import React, { useState } from "react";
import NiceBackgound from "./NiceBackground";
import FirstHeader from "./FirstHeader";
import SecondHeader from "./SecondHeader";
import SpecialHuman from "./SpecialHuman";
import about from "./about";
import boneType from "./boneType";
import Email from "./Email";
import Footer from "./Footer";
import './index.css';

function App() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <FirstHeader />

      <NiceBackgound />
      <SecondHeader SpecialTitle="Special Human " />
    
        <div className="profile-wrapper ">
            {about.slice(0, showMore ? about.length : 5).map((item, index) => (
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

      {about.length > 5 || boneType.length > 5 ? (
        <button class='more-button' onClick={() => setShowMore(!showMore)}>
          {showMore ? "Show Less" : "Show More"}
        </button>
      ) : null}

      <Email />s
      <Footer />
    </div>
  );
}

export default App;
