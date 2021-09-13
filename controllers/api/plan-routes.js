const router = require('express').Router();
const { Plan } =require('../../models');


//CREATE new plan
router.post('/api/plan', async (req, res) => {
    try {
      const dbPlanData = await Plan.create({
        PlanName: req.body.PlanName,
        guest: req.body.guest,
        schedule: req.body.schedule,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbPlanData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;