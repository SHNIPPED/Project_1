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

router.delete('/curator/:id' , async (req,res) =>{
    Curator
    .findByIdAndDelete(req.params.id)
    .then(result =>{
        res.sendStatus(200);
    })
    .catch((error) => { 
        console.log(error);
        res.render(createPath('error') , {title:'Error'});
    })
    
})

router.get('/edit_curator/:id' ,async (req,res) => {
    const curator = await Curator.findById(req.params.id).lean()

    res.render('edit_curator',{
        curator
    })
})

router.put('/edit_curator/:id' ,async (req,res) => {
    const{Lastname,Name,Surname} = req.body;
    const id =req.params.id;

    Curator
    .findByIdAndUpdate(id ,{Lastname,Name,Surname})
    .then(result => res.redirect('/curator'))

})

router.get('/add_curator' ,async (req,res) => {

    res.render('add_curator',{})
})

router.post('/add_curator' ,async (req,res) => {
     
    const curator = new Curator({
        Lastname: req.body.Lastname,
        Name: req.body.Name,
        Surname: req.body.Surname 
    })

    await curator.save();
    res.redirect('/curator')

})
 

module.exports = router