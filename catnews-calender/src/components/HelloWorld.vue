<template>
  <div>

    <!-- <div v-bind:class="divClass">hello</div> -->
    <h1> name: {{ fullName }}</h1>
    <input type="text" v-model="newName" v-on:keyup.enter="changeName()">
    <button v-on:click="alertTest()">test</button>
    <!-- <datepicker 
      v-bind:language="en" 
      v-bind:placeholder="'Date of birth'" 
      v-bind:input-class="{'datepicker-input-reg': true, 'is-invalid-input': errors.has('event_date')}" 
      v-bind:min="'2000-01-01'"  
      v-bind:max="'2010-12-31'" 
      v-bind:data-vv-as="'Please enter your birthdate'" 
      v-model="'event_date'" 
      v-bind:v-validate="{required: true, date_format: 'YYYY-MM-DD'}" 
      name="event_date" id="event_date" 
      @change="saveChanges">
</datepicker>
<span 
    class="'form-error'" 
    :class="{'is-visible': errors.has('event_date')}">{{ errors.first('event_date') }}
</span> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'hello world',
      firstName: 'seul',
      lastName: 'kim',
      newName: ''
    }
  },
  methods: {
    changeName: function() {
      this.fullName = this.newName
    },
    alertTest: function() {
      alert('test')
    }
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.highlight {
  background-color: blue;
}
.text-danger{
  color: red;
}
.hide {
  display: none;
}
</style>
