const express = require('express');
const { addTransection, getAllTransection,editTransection ,deleteTransection} = require('../controllers/transectionCtrl');

//router object
const router=express.Router();

//routes
//add transection POST METHOD
router.post('/add-transection',addTransection);

//edit transection POST METHOD
router.post('/edit-transection',editTransection);

//delete transection POST METHOD
router.post('/delete-transection',deleteTransection);

//get transections
router.post('/get-transection',getAllTransection);
module.exports = router;