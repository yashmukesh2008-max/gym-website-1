const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to handle form data
app.use(bodyParser.urlencoded({ extended: true }));

// --- THE FRONT-END (HTML/CSS) ---
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IRON PULSE | Backend Active</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap" rel="stylesheet">
    <style>
        :root { --primary: #ff4d00; --dark: #0f0f0f; }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        body { background: var(--dark); color: white; text-align: center; }
        .navbar { padding: 1.5rem; background: #000; border-bottom: 1px solid #333; }
        .hero { padding: 100px 20px; }
        h1 { font-size: 3rem; color: var(--primary); }
        .form-container { background: #1a1a1a; padding: 40px; max-width: 400px; margin: 20px auto; border-radius: 8px; }
        input { width: 100%; padding: 10px; margin: 10px 0; background: #333; border: none; color: white; }
        button { background: var(--primary); color: white; border: none; padding: 15px; width: 100%; cursor: pointer; font-weight: bold; }
    </style>
</head>
<body>
    <nav class="navbar"><h2>IRON<span>PULSE</span></h2></nav>
    <div class="hero">
        <h1>JOIN THE TRIBE</h1>
        <p>Enter your details to start your membership.</p>
        
        <div class="form-container">
            <form action="/join-gym" method="POST">
                <input type="text" name="userName" placeholder="Full Name" required>
                <input type="email" name="userEmail" placeholder="Email Address" required>
                <button type="submit">BECOME A MEMBER</button>
            </form>
        </div>
    </div>
</body>
</html>
`;

// --- THE ROUTES (Back-End Logic) ---

// 1. Route to show the website
app.get('/', (req, res) => {
    res.send(htmlContent);
});

// 2. Route to handle the Form Submission
app.post('/join-gym', (req, res) => {
    const { userName, userEmail } = req.body;
    
    // In a real app, you'd save this to a database like MongoDB or SQL.
    // For now, we will log it to the console and show a success message.
    console.log(`New Member Alert! Name: ${userName}, Email: ${userEmail}`);
    
    res.send(`
        <body style="background:#0f0f0f; color:white; font-family:sans-serif; text-align:center; padding-top:100px;">
            <h1 style="color:#ff4d00;">Welcome to the Team, ${userName}!</h1>
            <p>We received your email: ${userEmail}. Check your inbox for your welcome pass.</p>
            <a href="/" style="color:gray;">Go Back</a>
        </body>
    `);
});

app.listen(PORT, () => {
    console.log(`Gym Server is running at http://localhost:${PORT}`);
});