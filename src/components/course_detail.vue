<template>
  <el-container>
  <el-header ><i class="el-icon-arrow-left"></i>
  北京高校云助手
  </el-header>
  <el-main>
       <el-row>课程名称  <el-button type="warning" icon="el-icon-star-off" circle></el-button></el-row>
       <el-row>
        <div>校区：{{info.campus}}</div>
        <div>日期：{{info.date}}</div>
        <div>学院：{{info.school}}</div>
        <div>教师：{{info.teacher}}</div>
        <div><el-rate
            v-model="value2"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate> 
        </div>
        </el-row>

        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="评论区" name="first">评论区</el-tab-pane>
        <el-tab-pane label="资源列表" name="second">资源列表</el-tab-pane>
    
        </el-tabs>
    </el-main>
    </el-container>
</template>

<script>
 export default {
    data() {//return中
        return {
            info:{//从数据库里读取相关信息
                campus:"中关村",
                date:"unknown",
                school:"unknown",
                teacher:"unknown"
            },
            value2: null,
            activeName: 'first'       
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
    
  }
</script>
<style>

</style>