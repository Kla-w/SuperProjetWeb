<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateOffreStageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('offre_stage', function(Blueprint $table)
		{
			$table->integer('id_stage', true);
			$table->string('nom_stage', 100)->nullable();
			$table->date('debut_stage')->nullable();
			$table->date('fin_stage')->nullable();
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('offre_stage');
	}

}
