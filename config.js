module.exports = {
  'development': {
    "secret": "bd17ddffc6694d25834a99ac2708a498",
    "database": "mongodb://saurabh:12345@ds139969.mlab.com:39969/mylogindb",
    // "database": "mongodb://localhost:27017/mylogindb",

    "siteUrl": "http://localhost:3000",
    //"siteUrl": "https://myappmcq.herokuapp.com",
    // "email": {
    //   "from": "s26c.sayan@gmail.com",
    //   "host": "smtp-pulse.com",
    //   "port": 465,
    //   "auth": {
    //     "user": "s26c.sayan@gmail.com",
    //     "pass": "Gne7SFoGLJ75B"
    //   }
    // }
  },
    'production': {
    "secret": "bd17ddffc6694d25834a99ac2708a498",
    "database": "mongodb://saurabh:12345@ds139969.mlab.com:39969/mylogindb",       //WORKS ON INTERNET -- MLAB DATABASE ACCESS
    // "database": "mongodb://localhost:27017/mylogindb",                           //WORKS OFFLINE -- LOCAL DATABASE HANDLE

    "siteUrl": "http://localhost:3000",
    //"siteUrl": "https://myappmcq.herokuapp.com",
    "email": {
      "from": "s26c.sayan@gmail.com",
      "host": "smtp-pulse.com",
      "port": 465,
      "auth": {
        "user": "s26c.sayan@gmail.com",
        "pass": "Gne7SFoGLJ75B"
      }
    }
  }
  
  
};
