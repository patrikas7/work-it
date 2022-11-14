import { NextFunction, Request, Response } from 'express';

export const checkRegistrationEmail = (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
};
