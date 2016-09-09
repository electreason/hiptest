import Ember from 'ember';



export default Ember.Route.extend({
  model(params) {


    //console.info("PARAMS", params.feature_id);

    // console.info("yeahh",this.store.findAll('feature'));
    // return this.store.findRecord("feature",params.id).get('test');
    // return this.store.findAll('test');

    return this.store.query('test', { featureID: params.feature_id } );
  }





});
