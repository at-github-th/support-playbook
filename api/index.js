import express from "express"; import cors from "cors"; import morgan from "morgan";
const TOKEN=process.env.API_TOKEN||"dev-12345"; const app=express(); app.use(cors()); app.use(express.json()); app.use(morgan("dev"));
const auth=(req,res,next)=> req.header("x-api-key")===TOKEN ? next() : res.status(401).json({error:"unauthorized"});
const books=[{id:"p0",name:"Outage Diagnosis",steps:["Check status","Review logs","Notify stakeholders"]},{id:"p1",name:"Payment Failure",steps:["Retry","Switch PSP","Open ticket"]}];
app.get("/",(_q,r)=>r.json({name:"Support Playbook API",ok:true}));
app.get("/api/playbooks",auth,(_q,r)=>r.json(books.map(b=>({id:b.id,name:b.name}))));
app.get("/api/playbooks/:id/steps",auth,(q,r)=>{const b=books.find(x=>x.id===q.params.id); if(!b) return r.status(404).json({error:"not_found"}); r.json(b.steps);});
app.get("/api/search",auth,(q,r)=>{const qstr=(q.query.q||"").toString().toLowerCase(); r.json(books.filter(b=>b.name.toLowerCase().includes(qstr)));});
app.listen(Number(process.env.API_PORT||5109),()=>console.log("Support http://127.0.0.1:"+ (process.env.API_PORT||5109)));
