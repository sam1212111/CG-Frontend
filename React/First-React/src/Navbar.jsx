import React from 'react'

const Navbar = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 30px',
            backgroundColor: '#333',
            color: 'white'
        }}>
            <h2>UrbanBytes</h2>

            <ul style={{
                display: 'flex',
                listStyle: 'none',
                gap: '20px'
            }}>
                <li style={{cursor:'pointer'}}>Home</li>
                <li style={{cursor:'pointer'}}>About</li>
                <li style={{cursor:'pointer'}}>Contact</li>
                <li style={{cursor:'pointer'}}>Cart</li>
            </ul>
        </nav>
    )
}

export default Navbar