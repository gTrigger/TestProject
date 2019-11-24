<template>
    <div class="ui-company-tile" v-if="company" @click="openCompanyPage(company)">
        <img :src="require(`../../../assets/images/${company.image}`)"/>
        <div class="ui-title-container">
            <p>{{company.name}}</p>
        </div>
        <div class="ui-contacts-container">
            <p><font-awesome-icon icon="phone-alt"/> {{company.contacts.phone}}</p>
            <p><font-awesome-icon icon="envelope"/> {{company.contacts.mail}}</p>
        </div>
    </div>
</template>

<script src="./company.tile.js"></script>
<style lang="scss" src="./company.tile.scss"></style>
