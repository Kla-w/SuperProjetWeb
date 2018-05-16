<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:51 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Entreprise
 * 
 * @property int $id_entreprise
 * @property string $nom_ese
 * @property string $adresse_ese
 * @property string $secteur_activite_ese
 * @property string $ville_ese
 * @property string $code_postal_ese
 * @property string $pays_ese
 * @property string $fk_id_region_ese
 * 
 * @property \App\Models\Region $region
 * @property \Illuminate\Database\Eloquent\Collection $postes
 * @property \Illuminate\Database\Eloquent\Collection $propose_emplois
 * @property \Illuminate\Database\Eloquent\Collection $propose_stages
 *
 * @package App\Models
 */
class Entreprise extends Eloquent
{
	protected $table = 'entreprise';
	protected $primaryKey = 'id_entreprise';
	public $timestamps = false;

	protected $fillable = [
		'nom_ese',
		'adresse_ese',
		'secteur_activite_ese',
		'ville_ese',
		'code_postal_ese',
		'pays_ese',
		'fk_id_region_ese'
	];

	public function region()
	{
		return $this->belongsTo(\App\Models\Region::class, 'fk_id_region_ese');
	}

	public function postes()
	{
		return $this->hasMany(\App\Models\Poste::class, 'fk_id_entreprise_poste');
	}

	public function propose_emplois()
	{
		return $this->hasMany(\App\Models\ProposeEmploi::class, 'id_entreprise');
	}

	public function propose_stages()
	{
		return $this->hasMany(\App\Models\ProposeStage::class, 'id_entreprise');
	}
}
