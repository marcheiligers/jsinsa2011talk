!SLIDE bullets
# Some tips: Element Extensions #
* Element.display
  * Work around Prototype's Element.show
  <code class="textmate-source twilight">
    <span class='linenum'>   80</span>   <span class="meta meta_function meta_function_json meta_function_json_js"><span class="entity entity_name entity_name_function entity_name_function_js">display</span>: <span class="storage storage_type storage_type_function storage_type_function_js">function</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_begin punctuation_definition_parameters_begin_js">(</span><span class="variable variable_parameter variable_parameter_function variable_parameter_function_js">element, style</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_end punctuation_definition_parameters_end_js">)</span></span> <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">{</span>
    <span class='linenum'>   81</span>     <span class="keyword keyword_control keyword_control_js">return</span> <span class="keyword keyword_operator keyword_operator_js">$</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span>element<span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span><span class="meta meta_delimiter meta_delimiter_method meta_delimiter_method_period meta_delimiter_method_period_js">.</span>setStyle<span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span>
    <span class='linenum'>     </span>     <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">{</span> display: style <span class="keyword keyword_operator keyword_operator_js">||</span> <span class="string string_quoted string_quoted_double string_quoted_double_js"><span class="punctuation punctuation_definition punctuation_definition_string punctuation_definition_string_begin punctuation_definition_string_begin_js">"</span>block<span class="punctuation punctuation_definition punctuation_definition_string punctuation_definition_string_end punctuation_definition_string_end_js">"</span></span> <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">}</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>   82</span>   <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">}</span><span class="meta meta_delimiter meta_delimiter_object meta_delimiter_object_comma meta_delimiter_object_comma_js">,</span>
  </code>
  
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Element Extensions #
* Element.getText
  * No standard way of getting innerText
  <code class="textmate-source twilight">
    <span class='linenum'>  108</span>   <span class="meta meta_function meta_function_json meta_function_json_js"><span class="entity entity_name entity_name_function entity_name_function_js">getText</span>: <span class="storage storage_type storage_type_function storage_type_function_js">function</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_begin punctuation_definition_parameters_begin_js">(</span><span class="variable variable_parameter variable_parameter_function variable_parameter_function_js">element</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_end punctuation_definition_parameters_end_js">)</span></span> <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">{</span>
    <span class='linenum'>  109</span>     <span class="keyword keyword_control keyword_control_js">return</span> element<span class="meta meta_delimiter meta_delimiter_method meta_delimiter_method_period meta_delimiter_method_period_js">.</span>innerText <span class="keyword keyword_operator keyword_operator_js">||</span> element<span class="meta meta_delimiter meta_delimiter_method meta_delimiter_method_period meta_delimiter_method_period_js">.</span>textContent<span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>  110</span>   <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">}</span><span class="meta meta_delimiter meta_delimiter_object meta_delimiter_object_comma meta_delimiter_object_comma_js">,</span>
  </code>
  * Warning: innerText and textContent may differ
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Other Extensions #
* Number.px
  * Handy for setting widths and heights
  <code class="textmate-source twilight">
    <span class='linenum'>    1</span> <span class="source source_js"><span class="meta meta_function meta_function_prototype meta_function_prototype_js"><span class="support support_class support_class_js">Number</span>.<span class="support support_constant support_constant_js">prototype</span>.<span class="entity entity_name entity_name_function entity_name_function_js">px</span> <span class="keyword keyword_operator keyword_operator_js">=</span> <span class="storage storage_type storage_type_function storage_type_function_js">function</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_begin punctuation_definition_parameters_begin_js">(</span><span class="variable variable_parameter variable_parameter_function variable_parameter_function_js">allowNegatives</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_end punctuation_definition_parameters_end_js">)</span></span><span class="meta meta_brace meta_brace_curly meta_brace_curly_js">{</span></span>
    <span class='linenum'>    2</span>   <span class="keyword keyword_control keyword_control_js">if</span> <span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span>allowNegatives<span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span> <span class="keyword keyword_control keyword_control_js">return</span> <span class="support support_class support_class_js">Math</span><span class="meta meta_delimiter meta_delimiter_method meta_delimiter_method_period meta_delimiter_method_period_js">.</span><span class="support support_function support_function_js">floor</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span><span class="variable variable_language variable_language_js">this</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span> <span class="keyword keyword_operator keyword_operator_js">+</span> <span class="string string_quoted string_quoted_double string_quoted_double_js"><span class="punctuation punctuation_definition punctuation_definition_string punctuation_definition_string_begin punctuation_definition_string_begin_js">"</span>px<span class="punctuation punctuation_definition punctuation_definition_string punctuation_definition_string_end punctuation_definition_string_end_js">"</span></span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>    3</span>   <span class="keyword keyword_control keyword_control_js">return</span> <span class="support support_class support_class_js">Math</span><span class="meta meta_delimiter meta_delimiter_method meta_delimiter_method_period meta_delimiter_method_period_js">.</span><span class="support support_function support_function_js">max</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span><span class="support support_class support_class_js">Math</span><span class="meta meta_delimiter meta_delimiter_method meta_delimiter_method_period meta_delimiter_method_period_js">.</span><span class="support support_function support_function_js">floor</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span><span class="variable variable_language variable_language_js">this</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span><span class="meta meta_delimiter meta_delimiter_object meta_delimiter_object_comma meta_delimiter_object_comma_js">, </span><span class="constant constant_numeric constant_numeric_js">0</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span> <span class="keyword keyword_operator keyword_operator_js">+</span> <span class="string string_quoted string_quoted_double string_quoted_double_js"><span class="punctuation punctuation_definition punctuation_definition_string punctuation_definition_string_begin punctuation_definition_string_begin_js">"</span>px<span class="punctuation punctuation_definition punctuation_definition_string punctuation_definition_string_end punctuation_definition_string_end_js">"</span></span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>    4</span> <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">}</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
  </code>
  
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Other Extensions #
* Class.singleton
  * Useful for controller type classes
  <code class="textmate-source twilight">
    <span class='linenum'>    7</span> <span class="meta meta_function meta_function_js"><span class="support support_class support_class_js">Class.Methods</span>.<span class="entity entity_name entity_name_function entity_name_function_js">singleton</span> <span class="keyword keyword_operator keyword_operator_js">=</span> <span class="storage storage_type storage_type_function storage_type_function_js">function</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_begin punctuation_definition_parameters_begin_js">(</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_end punctuation_definition_parameters_end_js">)</span></span> <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">{</span>
    <span class='linenum'>    8</span>   <span class="storage storage_type storage_type_js">var</span> instance <span class="keyword keyword_operator keyword_operator_js">=</span> <span class="constant constant_language constant_language_null constant_language_null_js">null</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>    9</span>   <span class="storage storage_type storage_type_js">var</span> Singleton <span class="keyword keyword_operator keyword_operator_js">=</span> Class<span class="meta meta_delimiter meta_delimiter_method meta_delimiter_method_period meta_delimiter_method_period_js">.</span>create<span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span><span class="variable variable_language variable_language_js">this</span><span class="meta meta_delimiter meta_delimiter_object meta_delimiter_object_comma meta_delimiter_object_comma_js">, </span><span class="meta meta_brace meta_brace_curly meta_brace_curly_js">{</span>
    <span class='linenum'>   10</span>     <span class="meta meta_function meta_function_json meta_function_json_js"><span class="entity entity_name entity_name_function entity_name_function_js">initialize</span>: <span class="storage storage_type storage_type_function storage_type_function_js">function</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_begin punctuation_definition_parameters_begin_js">(</span><span class="variable variable_parameter variable_parameter_function variable_parameter_function_js">$super</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_end punctuation_definition_parameters_end_js">)</span></span> <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">{</span>
    <span class='linenum'>   11</span>       <span class="keyword keyword_control keyword_control_js">if</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span>instance<span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span> <span class="keyword keyword_control keyword_control_js">throw</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">(</span><span class="string string_quoted string_quoted_double string_quoted_double_js"><span class="punctuation punctuation_definition punctuation_definition_string punctuation_definition_string_begin punctuation_definition_string_begin_js">"</span>new called on a Singleton<span class="punctuation punctuation_definition punctuation_definition_string punctuation_definition_string_end punctuation_definition_string_end_js">"</span></span><span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>   12</span>       instance <span class="keyword keyword_operator keyword_operator_js">=</span> <span class="variable variable_language variable_language_js">this</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>   13</span>       <span class="keyword keyword_operator keyword_operator_js">$</span><span class="variable variable_language variable_language_js">super</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">()</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>   14</span>     <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">}</span>
    <span class='linenum'>   15</span>   <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">}</span><span class="meta meta_brace meta_brace_round meta_brace_round_js">)</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>   16</span>   <span class="meta meta_function meta_function_js"><span class="support support_class support_class_js">Singleton</span>.<span class="entity entity_name entity_name_function entity_name_function_js">get</span> <span class="keyword keyword_operator keyword_operator_js">=</span> <span class="storage storage_type storage_type_function storage_type_function_js">function</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_begin punctuation_definition_parameters_begin_js">(</span><span class="punctuation punctuation_definition punctuation_definition_parameters punctuation_definition_parameters_end punctuation_definition_parameters_end_js">)</span></span> 
    <span class='linenum'>     </span>   <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">{</span> <span class="keyword keyword_control keyword_control_js">return</span> instance <span class="keyword keyword_operator keyword_operator_js">||</span> <span class="meta meta_class meta_class_instance meta_class_instance_constructor"><span class="keyword keyword_operator keyword_operator_new keyword_operator_new_js">new</span> <span class="entity entity_name entity_name_type entity_name_type_instance entity_name_type_instance_js">Singleton</span></span><span class="meta meta_brace meta_brace_round meta_brace_round_js">()</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span> <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">}</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>   17</span>   <span class="keyword keyword_control keyword_control_js">return</span> Singleton<span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
    <span class='linenum'>   18</span> <span class="meta meta_brace meta_brace_curly meta_brace_curly_js">}</span><span class="punctuation punctuation_terminator punctuation_terminator_statement punctuation_terminator_statement_js">;</span>
  </code>
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Filesizes #
* Keep files small
  * Try to stay under 100 lines
* Goes for methods too
  * Try to stay under 7-12 lines
  * DRY
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Packaging #
* Package files for production
  * Sprockets merges 
  * Uglify.js minifies
* Still ensure you have GZip
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Custom events #
* Prevent tight coupling
* Make it easier to extend
* Allow cancellation of events
  * Use "mywidget:before:change"
  * Allow canceling
  * eg. Modal dialog
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Styling #
* Use CSS classes
  * Designer doesn't have to dig in the JS
* Recommend SASS
  * DRY up your CSS
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Testing #
* Can be hard with visual widgets
  * But you can test many of the methods
* Makes it easier to refactor
  * without regressions
* QUnit is popular
  * [http://msdn.microsoft.com/en-us/scriptjunkie/gg749824.aspx?utm_source=javascriptweekly&utm_medium=email](http://msdn.microsoft.com/en-us/scriptjunkie/gg749824.aspx?utm_source=javascriptweekly&utm_medium=email)
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Some tips: Documentation #
* If you expect others to use it
  * write good docs
* I used JSDoc
* PDoc
  * Used by Prototype.js
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>

!SLIDE bullets
# Questions? #
* Marc Heiligers
  * @marcheiligers
<div id='head'><span>JS in SA Conference 2011</span>www.JSinSA.com</div>
