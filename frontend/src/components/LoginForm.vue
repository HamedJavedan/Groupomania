<template>
    <form>
        <div class="form-group fadeIn second">
            <label for="email"><i class="fas fa-at"></i> Email address</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" v-model="email" :class="{ 'is-invalid': isSubmitted && $v.email.$error }" />
            <div v-if="isSubmitted && $v.email.$error" class="invalid-feedback">
                <span v-if="!$v.email.required">Email field is required</span>
                <span v-if="!$v.email.email">Please provide valid email</span>
            </div>
        </div>
        <div class="form-group third">
            <label for="password"><i class="fas fa-unlock-alt"></i> Password</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter your password" v-model="password" :class="{ 'is-invalid': isSubmitted && $v.password.$error }" />
            <div v-if="isSubmitted && $v.password.$error" class="invalid-feedback">
                <span v-if="!$v.password.required">Password field is required</span>
            </div>
        </div>
        <button class="btn fourth">Login</button>
    </form>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";


export default {
    name: "LoginForm",
    data() {
        return {
            email: "",
            password: "",
        };
    },

    validations: {
        email: {
            required,
            email,
        },
        password: {
            required,
        },
    },
};
</script>
<style>
.btn {
    background-color: rgb(0, 174, 255);
}
</style>