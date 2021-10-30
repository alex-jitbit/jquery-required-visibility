(function ($) {
    var oldShow = $.fn.show;
    $.fn.show = function () {
        oldShow.apply(this, arguments); //run the original "show" method
        this.find("[notrequired]").prop("required", true).removeAttr("notrequired");
        return this;
    };
    var oldHide = $.fn.hide;
    $.fn.hide = function () {
        oldHide.apply(this, arguments); //run the original "hide" method
        this.find("[required]").prop("required", false).attr("notrequired", "1");
        return this;
    };
})(jQuery);
