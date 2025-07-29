const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, Images)
app.use(express.static(__dirname));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
