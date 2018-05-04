<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateCommentaireFormationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('commentaire_formation', function(Blueprint $table)
		{
			$table->integer('id_formation');
			$table->integer('id_etud')->index('FK_id_etud_commentaire');
			$table->string('commentaire', 2000)->nullable();
			$table->integer('note_profs')->nullable();
			$table->integer('note_cours')->nullable();
			$table->integer('note_ambiance')->nullable();
			$table->integer('note_campus')->nullable();
			$table->primary(['id_formation','id_etud']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('commentaire_formation');
	}

}
