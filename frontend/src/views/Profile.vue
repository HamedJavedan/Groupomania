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
import axios from "axios";
import Swal from "sweetalert2";
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
    methods: {
        // Get User By Id
        async getUserById() {
            try {
                const response = await axios.get(`http://localhost:5000/auth/${this.$route.params.id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("jwt") } });
                this.firstName = response.data.FirstName;
                this.lastName = response.data.LastName;
                this.email = response.data.Email;
                this.createdAt = response.data.createdAt;
            } catch (err) {
                console.log(err);
            }
        },
        deleteAccount() {
            Swal.fire({
                title: "Are you sure you want to delete your account?",
                text: "You won't be able to revert this and your post will be lost!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#249ddb",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:5000/auth/${this.$route.params.id}`, { headers: { Authorization: "Bearer " + localStorage.getItem("jwt") } }).then((response) => {
                        console.log(response);
                        localStorage.clear();
                        Swal.fire("Deleted!", "Your account has been deleted.", "success");
                        this.$router.push("/");
                    });
                }
            });
        },
    },
    created: function () {
        const user = JSON.parse(localStorage.getItem("user"));
        this.userID = user.UserID;

        this.getUserById();
    },
};
</script>
<style>
.card1 {
    width: 500px;
    border-radius: 10px;
    background-color: #98cfeb;
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
    color: #545454;
}

.idd {
    font-size: 14px;
    font-weight: 600;
    color: #545454;
}

.number {
    font-size: 22px;
    font-weight: bold;
}

.post {
    font-size: 12px;
    font-weight: 500;
    color: #444444;
}

.join {
    font-size: 14px;
    color: #a0a0a0;
    font-weight: bold;
}

.date {
    background-color: #ccc;
}
</style>
