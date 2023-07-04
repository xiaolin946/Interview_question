<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div style="height: 50px;width: 100%;background: white;">
          <div style="height: 100%;width: 1200px;margin: 0 auto;background: white;display: flex;align-items: center;justify-content: space-between;">
            <div style="display: flex;align-items: center;">
              <div style="display: flex;align-items: center;margin-right: 50px;">
                <el-image style="height: 30px;width: 30px;margin-right: 10px;" src="https://test.nttcc.com.cn/_nuxt/img/logo_1.e54ae31.png"/>
                <h1 style="font-size: 16px;font-weight: 700;line-height: 22px;color: #3473e6;">共创云</h1>
              </div>
              <div style="display: flex;align-items: center;">
                <el-link class="el1" :underline="false" url="">服务产品</el-link>
                <el-link class="el1" style="margin-left: 24px;" :underline="false" url="">科创需求</el-link>
                <el-link class="el1" style="margin-left: 24px;" :underline="false" url="">专利论文</el-link>
                <el-link class="el1" style="margin-left: 24px;" :underline="false" url="">交易大数据</el-link>
              </div>
            </div>
            <div style="display: flex;align-items: center;">
              <div style="display: flex;">
                <el-button style="width: 64px;height: 32px;background: #3473e6;border-radius: 4px;color: #fff;" type="primary">登录</el-button>
                <el-button style="width: 64px;height: 32px;background: #fff;border: 1px solid #90b7f1;border-radius: 4px;color: #3473e6;" plain>注册</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-header>
      <el-main style="width: 100%;background-color: #f6f7f8;padding: 30px 0;margin: 0 auto">
        <el-card style="width: 1200px;margin: 0 auto;padding: 30px;background: #fff;box-shadow: 0 0 6px rgba(0,0,0,.06);border-radius: 4px;overflow: auto;">
          <div style="display: flex;align-items: center;justify-content: space-between;width: 100%;height: 40px;margin-bottom: 20px;">
            <div style="display: flex;height: 22px;align-items: center;">
              <el-image style="margin-right: 16px;max-width: 100%;height: auto;display: block;vertical-align: middle;" src="/src/assets/ic2.png"/>
              <h1 style="font-size: 16px;font-weight: 700;line-height: 22px;color: #303133;">资源大厅</h1>
            </div>
            <div style="width: 540px">
              <div style="line-height: normal;display: inline-table;width: 100%;border-collapse: separate;border-spacing: 0;">
                <el-input
                    v-model="input1"
                    placeholder="请输入资源名称或用户名搜索"
                >
                  <template #append>
                    <el-button  style="background: #3473e6;height: 38px;width: 93px;color: white" :icon="Search" @click="query">搜索</el-button>
                  </template>
                </el-input>
              </div>

            </div>
          </div>
          <div style="display: flex;align-items: center;width: 100%;height: 48px;padding: 0 30px;margin-bottom: 10px;background: #f7f8f9;border-radius: 4px;">
            <el-tabs v-model="activeName" >
              <el-tab-pane label="服务" name="first" @click=""></el-tab-pane>
            </el-tabs>
          </div>

          <div style="width: 100%;padding: 0 20px;margin-bottom: 30px;background: #fff;border: 1px solid #dcdfe6;border-radius: 4px;">
            <div v-for="(i,index) in type" :key="index" style="">
              <div style="height: 40px;display: flex;overflow: hidden;margin-bottom: 10px;">
                <p style="width: 120px;line-height: 30px;padding-left: 10px;margin-top: 10px;color: #909399;font-size: 14px;">{{i}}</p>
                <div style="flex: 1;display: flex;align-items: center;flex-wrap: wrap;margin-right: 74px;">
                  <el-space wrap>
                    <el-button v-for="(j,o) in displayedData" :key="o" style="height: 30px;width: 60px;cursor: pointer;line-height: 20px;padding: 5px 10px;margin-right: 30px;margin-top: 10px;border-radius: 2px;" link>{{j}}</el-button>
                  </el-space>
                </div>
                <div style="display: flex;align-items: center;cursor: pointer;width: 48px;height: 30px;margin-top: 10px;color: #3473e6;">
                  <el-button type="primary" @click="toggleMoreData" link>
                    {{ showMore ? "收起" : "更多" }}
                  </el-button>
                </div>
              </div>
              <el-divider border-style="dashed" />
            </div>
          </div>

          <div style="width: 100%;height: 48px;padding: 0 20px;background: #f7f8f9;border-radius: 4px;font-weight: 700;font-size: 14px;align-items: center;display: flex;">
            <div style="flex: 1 1 420px;font-weight: 700;font-size: 14px;align-items: center;display: flex;color: #909399;height: 100%;padding: 0 20px;">服务名称</div>
            <div style="flex: 1 1 440px;padding-left: 80px;font-weight: 700;font-size: 14px;align-items: center;display: flex;color: #909399;height: 100%;">发布用户</div>
            <div style="flex: 1 1 300px;font-weight: 700;font-size: 14px;align-items: center;display: flex;color: #909399;height: 100%;padding: 0 20px;">服务类型</div>
            <div style="flex: 1 1 200px;font-weight: 700;font-size: 14px;align-items: center;display: flex;color: #909399;height: 100%;padding: 0 20px;">成功成交数</div>
            <div style="flex: 1 1 180px;font-weight: 700;font-size: 14px;align-items: center;display: flex;color: #909399;height: 100%;padding: 0 20px;">信用评价</div>
          </div>

          <div style="margin-top: 10px;">
            <div v-for="(i,index) in data.values()" :key="index" style="padding: 0 20px;display: flex;margin-bottom: 10px;cursor: pointer;position: relative;width: 100%;height: 80px;background: #fff;border-radius: 4px;border: 1px solid #dcdfe6;align-items: center;justify-content: space-between;">
              <div style="flex: 1 1 420px;font-weight: 700;color: #000;height: 100%;align-items: center;display: flex;">{{i.service_name}}</div>
              <div style="flex: 1 1 440px;font-weight: 700;justify-content: flex-start;height: 100%;align-items: center;display: flex;">
                <el-image style="width: 40px;height: 40px;margin-right: 20px;" src="https://test.nttcc.com.cn/_nuxt/img/default_avatar.442622a.png"/>
                {{i.username}}
              </div>
              <div style="flex: 1 1 300px;color: #606266;height: 100%;align-items: center;display: flex;">{{i.service_type}}</div>
              <div style="flex: 1 1 200px;font-weight: 700;color: #f1b221;height: 100%;align-items: center;display: flex;">{{i.cn}}</div>
              <div style="flex: 1 1 180px;font-weight: 700;color: #3473e6;height: 100%;align-items: center;display: flex;">{{i.ac}}</div>
            </div>
          </div>

          <div style="padding: 20px 0;justify-content: center;align-items: center;display: flex;">
            <el-pagination background layout="prev, pager, next, jumper" :total="10" />
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import{Search } from '@element-plus/icons-vue'
import {ref} from "vue";

const activeName = ref('first')

const type = ["服务类型：","技术领域：","数据来源：","地区："]
const s_type = ["不限", "检验检测", "研究开发", "科技金融", "科技咨询", "技术转移", "知识产权", "科学技术普及", "综合科技服务"]
const input1 = ref()
const data = [{
  id: 1,
  service_name: "孵化+投资",
  username: "武汉聚华传新科技孵化有限公司",
  service_type: "综合科技服务",
  cn: 0,
  ac: 2
},
  {
      id: 2,
      service_name: "测试订单管理服务订单管理",
      username: "第三方省电子院测试",
      service_type: "靶向捕获测序",
      cn: 1,
      ac: 1.2
    },
  {
    id: 3,
    service_name: "企业股改挂牌",
    username: "财信证券股份有限公司",
    service_type: "技术借贷",
    cn: 0,
    ac: 2
  },{
    id: 4,
    service_name: "融资财务咨询",
    username: "湖南云韬企业管理咨询有限公司",
    service_type: "综合科技服务",
    cn: 0,
    ac: 2
  },
  {
    id: 5,
    service_name: "孵化+投资",
    username: "武汉聚华传新科技孵化有限公司",
    service_type: "综合科技服务",
    cn: 0,
    ac: 2
  },
  {
    id: 6,
    service_name: "科技信息咨询",
    username: "湖南臣燮商务咨询有限公司",
    service_type: "综合科技服务",
    cn: 0,
    ac: 2
  },{
    id: 7,
    service_name: "管理咨询",
    username: "湖南厚正信息咨询有限公司",
    service_type: "综合科技服务",
    cn: 0,
    ac: 2
  },
  {
    id: 8,
    service_name: "企业融资辅导",
    username: "湖南白马朝驰企业管理顾问有限公司",
    service_type: "综合科技服务",
    cn: 0,
    ac: 2
  },
  {
    id: 9,
    service_name: "推荐挂牌",
    username: "湖南皓启企业服务有限公司",
    service_type: "综合科技服务",
    cn: 0,
    ac: 2
  },
  {
    id: 10,
    service_name: "协债权融资",
    username: "湖南赛诺企业管理咨询有限公司",
    service_type: "综合科技服务",
    cn: 0,
    ac: 2
  }
]

const displayedData = ref([]);
const remainingData = ref([]);
const showMore = ref(false);

const toggleMoreData = () => {
  showMore.value = !showMore.value;
};

const fresh = () => {
  // 在组件挂载前计算展示的数据和剩余的数据
  if (s_type.length > 8) {
    displayedData.value = s_type.slice(0, 8);
    remainingData.value = s_type.slice(8);
  } else {
    displayedData.value = s_type;
  }
}
fresh()

const query = () => {

}

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(10)



</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.el1{
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
}
h5{
  margin-top: 5px;
}
h4{
  color: #909399;
  margin-top: 8px;
}
</style>