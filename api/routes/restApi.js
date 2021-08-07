var express = require('express')
var router = express.Router()

router.get("/", function(request, response, next) {
    response.send("API is working properly")
})


module.exports = router;