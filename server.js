import { createServer, request } from 'node:http'

const server = createServer((request, response) => {
    response.write('oi')

    return response.()
     
 })

    server.listen(3333) 


