
<template>
    <div class="wrapper">
        <div class="d-flex justify-content-between">
            <h1>Blog App</h1>
            <nav class="pt-3">
                <RouterLink to="/">Articles</RouterLink>
                &nbsp;&middot;&nbsp;
                <RouterLink to="/post">Post Article</RouterLink>
            </nav>
        </div>

        
    </div>

    <div class="mt-4">
        <RouterView />
    </div>
</template>