<template>
  <section>
    <div class="chat">
      <!--       <button class="toggle-btn">
        <div class="current-users"></div>
      </button> -->
      <div class="users-container"></div>

      <section ref="messageSection" class="msg-section">
        <div
          class="income-msg"
          :class="{ myself: messages.username === user }"
          :key="index"
          v-for="(messages, index) in chatHistory"
        >
          <h4 v-if="messages.username !== user" class="income-username">
            {{ messages.username }}
          </h4>
          <p class="income-usermsg">{{ messages.msg }}</p>
        </div>
      </section>
    </div>

    <form @submit.prevent="sendMessage" class="form-container" action="">
      <div class="input-container">
        <input v-model="message" class="message" />
        <button class="btn-send" type="submit">Enviar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      message: "",
      chatHistory: [],
      user: this.$store.state.user,
    };
  },
  methods: {
    sendMessage() {
      this.$store.getters.socket.emit("benssagem", this.message);
      this.message = "";
    },
  },
  created() {
    this.$store.getters.socket.on("benssagemDoBack", (payload) => {
      this.chatHistory.push(payload);
    });
  },
  updated() {
    this.$refs["messageSection"].scroll({
      top: this.$refs["messageSection"].scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  },
  
  destroyed() {
    this.user = ''
    this.$store.getters.socket.emit('disconnect')
  }

};
</script>

<style scoped>
.chat {
  display: flex;
  height: 300px;
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

.message {
  flex: 1;
}

p {
  word-break: break-all;
}
</style>