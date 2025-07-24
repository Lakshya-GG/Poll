module.exports = (sequelize, DataTypes) => {
  const PollOption = sequelize.define('PollOption', {
    option_str_id: { type: DataTypes.STRING, unique: true },
    text: DataTypes.STRING,
    vote_count: { type: DataTypes.INTEGER, defaultValue: 0 },
  });
  PollOption.associate = models => {
    PollOption.belongsTo(models.Poll, { foreignKey: 'poll_id' });
  };
  return PollOption;
};