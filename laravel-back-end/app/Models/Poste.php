<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Poste
 * 
 * @property string $intitule_poste
 * @property \Carbon\Carbon $debut_poste
 * @property \Carbon\Carbon $fin_poste
 * @property string $description_poste
 * @property string $specialite_poste
 * @property int $fk_id_etud_poste
 * @property int $fk_id_entreprise_poste
 * 
 * @property \App\Models\Entreprise $entreprise
 * @property \App\Models\AncienEtudiant $ancien_etudiant
 *
 * @package App\Models
 */
class Poste extends Eloquent
{
	protected $table = 'poste';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'fk_id_etud_poste' => 'int',
		'fk_id_entreprise_poste' => 'int'
	];

	protected $dates = [
		'debut_poste',
		'fin_poste'
	];

	protected $fillable = [
		'intitule_poste',
		'fin_poste',
		'description_poste',
		'specialite_poste'
	];

	public function entreprise()
	{
		return $this->belongsTo(\App\Models\Entreprise::class, 'fk_id_entreprise_poste');
	}

	public function ancien_etudiant()
	{
		return $this->belongsTo(\App\Models\AncienEtudiant::class, 'fk_id_etud_poste');
	}
}
