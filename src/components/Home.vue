<template>

  <div style="display:flex;justify-content: center;align-items: center;">

    <el-form ref="form" :model="form" style="margin-top: 200px">

      <el-form-item>
        <template slot="label">
          <strong>解析地址</strong>
        </template>
        <el-select v-model="form.url" placeholder="请选择解析线路" style="width: 600px;">
          <el-option label="线路一" value="http://www.pangujiexi.com/pangu/?url="></el-option>
          <el-option label="线路二" value="http://jx.youyitv.com/?url="></el-option>
          <el-option label="线路三" value="http://jx.quanmingjiexi.com/?url="></el-option>
          <el-option label="线路四" value="http://17kyun.com/api.php?url="></el-option>
          <el-option label="线路五" value="https://jiexi.t7g.cn/?url="></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <template slot="label">
          <strong>视频地址</strong>
        </template>
        <el-input v-model="form.input" style="width: 600px;"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即解析</el-button>
      </el-form-item>

      <el-form-item>
        <strong>使用方法：复制任意视频网站VIP链接，粘贴到视频地址栏，点击开始解析即可</strong>
        <p>
          <strong>资源来源于网络，如有侵权，请联系本人予以删除！邮箱:skwen226@163.com</strong>
        </p>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      listData: [
        'http://www.pangujiexi.com/pangu/?url=',
        'http://jx.youyitv.com/?url=',
        'http://jx.quanmingjiexi.com/?url=',
        'http://17kyun.com/api.php?url=',
        'https://jiexi.t7g.cn/?url='
      ],
      form: {
        url: 'http://www.pangujiexi.com/pangu/?url=',
        input: ''
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.form.input === '') {
        this.$message.info("请输入需要解析的视频地址")
        return
      }
      console.log(this.form);
      window.open(this.form.url + this.form.input, '_blank')
    }
  }
}
</script>

<style scoped>

</style>
