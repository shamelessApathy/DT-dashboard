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
			this.closeArray = document.getElementsByClassName('close-button');
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
				case "gauge" : console.log("hitting gauge part of switch statement"); 
								var params = {"x": 50, "y": 100, "gsWidth":4, "gsHeight":4};
								widget = new this.widget(params);
								break;
				case "graph" : 	console.log("inside graph switch case");	
								var params = {"x": 0, "y" :0, "gsWidth":25, "gsHeight":5};
								widget = new this.widget(params);
								break;
				default      : console.log("hit default in switch");
								break;
			}
			var widgetType = widgetType;
			console.log(widget);
			var containerNode = $('<div></div>');
			$(containerNode)
			.addClass("grid-stack-item ui-draggable ui-resizable ui-resizable-autohide")
			.attr("style","border:1px solid black;")
			.attr("data-gs-x", widget.x)
			.attr("data-gs-y", widget.y)
			.attr("data-gs-height", widget.gsHeight)
			.attr("data-gs-width", widget.gsWidth);
				
			
			var contentNode = $('<div></div>');
			$(contentNode)
				.addClass("grid-stack-item-content ui-draggable-handle")
				.attr("data-gs-height", widget.gsHeight)
				.attr("data-gs-width", widget.gsWidth)
				.attr("data-gs-y", 25)
				.attr("style","top:35px;");
			if (widgetType === "graph")
			{
				$image = "graph-rtm.jpg";
				$(contentNode).html("<img class='img-responsive' src='" + $image + "' />");
			}
			if (widgetType === "gauge")
			{
				$image = "gauge-widget.gif";
				$(contentNode).html("<img src='" + $image + "' />");
			}

				// Prepend a Title bar to contentNode here
			var titleBar = $('<div></div>');
			$(titleBar)
			.addClass("custom-title-bar")
			.attr("style","width:100%")
			.attr("style","border-bottom:1px solid black; height:35px; width:100%;");
			$(titleBar).appendTo(containerNode);


			// Append the internal countent of title bar to it before mount
			// WidgetTitle                            _ * X
			var titleInternal = $('<div></div>');
			$(titleInternal).html("<div class='to-the-left'>"+ widgetType + "</div><div class='to-the-right'><button type='button'><i class='fa fa-window-minimize'></i></button><button type='button'><i class='fa fa-cog' onClick=showSettings(event)></i></button><div class='widget-settings'><ul class='settings-ul'><li>Custom Setting</li><li>Another Setting</li><li>One more setting</li><button class='close' onClick=closeSettings(event)><i class='fa fa-window-close'></i></button></ul></div><button type='button' class='close-button' onclick=removeMe(event)><i class='fa fa-window-close' onClick=removeMe(event)></i></button></div><div class='clear'></div>");
			$(titleInternal).appendTo(titleBar);

			$(contentNode).appendTo(containerNode);
			var grid = $('.grid-stack').data("gridstack");
			// replace this.instance with an element you've created before hand
			grid.addWidget(containerNode, 10,10,widget.gsWidth,widget.gsHeight,true);	

		}.bind(this)
		this.init();
	}
	var newOne = new Main();
});

