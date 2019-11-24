<template>
    <div class="ui-company-create">
        <div class="ui-title-container">
            <p>Добавить новую компанию</p>
        </div>
        <div class="ui-company-name">
            <label for="company-name">Название компании</label>
            <input id="company-name" v-model="company.name" type="text" autocomplete="off">
        </div>

        <div class="ui-company-main-info">
            <div class="ui-company-phone">
                <label for="company-phone">Телефон</label>
                <input id="company-phone" v-model="company.contacts.phone" type="text" autocomplete="off">
            </div>

            <div class="ui-company-mail">
                <label for="company-mail">Электронная почта</label>
                <input id="company-mail" v-model="company.contacts.mail" type="text" autocomplete="off">
            </div>
        </div>

        <div class="ui-company-address">
            <label for="company-address">Адрес</label>
            <input id="company-address" v-model="company.contacts.address" type="text" autocomplete="off">
        </div>

        <div class="ui-company-requisites">
            <div class="ui-company-account">
                <label for="company-account">К.счет</label>
                <input id="company-account" v-model="company.contacts.requisites.account" type="text" autocomplete="off">
            </div>

            <div class="ui-company-other">
                <label for="company-other">ИНН/КПП</label>
                <input id="company-other" v-model="company.contacts.requisites.other" type="text" autocomplete="off">
            </div>
        </div>

        <div class="ui-button-container">
            <button @click="createNewCompany">Создать</button>
        </div>
    </div>
</template>

<script src="./company.create.js"></script>
<style lang="scss" src="./company.create.scss"></style>
