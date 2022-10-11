<template>
  <div class="input_box">
    <h1>Todo App ({{todos.length}})</h1>
    <form @submit.prevent="">
      <input type="text" @keyup.enter="addtask" v-model="Newtodo" placeholder="Чем хотите заняться?">
      <button class="input_btn" @click="addtask" style="margin-left: 15px;">+</button>
    </form>
      <div  v-for="todo in todos" :task="todo" :key="todo" class="todos-item">
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
          {body:"Купить хлеб"},
          {body:"Купить хлеб"}
        ],
        Newtodo: ""
    }
  },
  methods:{
    addtask(){
      if (this.Newtodo) {
        this.todos.push({
          body: this.Newtodo,
          completed:false
        });
        this.Newtodo = '';
      }
    },
    removetask(index){
      this.todos.splice(index, 1)
    },



    }
}
</script>

<style>
body{
  background-color: #8EC5FC;
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  display:flex;
  justify-content: center;
}

.input_box{
  width:550px;
  max-height: 50rem;
  background:white;
  padding:5px 25px;
  border-radius:15px;
  margin-top: 8%;
  overflow: hidden;
}

form{
  display:flex;
  justify-content:center;
}

input{
  width:80%;
  height: 40px;
  border:1px solid grey;
  border-radius:5px;
}

.input_btn{
  width:45px;
  height: 45px;
  border-radius:11px;
  border:none;
  background-color: rgb(250, 59, 59);
  font-size:30px;
  color:white;
  cursor: pointer;
}

.todos{
  display:flex;
}

.todos-item{
  max-width:80%;
  min-height: 40px;
  border: 1px solid grey;
  display:flex;
  margin:20px 21px;
  padding:3px;
  border-radius:5px;
  flex-direction: row;
  justify-content:space-between;
  word-wrap: break-word;
}

.todo_body{
  font-size: 24px;
  font-weight: bold;
  max-width: 80%;
  position: relative;
  top:5px;  
  left:10px
}

.todos-item:hover{
  cursor: pointer;
  background:rgb(161, 160, 160);
}

.remove_btn{
  width:45px;
  height: 45px;
  border-radius:11px;
  position: relative;
  left:60px;
  top:-3px;
  border:none;
  background-color: rgb(250, 59, 59);
  font-size:30px;
  color:white;
  cursor: pointer;
}
</style>
