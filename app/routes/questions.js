import Ember from 'ember';

export default Ember.Route.extend({
  model(details) {
    return this.store.findRecord('questions', details.questions_id)
  },
});
