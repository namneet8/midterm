const UserStory = require('../models/userStoriesSchema');

// List all userStories
exports.listUserStories = async (req, res) => {
  try {
    const userStories = await User.find();
    res.json(userStories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new user story
exports.createUserStory = async (req, res) => {
  const { title, description, priority, category } = req.body;

  try {
    const newUserStory = new UserStory({
      title,
      description,
      priority,
      category,
    });

    await newUserStory.save();
    res.json(newUserStory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get a user story by ID
exports.getUserStoryById = async (req, res) => {
  try {
    const userStory = await UserStory.findById(req.params.id);
    if (!userStory) {
      return res.status(404).json({ message: 'User Story not found' });
    }
    res.json(prUser)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a userStory by ID
exports.updateUserStory = async (req, res) => {
  const { title, description, priority, category } = req.body;
  const userStoryId = req.params.id;

  try {
    const updatedUserStory = await UserStory.findByIdAndUpdate(userStoryId, {
      title,
      description,
      priority,
      category,
    });
    if (!updatedUserStory) {
      return res.status(404).json({ message: 'User Story not found' });
    }
    res.json(updatedUserStory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Remove a userStory by ID
exports.removeUserStory = async (req, res) => {
  try {
    const removedUserStory = await UserStory.findByIdAndRemove(req.params.id);
    if (!removedUserStory) {
      return res.status(404).json({ message: 'User Story not found' });
    }
    res.json({ message: 'User Story removed successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};