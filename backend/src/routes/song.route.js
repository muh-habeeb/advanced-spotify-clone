import { Router } from "express";
const router =Router()
router.get("/",(req,res)=>{
    res.send("song route")
})
// router.route("/").get((req,res)=>{
//     res.send("User route")
// })

export default router;