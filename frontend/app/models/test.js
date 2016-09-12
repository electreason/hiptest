import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  status: DS.attr(),
  feature: belongsTo('feature'),

  isUndefined: Ember.computed.equal('status', 'undefined'),
  isPassed: Ember.computed.equal('status', 'passed'),
  isFailed: Ember.computed.equal('status', 'failed'),
});


