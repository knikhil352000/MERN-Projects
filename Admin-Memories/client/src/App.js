import React from 'react'

import { Container} from '@material-ui/core'
import Navbar from './Navbar/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home/Home'
const App = () => {

    return (
        <Container maxidth='lg'>
            <Navbar />
            <Home />
        </Container>
    )
}

export default App;
