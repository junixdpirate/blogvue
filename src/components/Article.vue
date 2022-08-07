<script setup>
    const props = defineProps({
        id : Number,
        title : String,
        description : String
    });
</script>

<template>
    <div>
        <RouterLink :to="{ name: 'article', params : { id : id }}">
            <h5>{{title}}</h5>
        </RouterLink> 
            
        <p>{{description}}</p>    
    </div>
</template>