const express = require('express')
const path = require('path')
const { get } = require('request')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, 'views')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.static(path.join(__dirname, '../images')))
app.use(express.static(path.join(__dirname, '../media')))
app.use(express.static(path.join(__dirname, '../../weights')))
app.use(express.static(path.join(__dirname, '../../dist')))

// app.get('/', (req, res) => res.redirect('/face_detection'))
app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'liveFaceExpressionRecognition.html')))

app.post('/store-emotions', async (req, res) => {
  const { emotions } = req.body
  try {
    //TODO: add to mongo
    return res.status(202).send('Saved');
  } catch (err) {
    return res.status(404).send(err.toString())
  }
})

app.listen(3000, () => console.log('Listening on port 3000!'))