import {Router} from "express";
import {getAllEmployees, getEmployeeById, updateEmployee} from "../controller/employee-controller";

export const employeeRouter = Router();

employeeRouter.get('/getAllEmployees', async (req, res, next) => {
     await getAllEmployees(res, next).catch(err => next(err));
});

employeeRouter.get('/getEmployee/:id', async (req, res, next) => {
    await getEmployeeById(req, res, next).catch(err => next(err));
});

employeeRouter.patch('/updateEmployee', async (req, res, next) => {
    await updateEmployee(req, res, next).catch(err => next(err));
});