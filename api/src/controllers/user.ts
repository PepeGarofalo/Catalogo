import { Request, Response } from 'express';
import { Users } from '../entities/user';
export const createUsers = async (req: Request, res: Response) => {
  try {
      console.log(req.body);
      const { userscatalogo, pasworddd } = req.body
      const users = new (Users)
      users.userscatalogo = userscatalogo
      users.pasworddd = pasworddd
      await users.save()
      return res.json(users)
  } catch (error) {
      if (error instanceof Error) {
          return res.status(500).json({ message: error.message })
      }
  }
}
export const getUsers = async (req: Request, res: Response) => {
  try {
      const users = await Users.find()
      return res.json(users)
  } catch (error) {
      if (error instanceof Error) {
          return res.status(500).json({ message: error.message })
      }
  }

}