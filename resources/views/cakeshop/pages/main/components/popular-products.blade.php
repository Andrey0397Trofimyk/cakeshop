<section class="popular-products">
    <div class="popular-products__container container">
        <div class="popular-products__title">
            <p class='popular-products__text'>Популярні товари</p>
            <div class="popular-products__arrows">
                <button type='button' class='popular-products__arrow popular-products__arrow--next'>
                    <svg class='popular-products__icon icon'>
                        <use xlink:href="/img/icons/panel.svg#arrow-prev">
                    </svg>
                </button>
                <button type='button' class='popular-products__arrow popular-products__arrow--prev'>
                    <svg class='popular-products__icon icon'>
                        <use xlink:href="/img/icons/panel.svg#arrow-next">
                    </svg>
                </button>
            </div>
        </div>
        <div class="popular-products__swiper">
            <div class="popular-products__slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="popular-products__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'popular-products__card'])
                    </div>
                    <div class="popular-products__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'popular-products__card'])
                    </div>
                    <div class="popular-products__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'popular-products__card'])
                    </div>
                    <div class="popular-products__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'popular-products__card'])
                    </div>
                    <!-- <div class="popular-products__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'popular-products__card'])
                    </div>
                    <div class="popular-products__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'popular-products__card'])
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</section>