<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToCommentaireFormationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('commentaire_formation', function(Blueprint $table)
		{
			$table->foreign('id_etud', 'FK_id_etud_commentaire')->references('id_etud')->on('ancien_etudiant')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('id_formation', 'FK_id_formation_commentaire')->references('id_formation')->on('formation')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('commentaire_formation', function(Blueprint $table)
		{
			$table->dropForeign('FK_id_etud_commentaire');
			$table->dropForeign('FK_id_formation_commentaire');
		});
	}

}
