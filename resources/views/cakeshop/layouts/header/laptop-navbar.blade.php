<div class="laptop-navbar">
    <div class="laptop-navbar__container container">
        @include('cakeshop.layouts.header.components.laptop-main',['class' => 'laptop-navbar__laptop-main'])
    </div>
    <div class="laptop-navbar__signboard">
        <img src="/img/background/navbar-background.jpg" alt="navbar-background">
        <div class="laptop-navbar__signboard-container container">
            <div class="laptop-navbar__signboard-title">
                <a href="#" class='laptop-navbar__signboard-link'>
                    <p>Нові надходження</p>
                    <svg class='tell__icon icon'>
                        <use xlink:href="/img/icons/panel.svg#arrow">
                    </svg>
                </a>
            </div>
        </div>
    </div>
</div>