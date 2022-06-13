const express = require('express')
const multer = require('multer')
const app = express()
const cors = require('cors')
const port = 3000

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));

app.use(cors({origin: '*'}));

app.post('/upload-image', upload.single('image'), function (req, res, next) {
    var response = {
        'file': req.file,
        'success': true
    }
    return res.send(response)
})

app.listen(port, () => {
  console.log(`App running on port: ${port}`)
})
