import { Sequelize } from "sequelize";

const dbase = new Sequelize('jovis_rentalkan', 'jovis_rentalkanname', 'asmoking123', {
    host: 'jovis.medanhosting.co.id',
    dialect: "mysql"
  });

  try {
    await dbase.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default dbase;