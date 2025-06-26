import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const uploadMidiaValidator = vine.compile(
  vine.object({
    file: vine.file({
      size: 1 * 1000 * 1024 * 1024, // 1 GB
      extnames: ['mp4', 'mov', 'avi', 'webm', 'MP4', 'MOV', 'AVI', 'WEBM'],
    }),
  })
)
const messages = {
  'file.required': ...,
  'file.extname': ...,
  'file.size': ...,
  'file.file': ...,
}

const messagesProvider = new SimpleMessagesProvider(messages)

uploadMidiaValidator.messagesProvider = messagesProvider
