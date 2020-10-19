$(document).on("input", ".js--change-input-search", function(event) {
    $(this).val($(this).val().trim());
    if($(this).val().length >= $(this).data().count) {
        $(this).parent().addClass('active-form');
    } else {
        $(this).parent().removeClass('active-form');
    }
});
