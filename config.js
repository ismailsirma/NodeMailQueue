export default {
    queueName: process.env.QUEUE_NAME || 'mailbot',
    concurrency: Number.parseInt(process.env.QUEUE_CONCURRENCY || '1'),
    connection: {
      host: process.env.REDIS_HOST || 'localhost',
      port: Number.parseInt(process.env.REDIS_PORT || '6379'),
    },
    limiter: {
      max: Number.parseInt(process.env.MAX_LIMIT || '1'),
      duration: Number.parseInt(process.env.DURATION_LIMIT || '3000')
    }
}