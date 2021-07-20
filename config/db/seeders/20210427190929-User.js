'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        password: 'asldfjlksjdflksdjfl',
        isVerified: true,
        accessToken: 'asdfasdfklsdfkljsdf',
        refreshToken: 'asdfsdfsdfsdfsdfsdf',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
