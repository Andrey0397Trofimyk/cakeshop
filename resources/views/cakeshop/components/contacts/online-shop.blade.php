<div class="{{$class}} online-shop">
    <div class="online-shop__title">
        <svg class='online-shop__icon online-shop__icon--headset icon'>
            <use xlink:href="/img/icons/panel.svg#headset">
        </svg>
        <p class='online-shop__text'>Online магазин:</p>
    </div>
    <div class="online-shop__form">
        @include('cakeshop.components.contacts.number',['class' => 'online-shop__number'])
        @include('cakeshop.components.contacts.number',['class' => 'online-shop__number online-shop__number--no-viber'])
        @include('cakeshop.components.contacts.number',['class' => 'online-shop__number'])
    </div>
</div>