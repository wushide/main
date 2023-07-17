<template>
  <div>
    <!-- 导航栏 -->
    <nav class="bg-gray-800">
      <ul class="flex">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <!-- 其他菜单链接 -->
      </ul>
    </nav>
    
    <div class="flex">
      <!-- 侧边栏 -->
      <aside class="bg-gray-200">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
          <!-- 其他菜单链接 -->
        </ul>
      </aside>
      
      <!-- 主要内容区域 -->
      <main class="flex-grow">
        <!-- 主要内容区域内容 -->
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style>
/* 样式可以根据需求进行定制 */
</style>
