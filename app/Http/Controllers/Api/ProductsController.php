<?php

namespace App\Http\Controllers\Api;

//-- HEADERS --//
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
// Extensions
use Image;
use Auth;
use Session;
// Models used
use App\Category;
use App\Product;
use App\ProductsAttribute;

class ProductsController extends Controller
{
    //-------------------------------
    /*--- Main page controllers ---*/
    //-------------------------------

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

    public function product($id){
        // Product Details
        $productDetails = Product::with('attributes')->where('id', $id)->first();
        // $productDetails = json_decode(json_encode($productDetails));
        // echo "<pre>"; print_r($productDetails); die;
        
        //Get parent categories their sub categories
        $categories = Category::with('categories')->where(['parent_id'=>0])->get();

        //  Calculate the sum of total item stock
        $totalStock = ProductsAttribute::where('product_id', $id)->sum('stock');
        // echo $totalStock; die;

        // Return
        // return view('products.detail')->with(compact('productDetails', 'categories', 'totalStock'));
        $data = array(
            'productDetails' => $productDetails,
            'categories' => $categories,
            'totalStock' => $totalStock,
        );

        return response()->json($data);
    }

    // Get product attribute price by product id
    public function getProductPrice(Request $request){
        $data = $request->all();
        // echo '<pre>'; print_r($data); die;
        $prodArray = explode("-", $data['idSize']);
        // echo $prodArray[0]; echo $prodArray[1]; die;
        $prodAttr = ProductsAttribute::where(['product_id' => $prodArray[0], 'size' => $prodArray[1]])->first();
        echo $prodAttr->price;
        echo "#";
        echo $prodAttr->stock;
    }
}
