const express = require("express");
const { registerUser, authUser, allUsers} = require("../controllers/userControllers");
const { protect } = require("../middleware/authmiddleware")


const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/').get(protect, allUsers);


module.exports = router;

