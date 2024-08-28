<template>
  <div>
    <CmTable isIndex :columns="columns" :rows="rows" :selected="selected">
      <template #row="{ id, col, row }">
        <div v-if="col === 'group'">
          <el-input v-model="row[col]" placeholder="Nhập tên nhóm" />
        </div>

        <div v-if="col === 'setting'" class="flex-center">
          <el-button
            type="primary"
            :icon="Setting"
            circle
            @click.prevent="setting(id)"
          />

          <el-button
            type="warning"
            :icon="Star"
            circle
            @click.prevent="condition(id)"
          />
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
    <MdSettingGroup
      v-if="isShowSetting"
      v-model:isShow="isShowSetting"
    ></MdSettingGroup>
  </div>
</template>

<script lang="ts" setup>
import { Star, Delete, Plus, Setting } from "@element-plus/icons-vue";
import CmTable from "@/components/common/CmTable.vue";
import { ref } from "vue";
import CmTableTimeLine from "@/components/supports/CmTableTimeLine.vue";
import MdSettingGroup from "./MdSettingGroup.vue";
const { t } = window.i18n();

const columns = ref([
  { label: t("Tên nhóm"), key: "group", type: "custom" },
  { label: t("Cài đặt"), key: "setting", type: "custom" },
  { label: t("Hành động"), key: "action", type: "custom", width: 120 },
]);
interface Setting {
  group: string;
}
const isShowCondition = ref(false);
const isShowSetting = ref(false);
const rows = ref<Setting[]>([]);
const selected = ref([]);

const onAddItem = () => {
  rows.value.push({
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
const setting = (index: number) => {
  console.log(index);
  isShowSetting.value = !isShowSetting.value;
};
</script>
