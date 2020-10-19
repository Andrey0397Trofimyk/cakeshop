<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CakeShop - WebMaestro</title>
    <!-- <link rel="shortcut icon" href="/img/site-icon.jpg" type="image/x-icon"> -->
    <link rel="stylesheet" href="{{mix('/css/app.css')}}">
</head>

<body>
    @include('cakeshop.layouts.header.index')

    @include('cakeshop.layouts.header.laptop-navbar')

    @include('cakeshop.pages.main.index')

    @include('cakeshop.layouts.footer.index')

    <script src="{{mix('/js/manifest.js')}}"></script>
    <script src="{{mix('/js/vendor.js')}}"></script>
    <script src="{{mix('/js/app.js')}}"></script>
</body>

</html>