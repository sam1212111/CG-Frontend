import React from 'react'
import Footer, { EndFooter } from './Footer'
import Navbar from './Navbar'
import ParentComponent from './ParentComponent'
import FoodCart from './FoodCart'
import FoodMenu from './FoodMenu'

const App = () => {
    return (
        <div>
            <Navbar />

            <div style={{ minHeight: '80vh' }}>
                {/* <ParentComponent /> */}
                <FoodMenu />
            </div>

            <Footer />
            <EndFooter />
        </div>
    )
}

export default App