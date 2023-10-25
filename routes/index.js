var express = require('express');
var router = express.Router();
const fakeDeveloperSkills = require('../fakeData');


/* GET home page. */
router.get('/', function(req, res, next) {
  
  const skills = fakeDeveloperSkills;

  res.render('index', {skills});
});

module.exports = router;

// Show route for a single developer skill
router.get('/:id', (req, res) => {
  // Retrieve the skill based on the provided ID (use a unique identifier like the skill's ID)
  const skillId = req.params.id;
  const skill = fakeDeveloperSkills.find(skill => skill.id === Number(skillId));

  if (!skill) {
    // Handle the case where the skill with the provided ID is not found
    res.status(404).send('Skill not found');
  } else {
    // Render the 'show' EJS template and pass the skill as a variable
    res.render('show', { skill });
  }
});