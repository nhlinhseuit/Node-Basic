import connection from '../configs/connectDB'

// đối với express thì với file js 
// mặc định truyền vào tham số req và res
let getHomepage = (req, res) => {

    let data = []

    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log('>>> check query');
            console.log(results)

            results.map((item) => {
                data.push({
                    id: item.id,
                    email: item.email,
                    firstName: item.firstName,
                    lastName: item.lastName,
                    address: item.address,
                })
            }
            )
            console.log('>>> check data');
            console.log(data)

            return res.render('index.ejs', { dataUser: data })
        }

    );

}

module.exports = {
    getHomepage

}