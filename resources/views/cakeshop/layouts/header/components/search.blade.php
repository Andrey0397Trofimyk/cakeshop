<div class="{{$class}} search">
    <button class='search__button js--trigger-icon'>
        <svg class='search__icon search__icon--front icon'>
            <use xlink:href="/img/icons/panel.svg#search">
        </svg>
    </button>
    <div class="search__dropdown">
        <form action="#" class='search__form'>
            <input type="text" class='search__input js--change-input-search' data-count='3' placeholder="що ви шукаєте?">
            <button class='search__input-button'>
                <svg class='search__icon search__icon--form icon'>
                    <use xlink:href="/img/icons/panel.svg#search">
                </svg>
            </button>
        </form>
        @include('cakeshop.components.contacts.online-shop',['class' => 'search__online-shop'])
    </div>
</div>