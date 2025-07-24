module.exports = (sequelize, DataTypes) => {
  const VoteLog = sequelize.define('VoteLog', {
    user_identifier: DataTypes.STRING,
  });
  VoteLog.associate = models => {
    VoteLog.belongsTo(models.Poll, { foreignKey: 'poll_id' });
    VoteLog.belongsTo(models.PollOption, { foreignKey: 'option_voted_id' });
  };
  return VoteLog;
};