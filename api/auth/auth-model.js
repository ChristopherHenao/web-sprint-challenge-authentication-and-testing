const db = require('../../data/dbConfig')

function findById (Id) {
    return db('users').where('id', Id).first()
}

async function addUser (user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

module.exports = {
    findById,
    addUser
}