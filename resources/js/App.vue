<template>
    <div class="container-fluid"> 
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link text-light">Todo List</router-link>
                    <router-link to="/create" class="nav-item nav-link text-light">Create Todo</router-link>
                </div>
            </div>
        </nav>
        <router-view> </router-view>
    </div>
</template>
 
<script>
    export default {}
</script>