<script>
import ArticleComment from '@/components/ArticleComment.vue';
import CommentForm from '@/components/ArticleCommentForm.vue';
import {ref} from 'vue';

export default {
    setup() {
        const id = ref(0);        
        const title = ref("");
        const description = ref("");
        let comments = ref([]);
        return {id, title, description, comments};
    },

    created() {
        // watch the params of the route to fetch the data again
        this.$watch(
        () => this.$route.params,
        () => {
            this.fetchData()
        },
        // fetch the data when the view is created and the data is
        // already being observed
        { immediate: true }
        )
    },
    
    methods : {
        
        fetchData() {
            
            fetch("http://127.0.0.1:8000/article?id=" + this.$route.params.id)
            .then(res => res.json())
            .then(data => {           
                this.id = data.id;
                this.title = data.title;
                this.description = data.description;

                this.fetchComments();
            });  
            
        },

        fetchComments() {
            fetch("http://127.0.0.1:8000/comments/" + this.id)
            .then(res => res.json())
            .then(data => {           
                this.comments = data;
            }); 
        },

        onCommentSubmitted() {
            this.fetchComments();
        }
    },

    computed : {
        commentLevelClass() {
            let className = "comment-level-" + this.level;
            return className;
        }
    },
    components : { ArticleComment, CommentForm }
}
</script>

<template>    
    <h3>{{title}}</h3>
    <p>{{description}}</p>   

    <h6>Comments</h6>

    <div class="comments">
        <ArticleComment v-for="comment in comments" :key="comment.id" :message="comment.message" :level="comment.level" />
    </div>
    
    <CommentForm :article-id="id" @comment-submitted="onCommentSubmitted" />
    
</template>


<style scoped>

.comment-level-2 {
  margin-left:2rem;
}
.comment-level-3 {
  margin-left:3rem;
}
</style>