/**
 * Created by Pixel Precision.
 * Author: Brenden Leib
 * Date: 3/27/14
 * Time: 8:43 PM
 * Copyright 2014
 */


jQuery(function($){
    $.fn.hideShow = function(settings){

        var config = {
            buttonID: 'button'
        };

        if(settings){
            $.extend(config, settings);
        }

        return this.each(function(){

            var _this = $(this);

            _this.addClass(config.buttonID);

            $('.' + config.buttonID).data('state', 0);

            var state = 0;
            var click = $('#' + config.buttonID);

            var hide = function(){
                $('.' + config.buttonID).hide().data('state', 1);
                state = 1;
                console.log('State hide = ' + $('.' + config.buttonID).data('state'));
            };
            var show = function(){
                $('.' + config.buttonID).show().data('state', 0);
                state = 0;
                console.log('State show = ' + $('.' + config.buttonID).data('state'));
            };

            click.on('click', function(e){
                e.preventDefault();
                if($('.' + config.buttonID).data('state') == 0){
                    hide();

                } else {
                    show();
                }
            });
        });
    };
});