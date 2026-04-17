import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    let userName = "John Doe";
    let userAge = 30;
    let address ={
        city: "New York",
        country: "USA"
    };
    let skills = ['js','ts','react'];

    let profileImg = "https://www.w3schools.com/howto/img_avatar.png";
    return (
        <div>
            Parent Component
            <ChildComponent uName={userName} uAge={userAge} uAddress={address} profileImg={profileImg} skills={skills} />
        </div>
    )
}

export default ParentComponent
