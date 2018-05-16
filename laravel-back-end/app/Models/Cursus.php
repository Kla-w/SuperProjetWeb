<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:51 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class Cursus
 * 
 * @property int $id_cursus
 * @property string $lib_cursus
 * 
 * @property \Illuminate\Database\Eloquent\Collection $ancien_etudiants
 *
 * @package App\Models
 */
class Cursus extends Eloquent
{
	protected $table = 'cursus';
	protected $primaryKey = 'id_cursus';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_cursus' => 'int'
	];

	protected $fillable = [
		'lib_cursus'
	];

	public function ancien_etudiants()
	{
		return $this->hasMany(\App\Models\zAncienEtudiant::class, 'fk_id_cursus_etud');
	}
}
