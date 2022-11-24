<template>
  <div class="input_box">
    <h1>Список задач ( {{todos.length}} )</h1>
    <form @submit.prevent="">
      <input v-focus class="input_todo" type="text" v-model="Newtodo" placeholder="Чем хотите заняться?">
      <button class="input_btn" @click="addtask" style="margin-left: 15px;">+</button>
      <button @click="todos = []">Clear all</button>
    </form>
    <div v-if="todos.length <= 0" class="empty_todos">Список задач пуст</div>
    <div v-for="todo in todos" :class="{done : todo.completed}" @click="todo.completed = !todo.completed" :todo="todo" :key="todo" class="todos-item">
      <div class="todo_body">{{todo.body}}</div>
      <button  @click="removetask" class="remove_btn"><i class="las la-trash"></i></button>
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return{
        todos:[
          {body:"Сделать сайт", completed: true},
          {body:"Прочитать документацию vuex", completed: false}
        ],
        Newtodo: "",
    }
  },
  methods:{
    addtask() {
      if (!this.Newtodo) {
        alert("Для добавления новой задачи, поле не должно быть пустое")
      }
      if (this.Newtodo) {
        this.todos.push({
          body: this.Newtodo,
          completed: false
        });
        this.Newtodo = '';
      }
    },
    clearCompleted(todo) {
      if(this.todos.completed = true){
        this.todos = this.todos.filter(todo.completed = false)
      }
    },
    removetask(index) {
      this.todos.splice(index, 1)
    },



    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

body {
  background: #352f5b;
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
}

.done {
  background: greenyellow
}

.empty_todos {
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  color: rgb(151, 11, 11)
}

.input_box{
  width: 560px;
  max-height: 50rem;
  min-height: 10rem;
  background: white;
  padding: 5px 25px;
  border-radius: 15px;
  margin-top: 8%;
  overflow: hidden;
}

.input_todo {
  padding-left: 15px;
  width: 78%;
}

input[type="text"]
{
  font-family: 'Montserrat', sans-serif;
  color: black;
  font-weight: bold;
}

form{
  display: flex;
  justify-content: center;
}

input{
  width: 80%;
  height: 40px;
  border: 1px solid grey;
  border-radius: 5px;
}

.input_btn{
  width: 45px;
  height: 45px;
  border-radius: 11px;
  border: none;
  background-color: rgb(250, 59, 59);
  font-size: 30px;
  color: white;
  cursor: pointer;
}

.todos{
  display: flex;
}

.todos-item{
  max-width: 80%;
  min-height: 20px;
  border: 1px solid grey;
  display:flex;
  margin: 20px 21px;
  padding: 3px;
  border-radius:5px;
  flex-direction: row;
  justify-content: space-between;
  word-wrap: break-word;
}

.todo_body{
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  max-width: 80%;
  position: relative;
}

.todos-item:hover{
  cursor: pointer;
  background: rgb(161, 160, 160);
}

.remove_btn{
  width: 45px;
  height: 45px;
  border-radius:11px;
  position: relative;
  left: 63px;
  top: 5px;
  border: none;
  background-color: rgb(250, 59, 59);
  font-size: 30px;
  color: white;
  cursor: pointer;
}
</style>
