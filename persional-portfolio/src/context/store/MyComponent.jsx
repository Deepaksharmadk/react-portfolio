import React, { useContext, useState } from 'react'
import myContext from './myContext'
function MyComponent({ children }) {
    const [user, setuser] = useState('')
    return (
        <myContext.Provider value={{ user, setuser }}>
            {children}
        </myContext.Provider>
    )
}

export default MyComponent