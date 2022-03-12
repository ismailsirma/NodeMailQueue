import {Queue} from 'bullmq'
import config from './config.js'

const mailQueue = new Queue(config.queueName)

const enqueue = async (jobName, mail, opts) => {
    await mailQueue.add(jobName, mail, opts)
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
    },
    { delay : 1000 * 5}
);