<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from '../stores/users'

const router = useRouter()
const userStore = useUserStore()

const isUpdated = ref(false)
const firstname = ref('')
const lastname = ref('')


const backToHome = () => {
    router.push({ name: 'home' })
}

onMounted(() => {
    firstname.value = userStore.firstname
    lastname.value = userStore.lastname
})


watch([firstname, lastname], (newData) => {
    if (newData[0] !== userStore.firstname ||
        newData[1] !== userStore.lastname) {
        isUpdated.value = false
    }
})


const updatePeofile = () => {
    const formData = {
        firstname: firstname.value,
        lastname: lastname.value
    }
    userStore.changeName(formData)
    isUpdated.value = true
}

</script>

<template>
    <div>
        Profile from stores
        <div v-if="isUpdated" style="color: limegreen;">Profile up to date</div>
        <div>Firstname {{ userStore.firstname }}</div>
        <div>Lastname {{ userStore.lastname }}</div>

    </div>
    <div>
        Profile Vue
        <div>
            Firsrt name :<input type="text" v-model="firstname">
        </div>
        <div>
            Lastname: <input type="text" v-model="lastname">
        </div>
        <button @click="updatePeofile()">Update Profile</button>
        <div @click="backToHome">
            <button>Back to home</button>
        </div>

    </div>
</template>