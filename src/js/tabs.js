(function($) {

    function switchTab() {
        var parent = $(this).closest('.tabs');
        var el = $(this);
        var target = el.data('target');
        var contentParent = $(target).closest('.tab-contents');

        parent.find('[data-toggle="tab"]').removeClass('active');
        el.addClass('active');
        contentParent.find('.tab-content').removeClass('active');
        $(target).addClass('active');
    }

    $(document).on('click', '[data-toggle="tab"]', switchTab);

}(jQuery));