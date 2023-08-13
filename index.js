const express = require('express');
const app = express();
const path = require('path');
const { exec } = require('child_process');
const crypto = require('crypto');
const cors = require('cors');

require('dotenv').config()
app.use(cors());


const webhookSecret = process.env.SECRET;

app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/webhook-trigger', (req, res, next) => {
  const signature = req.headers['x-hub-signature-256'];
  
  if (!signature) {
    console.log('Unauthorized: Missing signature');
    return res.status(401).send('Unauthorized: Missing signature');
  }

  const hmac = crypto.createHmac('sha256', webhookSecret);
  const expectedSignature = `sha256=${hmac.update(JSON.stringify(req.body)).digest('hex')}`;
  
  if (signature !== expectedSignature) {
    console.log('Unauthorized: Invalid signature');
    return res.status(401).send('Unauthorized: Invalid signature');
  }

  console.log('Signature verified: Webhook request accepted');
  next();
});


app.post('/api/webhook-trigger', (req, res) => {
  if (req.headers['x-github-event'] === 'push') {
    const commits = req.body.commits;
    console.log('Push event commits:', commits);
    
    exec('sh deploy.sh', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error}`);
        return res.status(500).send('Error during deployment.');
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      
      res.status(200).send('Webhook event received and deployment started.');
    });
  } else {
    res.status(200).send('Webhook event received.');
  }
});

app.get('/api/ping', (req, res) => {
  console.log({"message": `ping success ${new Date()}`});
  res.send({"message": `ping success ${new Date()}`})
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
