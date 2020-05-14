<template>
  <div class="project">
    <div class="project-head">
      <p class = "project-xmlb">项目列表</p>
      <button class = "project-btn-xmtj" @click="dialogVisibleLogin = true">项目添加</button>
      </div>
     <el-dialog :visible.sync="dialogVisibleLogin" :lock-scroll="true" :modal-append-to-body="false" 
      center
      :destroy-on-close="true"
      :close-on-click-modal="false"
      >
    <h1 margin-top="0px" >添加项目</h1>

    </el-dialog>
      <div class = "head-line"></div>
      <!-- <div class = "project-title"> -->
      <!-- <table style="width: 1400px;margin-top: 20px;">
      <tr>
      <td  v-for="item in titleList":key="item.num" class = "project-td-title">{{item}}</td>
      </tr>
      </table> -->
      <template>
          <el-table :data="getData" style="width: 100%">
        <el-table-column prop="name" label="工程名" width="180">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="180">
        </el-table-column>
        <el-table-column prop="createTime" label="修改时间" width="180">
        </el-table-column>
        <el-table-column prop="percent" label="工程进度" width="180">
        </el-table-column>
        <el-table-column prop="" label="其他" width="180">
        </el-table-column>
        <el-table-column label="操作" align="center" min-width="100">
　　　　<template slot-scope="scope">
　　　　　　<el-button type="text" @click="inProject(scope.row.id)">查看详情</el-button>
　　　　　　<el-button type="info" @click="delProject(scope.row.id)">删除</el-button>
　　　　</template>
　　    </el-table-column>
          </el-table>
      </template>

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      titleList: ['工程名','创建时间','修改时间','工程进度','其他'],
      getData:[],
      dataVar:1,
      dialogVisibleLogin : false,
    }
  },
  created () {
    var loginUrl = "http://192.168.2.25:8000/" + "loadProjects";
    const axios = require("axios");
    axios.get(loginUrl).then(res => {
        this.resStatus = res.status;
        this.getData = res.data.data;
    })
  },
  methods : {
    add () {
    console.log(this.resStatus)
    console.log(this.getData)
  },
  inProject (id) {
    console.log(id)
    this.$router.push({ name: "first" });
  },
  delProject (id) {
    console.log(id)
  },
  handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  },
  coleDialog () {
    this.dialogVisibleLogin=false;
  }
}
</script>

<style>
.project {
  width: 1400px;
  height: 800px;
  margin: 0 auto;
  border-style: solid ;
  border-width: 1px;
  
}
.project-head {
  width: 1400px;
  height: 100px;
}
.el-dialog__wrapper {
  width:500px;
  height:600px;
  background:cadetblue;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.project-xmlb {
  font-size:40px;
  float: left;
  align-self: center;
  display:inline ;
  margin: 20px 20px; 
}
.project-btn-xmtj {
  width: 150px;
  height: 60px;
  display:inline ;
  align-self: center;
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 30px;
}
.head-line {
  width: 1400px;
  border-style: solid ;
  border-width: 1px;
}
.project-title {
  display: table;
  width: 1400px;
  height: 80px;
  background: red;
}
.project-td-title {
  width: 20%;
  font-size: 25px;
  border-style: solid ;
  border-width: 1px;
  border-top-style:none;
  border-bottom-style:none;
}
</style>
