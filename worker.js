import { Worker, QueueScheduler } from 'bullmq'
import config from './config.js'

const worker = new Worker(
  config.queueName,
  __dirname + '/mailProcessor.js',
  {
      //connection: config.connection,
      concurrency: config.concurrency,
      limiter: config.limiter,
  }
)

worker.on('completed', job => {
  console.log(`${job.id} has completed! have sent email to ${job.data}`)
})

worker.on('failed', (job, err) => {
  console.log(`${job.id} has failed with ${err.message}`)
})

const scheduler = new QueueScheduler(config.queueName, {
connection: config.connection,
})
