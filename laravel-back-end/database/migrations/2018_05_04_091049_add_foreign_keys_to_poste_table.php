<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToPosteTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('poste', function(Blueprint $table)
		{
			$table->foreign('fk_id_entreprise_poste', 'FK_poste_id_entreprise')->references('id_entreprise')->on('entreprise')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('fk_id_etud_poste', 'FK_poste_id_etud')->references('id_etud')->on('ancien_etudiant')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('poste', function(Blueprint $table)
		{
			$table->dropForeign('FK_poste_id_entreprise');
			$table->dropForeign('FK_poste_id_etud');
		});
	}

}
