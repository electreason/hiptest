import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {

    console.info(params);
    let feature = this.store.peekRecord('feature', params.id);


    //console.info(tests);
    return feature;

  },



  actions: {

    createTest(test) {

      var controller = this.get('controller');
      var feature = this.modelFor('features.feature');
      var testName = controller.get('title');


      let mytest = this.store.createRecord('test', {
        // id: 2,
        name: testName,
        status: 'undefined'
      });

        mytest.set('feature', feature);


    },




  }
});
