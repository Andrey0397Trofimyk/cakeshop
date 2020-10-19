<div class="{{$class}} real-shop">
    <!-- <div class="real-shop__invition">
        <p>Завітайте в наші магазини</p>
    </div> -->
    <div class="real-shop__place">
        <p class='real-shop__city'>Луцьк:</p>
        <div class="real-shop__street">
            <div class="real-shop__adress">
                <svg class='real-shop__icon real-shop__icon--marker icon'>
                    <use xlink:href="/img/icons/panel.svg#marker">
                </svg>
                <p>пр. Грушевського, 30</p>
            </div>
            @include('cakeshop.components.contacts.number',['class' => 'real-shop__number'])
        </div>
        <div class="real-shop__street">
            <div class="real-shop__adress">
                <svg class='real-shop__icon real-shop__icon--marker icon'>
                    <use xlink:href="/img/icons/panel.svg#marker">
                </svg>
                <p>вул, Ковельська 29</p>
            </div>
            @include('cakeshop.components.contacts.number',['class' => 'real-shop__number'])
        </div>
    </div>
    <div class="real-shop__place">
        <p class='real-shop__city'>Ковель:</p>
        <div class="real-shop__street">
            <div class="real-shop__adress">
                <svg class='real-shop__icon real-shop__icon--marker icon'>
                    <use xlink:href="/img/icons/panel.svg#marker">
                </svg>
                <p>вул, Сагайдачного, 10</p>
            </div>
            <div class="real-shop__form">
                @include('cakeshop.components.contacts.number',['class' => 'real-shop__number real-shop__number--no-viber'])
                @include('cakeshop.components.contacts.number',['class' => 'real-shop__number'])
            </div>
        </div>
    </div>
</div>