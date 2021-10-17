<template>
  <b-container fluid>
    <b-row align-v="center" class="mb-5">
      <Banner title="Contact us" />
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-form @submit="sendMessage" v-if="creatingMessage">
          <b-row class="mb-1">
            <b-col sm="2">
              <label for="name">Your Name:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input id="name" v-model="message.name" required></b-form-input>
            </b-col>
          </b-row>
          <b-row class="mb-1">
            <b-col sm="2">
              <label for="email">Your Email:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input id="name" type="email" v-model="message.email" required></b-form-input>
            </b-col>
          </b-row>
          <b-row class="mb-5">
            <b-col sm="2">
              <label for="messageText">Your Message:</label>
            </b-col>
            <b-col sm="10">
              <b-form-textarea
                id="messageText"
                v-model="message.message"
                rows="10"
                required
              ></b-form-textarea>
            </b-col>
          </b-row>
          <div class="buttonRow">
            <b-button type="submit" variant="primary">Send Message</b-button>
          </div>
        </b-form>
        <b-row v-if="!creatingMessage">
          <p>
            Thank you for messaging The Walking Club. A member of the committee will be in contact shortly to
            discuss you message.
          </p>
        </b-row>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Banner from '@/components/common/Banner.vue';
import DataService from '../services/data-service';
import EmailService from '../services/email-service';

export default {
  name: 'ContactUs',
  data() {
    return {
      creatingMessage: true,
      message: {}
    };
  },
  methods: {
    async sendMessage(e) {
      e.preventDefault();
      let success = await EmailService.sendEmail(this.message);
      if (success) {
        success = await DataService.sendMessage(this.message);
      }

      this.creatingMessage = !success;
    }
  },
  components: {
    Banner
  }
};
</script>

<style scoped>
.buttonRow {
  margin-top: 2;
  text-align: center;
}
</style>
