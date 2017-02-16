(function ($) {

    function openModal(e) {
        var target = $(this).data('target');
        var body = $('body');
        $(target).show();

        var backDrop = '<div class="modal-backdrop"></div>';
        body.append(backDrop);
        body.addClass('modal-open');

        e.preventDefault()
    }

    function cancelModal(e) {
        var el = $(e.target);
        var force = el.data('toggle') === 'dismiss';

        if ((
                el.closest('.modal-dialog').length !== 0 ||
                el.hasClass('modal-dialog') ||
                el.data('toggle') === 'modal'
            ) && e.keyCode !== 27 && !force)
            return;

        $('.modal').hide();
        $('.modal-backdrop').remove();
        $('body').removeClass('modal-open');

        // e.preventDefault()
    }

    function sendData(e) {

        var form = $(this);
        var action = form.prop('action');
        var method = form.prop('method') || 'get';
        var data = form.length > 0 ? new FormData(form.get(0)) : {};

        $.ajax({
            url: action,
            method: method,
            data: data,
            processData: false
        })
            .done(function (res, status, xhr) {

            })
            .fail(function(xhr, status, err) {
                console.log(xhr.getAllResponseHeaders())
            });

        e.preventDefault();
    }

    $(document).on('click', '[data-toggle=modal]', openModal);
    $(document).on('submit', '[data-action=modal-form]', sendData);
    $(document).on('click', cancelModal);
    $(document).on('keyup', cancelModal)

}(jQuery));
