<template>
    <div>
      <my-head></my-head>
      <h1>基于vue2.0和element-ui实现的单页</h1>
      <h3>下面这些都是我抄的，别的不会就会抄</h3>
      <el-carousel height="300px">
        <el-carousel-item v-for="(item,index) in picList" :key="item">
          <img :src = item :alt="index">
        </el-carousel-item>
      </el-carousel>
      <h3>层级选择器</h3>
      <el-row>
        <el-col :span="12">
          <h4>hover</h4>
          <el-cascader
            expand-trigger="hover"
            :options="options"
            @change="handleChange">
          </el-cascader>
        </el-col>
        <el-col :span="12">
          <h4>click</h4>
          <el-cascader
            :options="options"
            @change="handleChange">
          </el-cascader>
        </el-col>

      </el-row>
      <h3>DatePicker 日期选择器</h3>
      <el-row>
        <el-col :span="12">
          <h4>默认</h4>
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-col>
        <el-col :span="12">
          <h4>带快捷选项</h4>
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions1">
          </el-date-picker>
        </el-col>
      </el-row>
      <h3>Tabs 标签页</h3>
      <el-tabs v-model="activeName1" tabPosition="left">
        <el-tab-pane label="用户管理" name="first">xx用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">xx配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">xx角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">xx定时任务补偿</el-tab-pane>
      </el-tabs>

      <h3>Upload 上传</h3>
      <el-row>
        <el-col :span="8">
          <h5>默认</h5>
          <el-upload
            class="upload-demo"
            ref="upload"
            action="#"

            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
        <el-col :span="8">
          <h5>图片列表缩略图</h5>
          <el-upload
            ref="upload"
            action="#"
            list-type="picture"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-col>
        <el-col :span="8">
          <h5>照片墙</h5>
          <el-upload
            action="#"
            :before-remove="beforeRemove"
            :on-preview="handlePictureCardPreview"
            multiple
            :limit="3"
            list-type="picture-card"
            :on-exceed="handleExceed"
            :auto-upload="false"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="#">
          </el-dialog>
        </el-col>
      </el-row>
      <h3>折叠面板手风琴效果</h3>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>





    <foot></foot>

    </div>

</template>

<script>
    import myHead from './head'
    import foot from './foot'
    export default {
        name: "blog",
        data () {
          return {
            picList: [ '/static/images/1.png', '/static/images/2.jpg', '/static/images/3.jpg', '/static/images/4.jpg'],
            options: [
              {
                value: 'zhinan',
                label: '指南',
                children: [
                  {
                    value: 'shejiyuanze',
                    label: '设计原则'
                  },
                  {
                    value: 'AAAAAAAAA',
                    label: 'XX原则'
                  }
                ]
              },
              {
                value: 'zhixi',
                label: '指西',
                children: [
                  {
                    value: 'meiyuanze',
                    label: '没原则'
                  },
                  {
                    value: 'AAAAAAAAA',
                    label: 'XX原则'
                  }
                ]
              },
              {
                value: 'zhibei',
                label: '指北',
                children: [
                  {
                    value: 'henyouyuanze',
                    label: '很有原则'
                  },
                  {
                    value: 'AAAAAAAAA',
                    label: 'XX原则'
                  }
                ]
              }
            ],
            pickerOptions1: {
              disabledDate(time) {
                return time.getTime() > Date.now();
              },
              shortcuts: [{
                text: '今天',
                onClick(picker) {
                  picker.$emit('pick', new Date());
                }
              }, {
                text: '昨天',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24);
                  picker.$emit('pick', date);
                }
              }, {
                text: '一周前',
                onClick(picker) {
                  const date = new Date();
                  date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                  picker.$emit('pick', date);
                }
              }]
            },
            activeName: 'second',
            activeName1: '1',
            value1: '',
            value2: '',
            dialogImageUrl: '',
            dialogVisible: false
          }
        },
        components: {
          myHead,
          foot
        },
      methods: {
        handleChange(value) {
          // console.log(value);
        },
        handleExceed(files, fileList) {
          this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove (file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        submitUpload () {
          // this.$refs.upload.submit();
          this.$message('没有服务器，别点了');
        },
        handlePictureCardPreview (file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
      }
    }
</script>

<style scoped>

</style>
