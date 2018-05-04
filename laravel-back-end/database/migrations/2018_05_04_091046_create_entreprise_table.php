<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEntrepriseTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('entreprise', function(Blueprint $table)
		{
			$table->integer('id_entreprise', true);
			$table->string('nom_ese', 100)->nullable();
			$table->string('adresse_ese', 150)->nullable();
			$table->string('secteur_activite_ese', 150)->nullable();
			$table->string('ville_ese', 50)->nullable();
			$table->string('code_postal_ese', 25)->nullable();
			$table->string('pays_ese', 50)->nullable();
			$table->string('fk_id_region_ese', 6)->nullable()->index('FK_entreprise_id_region');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('entreprise');
	}

}
