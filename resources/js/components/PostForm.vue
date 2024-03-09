<template>
    <div>
        <h3 class="text-center mt-4">{{$route.params.id ? 'Edit Post' : 'Create Post'}}</h3>
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent="$route.params.id ? updatePost() : addPost()">
                    <div class="form-group mb-3">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="post.title">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model="post.description"></textarea>
                    </div>
                    <button type="submit" class="btn btn-success mt-3">Save</button>
                    <button type="button" class="btn btn-primary ms-3 mt-3" @click="goToHome">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                post: {}
            }
        },
        created() {
            if (this.$route.params.id) {
                this.axios
                    .get(`http://localhost:8000/api/posts/${this.$route.params.id}`)
                    .then((res) => {
                        this.post = res.data;
                    });
            }
        },
        methods: {
            addPost() {
                this.axios
                    .post('http://localhost:8000/api/posts', this.post)
                    .then(response => (
                        this.$router.push({ name: 'home' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            },
            updatePost() {
                this.axios
                    .patch(`http://localhost:8000/api/posts/${this.$route.params.id}`, this.post)
                    .then((res) => {
                        this.$router.push({ name: 'home' });
                    });
            },
            goToHome() {
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>