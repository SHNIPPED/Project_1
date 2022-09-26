const {Router} = require('express')
const Student = require('../models/Students')
const router = Router()

router.get('/students' ,async (req,res) => {
    const students = await Student.find({}).lean()
    res.render('Students',{
        title:'Students list',
        isStudents: true , 
        students
    })
})


module.exports = router