const router = require('express').Router();
const { UserID, Events } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbEvents = await Events.findAll({
      include: [
        {
          model: Events,
          attributes: ['date', 'time', 'title'],
        },
      ],
    });

    const events = dbEvents.map((event) =>
      event.get({ plain: true })
    );

    res.render('homepage', {
      Events,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/event/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbEvents = await events.findByPk(req.params.id, {
        include: [
          {
            model: Events,
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
      const event = dbEvents.get({ plain: true });
      res.render('event', { event, loggedIn: req.session.loggedIn });
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