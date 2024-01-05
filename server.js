
import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database  = new DatabaseMemory()

//POST  http://localhost:3333/videos
//PUT   http://localhost:3333/videos/3
//DELETE http://localhost:3333/delete/4

// Route Parameter

server.post('/videos', (request, reply) => {
    const { title, descripition, duration } = request.body
    
    
     database.create({
     title,
     descripition,
     duration,
    })

    console.log(database.list()) 


    return reply.status(201).send()
})
 

server.get('/videos', () =>{
     const videos = database.list()

     console.log(videos)

     return videos
})

server.put('/videos:id', () =>{
     const videoId = request.params.id
     const { title, descripition, duration } = request.body

     database.update(videoId, {
          title,
          descripition,
          duration,
       
     })
     return reply.status(204).send()
})

server.delete('/videos/:id', () =>{
     return 'Hello node'
})
server.listen({
     port: 3333,
})
