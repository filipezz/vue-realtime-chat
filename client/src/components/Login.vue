<template>
  <form @submit.prevent="getUsername" class="username-container">
    <div :class="{ 'has-text': !!user }" class="input">
      <label class="placeholder">Seu nome</label>
      <input v-model="user" type="text" />
    </div>
    <button type="submit">Entrar</button>
  </form>
</template>

<script>
import io from "socket.io-client";
const socket = io("http://localhost:3000/");

export default {
  name: "Login",
  data() {
    return {
      user: "",
    };
  },
  methods: {
    getUsername() {
      this.$store.commit("setUser", this.user);
      this.$router.push("/chat");

      socket.emit("username", this.user);
    },
  },
};
</script>

<style scoped>
.placeholder {
  pointer-events: none;
  position: absolute;
  z-index: 2;
  color: #80868b;
  font-size: 16px;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
}
.input {
  position: relative;
  margin-bottom: 25px;
}
.username-container {
  margin: auto;
  display: flex;
}

.input {
  position: relative;
  margin-bottom: 25px;
}

.input:focus-within .placeholder {
  transform: translateY(-210%);
  font-size: 12px;
  padding: 0 3px;
  color: #1a73e8;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0,
    rgba(255, 255, 255, 1) 43%,
    rgba(238, 238, 238, 1) 43%
  );
}

.has-text .placeholder {
  transform: translateY(-210%);
  font-size: 12px;
  padding: 0 3px;
  color: #1a73e8;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0,
    rgba(255, 255, 255, 1) 43%,
    rgba(238, 238, 238, 1) 43%
  );
}

input:focus {
  box-shadow: inset 0px 0px 0px 2px #1a73e8;
}

.placeholder {
  pointer-events: none;
  position: absolute;
  z-index: 2;
  color: #80868b;
  font-size: 16px;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
}
</style>