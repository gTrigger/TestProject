<template>
    <div>
        <div class="ui-page-header">
            <p>Страница компании</p>
            <div class="ui-button-container">
                <button @click="navigateToCompanyList">Вернуться</button>
            </div>
        </div>
        <div class="ui-company-page" v-if="company">
            <img :src="require(`../../../assets/images/${company.image}`)"/>
            <div class="ui-company-info">
                <div class="ui-title-container">
                    <p>{{company.name}}</p>
                </div>
                <div class="ui-contacts-container">
                    <p>
                        <font-awesome-icon icon="phone-alt"/>
                        {{company.contacts.phone}}
                    </p>
                    <p>
                        <font-awesome-icon icon="envelope"/>
                        {{company.contacts.mail}}
                    </p>
                </div>
                <div class="ui-requisites-container">
                    <p>Адрес: {{company.contacts.address}}</p>
                    <p>К.счет: {{company.contacts.requisites.account}}</p>
                    <p>ИНН/КПП: {{company.contacts.requisites.other}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./company.page.js"></script>
<style lang="scss" src="./company.page.scss"></style>
