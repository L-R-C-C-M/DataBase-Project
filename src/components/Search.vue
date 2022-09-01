<template>
  <div
    class="search"
    ref="SearchForLost"
  >

    <div class="select-information">
      <div class="select-item">
        <div
          class="type"
          style="border-top-left-radius:10px;border-top-right-radius: 10px"
        >
          寻人类型
        </div>

        <div
          class="type1-content"
          style="padding-top:5px;padding-left: 2%;"
        >
          <el-select
            v-model="whichType"
            multiple
            placeholder="请选择寻人类型"
            style="width: 260%"
          >
            <el-option
              v-for="item in typeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
      <div class="select-item">
        <div class="type">
          失散地点/被寻人所在地
        </div>
        <div
          class="type2-content"
          style="padding-top:5px;padding-left: 2%;"
        >
          <el-cascader
            placeholder="请选择失散地点或被寻人所在地"
            style="width:120%"
            :options="areaOptions"
            v-model="selectedOptions"
          >
          </el-cascader>
        </div>
      </div>
      <div class="select-item">
        <div class="type">
          性别
        </div>
        <div
          class="type3-content"
          style="padding-top:5px;padding-left: 2%;"
        >
          <el-select
            v-model="genderRadio"
            class="m-2"
            placeholder="请选择被寻人性别"
            style="width:100%"
          >
            <el-option
              v-for="item in genderOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>

      </div>
      <div class="select-item">
        <div class="type">
          出生日期
        </div>
        <div
          class="type4-content"
          style="padding-top:5px;padding-left: 2%;"
        >
          <el-date-picker
            v-model="valueDate"
            type="date"
            placeholder="请选择被寻人出生日期"
            :size="size"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="select-item">
        <div class="type">
          身高
        </div>
        <div
          class="type5-content"
          style="padding-top:5px;margin-left: 4%;width:40%;"
        >
          <div class="slider-demo-block">
            <el-slider
              id="heightSlider"
              v-model="personHeight"
              range
              show-stops
              :max="230"
            />
          </div>
        </div>
      </div>
      <div class="select-item">
        <div
          class="type"
          style="border-bottom-left-radius:10px;border-bottom-right-radius: 10px"
        >
          关键字检索
        </div>
        <div
          class="type6-content"
          style="padding-top:5px;padding-left: 2%;width: 70%;"
        >
          <div class="key-input">
            <el-input
              v-model="keyInput"
              placeholder="请输入被寻人关键信息"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="select-button">
    <el-button
      color="#2e74b6"
      style="width:100px;font-size:12px;margin-right:50px;margin-top: 30px;margin-bottom: 30px;"
      @click="SearchForLost"
    >搜索</el-button>
    <el-button
      color="#C2C2C2"
      style="width:100px;font-size:12px;margin-left:50px;margin-top: 30px;margin-bottom: 30px;"
      @click="ClearLostInfo"
    >重置</el-button>
  </div>
</template>
<script>
import { regionData } from "element-china-area-data";
import { ref } from 'vue'


export default {
  data () {
    return {
      areaOptions: regionData,
      whichType: [],
      genderRadio: '',
      valueDate: "yyyy - MM - dd",
      personHeight: [0, 230],
      selectedOptions: [],
      keyInput: '',
      typeOptions: [
        {
          value: 'Option1',
          label: '全部',
        },
        {
          value: 'Option2',
          label: '家寻亲人',
        },
        {
          value: 'Option3',
          label: '亲人寻家',
        },
        {
          value: 'Option4',
          label: '寻找恩人',
        },
        {
          value: 'Option5',
          label: '寻找朋友',
        },
        {
          value: 'Option6',
          label: '其他寻人',
        },
      ],
      genderOptions: [
        {
          value: 'Option1',
          label: '不详',
        },
        {
          value: 'Option2',
          label: '男',
        },
        {
          value: 'Option3',
          label: '女',
        },
      ],

    };
  },
  methods: {
    ClearLostInfo () {
      this.whichType = [];//寻人类型
      this.areaOptions = '';//失散地点/被寻人所在地
      this.genderRadio = '';//性别
      this.valueDate = '';//出生日期
      this.personHeight = [0, 230];//身高
      this.keyInput = '';
    },
    //按下搜索按钮后
    SearchForLost () {

    },
  },
};
</script>

<style scoped>
.search {
  background-color: #ffffff;
  border-radius: 20px;
  border-style: hidden;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 2%;
  position: relative;
}
.search .select-information {
  margin-left: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
}
.search .select-information .select-item {
  display: flex;
  min-height: 45px;
}
.search .select-information .select-item .type {
  width: 20%;
  font-weight: 600;
  font-size: 12px;
  margin: 2px;
  padding-top: 9px;
  color: #ffffff;
  background-color: #2e74b6;
}
.search .select-button {
  display: flex;
  height: 80px;
  margin-bottom: 30px;
}
</style>