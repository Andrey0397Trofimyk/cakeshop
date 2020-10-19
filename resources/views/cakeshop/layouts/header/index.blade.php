<header class='header'>
    <div class="header__container container">
        <div class="header__wrapper">
            <button type='button' class='header__burger js--trigger-burger'>
                <span></span>
            </button>
            <a class='header__logo' href="#">
                <img src="img/logo.svg" alt="logo">
            </a>
            @include('cakeshop.components.basket',['class' => 'header__basket'])
            @include('cakeshop.components.choice-viber',['class' => 'header__choice-viber-desktop'])
            @include('cakeshop.layouts.header.components.search',['class' => 'header__search'])
            @include('cakeshop.layouts.header.components.tell',['class' => 'header__tell'])
        </div>
        <div class="header__dropdown">
            <div class="header__hide-menu container">
                @include('cakeshop.layouts.header.components.navbar',['class' => 'header__navbar'])
                @include('cakeshop.layouts.header.components.navbar-info',['class' => 'header__navbar-info'])
                @include('cakeshop.components.choice-viber',['class' => 'header__choice-viber-navbar'])
                <div class="header__check-opt">
                    @include('cakeshop.layouts.header.components.languages',['class' => 'header__languages'])
                    @include('cakeshop.components.socials',['class' => 'header__socials'])
                </div>
            </div>
        </div>
    </div>
</header>