<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use Session;

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

    public function logout()
    {
        Session::flush();
        return redirect('/admin')->with('flash_message_success', 'Logged out successfully');
    }

    public function settings()
    {
        return view('admin.settings');  
    }
}