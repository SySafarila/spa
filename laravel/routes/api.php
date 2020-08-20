<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/check', function () {
    return response()->json(Auth::check());
});

Route::post('/login', function (Request $request) {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        return response()->json([
            'login' => true
        ]);
    } else {
        return response()->json([
            'login' => false
        ]);
    }
});

Route::post('/register', function (Request $request) {
    User::create([
        'name' => ucwords($request->name),
        'email' => strtolower($request->email),
        'password' => $request->password
    ]);
    return response()->json([
        'register' => true
    ]);
});
