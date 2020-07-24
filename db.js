const db = require('mongoose');

db.Promise = global.Promise
const connect = async () => {
    await db.connect('mongodb+srv://claudio:redhotlarenga2017@cluster0-awurw.mongodb.net/prueba?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true
    })
    .then((resolve) => {
        console.log('[DB] Success contected')
    })
    .catch((reject) => {
        console.log(`[DB] fail contected ${reject}`)
    })
}

module.exports = connect;

