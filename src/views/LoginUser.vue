
<template>
  <v-app>
    <div class="login-box" >
      <v-card class="login-form">
        <v-card-title class="login-title">Login</v-card-title>
        <v-card-subtitle>ユーザー情報を入力してください。</v-card-subtitle>
        <v-btn text color="light-blue" to="signup"> 新規登録はこちら</v-btn>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            type="password"
            label="Password"
          ></v-text-field>

          <v-btn
            :disabled="isValid"
            color="success"
            class="login-btn"
            @click="validate"
          >
            LOGIN
          </v-btn>


          <v-btn
          >
           CLEAR
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスを入力してください',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正です。',
      ],
      password: '',
      // emailRules: [
      //   v => !!v || 'E-mail is required',
      //   v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      // ],
    }),
    computed:{
      isVaild(){
        return !this.valid;
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style scoped>
.login-form{
  margin:150px;
  padding:30px;
}
.login-box{
  width: 50%;
  margin:0px auto;
  padding:30px;
}
.login-title{
  display: inline-block;
}
.login-btn{
  margin-right:20px;
}

</style>