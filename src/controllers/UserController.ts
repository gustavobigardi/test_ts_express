import { Request, Response } from 'express'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = []
    return res.json(users)
  }
}

export default new UserController()
