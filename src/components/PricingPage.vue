<template>
  <div class="main-content" style="background-image: url('/images/pricing-bg.jpg');">
    <h2>価格表</h2>
    <table>
      <thead>
        <tr>
          <th>サービス</th>
          <th>料金</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>システム開発</td>
          <td>¥500,000〜</td>
        </tr>
        <tr>
          <td>ウェブサイト制作</td>
          <td>¥300,000〜</td>
        </tr>
        <tr>
          <td>モバイルアプリ開発</td>
          <td>¥400,000〜</td>
        </tr>
        <tr>
          <td>ITコンサルティング</td>
          <td>¥200,000〜</td>
        </tr>
        <tr>
          <td>空撮サービス</td>
          <td>¥150,000〜</td>
        </tr>
        <tr>
          <td>測量サービス</td>
          <td>¥250,000〜</td>
        </tr>
        <tr>
          <td>点検サービス</td>
          <td>¥200,000〜</td>
        </tr>
        <tr>
          <td>農業支援</td>
          <td>¥180,000〜</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PricingPage'
}
</script>

<style scoped>
.main-content {
  background-color: rgba(255, 255, 255, 0.9); /* ホワイト */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Lato', sans-serif;
}
h2 {
  font-family: 'Montserrat', sans-serif; /* タイトル用フォント */
  font-weight: bold;
  color: #1e90ff; /* 明るいブルー */
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
thead {
  background-color: #1e90ff; /* 明るいブルー */
  color: #fff;
}
tbody tr:hover {
  background-color: #f5f5f5;
}
</style>
