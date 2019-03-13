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

Route::get('products', 'api\IndexController@index');

Route::get('product/category/{id}', 'api\IndexController@showProductsByCategory');

/*--- Products Controller ---*/
// Category/Listing Page
Route::get('products/{url}', 'api\ProductsController@products');
// Product Detail Page
Route::get('product/{id}', 'api\ProductsController@product');
// Product Attribute Price
Route::get('/get-product-price', 'api\ProductsController@getProductPrice');

/*--- Cart Controller ---*/
// Add to Cart Route
Route::match(['get', 'post'], '/add-cart','api\CartController@addtocart');
// Shopping Cart
Route::match(['get', 'post'], '/cart','api\CartController@shoppingCart');
// Delete Product from Cart Page
Route::get('/cart/delete-product/{id}', 'api\CartController@deleteCart');