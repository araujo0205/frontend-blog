<template>
<div>
  <div class="month">      
    <ul>
      <li class="prev" v-on:click="decMonth()">&#10094;</li>
      <li class="next" v-on:click="incMonth()">&#10095;</li>
      <li>
        {{months[month-1]}} de <span style="font-size:18px">{{year}}</span>
      </li>
    </ul>
  </div>

<div class="days">
  <div class="day" v-for="day in daysWeeks">
    <div class="day-name">{{day}}</div>
  </div>
  <div class="week" v-for="(week, index) in days">
    <div v-bind:class="day.location" class="day" v-for="day in week">
      <span v-bind:id="day.day" v-bind:class="{'eventday': haveEvents(day)}" v-on:click="toggleEvents($event)"> {{day.day}} </span>
    </div>
    <div class="events">
    </div>
  </div>

</div>
</div>
</template>
<script>
export default {
  name: 'Calendar',
  data () {
    return {
      month: 11,
      year: 2017,
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      daysWeeks: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      events: []
    }
  },
  created: function () {
    var axios = require('axios');

    this.$root.$Progress.start();
    axios.get(`${this.$root.apiUrl}/articlesdate?month=${this.month}&year=${this.year}`).then(response => {
      this.events = response.data;

      this.$root.$Progress.finish();
    })
    .catch(e => {
      this.errors.push(e);
      this.$Progress.fail();
    });
  },
  watch: {
    month: function (newMonth) {
      this.events = [];
      var axios = require('axios');

      this.$root.$Progress.start();
      axios.get(`${this.$root.apiUrl}/articlesdate?month=${newMonth}&year=${this.year}`).then(response => {
        this.events = response.data;

        this.$root.$Progress.finish();
      })
      .catch(e => {
        this.errors.push(e);
        this.$Progress.fail();
      });      
    }
  },
  computed: {
    daysBefore: function() {
      var days = [];
      for (var i = 0; i < this.firstDayInWeek; i++) {
        days.unshift(new Date(this.year, this.month-1, -i).getDate());
      }
      return days;
    },
    daysInMonth: function() {
      return new Date(this.year, this.month, 0).getDate();
    },
    daysAfter: function() {
      return 6-this.lastDayInWeek;
    },
    firstDayInWeek: function() {
      return new Date(this.year, this.month-1, 1).getDay();
    },
    lastDayInWeek: function() {
      return new Date(this.year, this.month, 0).getDay();
    },
    days: function() {
      var days = [];
      //Days for before month
      this.daysBefore.forEach(function(daynumber) {
        var day = {
          day: daynumber,
          location: 'out'
        };
        days.push(day);
      });

      //Days for this month
      for (var i = 1; i <= this.daysInMonth; i++) {
        var day = {
          day: i,
          location: 'in'
        }
        days.push(day);
      }

      //days for next month
      for (var i = 1; i <= this.daysAfter; i++) {
        var day = {
          day: i,
          location: 'out'
        }
        days.push(day);
      }
      
      var daysWeeks = [];

      while(days.length > 0) {
        var temp = [];
        for (var i = 0; i < 7; i++) {
          var daytemp = days.shift();
          var day = {
              day: daytemp.day,
              location: daytemp.location,
              week: this.daysWeeks[i]
          };

          if(daytemp.location == "in") {
            day.events = this.events.reduce(function (events, event) {
              if (event.day == daytemp.day) {
                return events.concat(event.title);
              } else {
                return events;
              }
            }, []);
          }
            
          temp.push(day);
        }

        daysWeeks.push(temp);
      }
      return daysWeeks;
    }
  },
  methods: {
    dayInWeek: function(year, month, day) {
      return new Date(this.year, month, day).getDay();
    },
    haveEvents: function(day) {
      if(day.location == "in")
        return day.events.length > 0;
      return false;
    },
    incMonth: function() {
      if(this.month  == 12) {
        this.month = 1;
        this.year++;
      }
      else
        this.month++;
      this.hideEvents();
    },
    decMonth: function() {
      if(this.month  == 1) {
        this.month = 12;
        this.year--;
      }
      else
        this.month--;
      this.hideEvents();
    },
    hideEvents: function () {
      var events = document.getElementsByClassName("events");
      //console.log(event);
      for(var i = 0; i < events.length; i++)
        events[i].style.display = 'none';
    },
    toggleEvents: function(object) {
      var eventsdiv = object.currentTarget.parentNode.parentNode.lastChild;
      if(eventsdiv.style.display != 'block' ) {
        var events = this.events.reduce(function (events, event) {
              if (event.day == object.currentTarget.id) {
                return events.concat(event.title);
              } else {
                return events;
              }
            }, []);

        var html = "<ul>";
        events.forEach(function(event) {
          html += "<li>" + event +"</li>";  
        });

        eventsdiv.innerHTML = html;

        eventsdiv.style.display = 'block';
      }
      else
        eventsdiv.style.display = 'none';
    }
  }
}
</script>
<style>

.month {
    padding-top: 10pt;
    padding-bottom: 10pt;
    width: 100%;
    background: #073642;
    text-align: center;
}

.month ul {
    margin: 0;
    padding: 0;
}

.month ul li {
    color: #2aa198;
    font-size: 20px;
    letter-spacing: 3px;
}

.month .next, .month .prev {
      padding-top: 10px;
      line-height: 0px;
      width: 50px;
}

.month .prev {
    float: left;
}

.month .next {
    float: right;
}

.weekdays {
	height: 50px;
	background: rgba(66, 66, 66, 1);
	text-align: center;
	position: relative;
	z-index: 100;
}

.day {
	display: inline-block;
	width: 13%;
	margin-left: 2px;
  margin-right: 2px;
  margin-top: 10px;
	text-align: center;
	vertical-align: top;
	position: relative;
	z-index: 100;
}

.day-name {
	font-size: 9px;
	text-transform: uppercase;
	margin-bottom: 5px;
	letter-spacing: .2px;
}

.out {
  color: gray;
}

.eventday {
  color: red;
  cursor: pointer;
}
.events {
  display: none;
  text-align: center;
}
.events li {
  margin: 3px;
}
</style>
