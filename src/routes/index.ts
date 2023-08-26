import {Router} from 'express';
import {employeeRouter} from "./employee-router";

export const router = Router();

router.use('/employee', employeeRouter);