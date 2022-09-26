const {Router} = require('express')
const Curator = require('../models/Curator')
const router = Router()

router.get('/curator' ,async (req,res) => {
    const curator = await Curator.find({}).lean()
    res.render('curator',{
        title:'Curator list',
        isCurator: true , 
        curator
    }) 
})


module.exports = router