const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json())

//routes
//add user
app.post('/add', async (req, res) => {
    try{
        const {username, email, phone, dob} = req.body;
        const newUser = await pool.query(
            "INSERT INTO users (username, email, phone, dob) VALUES($1, $2, $3, $4) RETURNING *",
            [username, email, phone, dob]
        )

        res.json(newUser.rows[0]);
    }
    catch(err){
        console.error(err.message)
        res.json("Duplicate email or phone")
    }
})

//get all users
app.get('/', async(req, res) => {
    try{
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

//update users
app.put('/edit/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const {username, email, phone} = req.body

        const updateUser = await pool.query("UPDATE users SET username=$1, email=$2, phone=$3 WHERE userid=$4",
            [username, email, phone, id]
        )
        res.json(`User ${username}  was updated`)
    }
    catch(err){
        console.error(err.message)
        // if(err.message.includes('users_phone_key')) res.json('Entered Phone No. already used');
        // else if(err.message.includes('users_email_key')) res.json('Entered Email already used');
    }
})

//get user by id
app.get('/edit/:id', async(req, res) => {
    try{
        const {id} = req.params;

        const getUserById = await pool.query("SELECT * FROM users WHERE userid=$1", [id])
        res.json(getUserById.rows[0])
    }
    catch(err){
        console.error(err.message)
    }
})

//delete user
app.delete('/edit/:id', async(req, res) => {
    try{
        const {id} = req.params

        const deleteUser = await pool.query("DELETE FROM users WHERE userid=$1",
            [id]
        )
        res.json(`User deleted`)
    }
    catch(err){
        console.error(err.message)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
})