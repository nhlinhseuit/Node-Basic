// đối với express thì với file js 
// mặc định truyền vào tham số req và res
let getHomepage = (req, res) => {

    // logic
    return res.render('index.ejs')
}

module.exports = {
    getHomepage

}