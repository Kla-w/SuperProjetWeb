<?php

/**
 * Created by Reliese Model.
 * Date: Fri, 06 Apr 2018 09:28:10 +0000.
 */

namespace App\Models;

use Reliese\Database\Eloquent\Model as Eloquent;

/**
 * Class CommentaireFormation
 * 
 * @property int $id_formation
 * @property int $id_etud
 * @property string $commentaire
 * @property int $note_profs
 * @property int $note_cours
 * @property int $note_ambiance
 * @property int $note_campus
 * 
 * @property \App\Models\AncienEtudiant $ancien_etudiant
 * @property \App\Models\Formation $formation
 *
 * @package App\Models
 */
class CommentaireFormation extends Eloquent
{
	protected $table = 'commentaire_formation';
	public $incrementing = false;
	public $timestamps = false;

	protected $casts = [
		'id_formation' => 'int',
		'id_etud' => 'int',
		'note_profs' => 'int',
		'note_cours' => 'int',
		'note_ambiance' => 'int',
		'note_campus' => 'int'
	];

	protected $fillable = [
		'commentaire',
		'note_profs',
		'note_cours',
		'note_ambiance',
		'note_campus'
	];

	public function ancien_etudiant()
	{
		return $this->belongsTo(\App\Models\AncienEtudiant::class, 'id_etud');
	}

	public function formation()
	{
		return $this->belongsTo(\App\Models\Formation::class, 'id_formation');
	}
}
