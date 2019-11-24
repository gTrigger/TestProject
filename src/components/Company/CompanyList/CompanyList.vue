<template>
    <div>
        <div class="ui-page-header">
            <p>Список компаний</p>
            <div class="ui-button-container">
                <button @click="createNewCompany">Добавить</button>
            </div>
        </div>
        <div class="ui-company-list">
            <company-tile v-for="(company, index) in companies"
                          :company="company"
                          :key="index">
            </company-tile>
        </div>
    </div>
</template>

<script src="./company.list.js"></script>
<style lang="scss" src="./company.list.scss"></style>
