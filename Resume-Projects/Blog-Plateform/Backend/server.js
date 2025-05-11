const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || "secret123";

// 🧠 In-memory storage
let users = [];
let blogs = [];

// 🚀 Default route
app.get("/", (req, res) => {
  res.send("Blog API is running without MongoDB");
});

// 📝 Signup route
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;

  const userExists = users.find(u => u.username === username);
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: Date.now(), username, password: hashedPassword };
  users.push(user);

  res.status(201).json({ message: "User created successfully" });
});

// 🔐 Login route
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Create a blog
app.post("/api/blogs", (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBlog = {
    id: Date.now(),
    title,
    content,
    author,
    createdAt: new Date(),
  };

  blogs.push(newBlog);
  res.status(201).json({ message: "Blog created", blog: newBlog });
});

// Get all blogs

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

//View single blog
app.get("/api/blogs/:id", (req, res) => {
  const blog = blogs.find(b => b.id == req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
});

// Update a Blog Post
 
app.put("/api/blogs/:id", (req, res) => {
  const { title, content } = req.body;
  const blog = blogs.find(b => b.id == req.params.id);

  if (!blog) return res.status(404).json({ message: "Blog not found" });

  blog.title = title || blog.title;
  blog.content = content || blog.content;

  res.json({ message: "Blog updated", blog });
});

//Delete a Blog Post
app.delete("/api/blogs/:id", (req, res) => {
  const index = blogs.findIndex(b => b.id == req.params.id);

  if (index === -1) return res.status(404).json({ message: "Blog not found" });

  blogs.splice(index, 1);
  res.json({ message: "Blog deleted" });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
