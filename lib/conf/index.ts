import ConfigurationError from './error';
import prefixes from './prefix';

/**
 * Get the config value from `process.env` with prefix fallbacks
 * @param {string} field config name
 * @param {string} defaultValue default value of the config
 * @throws {ConfigurationError} Error when no config is found
 * @returns {string} config value
 */
export default function (field: string, defaultValue?: string): string {
	for (const prefix of prefixes) {
		const v = process.env[prefix + field];
		if (v !== undefined)
			return v;
	}
	if (defaultValue === undefined)
		throw new ConfigurationError(`Field '${field}' cannot be found!`);
	return defaultValue;
}
