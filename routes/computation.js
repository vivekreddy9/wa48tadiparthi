var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNum=Math.random()*100
    let data=req.query.x
    console.log(data)
    res.render('computation',{
        r:`Round applied to ${randomNum} is ${Math.round(randomNum)}`,
        q:`Round applied to ${data} is ${Math.round(data)}`
    })
})

module.exports=router