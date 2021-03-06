const router = require("express").Router()

const middleware = require("../../middleware");
const {showAll, showByID, change, remove, showHouses, addFavourite, changeProfilePhoto} = require("../../controllers/usersController")

router.get('/', showAll);
router.get('/userHouses', showHouses);
router.get('/:id', showByID);
router.patch('/:id', change);
router.delete('/:id', remove);
router.post('/addFavourite', addFavourite);
router.post('/changeProfilePhoto', middleware.checkFiles, changeProfilePhoto);

module.exports = router