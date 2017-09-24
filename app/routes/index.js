import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('questions');
  },
  actions: {
    saveQuestion(details) {
      var newQuestion = this.store.createRecord('question', details);
      newQuestion.save();
      this.transitionTo('index');
    }

    // contributeQuestion() {

  }
});
