<template>
  <div class="main-content" style="background-image: url('/images/contact-bg.jpg');">
    <h2>お問い合わせ</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">名前</label>
        <input type="text" id="name" v-model="form.name" required>
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="form.email" required>
      </div>
      <div>
        <label for="message">メッセージ</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:5000/api/customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('お問い合わせを送信しました。');
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      } catch (error) {
        alert('送信中にエラーが発生しました。');
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
form div {
  margin-bottom: 10px;
  width: 100%;
  max-width: 400px;
}
form label {
  margin-bottom: 5px;
}
form input, form textarea {
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #555;
}
</style>
