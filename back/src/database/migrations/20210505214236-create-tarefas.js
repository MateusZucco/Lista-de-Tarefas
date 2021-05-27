'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable("tarefas",{
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      notas:{
        type: Sequelize.STRING,
        allowNull: false,
      } ,
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
    });
  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.dropTable("tarefas");

  }
};