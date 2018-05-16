<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 07:36:51 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class AncienEtudiant
 * 
 * @property int $id_etud
 * @property string $nom_etud
 * @property string $prenom_etud
 * @property string $mail_etud
 * @property \Carbon\Carbon $promotion_etud
 * @property int $fk_id_specialite_etud
 * @property int $fk_id_cursus_etud
 * @property int $fk_id_moyenne_l3_etud
 * 
 * @property \App\Models\Cursus $cursus
 * @property \App\Models\MoyenneL3 $moyenne_l3
 * @property \App\Models\Specialite $specialite
 * @property \Illuminate\Database\Eloquent\Collection $a_effectues
 * @property \Illuminate\Database\Eloquent\Collection $postes
 *
 * @package App\Models
 */
class AncienEtudiant extends Eloquent
{
	protected $table = 'ancien_etudiant';
	protected $primaryKey = 'id_etud';
	public $timestamps = false;

	protected $casts = [
		'fk_id_specialite_etud' => 'int',
		'fk_id_cursus_etud' => 'int',
		'fk_id_moyenne_l3_etud' => 'int'
	];

	protected $dates = [
		'promotion_etud'
	];

	protected $fillable = [
		'nom_etud',
		'prenom_etud',
		'mail_etud',
		'promotion_etud',
		'fk_id_specialite_etud',
		'fk_id_cursus_etud',
		'fk_id_moyenne_l3_etud'
	];

	public function cursus()
	{
		return $this->belongsTo(\App\Models\Cursus::class, 'fk_id_cursus_etud');
	}

	public function moyenne_l3()
	{
		return $this->belongsTo(\App\Models\MoyenneL3::class, 'fk_id_moyenne_l3_etud');
	}

	public function specialite()
	{
		return $this->belongsTo(\App\Models\Specialite::class, 'fk_id_specialite_etud');
	}

	public function a_effectues()
	{
		return $this->hasMany(\App\Models\AEffectue::class, 'fk_id_etud');
	}

	public function postes()
	{
		return $this->hasMany(\App\Models\Poste::class, 'fk_id_etud_poste');
	}
}
