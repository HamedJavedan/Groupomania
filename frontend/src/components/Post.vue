<template>
    <div class="post">
        <div class="container my-2 p-3 d-flex justify-content-center" v-for="post in posts" :key="post.PostID">
            <div class="card card2 border-0 pb-0">
                <div class="bg-white">
                    <div class="d-flex flex-row user p-2">
                        <img class="rounded-circle profile-pic mr-3" src="logo2.png" width="50" />
                        <div class="d-flex flex-column ml-2">
                            <span class="name font-weight-bold">{{ post.user.FirstName }} {{ post.user.LastName }}</span
                            ><span>{{ post.CreatedAt | formatDate }}</span>
                        </div>
                    </div>
                    <router-link :to="{ name: 'OnePost', params: { id: post.PostID } }" class="text-decoration-none text-muted">
                        <div class="mt-2 p-2">
                            <p class="post-content mb-2">{{ post.Message }}</p>
                            <div v-if="post.ImageUrl">
                                <img :src="post.ImageUrl" class="img-fluid" />
                            </div>
                        </div>
                    </router-link>
                    <div class="d-flex justify-content-between p-3 border-top">
                        <div class="btn-group" role="group">
                            <router-link :to="{ name: 'EditPost', params: { id: post.PostID } }" class="btn btn-post" v-if="post.user.UserID == userID">Edit</router-link>
                            <button v-if="post.user.UserID == userID" class="btn btn-post" @click="deletePost(post.PostID)">Delete</button>
                        </div>
                        <div class="d-flex align-items-center border-left px-3 likes">
                            <span v-if="!seens.includes(post.PostID)"><i class="fas fa-eye mx-2"></i>
                            <input  type="checkbox" :value="post.PostID" @change="markRead(post.PostID, $event)" /> Mark as read</span>
                            <span v-else class="text-muted"><i class="fas fa-check-square"></i> Read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="noPost" class="text-center mt-5">
            <p class="h2">Sorry, there are no post to show...</p>
            <p class="h3">Be the first by adding a new post!</p>
        </div>
        <transition name="fade">
            <div id="pagetop" class="" v-show="scY > 300" @click="toTop">
                <i class="fas fa-angle-double-up h3"></i>
            </div>
        </transition>
    </div>
</template>

<script>


export default {
    name: "Post",
    data() {
        return {
            posts: [],
            userID: "",
            seenPost: [],
            seens: []
        };
    },
};
</script>
<style>
.post-content {
    font-size: 14px;
}

.likes {
    color: #01cbfdb8;
}
#pagetop {
    position: fixed;
    bottom: 20px;
    right: 40px;
}

.fa-angle-double-up {
    color: #01d7fdb8;
}
</style>
