<template>
  <div>

    <!-- <div v-bind:class="divClass">hello</div> -->
    <h1>test</h1>
    <a v-bind:href="'http://www.google.com'" v-on:click.prevent="alertHello">google</a>
    <form v-bind:id="myform" v-bind:method="GET">
      <input type="text">
      <input type="submit" placeholder="submit">
    </form>
    <!-- <datepicker 
      v-bind:language="en" 
      v-bind:placeholder="Date of birth" 
      v-bind:input-class="{'datepicker-input-reg': true, 'is-invalid-input': errors.has('event_date')}" 
      v-bind:min="2000-01-01"  
      v-bind:max="2010-12-31" 
      v-bind:data-vv-as="Please enter your birthdate" 
      v-model="event_date" 
      v-bind:v-validate="{required: true, date_format: 'YYYY-MM-DD'}" 
      name="event_date" id="event_date" 
      @change="saveChanges">
</datepicker> -->
<!-- <span 
    class="form-error" 
    :class="{'is-visible': errors.has('event_date')}">{{ errors.first('event_date') }}
</span> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      isHidden: false,
      hasError: false,
    }
  },
  methods : {
    alertHello: function() {
      alert('hello')
    }
    // change: function(){
    //   this.
    // }
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
