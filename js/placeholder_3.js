var Widget = window.Widget || {};

Widget.Placeholder = Class.create({
  initialize: function(element) {
    this.element = $(element);
    this.placeholder = this.element.readAttribute("placeholder");
    this.element
      .observe("focus", this.focus.bind(this))
      .observe("blur", this.blur.bind(this));
      
    this.form = this.element.up("form")
    if(this.form) {
      this.form.observe("submit", this.submit.bind(this));
    };
    this.blur();
  },
  focus: function(e) {
    if($F(this.element) == this.placeholder) { 
      this.element.value = ''; 
      this.element.removeClassName("placeholder")
    }
  },
  blur: function(e) {
    if($F(this.element) == '') { 
      this.element.value = this.placeholder; 
      this.element.addClassName("placeholder")
    }
  },
  submit: function(e) {
    if($F(this.element) == this.placeholder) { 
      this.element.value = '';
    }
  },
  destroy: function() {
    this.element.stopObserving();
    if(this.form) {
      this.form.stopObserving();
    }
  }
});

Widget.Placeholder.supported = ('placeholder' in document.createElement('input'));

if(!Widget.Placeholder.supported) {
  document.observe("dom:loaded", function(e) {
    $$("input[placeholder]").each(function(input) {
      new Widget.Placeholder(input);
    })   
  });
}