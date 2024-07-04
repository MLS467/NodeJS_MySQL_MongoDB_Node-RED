(async () => {
    const db = require('./db');
    const cliente = await db.todosCliente();
    console.log(cliente);
})()