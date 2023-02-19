<template>
  <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="账号" prop="age">
      <el-input v-model.number="ruleForm.age" />
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style></style>

<script lang="ts" >
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
export default {
  setup() {
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive({
      pass: '',
      checkPass: '',
      age: '',
    })
    const rules = reactive({
      pass: [{ validator: validatePass, trigger: 'blur' }],
      checkPass: [{  trigger: 'blur' }],
      age: [{ validator: checkAge, trigger: 'blur' }],
    })
    function checkAge(rule: any, value: any, callback: any) {
      if (!value) {
        return callback(new Error('请输入你的账号'))
      }
    }
    function validatePass(rule: any, value: any, callback: any) {
      if (value === '') {
        callback(new Error('请输入你的密码'))
      } else {
        if (ruleForm.checkPass !== '') {
          if (!ruleFormRef.value) return
          ruleFormRef.value.validateField('checkPass', () => null)
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
          console.log('submit!')
        }
        else {
          console.log('error submit!')
          return false
        }
      })
    }
    return {
      reactive,
      ruleFormRef,
      ruleForm,
      rules,
      checkAge,
      validatePass,
      resetForm,
      submitForm
    }
  }
}






</script>