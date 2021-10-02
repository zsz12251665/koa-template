import bunyan from 'bunyan';

const logger = bunyan.createLogger({
	name: <string>process.env.LOGGER_NAME
});

export default logger;
