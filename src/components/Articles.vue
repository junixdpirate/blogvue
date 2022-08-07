<script>
import Article from '@/components/Article.vue';
import ArticleEmpty from '@/components/ArticleNoPost.vue';
import {ref} from 'vue';
export default {
    setup() {             
        const posts = ref([]);  
        let hasLoaded = false;
        let hasArticles = false;           
        return {posts, hasArticles, hasLoaded};
    },    
    mounted() {
      
        fetch("http://127.0.0.1:8000/articles")
        .then(res => res.json())
        .then(data => {           
            this.posts = data;
            this.hasArticles = this.posts.length > 0;
            this.hasLoaded = true;
        });        
    },
    components : { Article, ArticleEmpty}
}
</script>

<template>
    
    <Article v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :description="post.description" />   
    
    <ArticleEmpty v-if="!hasArticles && hasLoaded" />
</template>