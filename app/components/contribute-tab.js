import Ember from 'ember';

export default Ember.Component.extend({
  contributeQuestionForm: false,
  actions: {
    contributeQuestionForm() {
      this.set('contributeQuestionForm', true);
    },

    saveQuestion(question) {
      var details = {
        question: this.get('question'),
        author: this.get('author'),
        notes: this.get('notes') ? this.get('notes') : "",
      };
      this.set('contributeQuestionForm', false);
      this.sendAction('saveQuestion', question, details);

    }

  }
});
