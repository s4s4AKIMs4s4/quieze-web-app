var express = require('express')
var router = express.Router()

router.get("/", function(request, response, next) {
    response.send("API is working properly")
})


router.get('/firebase:id', (req, res, next) => {
    const res = await axios.post(`${url}/notes.json`, note)
    
} )




module.exports = router;