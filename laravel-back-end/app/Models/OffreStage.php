<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class OffreStage
 * 
 * @property int $id_stage
 * @property string $nom_stage
 * @property \Carbon\Carbon $debut_stage
 * @property \Carbon\Carbon $fin_stage
 * 
 * @property \Illuminate\Database\Eloquent\Collection $propose_stages
 *
 * @package App\Models
 */
class OffreStage extends Eloquent
{
	protected $table = 'offre_stage';
	protected $primaryKey = 'id_stage';
	public $timestamps = false;

	protected $dates = [
		'debut_stage',
		'fin_stage'
	];

	protected $fillable = [
		'nom_stage',
		'debut_stage',
		'fin_stage'
	];

	public function propose_stages()
	{
		return $this->hasMany(\App\Models\ProposeStage::class, 'id_stage');
	}
}
