
<template>
  <v-app>
    <div class="login-box" >
      <v-card class="login-form">
        <v-card-title class="login-title">SignUp
        </v-card-title>
        <v-card-subtitle>ユーザー情報を入力してください。</v-card-subtitle>
        <v-btn text color="light-blue" to="login"> ログインはこちら</v-btn>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >

          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="UserName"
            required
          ></v-text-field>

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
            SIGN UP
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
import firebase from"@/firebase/firebase";

  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || '名前を入力してください',
        v => (v && v.length <= 10) || '名前は10文字以内で入力してください',
      ],
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスを入力してください',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正です。',
      ],
      password: '',
    }),
    computed:{
      isVaild(){
        console.log(this.valid);
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
      submit () {
        // firebase.auth()
        // .createUserWithEmailAndPassword(this.email, this.password)
        console.log(firebase.auth());
        // .then((result) => {
        //   console.log("success",result);
        // })
        // .chach((error)=>{
        //   console.log("error",error);
        // })
      }  
    }
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