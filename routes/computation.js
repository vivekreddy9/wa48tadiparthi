var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNum=Math.random()*100
    let data=req.query.x
    console.log(data)
    res.render('computation',{
        r:`sqrt applied to ${randomNum} is ${Math.sqrt(randomNum)}`,
        q:` sqrt applied to ${data} is ${Math.sqrt(data)}`
    })
})

module.exports=router