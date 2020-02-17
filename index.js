const express = require('express');

const app = express();

//배포를 하면 host가 다르기때문에 cors 문제를 겪게 된다. npm add cors

app.use('/', (req, res) => {
    res.send('practce ec2 node server deploy')
})

app.listen(5000, ()=> {
    console.log('server on 5000');
})