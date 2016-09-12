import Ember from 'ember';

export default Ember.Controller.extend({


  actions:{

    createTest(modelId) {


      let feature = this.store.peekRecord('feature', modelId);
      var testName = this.get('testName');


      let newTest = this.store.createRecord('test', {
        name: testName,
        status: 'undefined'
      });

        newTest.set('feature', feature);


    },


    changeStatus(testId, event) {


        let status = event.target.value;
        let test = this.store.peekRecord('test', testId);

        test.set('status', status);

      }
  }
});
