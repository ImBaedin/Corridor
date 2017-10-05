$(document).ready(function(){

    var documentHeight, documentWidth;
    
    var gridSize = 25;

    var gridSet = {
        //lineColor: '#FEF101',
        lineColor: '#FFFFFF',
        rowLineCount: 20,
        columnLineCount: 32,
        opacity: .1,
        lineDuration: 150,
        interval: 10
    };
    
    var ctx = $('#video-grid').get(0).getContext('2d');

    var height = $('#video-grid').innerHeight();
    var width = $('#video-grid').innerWidth();
    //var height = $('#video-grid').outerHeight();
    //var width = $('#video-grid').outerWidth();
    
    var grid = new GridCanvas(ctx, height, width, gridSet);
    grid.start();
    
    $(window).on('resize', function(){
        resizeCanvas();
        resizeLatest();
    });

    function resizeCanvas(){
        if(navigator.userAgent.match(/(Android)/) ){
            if(documentWidth == $(document).width()){
                return false;
            }
        }
        documentHeight = $(document).height();
        documentWidth = $(document).width();
        var parent = $('#video-grid').parent();

        $('#video-grid').get(0).width = parent.width();
        $('#video-grid').get(0).height = parent.height();

        var height = $('#video-grid').innerHeight();
        var width = $('#video-grid').innerWidth();
        //var height = $('#video-grid').outerHeight();
        //var width = $('#video-grid').outerWidth();

        $('#video-grid').get(0).width = parent.width();
        $('#video-grid').get(0).height = parent.height();

        //height = $('#video-grid').innerHeight();
        //width = $('#video-grid').innerWidth();
        //height = $('#video-grid').outerHeight();
        //width = $('#video-grid').outerWidth();


        grid.updateRes(height, width);

        var rc = Math.ceil(height/gridSize);
        var cc = Math.ceil(width/gridSize);
        // 1920/20 = 96

        var newSet = {
            rowLineCount: rc,
            columnLineCount: cc
        };
        grid.updateSettings(newSet);
    }

    resizeCanvas();

    $('.parallax-window').each(function(){
        $(this).parallax();
    });

    $('#corridor-title').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
        $('#corridor-sub-title').fadeIn();
    });



    function resizeLatest(){
        //$('#latest-video').width();
    }
});