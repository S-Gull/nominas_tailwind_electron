const express = require('express');
const cors = require('cors');
const apiRoutes_vc_ga = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());

// Ruta API principal
app.use('/api', apiRoutes_vc_ga);

// Puerto (puedes cambiarlo para evitar conflictos)
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
