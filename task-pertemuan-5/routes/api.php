<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

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

// Route GET to return animals data 
Route::get('/animals', [AnimalController::class, 'index']);

// Route POST to return animals data 
Route::post('/animals', [AnimalController::class, 'store']);

// Route PUT to return animals data 
Route::put('/animals/{id}', [AnimalController::class, 'update']);

// Route DELETE to return animals data 
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);


# get all resource students
# method get
Route::get('/students', [StudentController::class, 'index']);

# menambahkan resource student
# method post
Route::post('/students', [StudentController::class, 'store']);

// Mengubah resorce student
# method put
Route::put('/students/{id}', [StudentController::class, 'update']);

// Menghapus resorce student
# method delete
Route::delete('/students/{id}', [StudentController::class, 'delete']);