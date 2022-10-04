console.clear();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const app = require('express')();

require('./src/routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});