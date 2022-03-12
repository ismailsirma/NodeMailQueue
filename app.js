import {Queue} from 'bullmq'
import config from './config.js'

const mailQueue = new Queue(config.queueName)

const enqueue = async (jobName, mail) => {
    await mailQueue.add(jobName, mail)
    console.log(`Mail sending to ${mail.to}`)
    process.exit(0)
}

enqueue(
    'welcome-mail',
    {
      from: 'ismail@sirma.com',
      to: 'name@domain.com',
      subject: 'Hey BullMQ',
      text: 'This is a just a test.',
    }
);