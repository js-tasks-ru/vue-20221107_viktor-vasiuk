import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    getIcon() {
      return '/assets/icons/icon-' + agendaItemIcons[this.agendaItem.type] + '.svg';
    },
    getAlt() {
      return agendaItemIcons[this.agendaItem.type];
    },
    getTitle() {
      return this.agendaItem.title ? this.agendaItem.title : agendaItemDefaultTitles[this.agendaItem.type];
    },
    getTime() {
      return this.agendaItem.startsAt + ' - ' + this.agendaItem.endsAt;
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="getIcon" class="icon" :alt="getAlt" />
      </div>
      <div class="agenda-item__col">{{ getTime }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ getTitle }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
