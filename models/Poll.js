module.exports = (sequelize, DataTypes) => {
  const Poll = sequelize.define('Poll', {
    poll_str_id: { type: DataTypes.STRING, unique: true },
    question: DataTypes.STRING,
    status: { type: DataTypes.STRING, defaultValue: 'active' },
  });
  Poll.associate = models => {
    Poll.hasMany(models.PollOption, { foreignKey: 'poll_id' });
  };
  return Poll;
};