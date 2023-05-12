import server from './server'

const port = 3005

server.listen(port, () => {
    console.log('Server running at port ' + port)
})