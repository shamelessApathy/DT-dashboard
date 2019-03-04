document.addEventListener("DOMContentLoaded", function(){
	console.log('functioning properly');


	var Main = function()
	{
		this.init = function()
		{
			this.addWidget = $(".add-widget");
			this.useDemo = $(".use-demo");
			this.instance = $(".grid-stack");
			this.choices = $(".widget-choices");
			this.submitChoices = $("#submit-new-widget");
			this.addListeners();
		}
		this.showChoices = function()
		{
			console.log("inside show choices");
			$(".widget-choices").removeClass("hidden");
		}
		this.newWidget = function()
		{
			console.log("newWidget being called");
			var dropdown = $("#widget-type");

			// get selection of dropdown
			var selection = $(dropdown).val();

			this.widgetFactory(selection);
			
		}.bind(this)
		this.addListeners = function()
		{
			$(this.addWidget).on("click", this.showChoices);

			$(this.useDemo).on("click", function(){
				console.log("click use demo");
			});
			$(this.submitChoices).on("click", this.newWidget);
		}
		this.widget = function(params)
		{
			this.x = params.x;
			this.y = params.y;
			this.gsWidth = params.gsWidth;
			this.gsHeight = params.gsHeight;
			this.interalGsHeight = params.gsHeight - 1;
			this.internalGsWidth = params.gsWidth - 1;
		}
		this.widgetFactory = function(widgetType)
		{	
			var widget;
			console.log("inside widgetFactory");
			switch (widgetType)
			{
				case "blank" : var params = {"x":0,"y":50,"gsWidth":4, "gsHeight":2};
								widget = new this.widget(params);
								break;
				case "gauge" : console.log("hitting gauge part of switch statement"); var params = {"x": 50, "y": 100, "gsWidth":2, "gsHeight":2};
								widget = new this.widget(params);
								break;
				case "graph" : var params = {"x": 0, "y" : 200, "gsWidth":4, "gsHeight":2};
								widget = new this.widget(params);
								break;
				default      : console.log("hit default in switch");
								break;
			}
			console.log(this.instance);
			var widgetType = widgetType;

			var containerNode = $('<div></div>');
			$(containerNode)
			.addClass("grid-stack-item ui-draggable ui-resizable ui-resizable-autohide")
			.attr("style","border:1px solid black; padding:5px;")
			.attr("data-gs-x", widget.x)
			.attr("data-gs-y", widget.y)
			.attr("data-gs-height", widget.gsHeight)
			.attr("data-gs-width", widget.gsWidth);
				
			
			var contentNode = $('<div></div>');
			$(contentNode)
				.addClass("grid-stack-item-content ui-draggable-handle")
				.attr("data-gs-height", widget.internalGsHeight)
				.attr("data-gs-width", widget.interalGsWidth)
				.attr("data-gs-y", 25)
				.attr("style","border:1px solid red; height:100px; top:25px;");

				// Prepend a Title bar to contentNode here
			var titleBar = $('<div></div>');
			$(titleBar)
			.addClass("custom-title-bar")
			.attr("style","width:100%")
			.attr("style","height:20px")
			.attr("style","border:1px solid yellow; height:20px; width:100%;");
			$(titleBar).appendTo(containerNode);
			$('.grid-stack').gridstack();

			$(contentNode).appendTo(containerNode);
			var grid = $('.grid-stack').data('gridstack');
			// replace this.instance with an element you've created before hand
			grid.addWidget(containerNode, 10,10,2,2,true);	

		}.bind(this)
		this.init();
	}
	var newOne = new Main();
});

