const userlist_model = require('../models/user')

const { handleData } = require('../utils')

const userlist = async (req, res,next) => {
    res.set('content-type', 'application/json; charset=utf8')
    let _data = await userlist_model.userlist(req.query)
    handleData(_data, res, 'userlist')
}

module.exports = {
    userlist
}