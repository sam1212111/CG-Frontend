import React from 'react'

const FoodCart = (props) => {
    console.log(props);
    return (
        < div style={{display: 'flex', flexDirection:'row' ,gap:'30px', padding:'20px', flexWrap:'wrap'}}>
            {props.foodData.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <img style={{ width: '200px', height: '200px',}} src={item.image} alt={item.name} />
                </div>
            ))}

        </div>
    )
}

export default FoodCart;