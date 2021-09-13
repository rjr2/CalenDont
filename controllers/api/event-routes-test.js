const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../utils/fsUtils');

router.get('/')