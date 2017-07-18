$(function () {
    Vue.component("todo-item",{
        props:["content","is-done"],
        template:"\
        <li class='list-group-item btn-group btn-group-sm'  >\
            {{content}}\
            <span class='badge' style='background-color:red;'>\
                <i class='glyphicon glyphicon-remove'></i>\
            </span>\
            <span class='badge' >\
                <i class='glyphicon' v-bind:class='{ok:is-done}'></i>\
            </span>\
        </li>\
        "
    })
    var app=new Vue({
        el:"#todo",
        data:{
            newTodo:"",
            todoList:[
                {content:"扫地",isDone:false},
                {content:"洗衣服",isDone:true},
                {content:"做饭",isDone:false},
                {content:"买菜",isDone:true},
                {content:"学习",isDone:false}
            ]
        },
        methods:{
            addTodo:function () {
                this.todoList.push({content:this.newTodo,isDone:false});
                this.newTodo="";
            }
        }
    })
})