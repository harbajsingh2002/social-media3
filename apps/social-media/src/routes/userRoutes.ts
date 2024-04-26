import express from 'express';
const router = express.Router();
import userController from '../controller/userController';
import auth from '../middleware/auth'
import validationMiddleware from '../vailidation/joivalidation'

// login signup crud 
router.post('/signUp', (req, res, next) => validationMiddleware(req, res, next, 'login'), userController.create)
router.post('/login', (req, res, next) => validationMiddleware(req, res, next, 'login'), userController.login)

// user crud
router.put('/:id', (req, res, next) => validationMiddleware(req, res, next, 'user'), auth, userController.update)
router.delete('/:id', auth, userController.deleteUsers)



export default router;
