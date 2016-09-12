import Ember from 'ember';



export default Ember.Route.extend({
  model: function() {


    let myFeature = this.store.createRecord('feature', {
      name: 'feature1'
    });
    let myFeature2 = this.store.createRecord('feature', {
      name: 'feature2'
    });

    let myTest = this.store.createRecord('test', {
        name: "test1",
        status: "passed"
      });
    let myTest2 = this.store.createRecord('test', {
        name: "test2",
        status: "undefined"
      });

    myTest.set('feature', myFeature);
    myTest2.set('feature', myFeature);





    return this.store.findAll('feature');

  },




  actions: {
    createFeature(feature) {
      console.info(feature);
      let f = this.store.createRecord('feature', {
        name: feature.name
      });

    },

  }

});
