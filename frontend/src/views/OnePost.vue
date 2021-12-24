<template>
    <div class="OnePost">
        <NavBar></NavBar>
        <div class="container my-5 p-3 d-flex justify-content-center">
            <div class="card card2 border-0 pb-0">
                <div class="bg-white">
                    <div class="d-flex flex-row user p-2">
                        <img class="rounded-circle profile-pic mr-3" src="logo2.png" width="50" />
                        <div class="d-flex flex-column ml-2">
                            <span class="name font-weight-bold" v-if="post.user">{{ post.user.FirstName }} {{ post.user.LastName }}</span
                            ><span>{{ post.CreatedAt | formatDate }}</span>
                        </div>
                    </div>

                    <div class="mt-2 p-2">
                        <p class="post-content mb-2">{{ post.Message }}</p>
                        <div v-if="post.ImageUrl">
                            <img :src="post.ImageUrl" class="img-fluid" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between p-3 border-top">
                        <div class="btn-group" role="group" v-if="post.user">
                            <router-link :to="{ name: 'EditPost', params: { id: post.PostID } }" class="btn btn-post p-2" v-if="post.user.UserID == userID">Edit</router-link>
                            <button v-if="post.user.UserID == userID" class="btn btn-post p-2" @click="deletePost(post.PostID)">Delete</button>
                        </div>
                        <div class="d-flex align-items-center border-left px-3 likes">
                            <span v-if="!seens.includes(post.PostID)"><i class="fas fa-eye mx-2"></i> <input type="checkbox" :value="post.PostID" @change="markRead(post.PostID, $event)" /> Mark as read</span>
                            <span v-else class="text-muted"><i class="fas fa-check-square"></i> Read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
    name: "OnePost",
    components: {
        NavBar,
    },
    data() {
        return {
            post: [],
            userID: "",
            seenPost: [],
            seens: [],
        };
    },
};
</script>
<style></style>
