import { Router } from 'express';
import { createUsers} from '../controllers/user';
import { getUsers} from '../controllers/user';
export const router = Router();

router.post('/user/users',createUsers);
router.get('/user/users', getUsers);

export default router;
