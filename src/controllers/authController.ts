import { Request, Response } from 'express';

// Login controller
export const login = async (req: Request, res: Response) => {
    // Logic for login
    res.status(200).send("Login successful");
};

// Register controller
export const register = async (req: Request, res: Response) => {
    // Logic for registration
    res.status(201).send("User registered");
};