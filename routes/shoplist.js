const express = require('express')
const router = express.Router()
const fileupLoad = require('../middleware/fileupload')
const shoplist_controller = require('../controller/shoplist')

//  /api/shoplist/
router.get('/listall',shoplist_controller.listall);
router.get('/list',shoplist_controller.list);
router.post('/add',fileupLoad,shoplist_controller.add);
router.delete('/remove',shoplist_controller.remove);
router.post('/update',fileupLoad,shoplist_controller.update);
router.get('/listone',shoplist_controller.listone);

module.exports = router