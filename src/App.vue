<!--
 * @Descripttion: 
 * @version: 
 * @Author: wu-shide
 * @Date: 2023-07-17 20:26:01
 * @LastEditors: wu-shide
 * @LastEditTime: 2023-07-17 21:55:07
-->
<template>
  <MainLayout>
    <router-view></router-view>
  </MainLayout>
</template>

<script>
import MainLayout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>
