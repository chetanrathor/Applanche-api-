require('./config')
const blog  = require('./blogSchema')
const project = require('./projectSchema')
const team = require('./teamSchema')
const express = require('express')
const { Router } = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())
app.use(bodyParser.json())

// projects{

    // Fetch all projects 
    app.get('/projectList',async (req,res)=>{
        let data = await project.find()
        res.send(data) 
    })

    app.get('/portfolio/:id',async (req, res)=>{
        let data = await project.find({"_id":req.params.id})
        res.send(data)
        })

    //add project in db
    app.post('/addProject',async (req,res)=>{
        let data = new project(req.body)
        // console.log(req.body);
        let result  = data.save()
        res.send(req.body) 
    })

    //Delete project from db
    app.delete('/deleteProject',async (req, res)=>{
        console.log(req.body);
        
        let data = await project.deleteOne(req.body)
        res.send(req.body)
    })
   
//}

// Blogs {

    // Fetch all the blogs from db
    app.get('/blogsList',async (req, res)=>{
    let data = await blog.find()
    res.send(data)
    })

    //fetch blog by id
    app.get('/blog/:id',async (req, res)=>{
    let data = await blog.find({"_id":req.params.id})
    res.send(data)
    })

    // Add Blog Api
    app.post('/addBlog',async (req,res)=>{
        let data = new blog(req.body)
        // console.log(req.body);
        let result  = data.save()
        res.send(req.body) 
    })

     //Delete Blog from db
     app.delete('/deleteBlog',async (req, res)=>{
        let data = await blog.deleteOne(req.body)
        res.send(data)
    })


// }

// Teams{

    //Fetch all the team List
    app.get('/teamsList',async (req, res)=>{
        let data = await team.find()
        res.send(data)
    })

    //add team member 
    app.post('/addTeam',async (req,res)=>{
    let data = new team(req.body)
    // console.log(req.body);
    let result  = data.save()
    res.send(req.body) 
    })

    //Delete team meber
    app.delete('/deleteTeamMember',async (req, res)=>{
        let data = await team.findByIdAndDelete(req.body._id)
        console.log(req.body);
        res.send(data)
    })

//}




app.listen(4000)