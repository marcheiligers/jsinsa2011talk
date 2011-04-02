var Widget = window.Widget || {};

Widget.Placeholder = Class.create({
  initialize: function(element) {
    this.element = $(element);
    this.placeholder = this.element.readAttribute("placeholder");
    
    this.element
      .observe("focus", (function(e) {
        if($F(this.element) == this.placeholder) { 
          this.element.value = ''; 
        }
      }).bind(this))
      .observe("blur", (function(e) {
        if($F(this.element) == '') { 
          this.element.value = this.placeholder; 
        }
      }).bind(this));
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