<footer class='footer'>
    <div class="footer__container container">
        <div class="footer__main">
            <div class="footer__logo-info">
                <a class='footer__logo' href="#">
                    <img src="img/logo-white.svg" alt="logo">
                </a>
                @include('cakeshop.components.socials',['class' => 'footer__socials'])
            </div>
            @include('cakeshop.components.contacts.online-shop',['class' => 'footer__online-shop'])
            @include('cakeshop.components.contacts.real-shop',['class' => 'footer__real-shop'])
        </div>
        <div class="footer__bottom">
            <div class="footer__rights">
                <p>© Всі права захищені 2020</p>
            </div>
            <div class="footer__logo-studio">
                <a href="https://webmaestro.com.ua">
                    <img src="img/webmaestro.svg" alt="webmaestro">
                    <p>розробка та розкрутка сайтів</p>
                </a>
            </div>
        </div>
    </div>
    <div class="footer__background">
        <img src="/img/background/background-footer.jpg" alt="">
    </div>
</footer>