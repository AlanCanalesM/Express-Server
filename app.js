//Using the object express
const express = require('express')
// App express
const app = express()
//I select the port where i look our app: localhost: 3000
const port = 3000

//initial path it answer to url localhost: 3000
app.get('/', (req, res)=>{

    res.send('Hello world!')

})

//with this initializing this app
app.listen(port, () =>{

    console.log('Example app listening on port ${port}')
})