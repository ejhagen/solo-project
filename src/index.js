import React from 'react'
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App tab="home" />)

import App from '../client/App'

// Importing this here is making it render in the page
// Changed it to import from index.html but running into other issues there
// TODO: investigate getting your styles to apply
// import styles from "/client/scss/style.scss";
