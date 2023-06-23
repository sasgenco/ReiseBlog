const express = require('express');
//const {protect} = require('../middlewares/auth')
const {
    createUser,
    getUser,
    getUsers,
    getMe,
    deleteUser,
    updateUser,

} = require('../controllers/UserController');
const router = express.Router();


router.get('/', getUsers)
router.get('/me',getMe)

// get a single user


// post new user
router.post('/signin', createUser)
router.post('/login',getUser)

//Do we need these??
// delete a user
router.delete('/:id', deleteUser)


// update a user
router.patch('/:id', updateUser)


module.exports = router
