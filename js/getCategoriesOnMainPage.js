var categories = [{
    categoryName: 'Мужские часы',
    categoryImg: 'img/catalog/1.jpg',
    categoryId: 'category0',
    link: 'catalog.html'
},
{
    categoryName: 'Женские часы',
    categoryImg: 'img/catalog/2.jpg',
    categoryId: 'category1',
    link: 'catalog.html'
},
{
    categoryName: 'Детские часы',
    categoryImg: 'img/catalog/3.jpg',
    categoryId: 'category2',
    link: 'catalog.html'
},
{
    categoryName: 'Irony',
    categoryImg: 'img/catalog/10.jpg',
    categoryId: 'category3',
    link: 'catalog.html'
},
{
    categoryName: 'Спецпредложения',
    categoryImg: 'img/catalog/4.jpg',
    id: 'sale',
    categoryId: 'sale',
    link: 'catalog.html'
},
{
    categoryName: 'Конструктор часов',
    categoryImg: 'img/catalog/13.jpg',
    id: 'constructor',
    link: 'constructor.html'
}
];

function getCategories() {
    for (var i = 0; i < categories.length; i++) {
        $('.category-list').append(`<div class="category-item" id="${categories[i].categoryId}"><a href="${categories[i].link}"><img src ="${categories[i].categoryImg}" alt = "${categories[i].categoryName}"><span class = "category-name"> ${categories[i].categoryName} </span></a></div>`);
    }

}
getCategories();

function saleMarker() {
    $('#sale').addClass('sale');
    $('#sale').append(`<img src="img/sale.png" id="sale-mark">`);
}
saleMarker();
