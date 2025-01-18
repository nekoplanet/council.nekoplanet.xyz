<template>
    <div id="neko-footer">
        <div>ⓒ 2025 Nekoplanet
        ·
        Powered by Vue
        </div>
        <div>사이트가 이상하게 표시된다면, <MisskeyAccountStaff />에 문의해주세요.</div>
    </div>
</template>
<script setup lang="ts">
import MisskeyAccountStaff from './MisskeyAccountStaff.vue';
</script>

<style lang="css">
#neko-footer {
    display: block;
    color: var(--neko-fg);
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 1em;
    width: 100vw;
    text-align: center;
    z-index: 10;
    background: var(--neko-bg-info);
}
</style>