<template>
  <div class="main-content" style="background-image: url('/images/home-bg.jpg');">
    <h2>ようこそ、合同会社YAYへ</h2>
    <p>私たちは最新技術を駆使し、クライアントのビジネス成長を支援するITおよびドローン事業を展開しています。</p>
    <p>私たちのサービスについてもっと知りたい場合は、各セクションをご覧ください。</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.main-content {
  background-color: rgba(255, 255, 255, 0.9); /* ホワイト */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Lato', sans-serif;
}
h2 {
  font-family: 'Montserrat', sans-serif; /* タイトル用フォント */
  font-weight: bold;
  color: #1e90ff; /* 明るいブルー */
}
p {
  color: #333;
}
</style>
