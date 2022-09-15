module.exports = app => {
    const tasks = require("../controllers/tasks.controller");
  
    var router = require("express").Router();
  
    // Create a new tasks
    router.post("/", tasks.create);


    // Retrieve all tasks
    router.get("/", tasks.findAll);

    // Retrieve a single task with id
    router.get("/:id", tasks.findOne);
  
    // Update a task with id
    router.put("/:id", tasks.update);
  
    // Delete a task with id
    router.delete("/:id", tasks.delete);
  
    // Delete all tasks
    router.delete("/", tasks.deleteAll);

    app.use('/api/tasks', router);
  };
  