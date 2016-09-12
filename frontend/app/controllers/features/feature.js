import Ember from 'ember';

export default Ember.Controller.extend({


  actions:{
    changeStatus(testId, event) {


        let status = event.target.value;
        let test = this.store.peekRecord('test', testId);

        test.set('status', status);

      }
  }
});
