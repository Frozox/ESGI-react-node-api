const express = require('express');
const router = new express.Router;

const HttpCode = require('../controllers/HttpCode');
const User = require('../controllers/User');
const Friend = require('../controllers/Friend');
const Log = require('../controllers/Log');

router.get('/', (_, res) => res.send("hey API works !"));

// HttpCode Routes
router.get('/httpCodes', HttpCode.getHttpCodes);
router.get('/httpCodes/:id', HttpCode.getHttpCodeById);
router.post('/httpCodes', HttpCode.createHttpCode);
router.put('/httpCodes/:id', HttpCode.editHttpCode);
router.delete('/httpCodes/:id', HttpCode.deleteHttpCode);

// User Routes
router.get('/users', User.getUsers);
router.get('/users/:id', User.getUserById);
router.get('/users/:mail', User.getUserByMail);
router.get('/me/:id', User.getUsersExceptMe);
router.post('/users', User.createUser);
router.put('/users/:id', User.editUser);
router.delete('/users/:id', User.deleteUser);
router.post("/login", User.loginUser);

// Friend Routes
router.post("/friends", Friend.addFriend);
router.get("/friends", Friend.getMyFriends);

// Logs Routes
router.get('/logs', Log.getLogs);
router.get('/logs/:id', Log.getLogById);
router.post('/logs', Log.createLog);

module.exports = router;