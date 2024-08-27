const express=require('express')
const app= express()
const cors= require('cors')
app.use(cors())
let data=[
    {
        id:1,
        name:'John Doe',
        age:25
    },
    {
        id:2,
        name:'Doe',
        age:30
    },
    {
        id:3,
        name:'Alice Doe',
        age:28
    }
]
app.get('/',(req,res)=>{
    res.json({data:data})
})

app.post('/:id/:name/:age',(req,res)=>{
    const {id,name,age} = req.params
    const data1={
        id:parseInt(id),
        name:name,
        age:parseInt(age)
    }
    data.push(data1);
    res.json({data})
})

app.put('/:age',(req,res)=>{
    let found=false
    const d=data.filter((data)=>{
        if(data.name=='John Doe'){
            found=true
            data.age=req.params.age;
        }
    })
    if(found==true)
            {
        console.log('Name updated successfully');
    }
    else{
        console.log('Name not found');
        res.status(404).send('Name not found');
    }
    res.json({data})

})

app.delete('/:name_user',(req,res)=>{
    // let dat=data.map((d)=>{
    //     if(d.name==req.params.name_user)
    //     {
    //         res.send('Name deleted')
    //     }
    //     else{
    //         console.log("data not found")
    //         res.status(404).send('Not found')
    //     }
    // })
   
    let i=data.findIndex((data)=>data.name=req.params.name_user)
    console.log(i)
    if(i!=-1)
    {
        data.splice(i,1);
        res.send('Name deleted')
    }
    else{
        console.log("data not found")
        res.status(404).send('Not found')
    }
})
app.listen(5000,()=>{
    console.log('Server started on port 5000')
})