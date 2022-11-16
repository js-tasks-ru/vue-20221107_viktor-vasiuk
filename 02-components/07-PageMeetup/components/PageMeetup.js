import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from './MeetupView.js';
import { fetchMeetupById } from '../meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  props: {
    meetupId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      meetup: null,
      loaded: false,
      error: false,
      message: null,
    };
  },

  watch: {
    meetupId(id) {
      this.getMeetup(id);
    },
  },

  mounted() {
    this.getMeetup(this.meetupId);
  },

  methods: {
    getMeetup(id) {
      this.loaded = false;
      this.error = false;
      this.message = null;
      fetchMeetupById(id)
        .then((meetup) => {
          this.meetup = meetup;
          this.loaded = true;
          this.error = false;
        })
        .catch((message) => {
          this.message = message.message;
          this.loaded = true;
          this.error = true;
        });
    },
  },

  template: `
    <div class="page-meetup">
      <template v-if="loaded && !error">
        <MeetupView :meetup="meetup"/>
      </template>

      <UiContainer v-if="!loaded">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="error">
        <UiAlert>{{ message }}</UiAlert>
      </UiContainer>
    </div>`,
});
