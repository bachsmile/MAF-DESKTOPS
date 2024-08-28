<template>
  <div>
    <section>
      <el-steps style="width: 100%" :active="active" align-center finish-status="success">
        <el-step title="Bước 1" description="Cấu hình chung" />
        <el-step title="Bước 2" description="Môn học" />
        <el-step title="Bước 3" description="Tổ chuyên môn" />
        <el-step title="Bước 4" description="Giáo viên" />
        <el-step title="Bước 5" description="Khối (nhóm lớp)" />
        <el-step title="Bước 6" description="Lớp" />
        <el-step title="Bước 7" description="Phân công giảng dạy" />
        <el-step title="Bước 8" description="Kết quả" />
      </el-steps>
      <el-button style="margin-top: 12px" @click="next">Next step</el-button>
    </section>
    <section>
      <component :is="components[ active ]()"></component>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, Ref, ref } from 'vue'

const active: Ref<number> = ref(0)
const components = ref<any>({
  0: () => defineAsyncComponent(() => import('./step/step-1/Step-1.vue')),
  1: () => defineAsyncComponent(() => import('./step/step-2/Step-2.vue')),
  2: () => defineAsyncComponent(() => import('./step/step-3/Step-3.vue')),
  3: () => defineAsyncComponent(() => import('./step/step-4/Step-4.vue')),
  4: () => defineAsyncComponent(() => import('./step/step-5/Step-5.vue')),
  5: () => defineAsyncComponent(() => import('./step/step-6/Step-6.vue')),
  6: () => defineAsyncComponent(() => import('./step/step-7/Step-7.vue')),
  7: () => defineAsyncComponent(() => import('./step/step-8/Step-8.vue')),

})


const next = () => {
  if (active.value++ > 7) active.value = 0
}
</script>

<style>
.demo-form-inline .el-input {
  --el-input-width: 250px;
}

.demo-form-inline .el-select {
  --el-select-width: 250px;
}
</style>

<style scoped></style>