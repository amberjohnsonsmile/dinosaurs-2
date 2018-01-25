import Component from '@ember/component';

export default Component.extend({
  click() {
    this.$('.skills-container').toggleClass('hidden');
  }
});

