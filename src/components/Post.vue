<script>
import {ref} from 'vue';
import axios from 'axios';
export default ({
    setup() {
        const title = ref("");
        const description = ref("");

        return { title, description }
    },
    methods : {
        onSubmit(event) {
           
            axios.post("http://127.0.0.1:8000/article/post", {title : this.title, description : this.description})
                .then(res => {
                    console.log(res);
                    this.$router.push('/');
                });
        }
    }
})
</script>

<template>
    <div class="card">
        <div class="card-body">
            <form method="post" @submit.prevent="onSubmit">
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" v-model="title" required />
                </div>
                <div class="form-group mt-3">
                    <label>Description</label>
                    <textarea class="form-control" v-model="description" required></textarea>
                </div>
                <div class="form-group mt-3 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary">Post</button>
                    &nbsp;
                    <a href="/" class="btn btn-secondary">Cancel</a>
                </div>
            </form>
        </div>
    </div>
</template>