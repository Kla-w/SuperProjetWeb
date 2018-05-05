<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToAncienEtudiantTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('ancien_etudiant', function(Blueprint $table)
		{
			$table->foreign('fk_id_cursus_etud', 'FK_ancien_etudiant_id_cursus')->references('id_cursus')->on('cursus')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('fk_id_moyenne_l3_etud', 'FK_ancien_etudiant_id_moyenne')->references('id_moyenne')->on('moyenne_l3')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('fk_id_specialite_etud', 'FK_ancien_etudiant_id_specialite')->references('id_specialite')->on('specialite')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('ancien_etudiant', function(Blueprint $table)
		{
			$table->dropForeign('FK_ancien_etudiant_id_cursus');
			$table->dropForeign('FK_ancien_etudiant_id_moyenne');
			$table->dropForeign('FK_ancien_etudiant_id_specialite');
		});
	}

}
