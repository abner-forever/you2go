const mongoose = require('../utils/mongoose')

var UserModel = mongoose.model('users')

const getUserInfoById = (id) => {
    return UserModel.findById(id)
        .then((result) => {
            return result
        })
        .catch(() => {
            return false
        })
}

const listAll = (_query = {}) => {
    return UserModel.find(_query)
        .then((res) => {
            return res
        }).catch((err) => {
            return false
        })
}
const userlist = async ({ pageNo = 1, pageSize = 10, search = '' }) => {
    let reg = new RegExp(search, 'ig')
    let _query = {  //$0r 匹配任意字段都包含的
        $or: [
            { uername: reg },
            { nickname: reg },
            { email: reg }
        ]
    }
    let _allItems = await listAll({})
    return UserModel.find(_query)
        .skip((pageNo - 1) * pageSize)
        .limit(~~pageSize)
        .then((res) => {
            return {
                items: res,
                pageInfo: {
                    pageNo, 
                    pageSize,
                    total: _allItems.length,
                    totalPage: Math.ceil(_allItems.length / pageSize),
                    search
                }
            }
        }).catch((err) => {
            return false
        })
}
module.exports = {
    getUserInfoById,
    userlist
}