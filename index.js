const app = require('./app');
require('dotenv').config();
const config = require('./config/config');

const port = config.app.port;
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})