<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEtablissementTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('etablissement', function(Blueprint $table)
		{
			$table->integer('id_etablissement', true);
			$table->string('nom_etab', 50)->nullable();
			$table->string('sigle_etab', 25)->nullable();
			$table->string('code_postal_etab', 25)->nullable();
			$table->string('ville_etab', 50)->nullable();
			$table->string('pays_etab', 50)->nullable();
			$table->string('fk_id_region_etab', 6)->nullable()->index('fk_id_region');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('etablissement');
	}

}
