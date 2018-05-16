<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:51 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class AEffectue
 * 
 * @property \Carbon\Carbon $debut_formation
 * @property int $fk_id_formation
 * @property int $fk_id_etud
 * @property int $fk_statut_id
 * 
 * @property \App\Models\AncienEtudiant $ancien_etudiant
 * @property \App\Models\Formation $formation
 * @property \App\Models\Statut $statut
 *
 * @package App\Models
 */
class AEffectue extends Eloquent
{
	protected $table = 'a_effectue';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'fk_id_formation' => 'int',
		'fk_id_etud' => 'int',
		'fk_statut_id' => 'int'
	];

	protected $dates = [
		'debut_formation'
	];

	protected $fillable = [
		'debut_formation'
	];

	public function ancien_etudiant()
	{
		return $this->belongsTo(\App\Models\AncienEtudiant::class, 'fk_id_etud');
	}

	public function formation()
	{
		return $this->belongsTo(\App\Models\Formation::class, 'fk_id_formation');
	}

	public function statut()
	{
		return $this->belongsTo(\App\Models\Statut::class, 'fk_statut_id');
	}
}
