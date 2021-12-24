<template>
    <div class="EditPost">
        <NavBar></NavBar>
        <div class="container mx-auto mt-5">
            <div class="row d-flex justify-content-center">
                <div class="card card2 border-0 mt-5 mx-3">
                    <div class="row px-3">
                        <img class="profile-pic mr-3" src="logo2.png" />
                        <div class="flex-column">
                            <h3 class="mb-0 font-weight-normal" v-if="post.user">{{ post.user.FirstName }} {{ post.user.LastName }}</h3>
                        </div>
                    </div>
                    <div class="row px-3 form-group">
                        <textarea class="text-muted bg-light mt-4 mb-3" v-model="newMessage" :placeholder="placeholder"></textarea>
                    </div>
                    <div class="row px-3 form-group">
                        <div class="justify-content-center"><input @change="onFileChange()" type="file" ref="file" name="image" class="form-control-file" id="File" accept=".jpg, .jpeg, .gif, .png" /></div>
                        <button type="submit" class="btn btn-post ml-auto">Update</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
    name: "EditPost",
    components: {
        NavBar,
    },
    data() {
        return {
            post: [],
            userID: "",
            newMessage: "",
            placeholder: "",
            newImage: "",
        };
    },
};
</script>
<style></style>
