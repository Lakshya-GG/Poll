const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/db');
const pollRoutes = require('./routes/pollRoutes');
const voteRoutes = require('./routes/voteRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/polls', pollRoutes);
app.use('/polls/:poll_str_id/vote', voteRoutes);

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
});
