//Database Connection
import winston from 'winston';
import db from '../config/database';

export default async () => {
  try {
    await db.authenticate();
    await db.sync();
    winston.info(`Database connected...`);
  } catch (error) {
    winston.error(`Error: ${error}`);
  }
};
// db.sync()
//   .then(() => {
//     app.listen(PORT, console.log(`Server started on port ${PORT}`));
//   })
//   .catch((err) => console.log('Error: ' + err));
