import {Request, Response,Router} from "express";

const router: Router = Router();

// router get random number using Math.random()
router.get("/random", (req: Request, res: Response) => {
    res.send(Math.random().toString());
});

export default router;