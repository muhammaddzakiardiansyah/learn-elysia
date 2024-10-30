import { Elysia } from "elysia";

import { getAll } from "../controllers/UserController";

const Routes = new Elysia({ prefix: '/users' });

Routes.get('/', () => getAll());

export default Routes;