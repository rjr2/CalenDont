const router = require("express").Router();

const { UserID, Plan } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/home", withAuth, async (req, res) => {
  try {
    //   //   const dbPlans = await Plans.findAll({
    //   //     include: [
    //   //       {
    //   //         model: Plans,
    //   //         attributes: ['date', 'time', 'title'],
    //   //       },
    //   //     ],
    //   // });

    //   //  const plans = dbPlans.map((plan) =>
    //   //     plan.get({ plain: true })
    //   //  );

    res.render("homepage", {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/about', (res) => {
//   res.render('about');
// })

router.get("/plan/:id", withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page

    try {
      const dbPlans = await Plan.findByPk(req.params.id, {
        include: [
          {
            model: Plan,
            attributes: [
              "id",
              "title",
              "date",
              "time",
              "attendees",
              "details",
              "cancelled",
            ],
          },
        ],
      });
      const plan = dbPlans.get({ plain: true });
      res.render("plan", { plan, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.get("/login", (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect("/home");
      return;
    }
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
