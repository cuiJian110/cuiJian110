<template>
  <div class="pagecontainer">
    <div class="content">
        <div class="m_title">
          <div class="m_title_left">
            <Button type="info" @click="handleOpenCamp">+ 开通工作坊商品</Button>
          </div>
          <div class="m_title_right">
            
          </div>
        </div>
      <div class="h20"></div>
      <div class="databox pr">
        <div class="m_content">
          <table v-show="!dataloading">
            <thead>
              <tr>
                <th >工作坊名称</th>
                <th >开通时间</th>
                <th >单价</th>
                <th >数量</th>
                <th >消费金额</th>
                <!-- <th >操作</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in datalist" :key="index+'a'">
                <td>{{item.goodsName}}</td>
                <td>{{item.createTime}}</td>
                <td>{{item.price}}</td>
                <td>{{item.count}}个</td>
                <td>{{item.totalPrice}}元</td>
                <!-- <td>
                  <template>
                    <span v-if="item.status === 0" class="operator" @click="handleOperate(item,'上架',1,handleShangXiaJia)">启用</span>
                    <span v-if="item.status === 1" class="operator" @click="handleOperate(item,'下架',0,handleShangXiaJia)">禁用</span>
                  </template>
                </td> -->
              </tr>
              <tr class="fornull" v-if="datalist.length==0">
                <td :colspan="5">暂无数据</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Spin size="large" v-show="dataloading" fix ></Spin>
      </div>
      <div class="fenye" v-if="datalist.length!==0">
        <Page 
          :total="totalPage"
          :current="currentPage"
          :page-size="pageSize"
          @on-change="pageChange"
          show-elevator
          prev-text="上一页" next-text="下一页"
        />
      </div>
      <div class="h100"></div>
    </div>
    <!-- 开通工作坊 -->
    <Drawer title="开通工作坊" v-model="openCampModal" width="620" :styles="styles" :mask-closable="false">
      <div class="openCamp">
        <div class="ocDes">
          <span>数量：</span>
          <span class="mr15 cm">{{openCampList.length}}个</span>
          <span>消费金额：</span>
          <span class="cm">{{totolePrice}}元</span>
        </div>
        <div class="ocAdd">
          <div class="item" v-for="(item,index) in openCampList" :key="index+'b'">
            <div class="ocaititle">
              <div class="ocailable">工作坊：</div>
              <!-- <div class="ocaiChoose b1" tabindex="1" @blur="handleBlue(item)">
                <div class="currentChoosed" @click="item.isShowList=true">
                  <span v-if="JSON.stringify(item.campInfo) === '{}'">请选择</span>
                  <span v-else>{{item.campInfo.label}}</span>
                </div>
                <div class="currentChooseList" v-if="item.isShowList">
                  <div
                    v-for="(campEle,index_) in chooseList" :key="index_+'a'" 
                    :class="{
                      cclitem: true,
                      act: campEle.value === item.campInfo.value,
                      mdisabled: campEle.hasProce === 0 || openCampList.findIndex(i => i.campInfo.value === campEle.value) !== -1
                    }"
                    @click="handleSetCamp(campEle,item)">
                    <span>{{campEle.label}}</span>
                    <span class="goSet" v-if="campEle.hasProce === 0" @click="handleGoset(campEle)">去设置</span>
                  </div>
                </div>
              </div> -->
              <Select v-model="item.goodsId" style="width:200px">
                <Option 
                  v-for="(campEle,index_) in chooseList"
                  :value="campEle.goodsId"
                  :key="index_+'a'"
                  :disabled="openCampList.findIndex(i => i.goodsId === campEle.goodsId) !== -1"
                >
                  {{ campEle.goodsName }}
                </Option>
              </Select>
              <Button v-if="openCampList.length!==1" class="del" type="primary" @click="handleDelOpenCampList(index)">删除</Button>
            </div>
            <div class="ocaiDes">
              <div class="ocailable">费用计算：</div>
              <Input v-model="item.num" style="width: 100px" @keyup.native="item.num=item.num.replace(/[^\d]/g, '').replace(/^0{1,}/g,'')">
                <span slot="append">个</span>
              </Input>
              <span class="fuhao">×</span>
              <Input v-model="item.campInfo.price" style="width: 100px" disabled>
                <span slot="append">元</span>
              </Input>
              <span class="fuhao">=</span>
              <Input v-model="item.totolePrice" style="width: 100px" disabled>
                <span slot="append">元</span>
              </Input>
            </div>
          </div>
        </div>
        <div class="ocSure">
          <Button style="width: 100%" type="primary" @click="handlePushOpenCampList">添加</Button>
        </div>
      </div>
      <div class="demo-drawer-footer">
        <Button @click="handleSave" style="margin-right: 10px" type="primary" >保存</Button>
        <Button @click="handleCancle">取消</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
import api from "@/apis/edus/marketing_promotion/index";
export default {
  watch: {
    openCampList: {
      handler(nv,ov) {
        nv.forEach(item => {
          const index = this.chooseList.findIndex(i => i.goodsId === item.goodsId);
          if(index !== -1) {
            item.campInfo = this.chooseList[index]
            // if(item.campInfo.price) {
            item.totolePrice = item.num * item.campInfo.price
            // }
          }
        })
      },
      deep: true,
    }
  },
  computed: {
    totolePrice() {
      let totalPrice = 0;
      this.openCampList.forEach(item => {
        totalPrice += item.totolePrice;
      })
      return totalPrice;
    }
  },
  data() {
    return {
      linedata: [{ title: "工具商品" }],
      branchOfficeId: "",
      dataloading: false,
      datalist: [],
      reqdataParamsObj: {
        currentPage: 1, 
        pageSize: 20,
        type: 2
      },
      // 分页的
      currentPage: 1,
      pageSize: 20,
      totalPage: 10,
      // 抽屉
      openCampModal: false,
      styles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      chooseList: [],
      openCampList: [
        {
          campInfo: {},
          num: 0,
          totolePrice: 0,
          goodsId: "",
        }
      ]
    };
  },
  created() {
    this.initBranchOfficeId();
    this.getDataList();
  },
  methods: {
    initBranchOfficeId() {
      this.branchOfficeId = this.$route.query.branchOfficeId;
      this.reqdataParamsObj.branchOfficeId = this.branchOfficeId;
    },
    getDataList() {
      this.$loading.show();
      api.office_user_selectGoodsOpenRecord(this.reqdataParamsObj).then(res => {
        this.$loading.hide();
        if(res.code === 200) {
          this.datalist = [...res.data.list];
          this.currentPage = res.data.currentPage;
          this.pageSize = res.data.pageSize;
          this.totalPage = res.data.total;
        }
      })
    },
    // 分页操作
    pageChange(currentPage) {
      this.reqdataParamsObj.currentPage = currentPage;
      this.getDataList();
    },
    // 操作
    handleOperate(item,operate,status,callback) {
      let contentS = `是否要${operate}:${item.title}`;
      if(operate === "删除") {
        if(item.parentId) {
          contentS = `是否要删除:${item.title}`
        } else {
          contentS = `是否要删除:${item.title}<br>删除后子项目将全部删除`;
        }
      }
      this.$Modal.confirm({
        title: "温馨提示",
        content: `<p>${contentS}</p>`,
        onOk: () => callback(item,status)
      });
    },
    // 上下架
    handleShangXiaJia(item,status) {
      console.log("上下架")
      const params = {
        id: item.id,
        status: status
      };
      api.updateWebsiteStatus(params).then(res => {
        if (res.code == 200) {
          this.$Message.success("操作成功");
          this.getDataList();
        }
      });
    },
    // 删除操作
    handleDeleteItem(item) {
      console.log("删除")
      api.deleteWebsite({id: item.id}).then(res => {
        if (res.code == 200) {
          this.$Message.success("操作成功");
          this.getDataList();
        }
      });
    },
    // 发布
    handleRelase(item) {
      console.log("发布")
      const params = {
        id: item.id,
        distributionId: item.distributionId
      };
      api.distributor_release(params).then(res => {
        if (res.code == 200) {
          this.$Message.success("操作成功");
          this.getDataList();
        }
      });
    },
    
    // 去详情
    handleGoDetail(item) {
      this.$router.push({path:'/companyServer_detail', query: {id: item.id}})
    },
    // 打开抽屉
    handleOpenCamp() {
      this.openCampModal = true;
      this.getChooseListData();
    },
    // 获取供选择的数据源
    getChooseListData() {
      api.office_user_selectGoodsList({type: 2}).then(res => {
        if(res.code === 200) {
          this.chooseList = res.data;
        }
      })
    },
    // handleChoosedChange() {
    //   this.openCampList.forEach(item => {
    //     const index = this.chooseList.findIndex(i => i.goodsId === item.goodsId);
    //     if(index !== -1) {
    //       item.campInfo = this.chooseList[index]
    //       if(item.campInfo.price) {
    //         item.totolePrice = item.num * item.campInfo.price
    //       }
    //     }
    //   })
    //   this.openCampList = JSON.parse(JSON.stringify(this.openCampList))
    // },
    // 保存数据
    handleSave() {
      let reqObj = this.openCampList.filter(i => i.goodsId!=="").map(item => {
        return {
          branchOfficeId: this.branchOfficeId,
          goodsId: item.goodsId,
          count: item.num,
          type: 2
        }
      })
      this.$loading.show();
      api.office_user_openGoodsList(reqObj).then(res => {
        if(res.code === 200) {
          this.$Message.success("操作成功");
          this.$loading.hide();
          this.openCampModal = false;
          this.getDataList();
          this.$emit("initBalance");
          this.initopenCampList();
        }
      }).catch(err => {
        // console.log(err)
        this.$loading.hide();
        this.$Message.error(err.message)
      })
    },
    initopenCampList() {
      this.openCampList = [
        {
          campInfo: {},
          num: 0,
          totolePrice: 0,
          goodsId: "",
        }
      ]
    },
    // 取消保存
    handleCancle() {
      this.openCampModal = false;
      this.initopenCampList();
    },
    // 删除
    handleDelOpenCampList(index) {
      this.openCampList.splice(index,1)
    },
    // 添加一项
    handlePushOpenCampList() {
      const obj = {
        campInfo: {},
        num: 0,
        totolePrice: 0,
        goodsId: "",
      }
      this.openCampList.push(obj)
    },

  },
  filters: {
  }
};
</script>
<style lang="scss" scoped>
.pagecontainer {
  .content {
    // padding: 0 0.2rem;
    .tl {
      text-align: left;
      padding: 0 0.2rem;
    }
    .databox {
      .operator {
        cursor: pointer;
        color: #00c392;
      }
      .verticalLine {
        margin: 0 5px;
        color: #00c392
      }
    }
    .m_tip {
      height: 30px;
      line-height: 70px;
    }
    .m_title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
.mr15 {
  margin-right: 15px;
}
.f700 {
  font-weight: 700;
}
.cm {
  color: #00c392;
}
.b1 {
  border: 1px solid #ccc;
}
.fenye {
    text-align: center;
    margin: 20px 0;
}
.demo-drawer-footer{
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid #e8e8e8;
  padding: 10px 16px;
  text-align: center;
  background: #fff;
  z-index: 10;
}
.openCamp {
  .ocDes {
    font-size: 16px;
    font-weight: 700;
  }
  .ocAdd {
    margin-top: 15px;
    .item {
      width: 100%;
      padding: 20px;
      background: #F4F4F4;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 15px;
      .ocaititle {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        position: relative;
        .ocailable {
          width: 100px;
          text-align: right;
        }
        .ocaiChoose {
          width: 300px;
          // border: 1px solid #ccc;
          height: 38px;
          line-height: 38px;
          border-radius: 5px;
          padding-left: 10px;
          cursor: pointer;
          position: relative;
          outline: none;
          .currentChoosed {
            width: 100%;
            outline: none;
          }
          .currentChooseList {
            width: 100%;
            position: absolute;
            left: 0;
            top: 41px;
            z-index: 5;
            background: #fff;
            padding: 10px 0;
            border-radius: 4px;
            box-shadow: 0 1px 6px rgba(0,0,0,.2);
            max-height: 222px;
            overflow-y: scroll;
            // &::-webkit-scrollbar {
            //   display: none;
            // }
            .cclitem {
              margin-top: 5px;
              padding: 0 10px;
              height: 30px;
              line-height: 30px;
              cursor: pointer;
              font-size: 14px;
              display: flex;
              justify-content: space-between;
              &:hover {
                background-color: #F3F3F3;
                color: #00c392;
              }
            }
            .act {
              background-color: #F3F3F3;
              color: #00c392;
            }
            .mdisabled {
              color: #ccc;
              cursor: not-allowed;
              &:hover {
                background-color: #fff;
                color: #ccc;
              }
              .goSet {
                &:hover {
                  color: #00c392;
                  cursor: pointer;
                }
              }
            }
          }
        }
        
        .del {
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      .ocaiDes {
        display: flex;
        align-items: center;
        .ocailable {
          width: 100px;
          text-align: right;
        }
        .fuhao {
          margin: 0 8px;
        }
      }
    }
  }
  .ocSure {
    margin-top: 15px;
  }
}
</style>