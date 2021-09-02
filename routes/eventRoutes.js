const express = require('express')
const Event = require('../models/Event')
const router = express.Router()

router.get('/events', async (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : 0
  const skip = req.query.skip ? parseInt(req.query.skip) : 0
  try {
    const result = await Event.find()
      .sort({datum: -1})
      .limit(limit)
      .skip(skip)
    res.send(result)    
  } catch (error) {
    res.status(400).send(error)
  }
})

router.get('/events/:id', async (req, res) => {
  try {
    const result = await Event.findById(req.params.id)
    if (!result)
      return res.status(404).send()
    res.send(result)    
  } catch (error) {
    res.status(400).send(error)
  }
})

router.post('/events', async (req, res) => {
  const event = new Event(req.body)
  try {
    await event.save()
    res.status(201).send(event)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.put('/events/:id', async (req, res) => {
  const updates = Object.keys(req.body)

  try {
    const event = await Event.findById(req.params.id)
    if (!event)
      return res.status(404).send()

    updates.forEach(element => event[element] = req.body[element])
    await event.save()
    res.send(event)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.delete('/events/:id', async (req, res) => {
  try {
    const result = await Event.findByIdAndDelete(req.params.id)
    if(!result)
      return res.status(404).send()
    res.send(result)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = router