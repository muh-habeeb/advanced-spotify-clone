import { Router } from "express";
const router =Router()
router.get("/",(req,res)=>{
    res.send("album route")
})
// router.route("/").get((req,res)=>{
//     res.send("User route")
// })

export default router;