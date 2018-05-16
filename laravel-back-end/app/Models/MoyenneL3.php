<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:52 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class MoyenneL3
 * 
 * @property int $id_moyenne
 * @property string $mention
 * 
 * @property \Illuminate\Database\Eloquent\Collection $ancien_etudiants
 *
 * @package App\Models
 */
class MoyenneL3 extends Eloquent
{
	protected $table = 'moyenne_l3';
	protected $primaryKey = 'id_moyenne';
	public $timestamps = false;

	protected $fillable = [
		'mention'
	];

	public function ancien_etudiants()
	{
		return $this->hasMany(\App\Models\AncienEtudiant::class, 'fk_id_moyenne_l3_etud');
	}
}
