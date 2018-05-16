<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Specialite
 * 
 * @property int $id_specialite
 * @property string $lib_specialite
 * 
 * @property \Illuminate\Database\Eloquent\Collection $ancien_etudiants
 * @property \Illuminate\Database\Eloquent\Collection $formations
 *
 * @package App\Models
 */
class Specialite extends Eloquent
{
	protected $table = 'specialite';
	protected $primaryKey = 'id_specialite';
	public $timestamps = false;

	protected $fillable = [
		'lib_specialite'
	];

	public function ancien_etudiants()
	{
		return $this->hasMany(\App\Models\AncienEtudiant::class, 'fk_id_specialite_etud');
	}

	public function formations()
	{
		return $this->hasMany(\App\Models\Formation::class, 'fk_id_specialite_form');
	}
}
