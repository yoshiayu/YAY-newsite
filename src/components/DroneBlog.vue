<template>
  <div class="main-content">
    <h2>{{ blogTitle }}</h2>
    <p>{{ blogContent }}</p>
  </div>
</template>

<script>
export default {
  name: 'DroneBlog',
  data() {
    return {
      blogTitle: '',
      blogContent: ''
    };
  },
  created() {
    const blogId = this.$route.params.id;
    if (blogId === '1') {
      this.blogTitle = 'ドローンの最新技術';
      this.blogContent = 'ドローンの最新技術の内容...';
    } else if (blogId === '2') {
      this.blogTitle = 'ドローンの活用事例';
      this.blogContent = 'ドローンの活用事例の内容...';
    }
  }
}
</script>
