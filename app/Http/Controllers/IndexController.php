<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;    

class IndexController extends Controller
{
    public function index()
    {
        // Ascending order by id (default)
        $productsAll = Product::get(); 

        // Descending by id
        // $productsAll = Product::orderBy('id', 'DESC')->get(); 
        
        // Random
        //$productsAll = Product::inRandomOrder()->get();

        return view('index')->with(compact('productsAll'));
    }
}