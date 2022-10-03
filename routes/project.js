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


router.delete('/project/:id' , async (req,res) =>{
    project
    .findByIdAndDelete(req.params.id)
    .then(result =>{
        res.sendStatus(200);
    })
    .catch((error) => { 
        console.log(error);
        res.render(createPath('error') , {title:'Error'});
    })
    
})

router.get('/edit_project/:id' ,async (req,res) => {
    const Project = await project.findById(req.params.id).lean()

    res.render('edit_project',{
        Project
    })
})

router.put('/edit_project/:id' ,async (req,res) => {
    const Photo = req.body.Photo;
    const {Name,Date_Start,Date_End,Note,Curator,Students} = req.body;
    const id =req.params.id;

    project
    .findByIdAndUpdate(id ,{Name,Date_Start,Date_End,Note,Photo,Curator,Students})
    .then(result => res.redirect('/'))

})

router.get('/add_project' ,async (req,res) => {

    res.render('add_project',{})
})

router.post('/add_project' ,async (req,res) => {
     
    const Project = new project({
        Name: req.body.Name,
        Date_Start: req.body.Date_Start,
        Date_End: req.body.Date_End,
        Note: req.body.Note,
        Photo: req.body.Photo,
        Curator: req.body.Curator,
        Students: req.body.Students
    })

    await Project.save();
    res.redirect('/')

})

module.exports = router