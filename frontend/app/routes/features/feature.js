import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    var feature = this.get('store').findRecord('feature', params.id);
    alert(feature);

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
