import React, { useContext, useState } from 'react'
import myContext from './myContext'
import Header from '../../components/Header'
import Footer from '../../components/layout/Footer/Footer'
function MyComponent({ children }) {
    const [user, setuser] = useState('')
    return (
        <myContext.Provider value={{ user, setuser }}>
            <Header />
            {children}
            <Footer />
        </myContext.Provider>
    )
}

export default MyComponent