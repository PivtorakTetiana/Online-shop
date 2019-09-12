var header = `<section>
<div class="container">
    <div class="row">
        <div class="col-lg-2 col-md-6 col-sm-12">
            <div class="logo">
                <a href="index.html"><img src="img/logo.png" alt="logo"></a>
            </div>
            <img src="img/burger.png" id="burger">
        </div>
        <div class="col-lg-8 col-md-6 col-sm-12">
            <ul class="nav nav-menu">
                <li><a href="catalog.html">Каталог</a></li>
                <li><a href="news.html">Новости</a></li>
                <li><a href="constructor.html">Конструктор</a></li>
                <li><a href="about.html">О нас</a></li>
                <li><a href="contacts.html">Контакты</a></li>
            </ul>
        </div>
        <div class="col-lg-2 col-md-10 col-sm-12 cart-end-search-wrapp">
            <div class="search">
                <form class="search-form">
                    <img src="img/search.png" alt="search" id="search">
                    <form class="search-form">
                        <input type="text" placeholder='Поиск'>
                    </form>
            </div>
            <div class="cart">
                <img src="img/cart.png" alt="cart" id='cart' data-toggle="modal" data-target=".bd-example-modal-lg">
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                    <div class="modal-header">
                    <h1 class="cart-message">Ваша корзина</h1>
                    <div class="close-modal" data-dismiss="modal">X</div>
                    </div>
                    <div class="modal-body">
                     <div class="products-in-cart">
                     <div class="products-in-cart-title">Ваша корзина пуста</div>
                     </div>
                     <div class="sum hidden">Всего к оплате:<span class="total-sum"></span></div>
                    <div class="buttons hidden">
                        <span class="clear-cart">Очистить корзину</span>
                        <span class="send-order ">Офирмить заказ</span>
                    </div>

                     </div>
                     </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>`;

$('#header').append(header);