<template>
  <div>
    <my-head></my-head>
    <h1>放个简历</h1>
    <h3>基本资料</h3>
    <el-row>
      <el-col :span="14" :offset="5">
        <span class="left">姓名：陈XX</span>
        <span>年龄：23</span>
      </el-col>
      <el-col :span="14" :offset="5">
        <span class="left">性别：男</span>
        <span>籍贯：漳州</span>
      </el-col>
      <el-col :span="14" :offset="5">
        <span class="left">学历：勉强算大专，非统招</span>
        <span>专业：建筑工程技术</span>
      </el-col>
      <el-col :span="14" :offset="5">
        <span class="left">具体不写了，政治清白无犯罪史，如有入职可提供详细信息</span>
      </el-col>
    </el-row>
    <h3>个人技能</h3>
    <el-row>
      <el-col :span="14" :offset="5">
        <el-tag type="success">html ：一般</el-tag>
        <el-tag type="info">css ：比较差</el-tag>
        <el-tag type="success">javascript ：一般</el-tag>
        <el-tag>vue ：会用</el-tag>
        <el-tag>bootstrap ：会用</el-tag>
        <el-tag>element-ui ：会用</el-tag>
        <el-tag type="info">php ：懂一点</el-tag>
        <el-tag type="info">mysql ：懂一点</el-tag>
      </el-col>
    </el-row>
    <h3>项目经验</h3>
    <el-row>
      <el-col :span="14" :offset="5">
        <ul>
          <li>
            1：vue2.0+element-ui写的demo
          </li>
          <li>
            微信小程序demo
          </li>
        </ul>
      </el-col>
    </el-row>
    <foot></foot>
  </div>
</template>

<script>
  import myHead from './head'
  import foot from './foot'

    export default {
      name: "home-page",
      data() {
        return {
          slideList:[ '/1.jpg', '/2.jpg', '/3.jpg' ]
        }
      },
      components: {
        myHead,
        foot
      },
      methods: {
      }
    }
</script>

<style scoped>
.left{
  float: left;
}
  .el-col{
    margin-bottom: 20px;
  }
  .el-tag{
    margin-bottom: 10px;
  }
  li{
    margin-bottom: 10px;
    text-align:left;
  }
</style>
