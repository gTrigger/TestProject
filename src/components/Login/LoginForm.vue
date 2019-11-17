<template>
    <div class="ui-login-form">
        <div class="ui-title-container">
            <p>Sign in</p>
        </div>
        <div class="ui-first-container">
            <div class="ui-login-container">
                <label for="login-field">Username</label>
                <input id="login-field" type="text" autocomplete="off">
            </div>


            <div class="ui-password-container">
                <label for="password-field">Password</label>
                <input id="password-field" type="password" autocomplete="off">
            </div>
        </div>
        <div class="ui-second-container">
            <div class="ui-checkbox-container">
                <input id="checkbox" type="checkbox" class="ui-custom-checkbox">
                <label for="checkbox">
                    Remember me
                </label>
            </div>
            <div class="ui-button-container">
                <button>Sign in</button>
            </div>
        </div>
    </div>
</template>

<script src="./login.form.js"></script>

<style src="./login.form.scss" lang="scss"></style>
