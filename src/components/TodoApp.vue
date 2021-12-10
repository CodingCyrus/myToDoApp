<template>
  <div class="container">
    <h1 class="text-center mt-5">CodingCyrus To-Do App</h1>

    <!-- Input -->
    <div class="d-flex mt-2">
      <input v-model="task" type="text" placeholder="Enter Task" class="form-control">
      <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
    </div>

    <div>
      <span id="error"></span>
    </div>

    <!-- Task table -->
    <table class="table table-bordered mt-4">
  <thead>
    <tr>
      <th scope="col">To Do</th>
      <th scope="col">Progress Status</th>
      <th scope="col" class="text-center">Edit</th>
      <th scope="col" class="text-center">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(task, index) in tasks" :key="index">
      <td>
        <span :class="{'finished': task.status === 'Complete'}"> {{task.name}} </span>
      </td>

      <td style="width: 150px">
        <span @click="changeStatus(index)" class= "pointer"
          :class="{'inProgress': task.status === 'IN PROGRESS',
          'notinProgress': task.status === 'NOT STARTED',
          'complete': task.status === 'COMPLETED',
          }">
          {{task.status}}
        </span>
      </td>

      <td>
        <div class="text-center" @click="editTask(index)">
          <span class="fa fa-pen"></span>
        </div>
      </td>
      <td>
        <div class="text-center" @click="deleteTask(index)">
        <span class="fa fa-trash"></span>
        </div>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data(){
    return{
      task: "",
      editedTask: null,
      availableStatus: ["NOT STARTED", "IN PROGRESS", "COMPLETED"],



      
      tasks: [
        {
          name: 'My first task',
          status: 'IN PROGRESS'
        },
        {
          name: 'My new second task',
          status: 'NOT STARTED'          
        }
      ]
    }
  },

  //All Methods for To-Do App
  methods: {
    submitTask(){
      if(this.task.length === 0){
        var error = document.getElementById("error")
        error.textContent = "Please enter a task"
        error.style.color = "red"
        return;
      }
      
      if (this.editedTask === null){
        this.tasks.push({
          name: this.task,
          status: "NOT STARTED"
        });
      } else {
        this.tasks[this.editedTask].name= this.task;
        this.editedTask = null;
      }

      this.task = "";
    },

    deleteTask(index){
      this.tasks.splice(index, 1);
    },

    editTask(index){
      this.task = this.tasks[index].name;
      this.editedTask = index;
    },

    changeStatus(index){
      let newIndex = this.availableStatus.indexOf(this.tasks[index].status);
      if(++newIndex > 2) newIndex = 0;
      this.tasks[index].status = this.availableStatus[newIndex];
    },
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
.finished {
  text-decoration: line-through;
}

.inProgress {
  background-color: orange;
  padding: auto;
  text-align: center;
}

.notinProgress {
  background-color: yellow;
  padding: auto;
  text-align: center;
}

.complete {
  background-color: green;
  color: white;
  padding: auto;
  text-align: center;
}
</style>
