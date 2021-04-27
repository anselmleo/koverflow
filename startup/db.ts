//Database Connection
import winston from 'winston';
import db from '../config/db/models';

export default async () => {
  try {
    // await db.sequelize.authenticate();
    await db.sequelize.sync();
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
