<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Formation
 * 
 * @property int $id_formation
 * @property string $intitule_form
 * @property string $sigle_form
 * @property string $type_form
 * @property int $fk_id_specialite_form
 * @property int $fk_id_etablissement_form
 * 
 * @property \App\Models\Specialite $specialite
 * @property \App\Models\Etablissement $etablissement
 * @property \Illuminate\Database\Eloquent\Collection $a_effectues
 *
 * @package App\Models
 */
class Formation extends Eloquent
{
	protected $table = 'formation';
	protected $primaryKey = 'id_formation';
	public $timestamps = false;

	protected $casts = [
		'fk_id_specialite_form' => 'int',
		'fk_id_etablissement_form' => 'int'
	];

	protected $fillable = [
		'intitule_form',
		'sigle_form',
		'type_form',
		'fk_id_specialite_form',
		'fk_id_etablissement_form'
	];

	public function specialite()
	{
		return $this->belongsTo(\App\Models\Specialite::class, 'fk_id_specialite_form');
	}

	public function etablissement()
	{
		return $this->belongsTo(\App\Models\Etablissement::class, 'fk_id_etablissement_form');
	}

	public function a_effectues()
	{
		return $this->hasMany(\App\Models\AEffectue::class, 'fk_id_formation');
	}
}
