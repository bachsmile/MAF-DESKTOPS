<template>
  <div class="flex-center">
    <el-form ref="ruleFormRef" style="width: 100%; max-width: 900px;" :model="ruleForm" :rules="rules"
      label-width="auto" class="demo-ruleForm" :size="formSize" status-icon>
      <el-row>
        <el-col class="p-x-2" :span="12">
          <el-form-item label="Tên thời khóa biểu" prop="name">
            <el-input v-model="ruleForm.name" placeholder="Nhập tên thời khóa biểu" />
          </el-form-item>
        </el-col>
        <el-col class="p-x-2" :span="12">
          <el-form-item label="Tên trường" prop="school">
            <el-input v-model="ruleForm.school" placeholder="Nhập tên trường" />
          </el-form-item>
        </el-col>
        <el-col class="p-x-2" :span="12">
          <el-form-item label="Số ngày trong tuần" prop="countDay" required>
            <el-select-v2 v-model="ruleForm.countDay" placeholder="Số ngày trong tuần" :options="optionsNumber(7)" />
          </el-form-item>
        </el-col>
        <el-col class="p-x-2" :span="12">
          <el-form-item label="Số buổi trong ngày" prop="countSessions" required>
            <el-select-v2 v-model="ruleForm.countSessions" placeholder="Số buổi trong ngày"
              :options="optionsNumber(2)" />
          </el-form-item>
        </el-col>
        <el-col class="p-x-2" :span="12">
          <el-form-item label="Số tiết trong buổi" prop="countLessons" required>
            <el-select-v2 v-model="ruleForm.countLessons" placeholder="Số buổi trong ngày"
              :options="optionsNumber(10)" />
          </el-form-item>
        </el-col>
        <el-col class="p-x-2" :span="12">
          <el-form-item label="Năm học" prop="year">
            <el-date-picker v-model="ruleForm.year" type="year" placeholder="Chọn năm học" style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col class="p-x-2" :span="24">
          <el-form-item label="Mô tả" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea" />
          </el-form-item>
        </el-col>
      </el-row>







    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { ref } from 'vue';
import { reactive } from 'vue'

const formSize = ref<ComponentSize>('default')

interface RuleForm {
  name: string
  school: string
  countDay: number
  countSessions: number
  countLessons: number
  year: string
  desc: string
}
const ruleForm = reactive<RuleForm>({
  name: '',
  school: '',
  countDay: 6,
  countSessions: 2,
  countLessons: 5,
  year: new Date().getFullYear().toString(),
  desc: '',
})
const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Vui lòng nhập dữ liệu', trigger: 'blur' },
    { min: 3, max: 255, message: 'Chiều dài phải là 3 đến 255', trigger: 'blur' },
  ],
  school: [],
  countDay: [
    {
      required: true,
      message: 'Vui lòng chọn dữ liệu',
      trigger: 'change',
    },
  ],
  countSessions: [
    {
      required: true,
      message: 'Vui lòng chọn dữ liệu',
      trigger: 'change',
    },
  ],
  countLessons: [
    {
      required: true,
      message: 'Vui lòng chọn dữ liệu',
      trigger: 'change',
    },
  ],
  year: [
    {
      type: 'date',
      required: true,
      message: 'Vui lòng chọn một năm',
      trigger: 'change',
    },
  ],
  desc: [
    { required: false, message: 'Please input activity form', trigger: 'blur' },
  ],
})
const optionsNumber = (length: number) => Array.from({ length }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 300px;
}

.demo-form-inline .el-select {
  --el-select-width: 300px;
}
</style>
