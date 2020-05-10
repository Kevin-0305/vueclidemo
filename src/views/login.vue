<template>
  <div class="login">
    <p class="login-title">Joicy动画制作erp系统</p>
    <div class="login-line"></div>
    <!-- <img class="login-img" src="../../public/login_1.png"></img> -->
    <div class="login-win">
      <div class="input-wrap">
        <div class="input-name">用户名</div>
        <input class="login-input" type="text" v-model="name" />
        <span v-if="error.name" class="err-msg"></span>
      </div>
      <div class="input-wrap">
        <div class="input-pwd">密码</div>
        <input class="login-input" type="password" v-model="pwd" />
        <span v-if="error.pwd" class="err-msg"></span>
      </div>
      <div class="checkbox-islogin">
        <label>
          <input type="checkbox" name="islogin" value="2" />是否登录
        </label>
      </div>
      <div class="button-login">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import qs from "qs";

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
      var loginUrl = "http://joicyerp.ha.cc:8080/" + "login";
      const axios = require("axios");
      let data = { account: this.name, pwd: this.pwd };
      axios.post(loginUrl, data).then(res => {
        this.resStatus = res.status;
        this.$cookie.set("uid", res.data.data.id);
        console.log(this.resStatus);
        if (this.resStatus == 200) {
          this.$router.push({ name: "first" });
          console.log(this.$cookie.get("uid"));
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
  width: 500px;
  height: 300px;
  margin: 10% auto;
  border-style: outset;
}
.login-title {
  margin: 10px;
  font-size: 27px;
  word-spacing: 30px;
  color: black;
}
.login-line {
  width: 500px;
  height: 0px;
  margin: 0px;
  border-style: solid;
  border-width: 1px 0px 0px 0px;
}
.login-img {
  float: left;
}
.login-input {
  width: 200px;
  height: 30px;
  line-height: 30px;
}
.input-wrap {
  position: relative;
  top: 20px;
  left: 100px;
  margin: 10px 100px;
}
.input-name {
  float: left;
}
.input-pwd {
  position: relative;
  float: left;
  margin: 8px;
}
.checkbox-islogin {
  position: relative;
  top: 20px;
  left: 100px;
}
.button-login {
  position: relative;
  top: 30px;
  left: 70px;
}
// input.input-wrap {
//   left: 100px;
//   top: 100px;
//   color:black;
// }
</style>
