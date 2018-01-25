import Component from '@ember/component';

export default Component.extend({
  tagName: 'li',
  click() {
    this.$('.skills-container').toggleClass('hidden');
  }
});

