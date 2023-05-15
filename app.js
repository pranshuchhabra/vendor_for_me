const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
// const { request } = require("http");
const ejs = require("ejs");
var cookieParser = require("cookie-parser");
const port = process.env.PORT || 3001;
const path = require("path");
const fs = require("fs");
const app = express();



app.use(express.json());

app.set("views", path.join("views"));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "routes")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));





app.use(bodyParser.json());
app.use(cookieParser());



app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));




app.get('/', (req, res) => {
    res.render("index");
})


app.get('/form1', (req, res) => {
    res.render("form1", { role: "manager" });
})


app.get('/exeDash', (req, res) => {
    res.render("exeDash", { role: 'executive', sidebar: true });
})


app.get('/manDAsh', (req, res) => {
    res.render("manDash", { role: 'manager', sidebar: true });
})


app.get('/view', (req, res) => {
    res.render('view',{ role: "manager" });
})

function authenticateUser(email, password) {
    const validUsers = [
        { email: 'paras', password: '123', role: 'executive' },
        { email: 'Testuser@gmail.com', password: '456', role: 'manager' }
    ];

    const user = validUsers.find(u => u.email === email && u.password === password);

    return user ? user : null;
}

app.post('/check', (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);


    const user = authenticateUser(email, password);
    console.log(user);

    if (user) {

        req.session.user = {
            id: user.id,
            email: user.email,
            role: user.role
        };

        if (user.role === 'executive') {
            res.send({ success: true, redirectUrl: '/exeDash' });
        } else if (user.role === 'manager') {
            res.send({ success: true, redirectUrl: '/manDash' });
        }
    } else {
        res.send({ success: false, message: 'Invalid email or password' });
    }
});















app.listen(3001, () => {
    console.log("Server listening on port 3001");
});

