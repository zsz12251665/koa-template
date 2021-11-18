import bunyan from 'bunyan';
import fs from 'fs';
import path from 'path';
import conf from '../conf';

const name = conf('LOGGER_NAME', 'log');
const location = conf('LOGGER_PATH', 'logs');
if (!fs.existsSync(location))
	fs.mkdirSync(location);

const logger = bunyan.createLogger({
	name,
	streams: [{
		level: 'trace',
		stream: process.stdout
	}, {
		level: 'info',
		path: path.join(location, 'info.log')
	}, {
		level: 'error',
		path: path.join(location, 'error.log')
	}]
});

export default logger;
