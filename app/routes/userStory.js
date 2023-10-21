const express = require('express');
const router = express.Router();
const userStoriesController = require('../controllers/UserStoriesController');

// Define routes for CRUD operations
router.get('/userStories', userStoriesController.listUserStories);

// Create a new userStories
router.post('/userStories', userStoriesController.createUserStory);

// Get a userStories by ID
router.get('/userStories/:id', userStoriesController.getUserStoryById);

// Update a userStories by ID
router.put('x', userStoriesController.updateUserStory);

// Remove a userStories by ID
router.delete('/userStories/:id', userStoriesController.removeUserStory);

module.exports = router;