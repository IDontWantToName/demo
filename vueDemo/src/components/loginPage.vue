<template>
    <div>
      <h1>{{$route.params.login}}</h1>
      <!--登录-->

      <el-row v-if="$route.params.login=='login'">
          <el-col :span="14" :offset="5">
            <el-input v-model="uname" clearable placeholder="请输入姓名"></el-input>
          </el-col>
          <el-col :span="14" :offset="5">
            <el-input v-model="upwd" clearable placeholder="请输入密码"></el-input>
          </el-col>
          <el-col :span="14" :offset="5">
            <el-button type="primary" plain size="medium">登录</el-button>
          </el-col>
          <el-col :span="14" :offset="5">
            <div>
              <el-checkbox class="left">
                自动登录
              </el-checkbox>
              <span>忘记密码？</span>
            </div>
            <!--<el-checkbox class="left">-->
                <!--登录即同意 《XXXX平台用户协议》-->
            <!--</el-checkbox>-->

          </el-col>
          <el-col :span="14" :offset="5">
            <span @click="toR">未有账号，去注册</span>
          </el-col>
      </el-row>


      <!--注册-->
      <el-row v-if="$route.params.login=='register'">
        <el-col :span="14" :offset="5">
          <el-input placeholder="请输入用户名"></el-input>
        </el-col>

        <el-col :span="14" :offset="5">
          <el-input placeholder="请输入密码"></el-input>
        </el-col>

        <el-col :span="14" :offset="5">
          <el-input placeholder="再次确认密码"></el-input>
        </el-col>

        <el-col :span="14" :offset="5">
          <el-input placeholder="请输入手机号"></el-input>
          <el-button type="primary" class="top">获取验证码</el-button>
        </el-col>

        <el-col :span="14" :offset="5">
            <el-checkbox class="left">
              我同意《XXXXXX服务协议》
            </el-checkbox>

        </el-col>

        <el-col :span="14" :offset="5">
          <span @click="toL">已有账号，去登录</span>
        </el-col>

      </el-row>
    </div>
</template>

<script>
    export default {
        name: "login-page",
        data () {
          return {
            uname: '',
            upwd: ''
          }
        },
        methods: {
          toR(){
            this.$router.push({name:'loginPage',params:{login: 'register'}})
          },
          toL () {
            this.$router.push({name:'loginPage',params:{login: 'login'}})
          }
        }

    }
</script>

<style scoped>
  .el-row{
    margin-bottom: 30px;
  }
  .el-col{
    margin-bottom: 20px;
  }
  .el-button{
    width: 100%;
  }
  .left{
    float: left;
  }
  .top{
    margin-top: 20px;
  }
</style>
