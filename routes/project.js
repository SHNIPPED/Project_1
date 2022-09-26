const {Router} = require('express')
const project = require('../models/Projects')
const router = Router()

router.get('/' , async (req,res) => {

    const Project = await project.find({}).lean()


    res.render('index' , {
        title:'Project List',
        isIndex: true,
        Project
    })
})


module.exports = router