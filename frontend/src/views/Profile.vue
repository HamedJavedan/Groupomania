<template>
    <div class="profile">
        <NavBar></NavBar>
        <div class="container mt-5 d-flex justify-content-center">
            <div class="card1 mt-5 p-4">
                <div class="image d-flex flex-column justify-content-center align-items-center">
                    <button class="btn btn0 btn-post p-0"><img src="logo2.png" height="100" width="100" /></button>
                    <span class="name mt-3">{{ firstName }} {{ lastName }}</span>
                    <span class="idd">{{ email }}</span>

                    <div class="d-flex mt-2"><button v-if="paramsID == userID" class="btn btn-post" @click="deleteAccount">Delete Profile</button></div>
                    <div class="px-2 rounded mt-4 date">
                        <span class="join">Joined on {{ createdAt | formatDate }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";

export default {
    name: "Profile",
    components: {
        NavBar,
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            createdAt: "",
            paramsID: this.$route.params.id,
            userID: "",
        };
    },
};
</script>
<style>
.card1 {
    width: 500px;
    border-radius: 10px;
    background-color: #b3b3b367;
    border: none;
    transition: all 0.5s;
}

.image img {
    transition: all 0.5s;
}

.card1:hover .image img {
    transform: scale(1.5);
}

.btn0 {
    height: 140px;
    width: 140px;
    border-radius: 50%;
}

.name {
    font-size: 22px;
    font-weight: bold;
    color: #313131;
}

.idd {
    font-size: 14px;
    font-weight: 600;
    color: #363636;
}

.number {
    font-size: 22px;
    font-weight: bold;
}

.post {
    font-size: 12px;
    font-weight: 500;
    color: #2c2a2a;
}

.join {
    font-size: 14px;
    color: #4e4949;
    font-weight: bold;
}

.date {
    background-color: rgb(230, 230, 230);
}
</style>
