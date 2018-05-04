<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOffreEmploiTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('offre_emploi', function(Blueprint $table)
		{
			$table->integer('id_emploi', true);
			$table->string('intitule_emploi', 100)->nullable();
			$table->date('debut_emploi')->nullable();
			$table->date('fin_emploi')->nullable();
			$table->string('type_emploi', 25)->nullable();
			$table->string('description_emploi', 250)->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('offre_emploi');
	}

}
