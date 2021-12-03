'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Team.belongsTo(models.School, { foreignKey: 'schoolId' });
      models.Team.belongsTo(models.Conference, { foreignKey: 'conferenceId' });
    }
  };
  Team.init({
    ranking: DataTypes.INTEGER,
    school: DataTypes.STRING,
    record: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};