const router = require('express').Router();

const userRoutes = require('./user-routes');
const planRoutes = require('./plan-routes')

router.use('/user', userRoutes);
router.use('/plan', planRoutes);

module.exports = router;