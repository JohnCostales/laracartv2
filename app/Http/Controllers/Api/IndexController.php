<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Product;    
use App\Category;

class IndexController extends Controller
{
    public function index()
    {
        // Ascending order by id (default)
        $productsAll = Product::get(); 
        // $productsAll = Product::get()->toArray(); 
        // Descending by id
        // $productsAll = Product::orderBy('id', 'DESC')->get(); 
        
        // Random
        //$productsAll = Product::inRandomOrder()->get();

        // Display all Categories
        
        $categories = Category::where(['parent_id'=>0])->get();
        // $categories = json_decode(json_encode($categories));
        // echo "<pre>"; print_r($categories); die;
        
        $response = array(
            'products' => $productsAll,
            'categories' => $categories
        );

        // Return array as JSON response
        return response()->json($response);
        // Response::json(array('products'=>$productsAll,'categories'=>$categories));
        // Response::json(array('products'=>$productsAll));
    }

    // public function showCategories()
    // {
    //     // $categories = Category::get();
    //     $categories = Category::with('categories')->where(['parent_id'=>0])->get();
    //     return $categories->toJson();
    // }

    public function showProductsByCategory($id)
    {
        $products = Product::where(['category_id'=>$id])->get();
        
        return $products->toJson();
    }
}