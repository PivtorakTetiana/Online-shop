function showSearch() { //Показать/скрыть строку поиска в хедере
    $('img#search').click(function () {
        $('.search-form > input').toggleClass('active');
        console.log(true)
    })
}
showSearch();

var products = [{
        productName: 'Bbblanco SO27M102',
        productPrice: 2500,
        productColor: 'Черный',
        productMaterial: 'Силикон',
        productPhoto: 'img/catalog/1.jpg',
        category: 'Мужские часы',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        discount: 5,
        isSale: true,
        identity:'Bbblanco SO27M102'
    },
    {
        productName: 'Black Grid YWS444',
        productPrice: 2350,
        discount: 5,
        productColor: 'Розовый',
        productMaterial: 'Силикон',
        productPhoto: 'img/catalog/2.jpg',
        category: 'Женские часы',
        categoryId: 'category1',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        isSale: true,
        identity:'Black Grid YWS444'
    },
    {
        productName: 'Bbblood SO27B102',
        productPrice: 1890,
        productColor: 'Черный',
        productMaterial: 'Силикон',
        productPhoto: 'img/catalog/4.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Мужские часы',
        identity:'Bbblood SO27B102'
    },
    {
        productName: 'Bbblue SO27B101',
        productPrice: 2400,
        productColor: 'Черный',
        productMaterial: 'Силикон',
        productPhoto: 'img/catalog/5.jpg',
        categoryId: 'category1',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Женские часы',
        discount: 5,
        isSale: true,
        identity:'Bbblue SO27B101'
    },
    {
        productName: 'Blue Icone YWS449MA',
        productPrice: 3800,
        productColor: 'Красный',
        productMaterial: 'Силикон',
        productPhoto: 'img/catalog/6.jpg',
        categoryId: 'category1',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Женские часы',
        identity: 'Blue Icone YWS449MA'
    },
    {
        productName: 'Brandy YWS445',
        productPrice: 1980,
        productColor: 'Коричневый',
        productMaterial: 'Силикон',
        productPhoto: 'img/catalog/7.jpg',
        categoryId: 'category1',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Женские часы',
        identity:'Brandy YWS445'
    },
    {
        productName: 'Bricablue SUON711',
        productPrice: 2220,
        productColor: 'Синий',
        productMaterial: 'Кожа',
        productPhoto: 'img/catalog/14.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Мужские часы',
        identity:'Bricablue SUON711'
    },
    {
        productName: 'Bricagris SUOM708',
        productPrice: 2100,
        productColor: 'Синий',
        productMaterial: 'Кожа',
        productPhoto: 'img/catalog/9.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Мужские часы',
        identity:'Bricagris SUOM708'
    },
    {
        productName: 'Chic Sailor YVS448',
        productPrice: 2000,
        productColor: 'Розовый',
        productMaterial: 'Кожа',
        productPhoto: 'img/catalog/19.jpg',
        categoryId: 'category2',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Детские часы',
        discount: 5,
        isSale: true,
        identity:'Chic Sailor YVS448'
    },
    {
        productName: 'Meiro SUOW164',
        productPrice: 1540,
        productColor: 'Розовый',
        productMaterial: 'Кожа',
        productPhoto: 'img/catalog/3.jpg',
        categoryId: 'category2',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Детские часы',
        identity:'Meiro SUOW164'
    },
    {
        productName: 'Sistem Boreal YIS401G',
        productPrice: 3500,
        productColor: 'Черный',
        productMaterial: 'steel',
        productPhoto: 'img/catalog/8.jpg',
        categoryId: 'category3',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Стальные часы',
        discount: 5,
        isSale: true,
        identity:'Sistem Boreal YIS401G'
    },
    {
        productName: 'Sistem Fly YIS404',
        productPrice: 2410,
        productColor: 'Черный',
        productMaterial: 'steel',
        productPhoto: 'img/catalog/10.jpg',
        categoryId: 'category3',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Стальные часы',
        identity:'Sistem Fly YIS404'
    },
    {
        productName: 'Skinnature SYXS116',
        productPrice: 2050,
        productColor: 'Синий',
        productMaterial: 'Кожа',
        productPhoto: 'img/catalog/11.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Мужские часы',
        identity:'Skinnature SYXS116'
    },
    {
        productName: 'X-Dis Blue SUSB418',
        productPrice: 1600,
        productColor: 'Желтый',
        productMaterial: 'Силикон',
        productPhoto: 'img/catalog/13.jpg',
        categoryId: 'category2',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Детские часы',
        identity: 'X-Dis Blue SUSB418'
    },
    {
        productName: 'Uncle Charly YAS112G',
        productPrice: 1250,
        productColor: 'Черный',
        productMaterial: 'Силикон',
        productPhoto: 'img/catalog/12.jpg',
        categoryId: 'category0',
        productDescription: 'Діаметр його корпусу складає 47 міліметрів, а стрілки з покриттям superluminova та великі арабські цифри гармоніюють з відтінком циферблата. Корпус годинника SWATCH містить точний кварцовий механізм і доповнений силіконовим ремінцем в тон великому циферблату.',
        category: 'Мужские часы',
        identity:'Uncle Charly YAS112G'
    }
];

/*function getCatList() {//Вывести список категорий в сайдбаре (вариант 1)
    var newCatList = [];
    for (var i = 0; i < products.length; i++) {
        newCatList.push(products[i].category);
    }
    newCatList.sort();
    
    for (var j = 0; j < newCatList.length; j++) {
        if (newCatList[j] == newCatList[j]) {
            newCatList.splice(j, j + 1);
        }
    }
    console.log(newCatList);
    function getCategoriesInSidebar() {
        for (var i = 0; i < newCatList.length; i++) { 
            $('.category-list-sidebar').append(`<li id='${'category' + i}'>${newCatList[i]}</li>`);

        } 
    }
    getCategoriesInSidebar();
}
getCatList();*/

function getCatList2() { //Вывести список категорий в сайдбаре (второй вариант работы с Set) 
    var catList = new Set();
    let count = 0;
    for (var i = 0; i < products.length; i++) {
        catList.add(products[i].category);
    }
    // console.log(catList);
    catList.forEach((value, valueAgain, set) => {
        $('.category-list-sidebar').append(`<li id='${'category' + count++}'>${value}</li>`)
    })

}
getCatList2();


function getProductsInCatalog(arr) { //Сгенерировать товары на странице каталога
    for (var i = 0; i < arr.length; i++) {
        const item = arr[i];
        $('.products-list').append(`
        <div class="product-item" data-id="${item.categoryId}" data-identity="${item.identity}">
    <img src="${item.productPhoto}" class="pruduct-img">
    <div class="product-name">${item.productName}</div>
    <div class="product-price">Цена ${item.productPrice} грн</div>
    <div class="order-butt">Купить</div>
    <div class="details-butt" data-target="#${'exampleModal' + i}" data-toggle="modal">Подробнее</div>
    <div class="modal fade" id="${'exampleModal' + i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${item.productName}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="product-det">
                        <img src="${item.productPhoto}" class="pruduct-img">
                        <p id="product-description"> ${item.productDescription}</p>
                        <p>Характеристики:</p>
                        <ul>
                            <li>Цвет: ${item.productColor}</li>
                            <li>Материал: ${item.productMaterial}</li>
                            <li>Категория: ${item.category}</li>
                        </ul>
                        <p class="product-price">Цена ${item.productPrice} грн</p>
                    </div>
                    <div class="modal-footer">
                        <div class="close-mod-butt" data-dismiss="modal">Закрыть</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `);
    }
    console.log(products.length)
}
getProductsInCatalog(products);

function filterProducts() { //фильтр товаров по категориям
    $('.category-list-sidebar > li').click(function () {
        var currentId = $(this).attr('id');
        //console.log(currentId)
        var filteredList = products.filter(function (item) {
            return item.categoryId == currentId;
        });
        console.log(filteredList)
        console.log(currentId)
        resetProducts();
        getProductsInCatalog(filteredList);
        addProductsToCart(filteredList);

    });
    $('#showAllCat').click(function () {
        resetProducts();
        getProductsInCatalog(products);
    });

}
filterProducts();

function resetProducts() {
    $('.products-list .product-item').hide(500).remove();
}

function sortProducts() { //сортировка товаров по цене
    $('#lowPrice').click(function () {
        var lowRriceProduct = products.sort(function (a, b) {
            return a.productPrice - b.productPrice;
        });
        resetProducts();
        getProductsInCatalog(lowRriceProduct);
        addProductsToCart(lowRriceProduct)
    });
    $('#hightPrice').click(function () {
        var hightPriceProduct = products.sort(function (a, b) {
            return b.productPrice - a.productPrice;
        });
        resetProducts();
        getProductsInCatalog(hightPriceProduct);
        addProductsToCart(hightPriceProduct)
    });
    $('#resetSort').click(function () {
        location.reload();
    });

}
sortProducts();

function colorLink() {
    $('ul.sort li').click(function () {
        $('ul li').removeClass('active-link');
        $(this).addClass('active-link');
    });

    $('ul.category-list-sidebar li').click(function () {
        $('ul li').removeClass('active-link');
        $(this).addClass('active-link');
    });

};
colorLink();

var cart = [];

function addProductsToCart(arr) {
    $('.order-butt').click(function() {
        let identity = $(this).parent().attr('data-identity');
        console.log(identity);
        for (var i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (identity === item.identity) {
                cart.push(item);
                $('.products-in-cart-title').html(`
                <span></span>
                <span>Название товара</span>
                <span>Стоимость</span>
                `)
                $('.products-in-cart').append(`
                <div class="product">
	                <img class="product-in-cart-img" src=${item.productPhoto}>
	                <span class="product-in-cart-name">${item.productName}</span>
	                <span class="product-in-cart-price">${item.productPrice} грн</span>
	            </div>
                `)
            }
        }
        $('.hidden').css('display', 'flex');
        getTotalSum();
    });
}
addProductsToCart(products);

function getTotalSum() {
    var totalSum = 0;
    for (var i = 0; i < cart.length; i++) {
        totalSum += cart[i].productPrice;
      
        $('.total-sum').html(`${totalSum} грн`);
    }
};

function cleanCart() {
    $('.clear-cart').click(function cleanCart() {
        cart = [];
        $('.products-in-cart-title').html(`<div>Ваша корзина пуста</div>`);
        $('.product').remove();
        $('.hidden').css('display', 'none');
    })
}
cleanCart();

function orderConformation() {
    $('.send-order').click(function() {
        cart = [];
        $('.product').remove();
        $('.hidden').css('display', 'none');
        $('.products-in-cart-title').html(`<div>Ваш заказ успешно отправлен. Наш специалист свяжетсся с Вами в ближайшее время!</div>`);
        $('.close-modal').addClass('reload');
        $('.reload').click(function() {
            location.reload();
        })
    });

}
orderConformation();

$('#toggler-catList').click(function() {
    $('ul.category-list-sidebar').toggle('slow');
})

$('#tpggler-sort').click(function() {
    $('ul.sort').toggle('slow');
})

$('#burger').click(function() {
    $('.nav-menu').toggle('slow');
})