const router = require('express').Router();
const {writeToFile} = require("../file_manipulator");
const path = require('path');

const pathToFile = path.join(__dirname, "requestBody.txt");


router.get('/songs/:para',(req,res,next) => {
    const params = req.params;
    if(Object.keys(params).length > 0){
        res.status(200).json(params);
    } else{
        res.status(404).json('Nepostoi takva strana');
    }
})

router.post('/detectives',(req,res,next) => {
    const reqBody = JSON.stringify(req.body);
    writeToFile(reqBody, pathToFile)
    .then(() => {
        res.status(201).json('File written');
    }).catch(err => {
        res.status(500).json(err);
    })
})



module.exports = router;