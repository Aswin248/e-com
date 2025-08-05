// const express = require('express');
// const router = express.Router();





/*
const {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
} = require ('../controllers/userController');

router.get('/',getUsers)
router.get('/:id',getUserById)
router.post('/',createUser)
router.delete('/:id',deleteUser)
 router.put('/:id',updateUser);

// router.put('/:id', userController.updateUser);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/', userController.createUser);


router.get('/', userController.getUsers);


router.get('/:id', userController.getUserById);


router.put('/:id', userController.updateUser);


router.delete('/:id', userController.deleteUser);


module.exports = router;





