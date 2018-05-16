<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class ProposeEmploi
 * 
 * @property \Carbon\Carbon $date_emission_emploi
 * @property int $id_entreprise
 * @property int $id_emploi
 * 
 * @property \App\Models\OffreEmploi $offre_emploi
 * @property \App\Models\Entreprise $entreprise
 *
 * @package App\Models
 */
class ProposeEmploi extends Eloquent
{
	protected $table = 'propose_emploi';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_entreprise' => 'int',
		'id_emploi' => 'int'
	];

	protected $dates = [
		'date_emission_emploi'
	];

	protected $fillable = [
		'date_emission_emploi'
	];

	public function offre_emploi()
	{
		return $this->belongsTo(\App\Models\OffreEmploi::class, 'id_emploi');
	}

	public function entreprise()
	{
		return $this->belongsTo(\App\Models\Entreprise::class, 'id_entreprise');
	}
}
