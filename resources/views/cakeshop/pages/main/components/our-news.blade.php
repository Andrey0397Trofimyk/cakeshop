<section class='our-news'>
    <div class="our-news__container container">
        <div class="our-news__title">
            <h2 class='our-news__text'>Наші новини</h2>
            <div class="our-news__arrows">
                <button type='button' class='our-news__arrow our-news__arrow--prev'>
                    <svg class='our-news__icon icon'>
                        <use xlink:href="/img/icons/panel.svg#arrow-prev">
                    </svg>
                </button>
                <button type='button' class='our-news__arrow our-news__arrow--next arrow-next'>
                    <svg class='our-news__icon icon'>
                        <use xlink:href="/img/icons/panel.svg#arrow-next">
                    </svg>
                </button>
            </div>
        </div>
        <div class="our-news__swiper">
            <div class="our-news__slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="our-news__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'our-news__card'])
                    </div>
                    <div class="our-news__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'our-news__card'])
                    </div>
                    <div class="our-news__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'our-news__card'])
                    </div>
                    <div class="our-news__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'our-news__card'])
                    </div>
                    <div class="our-news__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'our-news__card'])
                    </div>
                    <div class="our-news__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'our-news__card'])
                    </div>
                    <div class="our-news__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'our-news__card'])
                    </div>
                    <div class="our-news__slide swiper-slide">
                        @include('cakeshop.components.card',['class' => 'our-news__card'])
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>