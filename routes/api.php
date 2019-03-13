<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('index', 'api\IndexController@index');

Route::get('categories', 'api\IndexController@showCategories');

Route::get('product/category/{id}', 'api\IndexController@showProductsByCategory');

/*--- Products Controller ---*/
// Category/Listing Page
Route::get('/products/{url}', 'api\ProductsController@products');
// Product Detail Page
Route::get('product/{id}', 'ProductsController@product');
// Product Attribute Price
Route::get('/get-product-price', 'ProductsController@getProductPrice');

/*--- Cart Controller ---*/
// Add to Cart Route
Route::match(['get', 'post'], '/add-cart','CartController@addtocart');
// Shopping Cart
Route::match(['get', 'post'], '/cart','CartController@shoppingCart');
// Delete Product from Cart Page
Route::get('/cart/delete-product/{id}', 'CartController@deleteCart');