import http from 'http';
import app from '../app';
import logger from '../lib/logger';

const port = process.env.PORT;

async function createServer() {
	/**
	 * Additional services which requires initializations as async operations
	 * e. g.
	 * await sequelize.authenticate();
	 */
	return http.createServer(app.callback()).listen(port);
}

createServer()
	.then((server) => {
		const addr = server.address();
		if (addr === null)
			logger.warn('The app has not started yet or has been closed!');
		else if (typeof addr === 'string')
			logger.info(`App is listening to pipe ${addr}!`);
		else
			logger.info(`App is listening to port ${addr.port}!`);
	})
	.catch((error) => {
		setImmediate(() => {
			logger.error(error);
			process.exit();
		});
	});
