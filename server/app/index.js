import Express from 'express'
import path from 'path'

const Router = Express.Router();
const App = new Express()

// Setup routes for Front
App.use(Express.static(path.join(__dirname, '../../public/')));
App.get('/', (req,res) => {
  res.sendFile(path.join(`${__dirname}/../../public/index.html`))
})

// Setup subdomain for API
App.get('/api', (req, res) => {
  res.json({api: 'Node API with Subdomain Setup'})
})

export default App
