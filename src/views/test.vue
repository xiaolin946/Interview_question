<template>
  <div>
    <div class="data-line">
      <!-- 显示前八个数据 -->
      <div v-for="(item, index) in displayedData" :key="index" class="data-item">
        {{ item }}
      </div>
    </div>

    <!-- 判断是否有超出八个的数据 -->
    <button @click="toggleMoreData" class="more-button">
      {{ showMore ? "收起" : "更多" }}
    </button>

    <!-- 展示剩余数据 -->
    <div v-if="showMore" class="remaining-data">
      <div v-for="(item, index) in remainingData" :key="index" class="data-item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const data = ['a', 'bc', 'd', 'g', '1', '5', '6', '7', '8', '9', '70'];

const displayedData = ref([]);
const remainingData = ref([]);
const showMore = ref(false);

const toggleMoreData = () => {
  showMore.value = !showMore.value;
};

const fresh = () => {
      // 在组件挂载前计算展示的数据和剩余的数据
  if (data.length > 8) {
    displayedData.value = data.slice(0, 8);
    remainingData.value = data.slice(8);
  } else {
    displayedData.value = data;
  }
}
fresh()
</script>

<style scoped>
.data-line {
  display: flex;
  align-items: center;
}

.data-item {
  margin-right: 10px;
}

.more-button {
  background: none;
  border: none;
  color: #007aff;
  cursor: pointer;
}

.remaining-data {
  margin-top: 10px;
}
</style>