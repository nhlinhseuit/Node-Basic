import pool from '../configs/connectDB'

let getAllUser = async (req, res) => {
    let [rows, fields] = await pool.execute('select * from users')
    return res.status(200).json(
        {
            message: 'ok',
            data: rows,
        }
    )
}

let createNewUser = async (req, res) => {
    let { firstName, lastName, email, address } = req.body
    if (!firstName || !lastName || !email || !address) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }

    await pool.execute('insert into users(firstName, lastName, email, address) values (?,?,?,?)', [firstName, lastName, email, address])


    return res.status(200).json(
        {
            message: 'create',
        }
    )
}

let updateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body
    if (!firstName || !lastName || !email || !address || !id) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?', [firstName, lastName, email, address, id])

    return res.status(200).json(
        {
            message: 'updateUser',
        }
    )
}

let deleteUser = async (req, res) => {
    let userId = req.params.id
    if (!userId) {
        return res.status(200).json({
            message: 'missing required params'
        })
    }
    await pool.execute('delete from users where id = ?', [userId])

    return res.status(200).json(
        {
            message: 'deleteUser',
        }
    )
}

module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser
}