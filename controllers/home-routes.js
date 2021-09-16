const router = require('express').Router();

const { UserID, Plan } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, async (req, res) => {

  try {
    const dbPlans = await Plan.findAll();

   const plans = dbPlans.map((plan) =>
      plan.get({ plain: true })
   );

    res.render('homepage', {
      plans,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/about', (res) => {
  res.render('about');
})


router.get('/plan/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbPlans = await Plan.findByPk(req.params.id, {
        include: [
          {
            model: Plan,
            attributes: [
              'id',
              'title',
              'date',
              'time',
              'attendees',
              'details',
              'cancelled'
            ],
          },
        ],
      });
      const plan = dbPlans.get({ plain: true });
      res.render('plan', { plan, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;