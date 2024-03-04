const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];
  
  function fetchById(collection, id, reject) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = collection.find(item => item.id === id);
  
        if (item) {
          return resolve(JSON.stringify(item));
        }
  
        return reject();
      }, 1000);
    });
  }
  
  function fetchPersonById(id) {
    const reject = () => Promise.reject(`Person with id: ${id} doesn't exist`);
    return fetchById(persons, id, reject);
  }
  
  function fetchJobById(id) {
    const reject = () => Promise.reject(`Job with id: ${id} doesn't exist`);
    return fetchById(jobs, id, reject);
  }
  
  Promise.all([fetchPersonById(1), fetchJobById(3)])
    .then((results) => results.map(result => JSON.parse(result)))
    .then((results) => console.log(results))
    .catch((err) => console.error(err));