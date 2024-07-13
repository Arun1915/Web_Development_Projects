import express from  "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var listToday = ["Eg. Clear the dustbin"];
var crossedOutListToday = [0];
var listWork = ["Eg. Complete website project"];
var crossedOutListWork = [0,];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.render("index.ejs", {list: listToday, crossedOut: crossedOutListToday});
});

app.get("/worklist", (req, res)=>{
    res.render("worklist.ejs", {list: listWork, crossedOut: crossedOutListWork});
});

app.post("/", (req, res) => {
    console.log(req.body);
    console.log("Changes were made in the todo list");
    
    //check if an item has been added, removed or some box has been ticked
    if(req.body.item)
    //add item to the list and mark it 'uncrossed'
    {
        listToday.push(req.body.item);
        crossedOutListToday.push(0);
    }
    else if (req.body.removeItem)
    // remove item from list and its crossed/uncrossed status
    {
        let i = listToday.indexOf(req.body.removeItem);
        if ( i != -1)
        {
            listToday.splice(i, 1);
            crossedOutListToday.splice(i, 1);
        }
    }
    else
    //to tell the server which all enteries have been crossed out
    {
        for (let i = 0; i < listToday.length; i++)
        {
            if (req.body[i])
            { crossedOutListToday[i] = 1; }
            else
            { crossedOutListToday[i] = 0; }
        }
    }

    res.render("index.ejs", {list: listToday, crossedOut: crossedOutListToday});
});

app.post("/worklist", (req, res) => {
    console.log(req.body);
    console.log("Changes were made in the todo list");
    
    //check if an item has been added, removed or some box has been ticked
    if(req.body.item)
    //add item to the list and mark it 'uncrossed'
    {
        listWork.push(req.body.item);
        crossedOutListWork.push(0);
    }
    else if (req.body.removeItem)
    // remove item from list and its crossed/uncrossed status
    {
        let i = listWork.indexOf(req.body.removeItem);

        if (i != -1 )
        {
            listWork.splice(i, 1);
            crossedOutListWork.splice(i, 1);
        }
    }
    else
    //to tell the server which all enteries have been crossed out
    {
        for (let i = 0; i < listToday.length; i++)
        {
            if (req.body[i])
            { crossedOutListWork[i] = 1; }
            else
            { crossedOutListWork[i] = 0; }
        }
    }

    res.render("worklist.ejs", {list: listWork, crossedOut: crossedOutListWork});
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
});