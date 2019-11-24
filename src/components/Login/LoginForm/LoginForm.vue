<template>
    <div class="ui-login-form">
        <div class="ui-title-container">
            <p>Войти</p>
        </div>
        <div class="ui-first-container">
            <div class="ui-login-container">
                <label for="login-field">Имя</label>
                <input id="login-field" v-model="user.login" type="text" autocomplete="off">
            </div>

            <div class="ui-password-container">
                <label for="password-field">Пароль</label>
                <input id="password-field" v-model="user.password" type="password" autocomplete="off">
            </div>
        </div>
        <div class="ui-second-container">
            <div class="ui-checkbox-container">
                <input id="checkbox" type="checkbox" v-model="user.rememberMe" class="ui-custom-checkbox">
                <label for="checkbox">
                    Запомнить меня
                </label>
            </div>
            <div class="ui-button-container">
                <button @click="onSignInButtonClick">Войти</button>
            </div>
        </div>
    </div>
</template>

<script src="./login.form.js"></script>

<style src="./login.form.scss" lang="scss"></style>
