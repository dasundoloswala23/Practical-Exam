const router = require("express").Router();
const { addCard,viewAllCard } = require('../controllers/cardcontroller.js')
 
//add new Progress
router.post('/add', addCard);

//view All Card
router.get('/', viewAllCard);
 

module.exports = router;