import express from "express";

const PORT = 8080;
const app = express();

// Sample DB
const users = [
    {
        id: 1,
        name: "One",
        age: 21
    },
    { id: 2, name: "Two", age: 22 },
    { id: 3, name: "Three", age: 24 }
]

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello from the Course.");
});

// To get all users
app.get("/users", (req, res) => {
    res.json(users);
});

// To get a particular user
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(a => a.id == id);

    if (!user) {
        return res.json({ message: "User not found" });
    }
    res.json(user);
});

// Post - Creating a user
app.post("/users", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.json({ message: "Both Name and Age are required." });
    }

    const newUser = {
        id: users.length + 1,
        name,
        age
    }

    users.push(newUser);
    res.json(newUser);
});

// Update: put
app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const { name, age } = req.body;

    const user = users.find(a => a.id == id);

    if (!user) {
        req.json({ message: "User not found" });
    }

    user.name = name ?? user.name;
    user.age = age ?? user.age;

    res.json(user);
});

// Delete : delete
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(a => a.id === id);

    if (index === -1) {
        res.json({ message: "User not exists" });
    }

    const deletedUser = users.splice(index, 1);
    res.json(deletedUser);
});

app.listen(PORT, () => {
    console.log(`Server is running on port number ${PORT}`);
})
