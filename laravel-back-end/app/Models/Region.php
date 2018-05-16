<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Region
 * 
 * @property string $id_region
 * @property string $nom_region
 * 
 * @property \Illuminate\Database\Eloquent\Collection $entreprises
 * @property \Illuminate\Database\Eloquent\Collection $etablissements
 *
 * @package App\Models
 */
class Region extends Eloquent
{
	protected $table = 'region';
	protected $primaryKey = 'id_region';
	public $incrementing = false;
	public $timestamps = false;

	protected $fillable = [
		'nom_region'
	];

	public function entreprises()
	{
		return $this->hasMany(\App\Models\Entreprise::class, 'fk_id_region_ese');
	}

	public function etablissements()
	{
		return $this->hasMany(\App\Models\Etablissement::class, 'fk_id_region_etab');
	}
}
