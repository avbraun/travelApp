const admin = require('firebase-admin')
const serviceRequest = require('../../firebase-key.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceRequest),
  databaseURL: 'https://flock-2.firebaseio.com'
})

const firebaseDb = admin.database()

module.exports = firebaseDb
