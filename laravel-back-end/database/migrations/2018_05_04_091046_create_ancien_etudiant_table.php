<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAncienEtudiantTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ancien_etudiant', function(Blueprint $table)
		{
			$table->integer('id_etud', true);
			$table->string('nom_etud', 50)->nullable();
			$table->string('prenom_etud', 25)->nullable();
			$table->string('mail_etud', 50)->nullable();
			$table->date('promotion_etud')->nullable();
			$table->integer('fk_id_specialite_etud')->nullable()->index('FK_ancien_etudiant_id_specialite');
			$table->integer('fk_id_cursus_etud')->nullable()->index('FK_ancien_etudiant_id_cursus');
			$table->integer('fk_id_moyenne_l3_etud')->nullable()->index('FK_ancien_etudiant_id_moyenne');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('ancien_etudiant');
	}

}
