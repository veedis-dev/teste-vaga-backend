import redisConfig from '#config/redis'
import app from '@adonisjs/core/services/app'
import { Worker } from 'bullmq'
import ffmpeg from 'fluent-ffmpeg'
import crypto from 'node:crypto'

const connection = ...

new Worker(
  '...',
  async (job) => {
    console.log('Iniciando otimização do arquivo:', ...)

    const inputPath = ...
    const outputPath = app.makePath(..., `${...}.mp4`)

    await new Promise((resolve, reject) => {
      ffmpeg(inputPath)
        ...
        .on('end', async () => {
          console.log('Conversão concluída!')
          console.log('Arquivo salvo em:', outputPath)
          resolve(true)
        })
        .on('error', (err) => {
          console.error('Erro ao realizar a conversão:', err.message)
          reject(err.message)
        })
        .save(outputPath)
    })
  },
  { connection, removeOnComplete: { count: 5 } }
)
