<template>
    <div>
      <a href="https://nekoplanet.xyz" title="고양이별">고양이별 nekoplanet</a>
    </div>
    <div>
      고양이별 은하수 교단 본부 홈페이지입니다.
      Homepage for nekoplanet constallation court council.
    </div>
    
    <RouterLink to="/tos" class="router">이용 약관</RouterLink>
</template>

<script setup lang="ts">
//import { RouterLink } from 'vue-router';
</script>

<style lang="css" scoped>
.router {
  background: var(--neko-bg-deck);
  display: inline-block;
  padding: 4px 8px;
  border-radius: 999px;
  color: var(--neko-accent);
}
</style>