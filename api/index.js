import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
app.use(cors()); app.use(express.json()); app.use(morgan("dev"));
app.get("/", (_q,r)=>r.json({name:"Support Playbook API", ok:true}));
app.get("/api", (_q,r)=>r.json({hint:"add real endpoints here"}));
app.listen(5109, ()=>console.log("Support Playbook API on http://127.0.0.1:5109"));
