<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePosteTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('poste', function(Blueprint $table)
		{
			$table->string('intitule_poste', 200);
			$table->date('debut_poste')->default(0000);
			$table->date('fin_poste')->nullable();
			$table->string('description_poste', 500)->nullable();
			$table->string('specialite_poste', 100)->nullable();
			$table->integer('fk_id_etud_poste');
			$table->integer('fk_id_entreprise_poste')->index('FK_poste_id_entreprise');
			$table->primary(['fk_id_etud_poste','fk_id_entreprise_poste','debut_poste']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('poste');
	}

}
