import React from 'react'

const Footer = () => {
    return (
        <>
            <footer style={{
                backgroundColor: '#222',
                color: 'white',
                padding: '40px 20px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '30px'
                }}>

                    <div>
                        <h2>UrbanBytes</h2>
                        <p>Making your food experience better 🍔</p>
                    </div>

                    <div>
                        <h3>Quick Links</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li>Home</li>
                            <li>Menu</li>
                            <li>Cart</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Contact</h3>
                        <p>Email: support@myapp.com</p>
                        <p>Phone: +91 9876543210</p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer


export let EndFooter = () => {
    return (
        <div style={{
            backgroundColor: '#111',
            color: 'white',
            textAlign: 'center',
            padding: '10px'
        }}>
            © 2026 MyApp. All rights reserved.
        </div>
    )
}