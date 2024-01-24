const express = require("express");
const router = express.Router();

const {createDepartment} = require('../controllers/departmentController')


router.post('/create-department', createDepartment);


module.exports = router;