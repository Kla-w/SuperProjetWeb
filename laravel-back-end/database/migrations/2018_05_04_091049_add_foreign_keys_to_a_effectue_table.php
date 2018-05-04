<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToAEffectueTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('a_effectue', function(Blueprint $table)
		{
			$table->foreign('fk_id_etud', 'FK_a_effectue_id_etud')->references('id_etud')->on('ancien_etudiant')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('fk_id_formation', 'FK_a_effectue_id_formation')->references('id_formation')->on('formation')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('fk_statut_id', 'FK_a_effectue_id_statut')->references('id_statut')->on('statut')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('a_effectue', function(Blueprint $table)
		{
			$table->dropForeign('FK_a_effectue_id_etud');
			$table->dropForeign('FK_a_effectue_id_formation');
			$table->dropForeign('FK_a_effectue_id_statut');
		});
	}

}
