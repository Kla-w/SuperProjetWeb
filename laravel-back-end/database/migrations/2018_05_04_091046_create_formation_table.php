<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateFormationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('formation', function(Blueprint $table)
		{
			$table->integer('id_formation', true);
			$table->string('intitule_form', 100)->nullable();
			$table->string('sigle_form', 25)->nullable();
			$table->string('type_form', 50)->nullable();
			$table->integer('fk_id_specialite_form')->nullable()->index('FK_fomation_id_specialite');
			$table->integer('fk_id_etablissement_form')->nullable()->index('FK_formation_id_etablissement');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('formation');
	}

}
