$(document).on("input", ".js--change-input-search", function(event) {
    // $(this).val($(this).val().trim());
    $(this).val(
        $(this)
            .val()
            .replace(/(^\s*)/, "")
    );

    if ($(this).val().length >= $(this).data().count) {
        $(this)
            .parent()
            .addClass("active-form");
    } else {
        $(this)
            .parent()
            .removeClass("active-form");
    }
});
