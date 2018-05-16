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

Route::get('/', function () {
    return view('welcome');
});


//Routing for formations

Route::get('formations', 'FormationController@index');
Route::post('formations', 'FormationController@store');
Route::get('formations/{formation}', 'FormationController@show');
Route::post('formations/{id}', 'FormationController@update');
Route::post('formations/delete/{id}', 'FormationController@destroy');


//Routing for etablissement

Route::get('etablissements', 'FormationController@index');
Route::post('etablissements', 'FormationController@store');
Route::get('etablissements/{etablissement}', 'FormationController@show');
Route::post('etablissements/{id}', 'FormationController@update');
Route::post('etablissements/delete/{id}', 'FormationController@destroy');
