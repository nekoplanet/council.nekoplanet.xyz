<template>
    <a href="https://nekoplanet.xyz/@staff" class="staff-account" title="고양이별 은하수 교단 @staff@nekoplanet.xyz">
        <img src="@/assets/staff.png">
        @staff
    </a>
</template>

<style lang="css" scoped>
a.staff-account {
    background: rgba(96, 109, 247, .1);
    display: inline-block;
    padding: 4px 8px 4px 4px;
    border-radius: 999px;
    color: var(--neko-accent);

    &:hover {
        text-decoration: underline;
    }

    & img {
        width: 1.5em;
        height: 1.5em;
        object-fit: cover;
        margin: 0 .2em 0 0;
        vertical-align: bottom;
        border-radius: 100%;
    }
}
</style>