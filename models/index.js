const User = require('./User');
const Events = require('./event')

// User.hasMany(Events, {
//     foreignKey: 'user_id',
// })

// Events.belongsTo(User, {
//     foreignKey: 'user_id',
// })

module.exports = { User } 
module.exports = { Events };
