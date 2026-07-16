import fastify from 'fastify'

const app = fastify()

app.get('/', async (request, reply) => {
    return reply.send('Hello from fastify!')
})

app.get('/about', async (request, reply) => {
    return reply.send('This is the about page')
})

app.get('/questions', async (request, reply) => {
    const responseData = ([
        { id: 1, name: 'Q1'},
        { id: 2, name: 'Q2'}
    ])
    return reply.send(responseData)
})

app.listen({ port:8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})