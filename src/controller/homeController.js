import pool from '../configs/connectDB'

// đối với express thì với file js 
// mặc định truyền vào tham số req và res
let getHomepage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');

    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let id = req.params.id
    let user = await pool.execute(`select * from users where id = ?`, [id])
    console.log('check user params: ', user[0])
    return res.send(user[0])

}

module.exports = {
    getHomepage, getDetailPage
}