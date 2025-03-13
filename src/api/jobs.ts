import  express  from "express";
import { createJob, deleteJob, getAllJobs, getJobID, updateJob } from "../application/jobs";

const jobRouter=express.Router();

jobRouter.route("/").get(getAllJobs).post(createJob);
jobRouter.route("/:_id").get(getJobID).delete(deleteJob).put(updateJob);

export default jobRouter;