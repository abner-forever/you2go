const express = require('express')
const router = express.Router()
const fileupLoad = require('../middleware/fileupload')
const userlist_controller = require('../controller/userlist')

//  /api/userlist/
router.get('/list',userlist_controller.userlist);
// router.get('/list',userList_controller.list);
// router.post('/add',fileupLoad,userList_controller.add);
// router.delete('/remove',userList_controller.remove);
// router.post('/update',fileupLoad,userList_controller.update);
// router.get('/listone',userList_controller.listone);

module.exports = router

