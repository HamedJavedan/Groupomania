<template>
    <div>
        <div id="nav"></div>
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col d-flex justify-content-center">
                    <div class="card text-center fadeInDown shadow p-3 bg-white rounded border-0">
                        <div class="card-img-top fadeIn first">
                            <img src="../assets/logo1.png" id="icon" alt="Logo" />
                        </div>
                        <div class="card-body">
                            <slot name="form"></slot>
                        </div>
                        <div class="card-footer text-muted">
                            <slot name="link"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "LoginSignupCard",
};
</script>
<style>
*:focus {
    outline: none;
}

#icon {
    width: 200px;
}
</style>
