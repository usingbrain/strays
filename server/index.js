const express = require('express');
const cors = require('cors');
const router = require('./router');

require('dotenv').config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(router);

app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));
