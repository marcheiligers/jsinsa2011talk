Widget.DelayedInput = Class.create(Widget.Placeholder, {
  initialize: function($super, element, options) {
    $super(element);
    this.options = Object.extend({
      delay: 0.6
    });
    this.element.observe("keypress", this.keypress.bind(this));
  },
  keypress: function(e) {
    if(this.timeout) clearTimeout(this.timeout);
    if(e.which == 13) return this.elapsed();
    this.timeout = this.elapsed.bind(this).delay(0.5);
  },
  elapsed: function() {
    this.element.fire("input:elapsed", { source: this, value: $F(this.element) });
    delete this.timeout;
  }
});