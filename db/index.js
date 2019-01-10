const Sequelize = require('sequelize');

const sequelize = new Sequelize('twitchchat', 'root', 'WallacePennyToby', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false
  },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING
  },
  twitch_sub: {
    type: Sequelize.BOOLEAN
  },
  mod_status: {
    type: Sequelize.BOOLEAN
  },
  color: {
    type: Sequelize.STRING
  }
});

const Chat = sequelize.define('chats', {
  video_timestamp: {
    type: Sequelize.STRING
  },
  chat: {
    type: Sequelize.TEXT
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  video_id: {
    type: Sequelize.INTEGER
  }
});

// function test() {
  // sequelize
  //    .authenticate()
  //    .then(() => {
  //      console.log('connection from database is good')
  //    })
  //    .catch(err => {
  //      console.error('no can do bruh', err);
  //    })
  // User.create({username: 'A_Seagull', twitch_sub: true, mod_status: true})
  //   .then(() => {
  //     return User.findAll({ where: {username: 'A_Seagull'}})
  //   })
  //   .then((user) => {
  //     console.log(user, user.username + 'exists');
  //   })
  //   .catch((err)=> {
  //     console.error(err);
  //   })
//   User.findById(9)
//     .then((me) => {
//       console.log(me.dataValues.username)
//     })
//     .catch((err)=> {
//       console.error(err);
//     })
// }

// test()


const grabUsernameFromDb = (id) => {
  return User.findByPk(id)
    .then((foundUser) => {
      const username = foundUser.dataValues;
      return username;
    })
    .catch((err)=> {
      console.error('from db', err);
    });
};

module.exports = grabUsernameFromDb;

