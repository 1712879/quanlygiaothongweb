const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000; // Step 1

const path = require('path');
app.use(express.static(path.join(__dirname, "quanlygiaothongweb", "build")))
app.use(express.static( 'quanlygiaothongweb/build' ));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'quanlygiaothongweb', 'build', 'index.html')); // relative path
});
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})