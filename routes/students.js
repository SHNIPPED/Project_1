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


router.delete('/students/:id' , async (req,res) =>{
    Student
    .findByIdAndDelete(req.params.id)
    .then(result =>{
        res.sendStatus(200);
    })
    .catch((error) => { 
        console.log(error);
        res.render(createPath('error') , {title:'Error'});
    })
    
})

router.get('/edit_students/:id' ,async (req,res) => {
    const students = await Student.findById(req.params.id).lean()

    res.render('edit_students',{
        students
    })
})

router.put('/edit_students/:id' ,async (req,res) => {
    const{Lastname,Name,Surname} = req.body;
    const id =req.params.id;

    Student
    .findByIdAndUpdate(id ,{Lastname,Name,Surname})
    .then(result => res.redirect('/students'))

})

router.get('/add_students' ,async (req,res) => {

    res.render('add_students',{})
})

router.post('/add_students' ,async (req,res) => {
     
    const student = new Student({
        Lastname: req.body.Lastname,
        Name: req.body.Name,
        Surname: req.body.Surname 
    })

    await student.save();
    res.redirect('/students')

})
 
module.exports = router