<template>
  <div>
    <CmActionContainer>
      <template #action>
        <div>
          <el-tooltip effect="dark" :content="t('add')" placement="top-start">
            <el-button
              type="primary"
              :icon="Plus"
              circle
              @click.prevent="openAdd"
            />
          </el-tooltip>
        </div>
      </template>
      <CmTable isIndex :columns="columns" :rows="rows" :selected="selected">
        <template #row="{ id, col, row }">
          <div v-if="col === 'name'">
            <el-input v-model="row[col]" placeholder="Nhập tên giáo viên" />
          </div>
          <div v-if="col === 'code'">
            <el-input v-model="row[col]" placeholder="Nhập mã" />
          </div>
          <div v-if="col === 'group'">
            <el-input v-model="row[col]" placeholder="Nhập tên nhóm" />
          </div>

          <div v-if="col === 'action'" class="flex-center">
            <el-button
              type="danger"
              :icon="Delete"
              circle
              @click.prevent="deleteRow(id)"
            />
          </div>
        </template>
      </CmTable>
    </CmActionContainer>

    <el-button class="mt-4" style="width: 100%" @click="onAddItem">
      Add Item
    </el-button>
    <el-dialog
      v-model="isShowCondition"
      title="Cài đặt thời gian rảnh"
      width="80%"
      center
    >
      <div>
        <CmTableTimeLine></CmTableTimeLine>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="isShowCondition = false">Đóng</el-button>
          <el-button type="primary" @click="isShowCondition = false">
            Xác nhận
          </el-button>
        </div>
      </template>
    </el-dialog>
    <MdAddUser v-if="isShowAdd" v-model:isShow="isShowAdd"></MdAddUser>
  </div>
</template>

<script lang="ts" setup>
import { Star, Delete, Plus, Setting } from "@element-plus/icons-vue";
import CmTable from "@/components/common/CmTable.vue";
import { ref } from "vue";
import CmTableTimeLine from "@/components/supports/CmTableTimeLine.vue";
import CmActionContainer from "@/components/supports/CmActionContainer.vue";
import MdAddUser from "./MdAddUser.vue";
const { t } = window.i18n();

const columns = ref([
  { label: t("Tên giáo viên"), key: "name", type: "custom" },
  { label: t("Mã"), key: "code", type: "custom" },
  { label: t("Nhóm"), key: "group", type: "custom" },
  { label: t("Hành động"), key: "action", type: "custom", width: 120 },
]);
interface Setting {
  name: string;
  code: string;
  group: string;
}
const isShowCondition = ref(false);
const isShowAdd = ref(false);
const rows = ref<Setting[]>([]);
const selected = ref([]);

const onAddItem = () => {
  rows.value.push({
    name: "",
    code: "",
    group: "",
  });
};
const deleteRow = (index: number) => {
  rows.value.splice(index, 1);
};
const condition = (index: number) => {
  console.log(index);
  isShowCondition.value = !isShowCondition.value;
};
const openAdd = () => {
  isShowAdd.value = !isShowAdd.value;
};
</script>
