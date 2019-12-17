<template>
  <div>
    <div class="aaa">
      <div>
        <draggable v-model="data.colors1" :options="{animation:500, group: 'aaa1'}">
          <div v-for="element in data.colors1" :key="element.text" class="drag-item">{{element.text}}</div>
        </draggable>
      </div>
      <div>
        <draggable v-model="data.colors2" :options="{animation:500, group: 'aaa1'}">
          <div v-for="element in data.colors2" :key="element.text" class="drag-item">{{element.text}}</div>
        </draggable>
      </div>
      <div>
        <div>{{data.colors1}}</div>
        <div>{{data.colors2}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  // npm i vuedraggable -S
  data() {
    return {
      data: {
        colors1: [
          {
            text: "1"
          },
          {
            text: "2"
          },
          {
            text: "3"
          },
          {
            text: "4"
          },
          {
            text: "10"
          }
        ],
        colors2: [
          {
            text: "5"
          },
          {
            text: "6"
          },
          {
            text: "7"
          },
          {
            text: "8"
          },
          {
            text: "9"
          }
        ]
      }
    };
  },
  components: {
    draggable
  },
  methods: {},
  mounted() {
    //为了防止火狐浏览器拖拽的时候以新标签打开，此代码真实有效
    // document.body.ondrop = function(event) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // };
  }
};
</script>
<style scoped>
.aaa {
  display: flex;
}
.drag-item {
  width: 200px;
  height: 50px;
  line-height: 50px;
  margin: auto;
  position: relative;
  background: #ddd;
  margin-top: 20px;
}
</style>