const User = require('./User');
const Plans = require('./plan')

// User.hasMany(Plans, {
//     foreignKey: 'user_id',
// })

// Plans.belongsTo(User, {
//     foreignKey: 'user_id',
// })

module.exports = { User } 
module.exports = { Plans };
