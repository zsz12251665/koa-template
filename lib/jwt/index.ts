import { randomBytes } from 'crypto';
import { JsonWebTokenError, JwtPayload, sign as signJWT, SignOptions, verify } from 'jsonwebtoken';
import conf from '../conf';
import * as options from './options';

const issuer = conf('JWT_ISSUER', 'JWT');
const secret = conf('JWT_SECRET', randomBytes(16).toString('hex'));

/**
 * Sign a JWT token
 * @param {object} content Token content
 * @param {SignOptions} options Token signing options
 * @returns {string} JWT token
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function sign(content: object, options: SignOptions): string {
	return signJWT(content, secret, Object.assign({ issuer }, options));
}

/**
 * Interpret a JWT token
 * @param {string} token JWT token
 * @returns {JwtPayload} Token content
 * @throws {JsonWebTokenError} Error when interpreting
 */
function interpret(token: string): JwtPayload {
	const res = verify(token, secret, { issuer });
	if (typeof res === 'string')
		throw new JsonWebTokenError('jwt payload is string');
	return res;
}

export default { sign, interpret, options };
