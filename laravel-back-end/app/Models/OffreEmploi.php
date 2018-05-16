<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class OffreEmploi
 * 
 * @property int $id_emploi
 * @property string $intitule_emploi
 * @property \Carbon\Carbon $debut_emploi
 * @property \Carbon\Carbon $fin_emploi
 * @property string $type_emploi
 * @property string $description_emploi
 * 
 * @property \Illuminate\Database\Eloquent\Collection $propose_emplois
 *
 * @package App\Models
 */
class OffreEmploi extends Eloquent
{
	protected $table = 'offre_emploi';
	protected $primaryKey = 'id_emploi';
	public $timestamps = false;

	protected $dates = [
		'debut_emploi',
		'fin_emploi'
	];

	protected $fillable = [
		'intitule_emploi',
		'debut_emploi',
		'fin_emploi',
		'type_emploi',
		'description_emploi'
	];

	public function propose_emplois()
	{
		return $this->hasMany(\App\Models\ProposeEmploi::class, 'id_emploi');
	}
}
