
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database  = new DatabaseMemory()

//POST  http://localhost:3333/videos
//PUT   http://localhost:3333/videos/3
//DELETE http://localhost:3333/delete/4

// Route Parameter

server.post('/videos', (request, reply) => {
    database.create({
     title: 'Video 01',
     descripition: 'Esse é o vídeo 01',
     duration: 180,
    })

    console.log(database.list())

    return reply.status(201).send()
})
 

server.get('/videos', () =>{
     return 'Hello rocketseat'
})

server.put('/videos:id', () =>{
     return 'Hello node'
})

server.delete('/videos/:id', () =>{
     return 'Hello node'
})
server.listen({
     port: 3333,
})
