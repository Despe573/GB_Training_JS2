const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 1313;

app.use(express.static('./shop/public'));
app.use(bodyParser.json());

app.get('/datalist/:page', (req, res) => {
    const page = req.params.page;
    fs.readFile(`./shop/public/database/data${page}.json`, 'utf8', (err, data) => {
        res.send(data)
    });
});

app.post('/datalist', (req, res) => {
    const offset = 8;
    const filePath = `./shop/public/database/data3.json`
    fs.readFile(filePath, 'utf8', (err, data) => {
        console.log(dataList);
        const dataList = JSON.parse(data || {});
        const amountOfItem = Object.keys(dataList).length;
        const newID = offset + amountOfItem + 1;
        const newItem = req.body;
        newItem.id = newID;
        dataList[newID] = newItem;
        console.log(dataList);
        fs.writeFile(filePath, JSON.stringify(dataList), (err) => {
            if (err) {
                console.log(err);
            }
            res.send(dataList);
            console.log(dataList);
        })
    })
})

app.listen(port, () => {
    console.log(`Server started on port - ${port}`);
});