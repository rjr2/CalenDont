const User = require('./User');
const Plan = require('./plan')

// User.hasMany(Plans, {
//     foreignKey: 'user_id',
// })

// Plans.belongsTo(User, {
//     foreignKey: 'user_id',
// })

module.exports = { User, Plan } 

