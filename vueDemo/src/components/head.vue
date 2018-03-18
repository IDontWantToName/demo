<template>
    <header>
      <el-row type="flex" class="row-bg">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <router-link :to="{path:'/'}">不知道写什么的首页</router-link>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
           <router-link :to="{path:'/blog'}">技术栈</router-link>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <router-link :to="{name:'loginPage',params:{login: 'login'}}">login</router-link>
            <b>/</b>
            <router-link :to="{name:'loginPage',params:{login: 'register'}}">register</router-link>
          </div>
        </el-col>
      </el-row>
    </header>
</template>

<script>
    export default {
      name: "myHead",
      data(){
          return{
            modal: false
          }
      },
      methods: {
      }
    }
</script>

<style scoped>
  header{
    border-bottom: 1px solid #7a7775;
    padding-bottom: 20px;
    margin: 30px 0;
  }
</style>

