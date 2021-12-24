<template>
    <div class="container mx-auto mt-5">
        <div class="row d-flex justify-content-center">
            <div class="card card2 border-0 mt-5 mx-3">
                <div class="row px-3">
                    <img class="profile-pic mr-3" src="logo2.png" />
                    <div class="flex-column">
                        <h3 class="mb-0 font-weight-normal">{{ firstName }} {{ lastName }}</h3>
                    </div>
                </div>
                <div class="row px-3 form-group">
                    <textarea class="text-muted bg-light mt-4 mb-3" v-model="message" :placeholder="placeholder"></textarea>
                </div>
                <div class="row px-3 form-group">
                    <div class="justify-content-center"><input @change="onFileChange()" type="file" ref="file" name="image" class="form-control-file" id="File" accept=".jpg, .jpeg, .gif, .png" /></div>
                    <button type="submit" class="btn btn-post ml-auto">Publish</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddPost",
    data() {
        return {
            message: "",
            image: "",
            userID: "",
            firstName: "",
            lastName: "",
            placeholder: ""
        };
    },
};
</script>

<style>
.card2 {
    border-radius: 10px;
    width: 600px;
    padding: 20px;
}

.profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: contain;
}

textarea {
    padding: 15px 20px;
    border-radius: 10px;
    box-sizing: border-box;
    color: #141414;
    border: 1px solid #f5f5f5;
    font-size: 16px;
    letter-spacing: 1px;
    height: 120px !important;
    width: 100%;
}

textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #00000062 !important;
    outline-width: 0 !important;
}

::placeholder {
    color: hsl(0, 5%, 50%);
}

:-ms-input-placeholder {
    color: #a88787;
}

::-ms-input-placeholder {
    color: #c2abab;
}

.btn-post {
    border-radius: 50px;
    padding: 4px 10px;
    background-color: #01f5fdb8;
    color: #000000;
}
.btn-post:hover {
    background-color: #01a1fdce;
    color: white;
}

.options {
    font-size: 23px;
    color: #796464;
    cursor: pointer;
}

.options:hover {
    color: #000;
}
</style>
