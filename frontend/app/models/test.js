import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  // status: DS.attr(),
  featureID: DS.attr(),
  feature: belongsTo('feature')
});
