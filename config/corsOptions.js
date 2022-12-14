const whitelist = [
    'https://www.google.com', 
    'http://127.0.0:5500', 
    'http://localhost:3500'
]

const corsOption = {
  origin: (origin, callback)=> {
    if (whitelist.indexOf(origin) !== -1 || !origin){
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

module.exports = corsOption;