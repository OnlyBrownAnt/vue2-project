<template>
  <div class="container">
    <div style="width: 100vw; height: 900px; background-color: #42b983; text-align: center" @click="echoApi()">click</div>
  </div>
</template>

<script>
import { echo } from '@/api/home';
import debounce from "lodash.debounce"; // debounce = _.debounce 
export default {
  name: 'HomeIndex',
  props: {
    msg: String
  },
  async created() {
   
  },
  methods: {
    echoApi: debounce(function() {
      console.log(`echoApi {}`);
      setTimeout(async () => {
        let data = await echo({id: 1});
        console.log(`data ${JSON.stringify(data)}`);
      }, 2000);
    }, '1000', {
      'leading': true, // 在延迟开始前立即调用事件
      'trailing': false, // 在延时结束后不调用,保证事件只被触发一次。 如果为true可以实现节流效果。
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 700px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
