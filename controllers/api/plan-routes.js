const router = require('express').Router();
const { Plan } =require('../../models');


//CREATE new plan
router.post('/', async (req, res) => {
    try {
      const dbPlanData = await Plan.create({
        PlanName: req.body.PlanName,
        creator: req.body.creator,
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

  router.get('/', async (req, res) => {
    const planData = await Plan.findAll().catch((err) => {
      res.json(err);
    })
    const plans = planData.map((plan) => plan.get({ plain: true }));
    res.status(200).json(planData);
  });
  
    
  
  module.exports = router;