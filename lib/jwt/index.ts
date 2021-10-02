import { JwtPayload, sign as signJWT, SignOptions, verify } from 'jsonwebtoken';

const issuer = process.env.JWT_ISSUER;
const secret = <string>process.env.JWT_SECRET;

/**
 * Sign a JWT token
 * @param {object} content Token content
 * @param {SignOptions} options Token signing options
 * @returns {string} JWT token
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function sign(content: object, options: SignOptions): string {
	return signJWT(content, secret, Object.assign({ issuer: issuer }, options));
}

/**
 * Interpret a JWT token
 * @param {string} token JWT token
 * @returns {JwtPayload} Token content
 * @throws {JsonWebTokenError} Error when interpreting
 */
export function interpret(token: string): JwtPayload {
	return <JwtPayload>verify(token, secret, { issuer: issuer });
}
