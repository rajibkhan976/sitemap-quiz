<template>
    <div>
        <h2 class="text-center mt-4">Post List</h2>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.description }}</td>
                <td>
                    <div class="d-block">
                        <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-warning">Edit</router-link>
                        <button class="btn btn-danger ms-3" @click="deletePost(post.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/posts/')
                .then(response => {
                    this.posts = response.data;
                });
        },
        methods: {
            deletePost(id) {
                const confirmation = prompt('Are you sure?', 'Yes');
                if (confirmation?.trim()?.toLowerCase() === 'yes' || confirmation?.trim()?.toLowerCase() === 'y') {
                    this.axios
                    .delete(`http://localhost:8000/api/posts/${id}`)
                    .then(response => {
                        let i = this.posts.map(data => data.id).indexOf(id);
                        this.posts.splice(i, 1)
                    });
                }
            }
        }
    }
</script>