const express = require(`express`);
const app = express();
app.get(`/`,(req,res)=>{
    res.send(`Hola mundo`);
});

const port = 3026;
app.listen(port,()={
    console.log(`https://localhost:${port}`);
    
})