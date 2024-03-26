/* eslint-disable consistent-return */
// @ts-nocheck

import JSONWebToken from 'jsonwebtoken';
import Constants from './Constants';

function isValidRole(role, roles) {
	let isValid = false;
	roles.forEach((rl) => {
		if (rl.toLowerCase() === role.toLowerCase()) isValid = true;
	});
	return isValid;
}


	export function signToken (id, name, country_code, mobile, role) {
		const token = JSONWebToken.sign(
			{
				user_id: id,
				name,
				country_code,
				mobile,
				role,
			},
			process.env.JWT_SECRET,
			{ expiresIn: process.env.TOKEN_EXPIRY },
		);
		return token;
	}

	export function decodeToken (req, res, next) {
		try {
			let token = req.headers.authorization;
			if (token != null && token.indexOf(' ') >= 0) token = token.split(' ')[1];
			let decoded = JSONWebToken.verify(token, process.env.JWT_SECRET);
			req.decoded_data = decoded;
			next();
		} catch (err) {
			next();
		}
	}

	export function anyone (req, res, next) {
		const data = req.decoded_data;
		if (data && isValidRole(data.role, Object.values(Constants.ROLES))) {
			next();
		} else {
			return res.status(401).send({
				status: false,
				message: res.__('not_authorized'),
			});
		}
	}

	export function onlyAdmin (req, res, next) {
		const data = req.decoded_data;
		if (data && isValidRole(data.role, [Constants.ROLES.ADMIN])) {
			next();
		} else {
			return res.status(401).send({
				status: false,
				message: res.__('not_authorized'),
			});
		}
	}
