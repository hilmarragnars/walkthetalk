import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        margin: 0;
        font-size: 20px;
        font-family: 'Livvic', sans-serif;
        font-weight: 300;
    }
`

export default GlobalStyle
