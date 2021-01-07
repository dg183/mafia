import express from 'express';
// controllers
// import users from '../controllers/user.js';
// middlewares
import { encode } from '../middlewares/jwt.js';

const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => {
    return res
        .status(200)
        .send(JSON.stringify({
            success: true,
            authoization: req.authToken,
        }));
  });

export default router;