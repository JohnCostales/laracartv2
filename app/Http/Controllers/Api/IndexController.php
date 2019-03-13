<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// Extensions
use Image;
use Auth;
use Session;
// Models used
use App\Category;
use App\Product;
use App\ProductsAttribute;

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
        
        $categories = Category::with('categories')->where(['parent_id'=>0])->get();
        // $categories = json_decode(json_encode($categories));
        // echo "<pre>"; print_r($categories); die;
        
        // Return
        $data = array(
            'products' => $productsAll,
            'categories' => $categories
        );

        // $response = json_decode(json_encode($response));
        // echo "<pre>"; print_r($response); die;

        // Return array as JSON response
        return response()->json($data);
        // Response::json(array('products'=>$productsAll,'categories'=>$categories));
        // Response::json(array('products'=>$productsAll));
    }

    public function showCategories()
    {
        // $categories = Category::get();
        $categories = Category::with('categories')->where(['parent_id'=>0])->get();
        return $categories->toJson();
    }

    public function showProductsByCategory($id)
    {
        $products = Product::where(['category_id'=>$id])->get();
        
        return $products->toJson();
    }

     // Using Category URL variable to display items within the category
     public function products($url = null)
     {
         // 404 if url or category status is null is incorrect
         $countCategory = Category::where(['url'=>$url, 'status'=>1])->count();
         // echo $countCategory;die;
         if($countCategory==0){
             abort(404);
         }
         // echo $url; die;
         //Get parent categories their sub categories
         $categories = Category::with('categories')->where(['parent_id'=>0])->get();
 
         $categoryList = Category::where(['url' => $url])->first();
         // $categoryList = json_decode(json_encode($categoryList));
         // echo "<pre>"; print_r($categoryList);die;
 
         if($categoryList->parent_id==0){
             // if the url is a main category
             $subCategories = Category::where(['parent_id'=>$categoryList->id])->get();
 
             foreach($subCategories as $key => $subcat){
                 $cat_ids[] = $subcat->id;
             }
             // print_r ($cat_ids);die;
 
             $productsAll = Product::whereIn('category_id', $cat_ids)->get();
             // $productsAll = json_decode(json_encode($productsAll));
             // echo "<pre>"; print_r($productsAll);die;
         }
         else{
             // If the url is a sub category
             $productsAll = Product::where(['category_id' => $categoryList->id])->get();
         }
         // echo $category->id; die;
         
         // Return
         $data = array(
             'categories' => $categories,
             'categoryList' => $categoryList,
             'productsAll' => $productsAll,
         );
 
         return response()->json($data);
         // return view('products.list')->with(compact('categories','categoryList', 'productsAll'));
     }
}