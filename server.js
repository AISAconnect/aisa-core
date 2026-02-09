const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    system: "AISA",
    status: "online",
    message: "AISA Core is running"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`AISA Core running on port ${PORT}`));
