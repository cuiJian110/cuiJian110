<template>
  <div class="library-mask">
    <div class="library-content">
      <div class="lib-close pointer" @click="close"></div>
      <div class="sth m_drag">批量创建课程</div>
      <div class="lib-search clearfix">
        <div class="fl search-title" v-if="leave==1">全部文件</div>
        <div class="fl search-title clearfix" v-else>
          <div class="fl sec pointer" @click="libgopre">&lt; 返回上一级</div>
          <div class="fl thr ellipsis">
            &nbsp;&nbsp;|&nbsp;&nbsp;<span class="wenjianjia-icon"></span>
            {{prename}}
          </div>
        </div>
        <div class="fr search-box">
          <input type="text" ref="searchinput" placeholder="文件或视频名" />
          <div class="search-icon" @click="gosearch"></div>
        </div>
      </div>
      <div class="h10"></div>
      <div class="search-result-box">
        <div class="search-result-title center clearfix f18">
          <div class="fl result-name fl">名称</div>
          <div class="fl result-time fl">上传时间</div>
          <div class="fl result-statu fl">操作</div>
        </div>
        <div class="result-box f16">
          <div class="result-sth">
            <div
              class="result-item clearfix"
              :class="{act:selectindex==index}"
              v-for="(ele, index) in datalist"
              :key="'ele' + index"
              @click="selectthis($event, index)"
            >
              <div class="result-name clearfix fl">
                <div class="result-icon shipin fl" v-if="ele.videoLibraryType==1"></div>
                <div class="result-icon wenjianjia fl" v-if="ele.videoLibraryType==2"></div>
                <div class="fl ellipsis result-name1">{{ele.videoLibraryName}}</div>
              </div>
              <div class="result-time center fl">{{ele.createTime|time2date}}</div>
              <div class="result-statu center fl pointer" @click.stop="checkselectthis($event, index)" v-if="ele.videoLibraryType==2">子目录</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lib-tools clearfix">
        <div class="golib fr pointer" @click="govidlib">上传新视频 &gt;</div>
        <div class="add2course fr pointer center" :class="{ act: cansave }" @click="libsave">添加</div>
      </div>
    </div>
  </div>
</template>
<script>
// import api from "@/apis/courseBackstage/backstage/index";
import api from "@/apis/edus/camp/index.js";
export default {
  data() {
    return {
      cansave: false,
      fileType: 3,
      datalist: [],
      leave:1,
      prename:null,
      zhxflag:false,
      videoId:null,
      videoLibraryName:null,
      selectindex:-1,
      isZimulu: false,
    };
  },
  components: {},
  created() {
    this.$loading.show();
    let videoLibraryParentId = parseInt(localStorage.getItem("videoLibraryParentId")) || "";
    if(videoLibraryParentId !== "") {
      this.zhxflag=true;
      this.prename = localStorage.getItem("prename");
      this.getlist({
        videoLibraryParentId:videoLibraryParentId,
        fileType: this.fileType
      })
    } else {
      this.getlist({ fileType: this.fileType });
    }
  },
  mounted() {
    this.m_drag();
  },
  methods: {
    getlist(param) {
      let sthflag = false;
      if (param) {
      } else {
        sthflag = true;
        param = {};
        // this.flodername = null;
      }
      api.trainingCampLog_selectVideoLibrary(param).then(res => {
        this.$loading.hide();
        this.cansave=false;
        this.videoId=null;
        this.videoLibraryName=null;
        this.selectindex=-1;
        if (res.code == 200) {
          if(this.isZimulu) {
            this.datalist = [...res.data];
          } else {
            this.datalist = [...res.data].filter(i => i.videoLibraryType === 2);
          }
          if(!this.zhxflag){
            // 第一成
            this.leave=1;
          }else{
              // 第二城
              this.leave=2;
              this.zhxflag=false;
          }
        } else {
          this.$msg(res.desc);
        }
      });
    },
    close() {
      this.$emit("close", "close");
    },
    // 视频库 返回上一级
    libgopre() {
      this.isZimulu = false;
      this.zhxflag=false;
      this.$loading.show();
      this.getlist({ fileType: this.fileType })
      localStorage.removeItem("videoLibraryParentId")
      localStorage.removeItem("prename")
    },
    // 选中某一个视频
    selectthis(e, index) {
        this.selectindex=index;
        console.log(this.datalist[index])
        // this.videoId=this.datalist[index].videoId;
        // this.videoLibraryName=this.datalist[index].videoLibraryName;
        if(this.datalist[index].videoLibraryType === 1) {
          this.cansave = false;
        } else {
          this.cansave=true;
        }
    },
    // 进入子目录
    checkselectthis(e, index) {
        // 点中文件夹，进入下一级
        let reqdata={
          videoLibraryParentId:this.datalist[index].videoLibraryId,
          fileType: this.fileType
        };
        // window.localStorage.setItem("videoLibraryParentId",this.datalist[index].videoLibraryId)
        // window.localStorage.setItem("prename",this.datalist[index].videoLibraryName)
        this.isZimulu = true;
        this.zhxflag=true;
        this.prename=this.datalist[index].videoLibraryName;
        this.$loading.show();
        this.getlist(reqdata)
    },
    // 搜索视频
    gosearch(e){
      this.isZimulu = false;
      let reqdata={
        videoLibraryName:this.$refs.searchinput.value,
        fileType: this.fileType
      }
      this.zhxflag=1;
      this.$loading.show();
      this.getlist(reqdata)
    },
    // 选中提交
    libsave(){
      if(this.selectindex === -1){return;}
      this.$emit('libsave',JSON.stringify(this.datalist[this.selectindex]))
    },
    // 去视频库上传
    govidlib(){
       window.open("jytedus.html#/lib_video");
    },
    m_drag() {
      const mask = document.querySelector(".library-mask");
      const content = document.querySelector(".library-content");
      const title = document.querySelector(".m_drag");
      title.addEventListener("mousedown",function(e) {
        // 获取鼠标在元素中的位置
        let x = e.pageX - content.offsetLeft;
        let y = e.pageY - content.offsetTop;
        mask.addEventListener("mousemove",move);
        function move(e) {
          // 获取定位的left top
          let left = e.pageX - x;
          let top = e.pageY - y;
          content.style.left = left + "px";
          content.style.top = top + "px";
        }
        title.addEventListener("mouseup", function(e) {
          mask.removeEventListener("mousemove",move)
        })
      })
    }
    // 禁止滚下边
    // mwhell(e) {
    //   if (window.event) {
    //     //这是IE浏览器
    //     e.cancelBubble = true;
    //   } else if (e && e.stopPropagation) {
    //     //这是其他浏览器
    //     e.stopPropagation(); //阻止冒泡事件
    //   }
    // }
  },
  filters: {
    checkstatu(val) {
      if(!val){
        return '上传成功'
      }else{
        return val=='0'?'--':val;
      }
    },
    time2date(val) {
      // 时间戳转日期，
      if (val) {
        var time = new Date(val);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        y = y > 9 ? y : "0" + y;
        m = m > 9 ? m : "0" + m;
        d = d > 9 ? d : "0" + d;
        h = h > 9 ? h : "0" + h;
        mm = mm > 9 ? mm : "0" + mm;
        s = s > 9 ? s : "0" + s;
        return y + "-" + m + "-" + d + " " + h + ":" + mm + ":" + s;
      } else {
        return "--";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../../../../static/css/commonsass.scss";

// 弹窗
.library-mask {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  align-items: center;
  justify-content: center;
  background: $color23;

  .library-content {
    width: 7rem;
    height: 5rem;
    padding: 0.3rem 0.4rem;
    background: $color9;
    position: absolute;
    .lib-close {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      width: 0.2rem;
      height: 0.2rem;
      background-size: 100% 100%;
      background-image: url(../../../../../static/img/icon/close3.png);
    }
    .lib-search {
      line-height: 0.4rem;
      .search-title {
        .fir {
          color: $color3;
        }
        .sec {
          color: $color11;
        }
        .thr {
          width: 2rem;
          color: $color2;

          .wenjianjia-icon {
            display: inline-block;
            width: 0.18rem;
            height: 0.18rem;
            position: relative;
            top: 0.03rem;
            background-size: 100% 100%;
            background-image: url(../../../../../static/img/icon/wenjianjia.png);
          }
        }
      }
      .search-box {
        width: 2.4rem;
        position: relative;
        input {
          padding-right: 0.5rem;
        }
        .search-icon {
          position: absolute;
          cursor: pointer;
          right: 0.1rem;
          top: 0.1rem;
          width: 0.2rem;
          height: 0.2rem;
          z-index: 10;
          background-size: 100% 100%;
          background-image: url(../../../../../static/img/icon/libsearch.png);
        }
      }
    }
    .search-result-box {
      .search-result-title {
        line-height: 0.5rem;
        background: $color19;
        border-left: 0.01rem solid $color7;
        border-right: 0.01rem solid $color7;
      }
      .result-item:hover {
        background: $color19;
      }
      .result-item.act {
        background: $color11 !important;
      }
      .result-box {
        width: 6.2rem;
        height: 2.1rem;
        overflow: hidden;
        border-bottom: 0.02rem solid $color3;
        .result-sth {
          width: 6.5rem;
          height: 2.1rem;
          overflow-x: hidden;
          overflow-y: auto;
        }
        .result-item {
          width: 6.2rem;
          line-height: 0.44rem;
          border-bottom: 0.01rem solid $color7;
          border-left: 0.01rem solid $color7;
          border-right: 0.01rem solid $color7;
          .result-name {
            padding-left: 0.2rem;
            .result-icon {
              width: 0.2rem;
              height: 0.2rem;
              margin-right: 0.04rem;
              background-size: 100% 100%;
              position: relative;
              top: 0.11rem;
              &.shipin {
                background-image: url(../../../../../static/img/icon/shipinicon.png);
              }
              &.wenjianjia {
                background-image: url(../../../../../static/img/icon/wenjianjia.png);
              }
            }
            .result-name1 {
              width: 1.4rem;
              text-align: left;
            }
          }
        }
      }
      .result-name {
        width: 1.9rem;
      }
      .result-time {
        width: 2.5rem;
      }
      .result-statu {
        width: 1.76rem;
      }
    }
    .lib-tools {
      padding-top: 0.2rem;
      line-height: 0.4rem;
      .golib {
        color: $color11;
        margin-left: 0.4rem;
      }
      .add2course {
        width: 1.6rem;
        border-radius: 0.04rem;
        background: $color6;
        color: $color9;
        &.act {
          background: $color11;
        }
      }
    }
  }
}
.m_drag {
  cursor: move;
}
</style>