const App = {
  data(){
    return {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  },
  methods: {
    prevMonth() {
      if(this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    nextMonth() {
      if(this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    currentDateClass(currentDay) {
      var isToday = new Date(this.currentYear, this.currentMonth, currentDay).toDateString() === new Date().toDateString();
      return isToday ? 'font-bold text-red-500' : '';
    }
  },
  computed: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate()
    },
    startDayOfMonth(){
      return new Date(this.currentYear, this.currentMonth, 1).getDay()
    },
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleDateString('default', { month: 'long' });
    }
  },
  template: `
    <div class="h-screen w-full bg-gray-200 flex items-center justify-center">
      <div class="w-1/3 px-4 py-10 rounded-lg shadow-lg flex flex-col items-center bg-white">
        <div class="mb-4 w-full flex items-center">
          <div class="ml-6 flex-1 font-bold text-pink-600">
            {{currentMonthName}} - {{currentYear}}
          </div>
          <div>
            <button class="bg-gradient-to-r from-red-500 to-pink-500 px-2 py-1 rounded text-white text-sm focus:outline-none focus:ring" @click="prevMonth">Prev</button>
            <button class="ml-2 mr-6 bg-gradient-to-r from-red-500 to-pink-500 px-2 py-1 rounded text-white text-sm focus:outline-none focus:ring" @click="nextMonth">Next</button>
          </div>
        </div>
        <div class="w-full">
          <div class="flex mb-4">
            <div class="flex items-center justify-center h-8 font-semibold text-gray-500" style="width: 14.28%" v-for="day in days" :key="day">{{day}}</div>
          </div>
          <div class="flex flex-wrap">
            <div class="flex items-center justify-center h-8" style="width: 14.28%" v-for="day in startDayOfMonth" :key="day"></div>
            <div
              class="flex items-center justify-center h-8" \
              style="width: 14.28%"
              v-for="day in daysInMonth"
              :key="day"
              :class="currentDateClass(day)">{{day}}</div>
          </div>
        </div>
      </div>
    </div>
  `
};

Vue.createApp(App).mount('#app');