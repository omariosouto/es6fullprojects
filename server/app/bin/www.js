import App from '../index.js'

const Server = App.listen(3000, () => {
  let host = Server.address().address
  let port = Server.address().port

  console.log('Env', process.env.NODE_ENV)

  let ambient = process.env.NODE_ENV !== 'production' ? 'development' : 'production'

  console.log(`Example app running on ${ambient} listening at http://${host}:${port}`)
})
