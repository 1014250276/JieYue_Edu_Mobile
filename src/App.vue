<template>
  <div id="app">
	  <div class="el-header" style="padding: 0px;">
		  <Header></Header>
	  </div>
	<div class="el-main"  style="padding: 0px;">
		<!-- 内容 -->
		 <router-view />
	</div>
	<div class="el-footer" style="padding: 0px;">
		<Footer></Footer>
	</div>
	
	<!-- 返回顶部 -->
	<Backtop></Backtop>
	
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Backtop from "@/components/Backtop";
export default {
  name: 'app',
  components: {
	Header,
	Footer,
	Backtop
  },
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  overflow: auto;
}
.el-main{
	/* margin-top: 2px;
	color: #333;
	text-align: center;
	line-height: 100%; */
	position: relative;
	top:50px;
	/* display: inline-block; */
	/* border: 1px solid #42B983; */
}
.el-header{

}

.el-footer{
	
}
</style>
