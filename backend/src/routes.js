const express = require('express');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

const auth = require('./middlewares/auth');

routes.post('/auth/authenticate', AuthController.authenticate);

routes.post('/users', auth, UserController.register);

module.exports = routes;