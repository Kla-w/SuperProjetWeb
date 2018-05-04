<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProposeEmploiTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('propose_emploi', function(Blueprint $table)
		{
			$table->date('date_emission_emploi')->nullable();
			$table->integer('id_entreprise');
			$table->integer('id_emploi')->index('FK_propose_emploi_id_emploi');
			$table->primary(['id_entreprise','id_emploi']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('propose_emploi');
	}

}
