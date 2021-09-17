const db = require('../../data/dbConfig')

function findById (Id) {
    return db('users').where('id', Id).first()
}

async function addUser (user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

function findBy(filter) {
    return db('users').where(filter)
}

module.exports = {
    findById,
    addUser,
    findBy
}