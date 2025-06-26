import { uploadMidiaValidator } from '#validators/midia_validator'
import type { HttpContext } from '@adonisjs/core/http'
import Queue from 'bullmq'

export default class MidiaController {
  private queue: Queue

  constructor() {
    this.queue = new Queue(...)
  }

  async upload({ request, response }: HttpContext) {
    await request.validateUsing(...)

    const file = ...

    await this.queue.add('optimize', ...)

    return response.status(200).json({
      message: 'Arquivo enviado com sucesso',
    })
  }
}
