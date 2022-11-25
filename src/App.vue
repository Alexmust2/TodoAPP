<template>
  <div class="input_box">
    <h1>Список задач ( {{todos.length}} )</h1>
    <form @submit.prevent="">
      <input v-focus class="input_todo" type="text" v-model="Newtodo" placeholder="Чем хотите заняться?">
      <div class="form_btn">
        <button class="input_btn" @click="addtask" style="margin-left: 15px;">+</button>
        <button class="clear_btn" @click="todos = []">Clear all</button>
      </div>
    </form>
    <div v-if="todos.length <= 0" class="empty_todos">Список задач пуст</div>
    <TransitionGroup name="todo_list">
      <div v-for="todo, index in todos" :class="{done : todo.completed}" :todo="todo" :key="todo" class="todos-item">
        <div @click="todo.completed = !todo.completed"  class="todo_body">{{todo.body}}</div>
        <button @click="removeTask(index)" class="remove_btn"><i class="las la-trash"></i></button>
      </div>
    </TransitionGroup>
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
    removeTask(index) {
      this.todos.splice(index, 1);
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

.todo_list-enter-active,
.todo_list-leave-active {
  transition: all 0.5s ease;
}
.todo_list-enter-from,
.todo_list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.clear_btn {
  width: 45px;
  height: 45px;
  border-radius: 11px;
  border: none;
  background-color: rgb(250, 59, 59);
  font-size: 12px;
  margin-left: 15px;
  color: white;
  cursor: pointer;
}

.form_btn {
  display: flex;
  flex-direction: row;
}

body {
  background: #352f5b;
  display: flex;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
}

.done {
  background: rgba(183, 240, 99, 0.757);
  text-decoration: line-through;
  
}

.done {
  background-color: aquamarine;
}

.empty_todos {
  font-size: 24px;
  font-weight: bold;
  margin: 20px;
  color: rgb(151, 11, 11)
}

::-webkit-scrollbar-button {
  visibility: hidden;
}

.input_box{
  width: 560px;
  max-height: 45rem;
  min-height: 10rem;
  background: white;
  padding: 5px 25px;
  border-radius: 15px;
  margin-top: 8%;
  overflow: auto;
}

.input_todo {
  padding-left: 15px;
  width: 79%;
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
  margin-left: 20px;
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
  position: relative;
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
  width: 80%;
  padding: 15px;
  position: relative;
  z-index: 2;
}

.todos-item:hover{
  cursor: pointer;
  background: rgba(161, 160, 160, 0.719);
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
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-device-width: 400px) {
  .input_box {
    width: 300px;
    height: 100%;
  }

  input[type="text"] {
    width: 65%;
    margin-left: -20px;
    position: absolute;
    z-index: 2;
    margin-top: 15px;
  }

  
  .todos-item {
    margin-bottom:25px;
  }

  .input_btn {
    font-size: 18px;
    position: relative;
    left: 170px;
    top: 15px;
    display: flex;
    justify-content: center;
    align-items: center; 
  }

  .clear_btn {
    margin-top: 70%;
    position: relative;
    left: -175px;
    display: flex;
    justify-content: center;
    align-items: center;    
  }

  .remove_btn {
    width: 20px;
    height: 40px;
    margin-right: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  h1 {
    font-size: 16px;
  }
  .todo_body {
    font-size: 14px;
  }
 }

</style>
