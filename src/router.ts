import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { findUserController } from "./useCases/findEmailUser";

const router = Router();

router.post("/users", (request , response) => {
    return createUserController.handler(request, response);
});

router.get("/users/:email", (request , response) => {
    return findUserController.handler(request, response);
});

export { router };