const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(process.env.PORT || 8080)
// app.listen(8080, () => {
//   console.log(`App listening at port 8080`)
// })