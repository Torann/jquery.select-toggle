/**
 * @file jquery.select-toggle.js
 * @brief Toggle secondary items in a form.
 * @author Daniel Stainback (Torann)
 * @site https://github.com/torann/jquery.select-toggle
 * @version 1.0.0
 * @license Apache License, Version 2.0
 */
;(function ($) {
    $(document).on('change', 'select[data-toggles],input[data-toggles]', function () {
        var $this = $(this),
            $form = $this.closest('form'),
            value = null,
            type = this.type,
            toggle = $this.data('toggles').split('|');

        if (type === 'checkbox' || type === 'radio') {
            value = this.checked;
        }
        else {
            value = this.value;
        }

        $.each(toggle, function (i, item) {
            var values = item.split(':'),
                state = null;

            if (type === 'checkbox' || type === 'radio') {
                state = (values[0] == 'checked') ? value != true : value == true;
            }
            else {
                state = (values[0] === '*') ? value === '' : (value != values[0])
            }

            $form.find(values[1]).toggleProp('hidden', state);
                //.find('input,textarea,select').toggleProp('disabled', state);
        });
    });

    $(document).on('change', 'select[data-filters]', function () {
        var $this = $(this),
            $target = $($this.data('filters')),
            value = $this.find(':selected').data('filter-val');

        $target.closest('.input-field')
            .toggleProp('hidden', value === undefined);

        $target.find('option').each(function (i, item) {
            var $item = $(item),
                hidden = item.value > value;

            $item.toggleProp('hidden', hidden);

            if (hidden) {
                $item.removeProp('selected');
            }
        });
    });
})(jQuery);