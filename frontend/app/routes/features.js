import Ember from 'ember';

let feats = [{
  id:1,
  name:'feature1',
  tests:[{
    id:1,
    name:'test1'
  }, {
    id:2,
    name:'test2'
  }]
},
{
  id:2,
  name:'feature2',
  tests:[{
    id:3,
    name:'test3'
  }]
}]

export default Ember.Route.extend({
  model: function() {


    let myFeature = this.store.createRecord('feature', {
      name: 'feature1'
    });
    myFeature.save();
    let myFeature2 = this.store.createRecord('feature', {
      name: 'feature2'
    });
    myFeature.save();

    let myTest = this.store.createRecord('test', {
        name: "test1",
        featureID: myFeature.id
      });
    myTest.save();
    let myTest2 = this.store.createRecord('test', {
        name: "test2",
        featureID: myFeature.id
      });
    myTest2.save();

    myTest.set('feature', myFeature);
    myTest2.set('feature', myFeature);



    console.info("DATAS", feats);

    // return feats;

    return this.store.findAll('feature');

  },




  actions: {
    createFeature(feature) {
      console.info(feature);
      let f = this.store.createRecord('feature', {
        // id: 2,
        name: feature.name
      });

    },
    createTest(test) {
      console.info(test);
      let mytest = this.store.createRecord('test', {
        // id: 2,
        test: test.name
      });
      this.store.findRecord('feature', test.id).then(function(feature) {
        mytest.set('feature', feature);
      });

    }
  }

});
