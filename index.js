const express = require('express')
const app = express()
const port = 3000

// Use built-in express middleware for parsing json and urlencoded form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const questions = [{
    id: 1,
    content: 'What is your favorite color?'
  }, {
    id: 2,
    content: 'What is your favorite programming language?'
  }]
  
  const submissions = [{
    userId: 'testUser1',
    questionId: 1,
    answer: 'Blue'
  }, {
    userId: 'testUser1',
    questionId: 2,
    answer: 'JavaScript'
  }]

let users = [] // Users array


app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    
    // Check if both email and password are provided
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).send('User already exists');
    }

    // Store user in the array
    users.push({ email, password });

    // Return a 200 status code for successful signup
    res.status(200).send('User registered successfully');
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    
    // Check if both email and password are provided
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }

    // Check if user exists and password is correct
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).send('Invalid credentials');
    }

    // Generate a token (for simplicity, just a random number here)
    const token = Math.random().toString(36).substr(2);

    // Return a 200 status code for successful login and the token
    res.status(200).json({ token });
})

// A GET route to serve the signup form
app.get('/signup', (req, res) => {
    res.send(`
        <form action="/signup" method="post">
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            <input type="submit" value="Signup">
        </form>
    `);
})

// A GET route to serve the login form
app.get('/login', (req, res) => {
    res.send(`
        <form action="/login" method="post">
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            <input type="submit" value="Login">
        </form>
    `);
})


app.get('/questions', (req, res) => {
    res.json(questions);  // return all questions to the user
})

app.get('/submissions', (req, res) => {
    res.json(submissions);  // return all submissions to the user
})

app.post('/submissions', (req, res) => {
    // Parse submission from request body
    const { userId, questionId, answer } = req.body;
    
    // Store submission in array
    submissions.push({ userId, questionId, answer });
    
    // Respond with success status and message
    res.status(200).json({ message: 'Submission successful' });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
