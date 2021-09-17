const db = require('../../data/dbConfig')

const checkUsernameIsFree = async (req, res, next) => {
    const exists = await db('users').where('username', req.body.username.trim())
    if (exists.length) {
        next({ status: 409, message: 'username taken' })
    }
    else {
        next()
    }
}

const validateUser = async (req, res, next) => {
    const { username, password } = req.body
    if (!username.trim() || !password.trim()) {
        next({ status: 400, message: 'username and password required'})
    }
    else {
        req.username = username.trim()
        req.password = password.trim()
        next()
    }
}

module.exports = {
    checkUsernameIsFree,
    validateUser
  }
  