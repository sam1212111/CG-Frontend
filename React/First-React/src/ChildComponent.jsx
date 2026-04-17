import React from 'react'

const ChildComponent = (props) => {
    return (
        <div>
            Child Component
            <br />
            <img src={props.profileImg} alt="Profile Image" width="100" height="100" />

            <br />
            Name = {props.uName}
            <br />
            Age = {props.uAge}
            <br />
            City = {props.uAddress.city}
            <br />
            Country = {props.uAddress.country}

            <ul>
                {
                    props.skills.map((skill, index) => (
                        <ul key={index}>
                        <li >{skill}</li>
                        </ul>
                    ))
                }
            </ul>
        </div>
    )
}

export default ChildComponent