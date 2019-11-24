<template>
    <div>
        <app-header/>
        <div class="ui-main">
            <router-view :key="$route.fullPath"/>
        </div>
        <app-footer/>
    </div>
</template>
<script src="./main.js"></script>
