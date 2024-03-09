<template>
    <div>
        <h3 class="text-center mt-4">{{$route.params.id ? 'Edit Todo' : 'Create Todo'}}</h3>
        <div class="row d-flex justify-content-center">
            <div class="col-md-6">
                <form @submit.prevent="$route.params.id ? updateTodo() : addTodo()">
                    <div class="form-group mb-3">
                        <label>Title</label>
                        <input type="text" class="form-control" v-model="todo.title">
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <textarea class="form-control" v-model="todo.description"></textarea>
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
                todo: {}
            }
        },
        created() {
            if (this.$route.params.id) {
                this.axios
                    .get(`http://localhost:8000/api/todos/${this.$route.params.id}`)
                    .then((res) => {
                        this.todo = res.data;
                    });
            }
        },
        methods: {
            addTodo() {
                this.axios
                    .post('http://localhost:8000/api/todos', this.todo)
                    .then(response => (
                        this.$router.push({ name: 'home' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            },
            updateTodo() {
                this.axios
                    .patch(`http://localhost:8000/api/todos/${this.$route.params.id}`, this.todo)
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