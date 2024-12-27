import { JWTPayload } from "../../controllers/authController";
export { }

declare global {
    namespace Express {
        export interface Request {
            user?: JWTPayload;
        }
    }
}