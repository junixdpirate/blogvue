<script>
import {ref} from 'vue';
import axios from 'axios';
export default ({
    props : {
        articleId : Number
    },

    setup() {
        const message = ref("");  
        return { message };
    },

    methods : {
        onSubmit(e) {
            
            const postData = {
                articleId : this.articleId,
                parentId : 0,
                level : 1,
                message : this.message
            };

            axios.post("http://127.0.0.1:8000/comment/post", postData)
                .then(res => {                    
                    this.message = "";
                    this.$emit("commentSubmitted");
                });
        }
    }
})
</script>

<template>
    <form @submit.prevent="onSubmit" class="mt-2">  
          
        <div class="input-group mb-3">
            <input v-model="message" type="text" class="form-control" placeholder="Write your comment here..." aria-label="Comment" required >
            <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Submit</button>
        </div>
    </form>
</template>