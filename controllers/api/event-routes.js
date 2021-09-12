const router = require('express').Router();
//const { User } = require('../../models');
const { Events } =require('../../models')


//CREATE new event
router.post('/', async (req, res) => {
    try {
      const dbEventData = await Events.create({
        Eventname: req.body.Eventname,
        guest: req.body.guest,
        schedule: req.body.schedule,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbEventData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;