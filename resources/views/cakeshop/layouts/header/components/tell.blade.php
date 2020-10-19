<div class="{{$class}} tell">
    <button type='button' class="tell__button js--trigger-icon">
        <svg class='tell__icon icon'>
            <use xlink:href="/img/icons/panel.svg#telephone">
        </svg>
    </button>
    <div class="tell__form js--dropdown-modal">
        @include('cakeshop.components.contacts.online-shop',['class' => 'tell__online-shop'])
        <p class='tell__invition'>Завітайте в наші магазини</p>
        @include('cakeshop.components.contacts.real-shop',['class' => 'tell__real-shop'])
    </div>
</div>