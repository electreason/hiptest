import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    parent = this.modelFor("feature");
    parent.get("tests").then(function(tests){
      return this.store.find("test");
    });
  },

  afterModel(params) {
    //console.info(params);
    //let featureName = this.modelFor('features.feature').get('name');
    //let testlist = this.store.query('test', { featureID: params.id } );
    // Ember.$(document).attr('title', featureName + ' songs - Rock & Roll');
  },

  resetController(controller) {
    controller.setProperties({
      newTitle: '',
      songCreationStarted: false
    });
  },

  actions: {
    createSong() {
      let controller = this.get('controller'),
          band = controller.get('model');

      let song = this.store.createRecord('song', {
        title: controller.get('newTitle'),
        band: band
      });
      song.save().then(function() {
        controller.set('newTitle', '');
      })
      ['catch'](function(error) {
        console.error(error);
      });
    },

    setRating(params) {
      let { item: song, rating } = params;

      if (song.get('rating') === rating) {
        rating = null;
      }
      song.set('rating', rating);
      return song.save();
    }
  }
});
