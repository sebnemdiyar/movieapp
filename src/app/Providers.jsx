"use client"

import React from 'react'
import { ThemeProvider } from 'next-themes'

const Providers = ({ children }) => {
    return (
        <ThemeProvider enabledSystem={true} attribute="class" >
            {children}
        </ThemeProvider>
    )
}

export default Providers