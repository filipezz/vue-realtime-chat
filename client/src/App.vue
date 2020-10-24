<template>
  <main class="main-container">
    <router-view> </router-view>
  </main>
</template>

<script>
// import io from "socket.io-client";
import Login from "./components/Login";
import Chat from "./components/Chat";

// const socket = io("http://localhost:3000/");

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Login,
    Chat,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  outline: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

::-webkit-scrollbar {
  width: 7px;
  background: #2c2c2cda;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #2c2c2c;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

body {
  background: #eee;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-container {
  display: flex;
  padding: 30px;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}

.form-container {
  bottom: 15px;
  display: none;
  width: 100%;
  justify-content: center;
  display: flex;
}

.input-container {
  width: 100%;
  padding: 30px;
  padding-top: 15px;
  display: flex;
  position: fixed;
}

.msg-section {
  overflow: auto;
  width: 100%;
  height: 100%;
}

button {
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-family: helvetica;
  padding: 13px 15px;
  border: 0;
  background: #1a73e8;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  height: 44px;
  transition: opacity 0.2s;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

input {
  margin: 0 2px;
  color: #202124;
  height: 44px;
  border-radius: 4px;
  border: 1px solid #d1d1d1;
  padding: 0 5px;
  transition: box-shadow 0.2s;
  font-size: 16px;
}


.message {
  flex: 1;
}

p {
  word-break: break-all;
}

.chat {
  display: flex;
  height: calc(100% - 45px);
  width: 100%;
  background: #fff;
  padding: 20px;
}

.income-msg {
  margin-bottom: 10px;
  border-radius: 9px;
  padding: 5px 16px;
  width: fit-content;
}

.income-username {
  margin-bottom: 7px;
}

.myself {
  background: #dcf8c6;
  margin-left: auto;
  padding: 16px;
}

.income-msg:not(.myself) {
  margin-right: auto;
  background: #eee;
}
</style>
