// src/controllers/authController.js
import { Request, Response } from 'express';
import { Users } from '../entities/user';

export const authenticateUser = async (req: Request, res: Response) => {
  try {
    const { userscatalogo, pasworddd } = req.body;
    const user = await Users.findOne({ where: { userscatalogo } });

    if (user && user.pasworddd === pasworddd) {
      return res.json({ isAuthenticated: true });
    } else {
      return res.json({ isAuthenticated: false });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
