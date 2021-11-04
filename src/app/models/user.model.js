//db정의
import Sequelize from 'sequelize';
import config from '../../config/config.json';

const sequelize = new Sequelize(config.database, config.username, config.password, config);
