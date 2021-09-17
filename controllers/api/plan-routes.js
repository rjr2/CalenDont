const router = require('express').Router();
const { Plan, User } =require('../../models');


//CREATE new plan
router.post('/', async (req, res) => {
  console.log(req.body)
    try {
      const dbPlanData = await Plan.create({
        PlanName: req.body.PlanName,
        creator: req.session.username,
        guest: req.body.guest,
        schedule: req.body.schedule,
      })
  
        res.status(200).json(dbPlanData);
      
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

  
  router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
      const planData = await Plan.findByPk(req.params.id,);
  
      if (!planData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(planData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
    
  
  module.exports = router;