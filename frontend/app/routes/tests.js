// import Ember from 'ember';


// export default Ember.Route.extend({
//   model: function() {




//     return this.store.findAll('test');

//   },




//   actions: {
//     createFeature(feature) {
//       console.info(feature);
//       let f = this.store.createRecord('feature', {
//         // id: 2,
//         name: feature.name
//       });

//     },
//     createTest(test) {
//       console.info(test);
//       let mytest = this.store.createRecord('test', {
//         // id: 2,
//         test: test.name
//       });
//       this.store.findRecord('feature', test.id).then(function(feature) {
//         mytest.set('feature', feature);
//       });

//     }
//   }

// });
