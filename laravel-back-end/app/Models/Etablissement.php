<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:51 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Etablissement
 * 
 * @property int $id_etablissement
 * @property string $nom_etab
 * @property string $sigle_etab
 * @property string $code_postal_etab
 * @property string $ville_etab
 * @property string $pays_etab
 * @property string $fk_id_region_etab
 * 
 * @property \App\Models\Region $region
 * @property \Illuminate\Database\Eloquent\Collection $formations
 *
 * @package App\Models
 */
class Etablissement extends Eloquent
{
	protected $table = 'etablissement';
	protected $primaryKey = 'id_etablissement';
	public $timestamps = false;

	protected $fillable = [
		'nom_etab',
		'sigle_etab',
		'code_postal_etab',
		'ville_etab',
		'pays_etab',
		'fk_id_region_etab'
	];

	public function region()
	{
		return $this->belongsTo(\App\Models\Region::class, 'fk_id_region_etab');
	}

	public function formations()
	{
		return $this->hasMany(\App\Models\Formation::class, 'fk_id_etablissement_form');
	}
}
