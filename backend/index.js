const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pain_tracker', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

// Route for getting pain suggestions
app.post('/pain_suggestions', (req, res) => {
   const { bodyPart } = req.body;
   // Mocked suggestions data
   const suggestions = {
      head: ["Rest in a quiet room", "Take a pain reliever"],
      arm: ["Apply ice", "Rest your arm"],
      // Add other body parts and suggestions
   };
   res.json(suggestions[bodyPart] || []);
});

app.listen(5000, () => console.log('Server running on port 5000'));
