import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {



this.route('features', function() {
    this.route('new');
    this.route('feature', { path: ':id' });
  });


});

export default Router;
