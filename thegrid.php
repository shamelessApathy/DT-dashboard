<?php echo "THE GRID HAS BEEN LOADED";?>
<body id="page-top" class="index">

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="http://gridstackjs.com/"><span class="fa fa-th"></span> gridstack.js</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="hidden active">
                        <a href="#page-top"></a>
                    </li>
                    <li class="page-scroll">
                        <a href="#demo">Demo</a>
                    </li>
                    <li class="page-scroll">
                        <a href="#usage">Usage</a>
                    </li>
                    <li>
                        <a href="https://github.com/gridstack/gridstack.js/issues">Issues</a>
                    </li>
                    <li>
                        <a href="https://github.com/gridstack/gridstack.js">Fork me on GitHub</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>



    <section id="demo">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2>Demo</h2>
                    <hr class="star-light">
                </div>
            </div>

            <button class="add-widget">Add Widget</button>
            <br>
            <div class="widget-choices hidden">
                <select id="widget-type">
                    <option>Choose one...</option>
                    <option value="blank">Blank Widget</option>
                    <option value="gauge">Gauge Widget</option>
                    <option value="graph">Graph Widget</option>
                </select>
                <button id="submit-new-widget">Submit</button>
            </div>
            <div class='row'>
                <div class='col-md-12'>
                    <div class="grid-stack"></div>
                </div>    
                <script>
                function removeMe(e)
                {
                    target = e.target;
                    console.log(target);
                    parent = $(target).parents('.grid-stack-item');
                    console.log(parent);
                    $(parent).remove();
                }
                function showSettings(e)
                {
                    console.log("showSettings proc'd");
                    target = e.target;
                    menu = $(target).siblings(".widget-settings");
                    console.log(menu);
                    //$(menu).attr("style","display:block");
                }
                function closeSettings(e)
                {
                    target = e.target;
                    settings = $(target).find(".widget-settings");
                    $(settings).hide();
                }
</script>
            </div>
    </section>

    <script async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.5.0/lodash.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="includes/freelancer/js/classie.js"></script>
    <script src="includes/freelancer/js/cbpAnimatedHeader.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/8.3/highlight.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="includes/freelancer/js/freelancer.js"></script>

    <script src="includes/gridstackjs/dist/gridstack.js"></script>
    <script src="includes/gridstackjs/dist/gridstack.jQueryUI.js"></script>
    <script src="includes/dashboard.js"></script>
    <script type="text/javascript">
        hljs.initHighlightingOnLoad();
        $(function () {
            $('.grid-stack').gridstack({
                width: 12,
                alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                resizable: {
                    handles: 'e, se, s, sw, w'
                }
            });
        });
    </script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-1891156-8', 'auto');
  ga('send', 'pageview');

</script>



</body>
<?php //require_once('footer.php');?>