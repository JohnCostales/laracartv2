<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', 'IndexController@index');

Route::match(['get', 'post'], '/admin', 'AdminController@login');

Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

//Change default view to a wildcard path
// Route::view('/{path?}', 'index');

Route::get( '/{path?}', function(){
    return view( 'index');
})->where('path', '.*');

