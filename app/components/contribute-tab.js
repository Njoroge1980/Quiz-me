import Ember from 'ember';

export default Ember.Component.extend({
  contributeQuestion: false,
  actions: {
    addQuestion() {
      this.set('contributeQuestion', true);
    },

    addQuestion() {
      var detail = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes'),
      };
      this.set('contributeQuestion', false);
    }


  }
});
