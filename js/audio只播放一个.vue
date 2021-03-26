<template>
  <div class="pagecontainer">
      <div class="taskbox" v-if="!spinShow" >
        <div class="taskdetail">
          <div class="taskitem">
            <div class="taskitemtitle clearfix">
              <div class="fl big_item_cilce"></div>
              <div class="fl">精彩分享列表</div>
              <div class="fr addSharebtn" @click="handleUpLoadFile_share(1)">上传精彩分享</div>
              <!-- <input type="file" hidden ref="upLoad_File" @change="handleChangeUploadFile"
                accept='.mp3,.wav,.wma,.amr,.mid,aac/mp4,ape/flac,.mp4, .avi, .flv, .rmvb, .rm, .wmv, .mov, .mpg, .mpeg, .rm, .mkv,.mav,.aac'
              > -->
              <input type="file" hidden ref="upLoad_File" @change="handleChangeUploadFile"
                accept='.mp3,.mp4, .avi, .flv, .rmvb, .rm, .wmv, .mov, .mpg, .mpeg, .rm, .mkv,.mav,.aac'
              >
            </div>
            <div class="taskitemcontent clearfix " v-for="(item,index_video) in shareList" :key="'a'+index_video" @click="gotoPaly(item)">
              <div class="left">
                <div class="big_item_cilce2">
                  <img class="mould_icon" src="../../../static/img/icon/list_paly.png" alt="">
                </div>
                <span class="taskitemcontentindex">分享{{index_video | formatindex}}:</span>
                <span class="taskitemcontenttitle">{{item.objectOssName}}</span>
              </div>
              <div class="right">
                <span class="taskitemcontenttime">时长&nbsp;{{item.durationFormat | defaulttime}}</span>
                <div class="isPreview" @click.stop="handleStop">
                  <span>是否可以预览：</span>
                  <i-switch size="large" @on-change="handleChangeIsPreview($event,item)" v-model="item.isPreview" :true-value="1" :false-value="0">
                      <span slot="open">可以</span>
                      <span slot="close">禁止</span>
                  </i-switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="shareList clearfix">
          <div class="title">
            精彩分享
          </div>
          <div >
              <div class="content" v-for="(item,index_video) in shareList" :key="'a'+index_video">
                  <audio @play="handlePlay" controls="controls" :src="item.videoUrl" style="outline: none;width: 100%;">
                  </audio>
                  <div class="audioDesc">
                      <span class="audioName">
                        语音内容：{{item.objectOssName}}
                      </span>
                      <span class="delAudio" @click="delShare(index_video)">
                        删除
                      </span>
                  </div>
              </div>
          </div>
          <div class="fr addSharebtn" @click="handleUpLoadFile_share(1)">上传精彩分享</div>
          <input type="file" hidden ref="upLoad_File" @change="handleChangeUploadFile"
            accept='.mp3,.wav,.wma,.amr,.mid,aac/mp4,ape/flac,.mp4, .avi, .flv, .rmvb, .rm, .wmv, .mov, .mpg, .mpeg, .rm, .mkv,.mav,.aac'
          >
      </div> -->
      <Spin size="large" fix v-if="spinShow" ></Spin>
  </div>
</template>
<script>
import api from "@/apis/coachcamp";
import api_ from "@/apis/courseBackstage/createcourse/index";
import pathline from "../coachCamp/pathline.vue";
import edithomework from "./edithomework.vue";
export default {
  data() {
    return {
      linedata: [
        { title: "工作坊管理", link: "/coachcamp/camplist" },
        { title: "编辑子任务" }
      ],
      spinShow: true,
      campId: "",
      campLogId: "",
      tasklist: [],
      shareList: [],
      file: null,
      uploader: null,
      videoId: "1",
      vid: null,
      videotips: "某文件正在上传",
      addInfoObj: {},
    };
  },
  components: { pathline, edithomework },
  created() {
    this.uploader = this.createUploader();
    this.campId = this.$route.query.campId;
    this.campLogId = this.$route.query.campLogId;
    if (this.campLogId) {
      // this.getdata(this.campLogId);
      this.initShareList(this.campId)
    } else {
      this.$router.push({
        path: "/coachcamp/camplist"
      });
    }
  },
  methods: {
    createUploader(type) {
      let self = this;
      let uploader = new AliyunUpload.Vod({
        timeout: 60000,
        partSize: 1048576,
        parallel: 5,
        retryCount: 3,
        retryDuration: 2,
        region: "cn-shanghai",
        userId: "1483801600184470",
        // 开始上传
        onUploadstarted: function(uploadInfo) {
          api_.courseManagement_getAuth({
            fileName: self.file.name,
            type: 0,
            cateType: 6,
            videoLibraryType: 3
          }).then(res => {
              // console.log(res);
              if (res.code == 200) {
                // 获取凭证成功，自动上传，
                let uploadAddress = res.result.uploadAddress;
                let uploadAuth = res.result.uploadAuth;
                let videoId = res.result.videoId;
                self.videoId = videoId;
                uploader.setUploadAuthAndAddress(
                  uploadInfo,
                  uploadAuth,
                  uploadAddress,
                  videoId
                );
              } else {
                alert("获取凭证失败")
                // self.videotips = "获取凭证失败";
                // self.zhxflag = true;
              }
            });
        },
        addFileSuccess: function(uploadInfo) {
          // alert(self.file.name + "添加成功")
          // self.videotips = self.file.name + "添加成功";
          self.$loading.show("正在上传");
        },
        // 文件上传成功
        onUploadSucceed: function(uploadInfo) {
          // console.log("上传成功");
          self.$loading.hide();
          self.$Message.success(self.file.name+'上传成功');
          self.videotips = self.file.name + "上传成功";
          self.zhxflag = true;
          self.vid = self.videoId;
          // self.notesdata.videoName = self.file.name;
          // 发送新增请求
          self.addInfoObj.videoId = self.videoId;
          api.trainingCamp_addCampShare(self.addInfoObj).then(res => {
            console.log(res);
            if(res.code === 200) {
              self.addInfoObj = {};
              // self.getdata(self.campLogId);
              self.initShareList(self.campId)
            }
          })
        },

        // 文件上传进度，单位：字节, 可以在这个函数中拿到上传进度并显示在页面上
        onUploadProgress: function(uploadInfo, totalSize, progress) {
          // let progressPercent = Math.ceil(progress * 100);
          // self.authProgress = progressPercent;
          // console.log(progressPercent);
        },
        // 全部文件上传结束
        onUploadEnd: function(uploadInfo) {}
      });
      return uploader;
    },
    // 点击上传点评
    handleUpLoadFile(refName,index1,shareType) {
        this.addInfoObj.campId = this.campId;
        this.addInfoObj.campTaskId = this.tasklist[index1].task.campTaskId;
        this.addInfoObj.shareType = shareType;
        // console.log(refName);
        // 触发隐藏的input点击事件
        // console.log(this.$refs[refName][0]);
        this.$refs[refName][0].click();
    },
    // 点击上传分享
    handleUpLoadFile_share(shareType) {
        this.addInfoObj.campId = this.campId;
        // this.addInfoObj.campTaskId = this.tasklist[index1].task.campTaskId;
        this.addInfoObj.shareType = shareType;
        // console.log(refName);
        // 触发隐藏的input点击事件
        // console.log(this.$refs[refName][0]);
        this.$refs.upLoad_File.click();
    },
    // 真正的上传操作
    handleChangeUploadFile(e) {
      // console.log(e)
      const file = e.target.files[0];
      // this.fileName = file.name;
      // this.fileType = file.type;
      // 发请求获取videoId
      this.file = file;
      var Title = this.file.name;
      // this.sthname = file.name;
      var userData = '{"Vod":{}}';
      this.uploader.stopUpload();

      this.uploader.addFile(this.file, null, null, null, userData);
      // this.authProgress = 0;
      this.videotips = `正在添加${file.name}`;
      // this.showprogress = true;
      this.uploader.startUpload();
      // api_lib.video_getAuth({
      //   fileName: this.fileName,
      //   type: 0, //加密2 不加密 0，
      //   cateType: 6, // 语音 6还是视频5
      //   videoLibraryType: 1, //文件 1还是文件夹2
      //   videoLibraryParentId: 0 //父id 没有就是0
      // }).then(res => {
      //     console.log(res);
      //     if(res.code === 200) {
      //         this.$Message.success(res.message);
      //         this.shareInfo.videoId = res.data.videoId;
      //     }
      // })
    },
    // 删除点评
    delComment(index1, index3) {
      let reqdata = {
        id: this.tasklist[index1].shareList2[index3].id
      };
      this.$confirm({
        type: "COE 私塾提示",
        msg: "您正在删除点评。确定要删除吗？",
        btn: {
          ok: "确定",
          no: "取消"
        }
      }).then(() => {
        this.$loading.show("正在删除");
        api.trainingCamp_delCampShare(reqdata).then(res => {
          console.log(res)
          this.$loading.hide();
          this.tasklist[index1].shareList2.splice(index3, 1);
        });
      });
    },
    // 删除分享
    delShare(index1) {
      let reqdata = {
        id: this.shareList[index1].id
      };
      this.$confirm({
        type: "COE 私塾提示",
        msg: "您正在删除分享。确定要删除吗？",
        btn: {
          ok: "确定",
          no: "取消"
        }
      }).then(() => {
        this.$loading.show("正在删除");
        api.trainingCamp_delCampShare(reqdata).then(res => {
          console.log(res)
          this.$loading.hide();
          this.shareList.splice(index1, 1);
        });
      });
    },
    // 获取精彩分享列表
    initShareList(campId) {
      this.spinShow = true;
      api.trainingCamp_wonderfulShare({ campId }).then(res => {
        console.log(res);
        this.spinShow = false;
        if(res.code === 200) {
          this.shareList = res.result;
        }
        // this.$forceUpdate();
      });
    },
    handlePlay(e) {
      var audios = document.getElementsByTagName("audio");
      // 暂停函数
      function pauseAll() {
          var self = this;
          [].forEach.call(audios, function (i) {
              // 将audios中其他的audio全部暂停
              i !== self && i.pause();
          })
      }
      // 给play事件绑定暂停函数
      [].forEach.call(audios, function (i) {
          i.addEventListener("play", pauseAll.bind(i));
      })
    },
    gotoLookVideo(val){
      if(!val.campDetailId){
        this.$Message.info('工作坊视频损坏不能观看，请联系管理员')
      }else{
        window.open(`campplay.html#/?campDetailId=${val.campDetailId}&campId=${val.campId}`, "_blank");  
      }
    },
    // 获取任务
    getdata(campLogId) {
      this.spinShow = true;
      api.trainingCamp_selectTaskList({ campLogId }).then(res => {
        this.spinShow = false;
        let sthdata = res.result;
        for (let i = 0; i < sthdata.length; i++) {
          for (let j = 0; j < sthdata[i].childList.length; j++) {
            sthdata[i].childList[j].isadd = false;
            for (let k = 0; k < sthdata[i].childList[j].homeworkInfoList.length; k++) {
              sthdata[i].childList[j].homeworkInfoList[k].isedit = false;
            }
          }
        }
        this.tasklist = [...sthdata];
        // console.log(this.tasklist,'tasklist');
        this.$forceUpdate();
      });
    },
    // 删除子任务
    deltask(index1, index3) {
      let reqdata = {
        campTaskId: this.tasklist[index1].childList[index3].task.campTaskId
      };
      this.$confirm({
        type: "COE 私塾提示",
        msg: "您正在删除子任务。确定要删除吗？",
        btn: {
          ok: "确定",
          no: "取消"
        }
      }).then(() => {
        this.$loading.show("正在删除");
        api.trainingCamp_deleteTaskByTaskId(reqdata).then(res => {
          this.$loading.hide();
          this.tasklist[index1].childList.splice(index3, 1);
        });
      });
    },
    // 删除作业
    delhomework(index1, index3, index4) {
      let that = this;
      let reqdata = {
        homeworkId: this.tasklist[index1].childList[index3].homeworkInfoList[
          index4
        ].trainingHomeworkInfo.homeworkId
      };
      this.$confirm({
        type: "COE 私塾提示",
        msg: "您正在删除作业。确定要删除吗？",
        btn: {
          ok: "确定",
          no: "取消"
        }
      }).then(() => {
        that.$loading.show("正在删除");
        api.trainingCamp_deleteHomeworkInfoByHomeworkId(reqdata).then(res => {
          this.$loading.hide();
          this.tasklist[index1].childList[index3].homeworkInfoList.splice(
            index4,
            1
          );
        });
      });
    },
    // 去编辑作业
    goedithomework(index1, index3, index4) {
      // console.log(index1, index3, index4, "index");
      this.tasklist[index1].childList[index3].homeworkInfoList[index4].isedit = true;
    },
    // 去添加作业
    goaddhomework(index1, index3) {
      this.tasklist[index1].childList[index3].isadd = true;
    },
    // 编辑取消
    editcancle(param, index1, index3, index4) {
      // console.log(index1, index3, index4, "index");

      this.tasklist[index1].childList[index3].homeworkInfoList[
        index4
      ].isedit = false;
    },
    // 编辑确定
    editsure(param, index1, index3, index4) {
      param[0].isedit = false;
      this.tasklist[index1].childList[index3].homeworkInfoList[index4].isedit = false;
      this.tasklist[index1].childList[index3].homeworkInfoList.splice(index4,1,param[0]);
    },
    // 添加取消
    addcancle(param, index1, index3) {
      // console.log(index1, index3, index4, "index");
      this.tasklist[index1].childList[index3].isadd = false;
    },
    // 添加确定
    addsure(param, index1, index3) {
      // console.log(param,'tainjia');
      param[0].isedit = false;
      this.tasklist[index1].childList[index3].isadd = false;
      let aa = this.tasklist[index1].childList[index3].homeworkInfoList.length;
      this.tasklist[index1].childList[index3].homeworkInfoList.splice(
        aa - 1,
        0,
        param[0]
      );
    },
    // 添加子任务
    addchildtask(index1) {
      let reqdata = {
        parentId: this.tasklist[index1].task.campTaskId,
        campId: this.$route.query.campId,
        campLogId: this.$route.query.campLogId
      };
      this.$loading.show("正在添加");
      api.trainingCamp_insertTrainingCampTask(reqdata).then(res => {
        // console.log(res,'res');
        this.$loading.hide();
        let newchild = {
          homeworkInfoList: [],
          task: {
            campTaskId: res.result,
            campLogId: this.tasklist[index1].task.campLogId
          },
          isadd: false
        };
        let a = this.tasklist[index1].childList.length;
        this.tasklist[index1].childList.splice(a, 0, newchild);
        this.$forceUpdate();
        // console.log(this.tasklist,'list');
      });
    },
    gotoPaly(item) {
        window.open(`aliplay_wonderfulshare.html#/?playId=${item.id}&campId=${this.campId}&campLogId=${this.campLogId}&objectOssName=${item.objectOssName}&videoUrl=${item.videoUrl}`,"_blank")
    },
    handleStop(e) {
      return;
    },
    handleChangeIsPreview(value,item) {
      // console.log(value,item)
      let reqObj = {
        id: item.id,
        isPreview: value
      }
      this.$loading.show();
      api.trainingCamp_addCampShare(reqObj).then(res => {
        this.$loading.hide();
        if(res.code === 200) {
          this.$Message.success(res.desc)
          // this.getdata(this.campLogId);
        }
      })
    }
  },
  filters: {
    formatindex(val) {
      return val + 1;
    },
    formatindext(val1, val2) {
      return val1 + 1 + "." + (val2 + 1);
    },
    defaulttime(val) {
      return val ? val : "------";
    }
  }
};
</script>
<style lang="scss" scoped>
.pagecontainer {
  .taskcontainer {
    min-height: 2rem;
    position: relative;
  }
  .taskbox {
    padding: 0.2rem;
    position: relative;
    width: 10.7rem;
    margin: 0 auto;
    .taskitem {
      margin-bottom: 0.2rem;
      .big_item_cilce {
          position: relative;
          top: 7px;
          // background-color: rgb(77, 152, 56);
          height: 24px;
          width: 24px;
          line-height: 24px;
          // padding: 2px 7px;
          text-align: center;
          border-radius: 50%;
          color: white;
          margin-right: 10px;
        }
        .big_item_cilce2 {
          // position: relative;
          // top: 7px;
          // background-color: rgb(77, 152, 56);
          // border: 1px solid #999;
          height: 20px;
          width: 20px;
          // line-height: 20px;
          // padding: 2px 7px;
          text-align: center;
          border-radius: 50%;
          color: white;
          margin-right: 10px;
          overflow: hidden;
          .mould_icon{
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      .taskitemtitle {
        padding: 5px 10px;
        font-weight: 700;
        background: #fafafa;
        line-height: 40px;
        color: #333333;
        font-size: 15px;
        
      }
      .taskitemcontent {
        padding: 0 13px;
        line-height: 34px;
        height: 34px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .left {
          display: flex;
          align-items: center;
          position: absolute;
          left: 13px;
        }
        .right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: absolute;
          right: 13px;
        }
        &:hover {
          background-color: #dff2f9;
        }
        .taskitemcontentindex {
          color: #666;
          width: 60;
          text-align: left;
          font-size: 13px;
        }
        .taskitemcontenttitle {
          color: #1f1f1f;
          font-size: 13px;
          margin-left: 0px;
        }
        .taskitemcontenttime {
          color: #666;
          width: 1.2rem;
        }
      }
    }
    .leftline {
      position: absolute;
      width: 0.01rem;
      background: #999;
      top: 0.4rem;
      bottom: 0.6rem;
      left: 1.3rem;
      z-index: 1;
    }
    .lefttitle {
      width: 1rem;
      line-height: 0.4rem;
      padding-right: 0.04rem;
      text-align: right;
    }
    .lefttitle1 {
      font-size: 0.16rem;
    }
    .lefttitle2 {
      font-size: 0.14rem;
      color: #666;
    }
    .circle {
      border: 1px solid #ccc;
      border-radius: 50%;
      text-align: center;
      z-index: 2;
      position: relative;
      background: #fff;
    }
    .circle1 {
      width: 0.2rem;
      height: 0.2rem;
      margin-right: 0.1rem;
      margin-top: 0.1rem;
      line-height: 0.2rem;
    }
    .circle2 {
      width: 0.16rem;
      height: 0.16rem;
      line-height: 0.16rem;
      margin-left: 0.02rem;
      margin-right: 0.12rem;
      margin-top: 0.12rem;
      color: #666;
    }
    .sthcircle {
      width: 0.3rem;
      height: 0.3rem;
    }
    .sthbg {
      background: rgb(242, 242, 242);
      padding: 0.1rem;
    }
    .right {
      // width: 9rem;
    }
    .tasktitle {
      padding-left: 0.3rem;
      padding-right: 0.2rem;
    }
    .righttitle {
      width: 1rem;
      line-height: 0.3rem;
      text-align: right;
      padding-right: 0.04rem;
      font-size: 0.14rem;
    }
    .rightcontent {
      width: 7.6rem;
    }
    .videoitem {
      line-height: 0.3rem;
      background: #fff;
      margin-bottom: 0.2rem;
      box-shadow: 0 0 2px #ededed;
      padding: 0 0.2rem;
      border-radius: 0.04rem;
      color: #999;
      font-size: 0.14rem;
    }
    .homeworktemplate {
      line-height: 0.3rem;
      background: #fff;
      margin-bottom: 0.2rem;
      box-shadow: 0 0 2px #ededed;
      padding: 0 0.2rem;
      border-radius: 0.04rem;
      color: #999;
      font-size: 0.14rem;
    }
    .homeworkcontent {
      min-height: 1rem;
      line-height: 0.3rem;
      background: #fff;
      margin-bottom: 0.2rem;
      box-shadow: 0 0 2px #ededed;
      padding: 0 0.2rem;
      border-radius: 0.04rem;
      color: #999;
      font-size: 0.14rem;
    }
    .homeworklist {
      padding-bottom: 0.2rem;
    }
    .addtaskbtn {
      width: 9rem;
      line-height: 0.4rem;
      text-align: center;
      border-radius: 0.04rem;
      background: #13D1BE;
      color: #fff;
    }
    .addSharebtn {
      line-height: 32px;
      text-align: center;
      border-radius: 0.04rem;
      background: #13D1BE;
      color: #fff;
      cursor: pointer;
      user-select: none;
      padding: 0 10px;
      height: 32px;
      position: relative;
      top: 5px;
    }

    .childtasktitle {
      .childtaskdel {
        display: none;
        padding: 0 0.2rem;
        cursor: pointer;
        user-select: none;
        margin-left: 0.2rem;
      }
      &:hover {
        color: #13D1BE;
        background: #e2faee;
        .childtaskdel {
          display: inline-block;
        }
      }
    }
    .templatetips {
      margin-left: 0.4rem;
      font-size: 0.14rem;
      color: #999;
      line-height: 0.3rem;
    }
    .homeworkbtnbox {
      padding: 0.2rem 0.3rem;
      .homeworkbtn {
        padding: 0 0.2rem;
        border-radius: 0.04rem;
        border: 1px solid #13D1BE;
        margin-left: 0.2rem;
        cursor: pointer;
        user-select: none;
        font-size: 0.14rem;
        &.sure {
          color: #fff;
          background: #13D1BE;
        }
        &.cancle {
          color: #13D1BE;
        }
      }
    }
  }
}
.content {
  margin-bottom: 15px;
  .audioDesc {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 0 22px;
    .delAudio {
      cursor: pointer;
      padding: 0 10px;
      &:hover {
        color: #13D1BE;
      }
    }
  }
}
.shareList {
  margin: 0 66px 0 145px;
  padding: 0 10px 20px 0;
  background: #F2F2F2;
  .title {
    font-size: 18px;
    padding-left: 23px;
    padding-top: 20px;
  }
  .addSharebtn {
      line-height: 32px;
      text-align: center;
      border-radius: 0.04rem;
      background: #13D1BE;
      color: #fff;
      cursor: pointer;
      user-select: none;
      padding: 0 10px;
      height: 32px;
      position: relative;
      top: 5px;
    }
}
</style>