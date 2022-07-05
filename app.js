const express = require ('express')
const app = express ()
const path = require ('path')
const port =process.env.PORT || 3000

app.use(express.static('Public'));

app.listen(port, () => console.log(`Server running in port ${port}`));
//app.listen (process.env.PORT || 3000, () => { 
//console.log ('servidor corriendo')}


app.get('/', (req, res) => {
    res.sendFile (path.resolve(__dirname,'./views/home.html'))
      });

app.get('/login', (req, res) => {
        res.sendFile (path.resolve(__dirname,'./views/login.html'))
          });


app.get('/register', (req, res) => {
        res.sendFile (path.resolve(__dirname,'./views/register.html'))
          });
  