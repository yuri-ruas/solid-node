import { FastifyRequest, FastifyReply } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {
  return reply.status(200).send()
}
