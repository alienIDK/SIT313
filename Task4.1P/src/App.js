import React from "react";
import NiceBackgound from "./NiceBackground";
import FirstHeader from './FirstHeader';
import SecondHeader from "./SecondHeader";
import SpecialHuman from "./SpecialHuman";
import about from "./about";
import boneType from "./boneType";
import Email from "./Email";
import Footer from "./Footer";



function App(){
    return(
        <div>
            <FirstHeader />
            
            <NiceBackgound />
            <SecondHeader 
                SpecialTitle = "Special Human "
            />
            <div class = 'profile-wrapper '>
                <SpecialHuman 
                    name = {about[0].name}
                    img = {about[0].img}
                    description = {about[0].desciption}
                />
                <SpecialHuman 
                    name = {about[1].name}
                    img = {about[1].img}
                    description = {about[1].desciption}
                />
                <SpecialHuman 
                    name = {about[2].name}
                    img = {about[2].img}
                    description = {about[2].desciption}
                />
                <SpecialHuman 
                    name = {about[3].name}
                    img = {about[3].img}
                    description = {about[3].desciption}
                />
                <SpecialHuman 
                    name = {about[4].name}
                    img = {about[4].img}
                    description = {about[4].desciption}
                />
            </div>
           
            <SecondHeader 
                SpecialTitle = "Special Alien Bone "
            />

            <div class = 'profile-wrapper '>
                <SpecialHuman 
                    name = {boneType[0].name}
                    img = {boneType[0].img}
                    description = {boneType[0].desciption}
                />
                <SpecialHuman 
                    name = {boneType[1].name}
                    img = {boneType[1].img}
                    description = {boneType[1].desciption}
                />
                <SpecialHuman 
                    name = {boneType[2].name}
                    img = {boneType[2].img}
                    description = {boneType[2].desciption}
                />
                <SpecialHuman 
                    name = {boneType[3].name}
                    img = {boneType[3].img}
                    description = {boneType[3].desciption}
                />
                <SpecialHuman 
                    name = {boneType[4].name}
                    img = {boneType[4].img}
                    description = {boneType[4].desciption}
                />
            </div>

            <Email />
            <Footer />

        </div>
        
    )

}

export default App
