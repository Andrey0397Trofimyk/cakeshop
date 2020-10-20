<div class="{{$class}} real-shop">
    <div class="real-shop__place">
        <p class='real-shop__city'>Луцьк:</p>
        <div class="real-shop__street">
            <div class="real-shop__adress">
                <svg class='real-shop__icon real-shop__icon--marker icon'>
                    <use xlink:href="/img/icons/panel.svg#marker">
                </svg>
                <adress class='real-shop__adress'>пр. Грушевського, 30</adress>
            </div>
            @include('cakeshop.components.contacts.number',['class' => 'real-shop__number number'])
        </div>
        <div class="real-shop__street">
            <div class="real-shop__adress">
                <svg class='real-shop__icon real-shop__icon--marker icon'>
                    <use xlink:href="/img/icons/panel.svg#marker">
                </svg>
                <adress class='real-shop__adress'>вул, Ковельська 29</з>
            </div>
            @include('cakeshop.components.contacts.number',['class' => 'real-shop__number number'])
        </div>
    </div>
    <div class="real-shop__place">
        <p class='real-shop__city'>Ковель:</p>
        <div class="real-shop__street">
            <div class="real-shop__adress">
                <svg class='real-shop__icon real-shop__icon--marker icon'>
                    <use xlink:href="/img/icons/panel.svg#marker">
                </svg>
                <adress class='real-shop__adress'>вул, Сагайдачного, 10</adress>
            </div>
            <div class="real-shop__form">
                @include('cakeshop.components.contacts.number',['class' => 'real-shop__number number--no-viber'])
                @include('cakeshop.components.contacts.number',['class' => 'real-shop__number'])
            </div>
        </div>
    </div>
</div>