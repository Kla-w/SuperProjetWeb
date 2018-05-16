<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class ProposeStage
 * 
 * @property \Carbon\Carbon $date_emission_stage
 * @property int $id_entreprise
 * @property int $id_stage
 * 
 * @property \App\Models\Entreprise $entreprise
 * @property \App\Models\OffreStage $offre_stage
 *
 * @package App\Models
 */
class ProposeStage extends Eloquent
{
	protected $table = 'propose_stage';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_entreprise' => 'int',
		'id_stage' => 'int'
	];

	protected $dates = [
		'date_emission_stage'
	];

	protected $fillable = [
		'date_emission_stage'
	];

	public function entreprise()
	{
		return $this->belongsTo(\App\Models\Entreprise::class, 'id_entreprise');
	}

	public function offre_stage()
	{
		return $this->belongsTo(\App\Models\OffreStage::class, 'id_stage');
	}
}
