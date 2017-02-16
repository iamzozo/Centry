(function($) {

    function openDropdown(e) {
        var target = $(this).data('target');
        if(target === undefined)
            target = $(this).parent().find('.dropdown-menu');

        $(target).show();
        $(target).parent().addClass('open');

        e.preventDefault()
    }

    function cancelDropdown(e) {
        var el = $(e.target);

        if((
            el.closest('.dropdown-menu').length !== 0 ||
            el.hasClass('dropdown-menu') ||
            el.data('toggle') === 'dropdown'
        ) && e.keyCode !== 27)
            return;

        $('.dropdown-menu').hide()
    }

    $(document).on('click', '[data-toggle=dropdown]', openDropdown);
    $(document).on('click', cancelDropdown);
    $(document).on('keyup', cancelDropdown)

}(jQuery));
