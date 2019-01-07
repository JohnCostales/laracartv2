<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;
use App\User; // Add User Model
use Illuminate\Support\Facades\Hash; // Check Hash Password

class AdminController extends Controller
{
    public function login(Request $request) {
        if ($request->isMethod('post')) {
            $data = $request->input();
            //Attempt to login
            if (Auth::attempt(['email' => $data['email'], 'password' => $data['password'], 'admin' => '1'])) {
                //Load the admin dashboard
                Session::put('adminSession', $data['email']);
                return redirect('/admin/dashboard')->with('flash_message_success', 'Login Successfull');
            } else if (Auth::attempt(['email' => $data['email'], 'password' => $data['password'], 'admin' => '0'])) {
                echo "Login Successfull for User";
                die;
            } else {
                return redirect('/admin')->with('flash_message_error', 'Invalid Email Or password');
            }
        } elseif (Session::has('adminSession')) {
            return redirect('/admin/dashboard')->with('flash_message_success', 'Login Successfull');
        }
        return view('admin.admin_login');
    }

    public function dashboard()
    {
        // if(Session::has('adminSession')){
        //     // Perform all dashboard task
        // } else{
        //     return redirect('/admin')->with('flash_message_error','Please login to access');
        // }
        return view('admin.dashboard');
    }

    public function settings()
    {
        return view('admin.settings');  
    }

    public function checkPassword(Request $request)
    {
        $data = $request->all();
        $current_password = $data['current_pwd'];
        $check_password = User::where(['admin'=>'1'])->first();
        if(Hash::check($current_password,$check_password->password)){
            echo "true"; die;
        } else {
            echo "false"; die;
        }
    }  

    //  Check current password and if correct then update and return to settings page with success 
    public function updatePassword(Request $request)
    {
       if($request->isMethod('post')){
           $data = $request->all();
        //    echo "<pre>"; 
        //    print_r($data); 
        //    die;
        $check_password = User::where(['email' => Auth::user()->email])->first();
        $current_password = $data['current_pwd'];
        if(Hash::check($current_password, $check_password->password)){
            $password = bcrypt($data['new_pwd']);
            User::where('id','1')->update(['password'=>$password]);
            return redirect('/admin/settings')->with('flash_message_success','Password updated successfully!');
        }else {
            return redirect('/admin/settings')->with('flash_message_error','Incorrect Password!');
        }
       }
    }

    public function logout()
    {
        Session::flush();
        return redirect('/admin')->with('flash_message_success', 'Logged out successfully');
    }
}