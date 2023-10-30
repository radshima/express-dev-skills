

const skills = [
    {id: 1, skill: 'JavaScript', proficient: false},
    {id: 2, skill: 'CSS', proficient: false},
    {id: 3, skill: 'HTML', proficient: false},
    {id: 4, skill: 'Node.js', proficient: false},
    {id: 5, skill: 'React', proficient: false},
    {id: 6, skill: 'Python', proficient: false},
    {id: 7, skill: 'SQL', proficient: false},
  ];
	
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
  };
	

  function deleteOne(id) {
   
    id = parseInt(id);
  
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
   
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}

  function getAll() {
    return skills;
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }