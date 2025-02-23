const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const axios=require('axios');
app.use(bodyParser.json());
const port=5000;

//post endpoint to access the model prediction
app.post("/analyze-sentiment",(req,res)=>
{
    const text=req.body.text;
    axios.post('http://127.0.0.1:5001/predict',{'text':text})
      .then(response=>res.json(response.data));


});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});