<template>
  <el-form ref="LoginFormRef" :model="userInfo" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="账号" prop="username">
      <el-input v-model.number="userInfo.username" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="userInfo.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(LoginFormRef)">提交</el-button>
      <el-button @click="resetForm(LoginFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style></style>

<script lang="ts" >
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import router from '../router'
export default {
  setup() {
    const LoginFormRef = ref<FormInstance>()
    const userInfo = reactive({
      password: '',
      username: '',
    })
    const ruleForm = reactive({
      password: '',
      checkPass: '',
      username: '',
    })
    const rules = reactive({
      password: [{ validator: validatePass, trigger: 'blur' }],
      checkPass: [{  trigger: 'blur' }],
      username: [{ validator: checkAge, trigger: 'blur' }],
    })
    function checkAge(rule: any, value: any, callback: any) {
      if (!value) {
        return callback(new Error('请输入你的账号'))
      }
      else {
        callback()
      }
    }
    function validatePass(rule: any, value: any, callback: any) {
      if (value === '') {
        callback(new Error('请输入你的密码'))
      } else {
        if (ruleForm.checkPass !== '') {
          if (!LoginFormRef.value) return
          LoginFormRef.value.validateField('checkPass', () => null)
        }
        callback()
      }
    }
    function resetForm(formEl: FormInstance | undefined) {
      if (!formEl)
        return
      formEl.resetFields()
    }
    function submitForm(formEl: FormInstance | undefined) {
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          if(userInfo.username == "zhangsan" && userInfo.password == "123456"){
            localStorage.setItem('token',"已登录")
            router.push('/student')
          }
          else {
            alert("登录失败")
          }
        }
        else {
          console.log('error submit!')
          return false
        }
      })
    }
    return {
      reactive,
      LoginFormRef,
      rules,
      checkAge,
      validatePass,
      resetForm,
      submitForm,
      ruleForm,
      userInfo
      }
  }
}






</script>