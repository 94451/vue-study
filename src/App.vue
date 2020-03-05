<template>
    <div class="app">
        <div>
            输入数字：<input type="text" v-model="num1" />
        </div>
        <div>
            输入数字：<input type="text" v-model="num2" />
        </div>
        <div><button @click="add">add</button> 总和：{{restuleAdd}}</div>
        <div><button @click="sub">sub</button> 差值：{{restuleSub}} </div>
        <div><button @click="mul">mul</button> 乘积：{{restuleMul}} </div>
        <div><button @click="divi">divi</button>商：{{restuleDivi}}</div>
        <button @click ="clear">清除</button>
    </div>
</template>
<script>

export default {
    name: 'App',
    data() {
        return {
            num1:'',
            num2:'',
            restule:"0",
            restuleAdd:'0',
            restuleSub:'0',
            restuleMul:'1',
            restuleDivi:'0',
            
        }
    },
    methods: {
       add(){
           this.restule = Number(this.num1) + Number(this.num2) + Number(this.restule);
           this.restuleAdd = this.restule
       },
       sub(){
           
           this.restuleSub = Number(this.num1) - Number(this.num2);
           //this.total = this.restule
       },
       mul(){
           
           this.restuleMul = Number(this.restuleMul) * Number(this.num1) * Number(this.num2);
            
       },
        divi(){
           
           this.restuleDivi = (Number(this.num1) / Number(this.num2));
        }, 
       clear(){
           this.num1 = '';
           this.num2 = '';
           this.restule ="0";
           this.restuleAdd = '0';
           this.restuleSub = "0";
           this.restuleMul = "1";
           this.restuleDivi = "0";
       }
       
    }
}
</script>