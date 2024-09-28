import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
console.log("Request sended: ", req.rawHeaders);
res.send("<h1>Strona główna</h1><p>Tu powinna być strona główna :)</p>")
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>Tu powinna być strona About me :)</p>")
    });

    app.get("/contact", (req, res) => {
        res.send("<h1>Contact</h1><p>Tu powinna być strona Contact :)</p>")
        });

app.listen(port, () => {
    console.log(`Server started on: http://localhost:${port}`);
})


// instaluję npm i -g nodemon
// globalnie (dla przyszłych projektów też). Nie trzeba wtedu uruchamiać i restartować serwera 
//przy zmianach w plik evelopment Projects> Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
