(function($){
	var el, widget, elems, btn;

	module("html", {
		setup: function() {
			el = $("select").multiselect();
			widget = el.multiselect("widget");
            btn = el.multiselect("getButton");
		}
	});

	test("pull in optgroup's class", function(){
		expect(5);

		elems = widget.find('.ui-multiselect-optgroup-label');
		equals( elems.length, 3, 'There are three labels' );

		elems.filter(":not(:last)").each( function() {
			equals($(this).hasClass('ui-multiselect-optgroup-label'),true,'Default class is present when no extra class is defined');
		});
		elems.filter(":last").each( function() {
			equals($(this).hasClass('ui-multiselect-optgroup-label'),true,'Default class is present when extra class is defined');
			equals($(this).hasClass('optgroupClass'),true,'Extra class is present');
		});

	});

	test("pull in options's class", function(){
		expect(1);

		equals(widget.find('input[value="9"]').parents('li:first').hasClass('optionClass'),true,'Extra class is present');
	});
    
    test("pull in select's ID and adds _ms", function(){
        expect(1);
        equals(btn.attr("id"), el.attr("id") + "_ms", "Id is taken from select and _ms is appended");
    });

})(jQuery);
