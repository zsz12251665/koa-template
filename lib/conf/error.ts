class ConfigurationError extends Error {
	name: string;
	constructor(message: string) {
		super(message);
		if (Error.captureStackTrace)
			Error.captureStackTrace(this, this.constructor);
		this.name = 'ConfigurationError';
		this.message = message;
	}
}

export default ConfigurationError;
