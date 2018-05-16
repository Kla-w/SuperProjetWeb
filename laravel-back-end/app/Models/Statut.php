<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Statut
 * 
 * @property int $id_statut
 * @property string $lib_statut
 * 
 * @property \Illuminate\Database\Eloquent\Collection $a_effectues
 *
 * @package App\Models
 */
class Statut extends Eloquent
{
	protected $table = 'statut';
	protected $primaryKey = 'id_statut';
	public $timestamps = false;

	protected $fillable = [
		'lib_statut'
	];

	public function a_effectues()
	{
		return $this->hasMany(\App\Models\AEffectue::class, 'fk_statut_id');
	}
}
