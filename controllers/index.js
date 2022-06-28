const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./dashboard-routes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('./dashboard', dashboardRoutes)

module.exports = router;
