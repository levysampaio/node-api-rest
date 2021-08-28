const app = require('./config/express')();
const port = app.get('port');

// RODANDO A APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});