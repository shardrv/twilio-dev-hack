import {
    Request,
    Response,
    NextFunction
  } from "express";
  
  import { IUserReqHandler } from "./contract";
  import { service } from "../../pkg/user/service";
  import { MongoRepo } from "../../pkg/user/mongodb";
  
  let userRepo = new MongoRepo();
  let userSvc = new service(userRepo);
  
  
  export class UserRequestsHandler implements IUserReqHandler {
    public makeRequest(req: Request, res: Response, next?: NextFunction) {
				let {
						item,
						qty
				} = req.body;

				userSvc.MakeRequest(req.params.jwtPayload, item, qty)
						.then((r: any) => {
							return res.status(200).json(r);
						}).catch(next);
    }
    public respondToRequest(req: Request, res: Response, next?: NextFunction) {
				let {
						respondeeID,
						request_id
				} = req.body;

				userSvc.RespondToRequest(req.params.jwtPayload, respondeeID, request_id)
						.then((r: any) => {
							return res.status(200).json(r);
						}).catch(next)
    }
    public markAsFulfilled(req: Request, res: Response, next?: NextFunction) {
				let {
						request_id
				} = req.body;

				userSvc.MarkAsFulfilled(req.params.jwtPayload, request_id)
						.then((r: any) => {
							return res.status(200).json(r);
						}).catch(next);
    }
    public rejectResponse(req: Request, res: Response, next?: NextFunction) {
				let {
						request_id
				} = req.body;

				userSvc.RejectResponse(req.params.jwtPayload, request_id)
						.then((r:any) => {
							return res.status(200).json(r);
						}).catch(next);
    }
  };
  
