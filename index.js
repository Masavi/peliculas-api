require('dotenv').config();
require('./database');
const { PORT, app } = require('./server');

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));