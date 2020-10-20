<footer class='footer'>
    <div class="footer__container container">
        <div class="footer__main">
            <div class="footer__logo-info">
                <a class='footer__logo' href="#">
                    <img src="img/logo-white.svg" alt="logo">
                </a>
                @include('cakeshop.components.socials',['class' => 'footer__socials socials--white'])
            </div>
            @include('cakeshop.components.contacts.online-shop',['class' => 'footer__online-shop online-shop--white'])
            @include('cakeshop.components.contacts.real-shop',['class' => 'footer__real-shop real-shop--white real-shop--footer'])
        </div>
        <div class="footer__bottom">
            <div class="footer__rights">
                <span>© Всі права захищені 2020</span>
            </div>
            <div class="footer__logo-studio logo-studio">
                <a href="https://webmaestro.com.ua" class='logo-studio__link'>
                    <img src="img/webmaestro.svg" alt="webmaestro">
                    <span class='logo-studio__caption'>розробка та розкрутка сайтів</span>
                </a>
            </div>
        </div>
    </div>
    <div class="footer__background">
        <img src="/img/background/background-footer.jpg" alt="background">
    </div>
</footer>