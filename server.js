const app = require('./index');

const PORT = 3400;
// eslint-disable-next-line no-console
app.listen(PORT, () => {
  console.log(`Server Started At: ${PORT}`);
});
