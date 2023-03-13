import { Router } from "express";
import * as userController from '../controllers/usersController';
import * as postController from '../controllers/postsControllers'
import { privateRoute } from "../config/passport";
const router = Router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/list', privateRoute, userController.list);

//posts
router.get('/posts', postController.listPosts);
router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.likePost);

export default router