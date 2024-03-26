const express= require('express');
const app = express();
const path = require('path');
 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'public')));

//body parsing middle ware
app.use(express.urlencoded({extended:true}));

let comments=[ {
    id:0,
    username: "Sam",
    comment: "Live batch ke students kisi se kam hai kya?"
},
{
    id:1,
    username: "Abdul",
    comment: "didi tera dewar dewana"
},
{
    id:2,
    username: "Ramraj",
    comment: "mandir yahi banega aur hum banaege"
},
{
    id:3,
    username: "Jatin",
    comment: "hey prabhu , hey hari ram krishna jaganathan premanand, ye kya hua"
}]

app.get('/comments',(req,res)=>{
    res.render('home',{comments});
})

app.get('/comments/new',(req,res)=>{
    res.render('new')
})

app.post('/comments',(req,res)=>{
    let username = req.body.username;
    let comment = req.body.comment;
    comments=[...comments,{id:comments.length,username,comment}];
    res.redirect('comments');

});

// getting element id
app.get('/comments/:id',(req,res)=>{
    const {id}=req.params
    let comment=comments.find((comment)=>{
        return comment.id==id;
    });
    res.render('details',{comment});
})

app.get('/comments/:id/edit',(req,res)=>{
    const {id}=req.params
    let comment=comments.find((comment)=>{
        return comment.id==id;
    });
    res.render('edit',{comment});
})
app.listen(8080,()=>{
    console.log('server is running on port 8080');
});
