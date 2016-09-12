import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {

    console.info(params);
    let feature = this.store.peekRecord('feature', params.id);


    return feature;

  },




});
