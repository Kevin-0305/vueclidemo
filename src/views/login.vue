<template>
  <div class="login">
    <div class="input-wrap">
      <input type="text" v-model="name" />
      <span v-if="error.name" class="err-msg">{{error.name}}</span>
    </div>
    <div class="input-wrap">
      <input type="password" v-model="pwd" />
      <span v-if="error.pwd" class="err-msg">{{error.pwd}}</span>
    </div>
    <div class="input-wrap">
      <button @click="login">提交</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  data() {
    return {
      name: "",
      pwd: "",
      error: {
        name: "",
        pwd: ""
      },
      resStatus: ""
    };
  },

  methods: {
    // check(name, pwd) {
    //   if (name == "") {
    //     this.error.name = "请输入姓名";
    //     console.log("请输入姓名");
    //     return  false;
    //   }
    //   if (pwd == "") {
    //     this.error.pwd = "请输入密码";
    //     console.log("请输入密码");
    //     return false;
    //   }
    // },
    login() {
      //const { name, pwd, $router } = this;
      //   if (!this.check(this.name, this.pwd)) return;
      var loginUrl = "http://192.168.2.25:8000/" + "login";
      const axios = require("axios");
      let data = { account: this.name, pwd: this.pwd };
      axios.post(loginUrl, data).then(res => {
        this.resStatus = res.status;
        this.$cookie.set('uid',res.data.data.id);
        console.log(this.resStatus);
        if (this.resStatus == 200) {
        this.$router.push({ name: "first" });
        console.log(this.$cookie.get('uid'))
      } else {
        alert("用户名错误");
        console.log("2");
      }
      });
     // console.log(this.resStatus);
      
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 300px;
  margin: 10% auto;
}
</style>