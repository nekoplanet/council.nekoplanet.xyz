<script setup lang="ts">
</script>
<template>
    <div id="top-menu">
        <div class="logo-menu">
            <RouterLink to="/" title="고양이별 은하수 교단 본부" class="router">
                <img src="@/assets/logo.png">
            </RouterLink>
        </div>
        <div class="mid-menu">
            <div class="menu-item">
                <a href="https://nekoplanet.xyz" title="고양이별">
                    <i class="hgi-stroke hgi-chatting-01"></i>
                    <span class="fullname"> 고양이별</span>
                </a>
            </div>
            <div class="menu-item">
                <a href="https://discord.gg/V6jkXHaBuK" title="고양이별 은하수 교단 커뮤니티 디스코드">
                    <i class="hgi-stroke hgi-discord"></i>
                    <span class="fullname"> 커뮤니티</span>
                </a>
            </div>
            <div class="menu-item">
                <a href="https://nekoplanet.xyz/@staff" title="고양이별 은하수 교단">
                    <i class="hgi-stroke hgi-bubble-chat-notification"></i>
                    <span class="fullname"> 교단 본부</span>
                </a>
            </div>
        </div>
    </div>
</template>
<style lang="css">
/* from: https://github.com/HotoRas/hotoras.kr */
#top-menu {
    align-items: center;
    background: var(--neko-bg-deck);
    box-shadow: 5px 5px 5px #0001;
    box-sizing: border-box;
    color: white;
    display: flex;
    height: 3em;
    justify-content: space-between;
    left: 0;
    overflow: hidden;
    padding: 0 1em;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 99999999;

    & img {
        width: 2.5em;
    }

    & div {
        box-sizing: border-box;
    }
}

.logo-item,
.mid-menu {
    height: 3em;
}

.mid-menu {
    display: flex;
}

.menu-item {
    height: 3em;
    padding: .25em 1em;

    &>a {
        align-items: center;
        color: white;
        display: flex;
        gap: 5px;
        height: 2.5em;
        text-decoration: none;
    }

    &:hover {
        background: var(--neko-accent);

        & .fullname {
            display: inline;
        }
    }

    & i {
        font-size: 1.5em;
    }

    & .fullname {
        display: none;
    }
}

@media (prefers-color-scheme: dark) {
    #top-menu {
        background: var(--neko-bg-deck-darkmode);
    }

    .menu-item:hover {
        background: var(--neko-accent-darkmode);

        & * {
            color: var(--neko-accent);
        }
    }
}
</style>