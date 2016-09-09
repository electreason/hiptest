import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  // this.resource('features', function() {
  //   this.route('new');
  //   this.resource('feature', {path: ':feature_id'}, function(){
  //     this.route('show');
  //     this.route('edit');

  //   });
  // });



  // this.route('features', function(){
  //   this.route('new');
  //   this.route('edit', {path: ':feature_id'});


  // });

  // this.route('features-edit', {path: '/features/:feature_id'});


this.route('features', function() {
    this.route('new');
    this.route('feature', { path: ':id' }
    );
  });


});

export default Router;
