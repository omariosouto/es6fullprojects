import React from 'react'
import { render } from 'react-dom'
import teste from './teste'

const App = <h1>Reactando aqui aassas! ${teste}</h1>

render(App, document.querySelector('[data-app="react-app"]'))
