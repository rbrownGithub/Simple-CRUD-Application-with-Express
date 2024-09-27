// Imports the Express framework and initializes an Express application (app).
const express = require('express');
const app = express();
const PORT = 3000; // Defines PORT as 3000, where the server will listen for incoming requests.

// Middleware to parse JSON bodies
app.use(express.json());

// Data store (replace with a database in a real application)
let items = [];

// POST route to add a new item
app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = Date.now().toString(); // Unique ID based on timestamp (not ideal for production)
    items.push(newItem);
    res.status(201).json(newItem);
});

// GET route to list all items
app.get('/items', (req, res) => {
    res.json(items);
});

// GET route to retrieve a single item by its ID
app.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const foundItem = items.find(item => item.id === itemId);
    if (!foundItem) {
        res.status(404).send('Item not found');
    } else {
        res.json(foundItem);
    }
});

// PUT route to update an item by its ID
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    let updatedItem = req.body;
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
        items[itemIndex] = { ...items[itemIndex], ...updatedItem };
        res.json(items[itemIndex]);
    } else {
        res.status(404).send('Item not found');
    }
});

// DELETE route to delete an item by its ID
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    items = items.filter(item => item.id !== itemId);
    res.status(204).send();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
