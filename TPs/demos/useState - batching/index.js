import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import App from './App'

// with react 17
ReactDOM.render(<App appId="react17" />, document.getElementById('root'))

// with react 18
/*
const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App appId="react18" />)
*/
