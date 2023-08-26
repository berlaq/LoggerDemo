import express from "express";
import {ApiError} from "../utils/api-error";

const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
];

export async function getAllEmployees(res: express.Response, next: express.NextFunction) {
    res.status(200).json(employees);
}

export async function getEmployeeById(req: express.Request, res: express.Response, next: express.NextFunction) {
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    if (!employee) res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
}

export async function updateEmployee(req: express.Request, res: express.Response, next: express.NextFunction) {
    const employee = employees.find(e => e.id === req.body.id);
    if (!employee) throw new ApiError('Employee not found', 404)

    // if employee is found, update the employee name
    employee.name = req.body.name;
    res.status(200).json(employee);
}