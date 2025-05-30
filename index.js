const express = require('express');
const app = express();
const forwarder = require('./routes/forwarder');

app.use(express.json());

// Montamos el router en /forward
app.use('/forward', forwarder);

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('👋 Bienvenido al servicio de reenvío de datos. Usa el endpoint POST /forward');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
