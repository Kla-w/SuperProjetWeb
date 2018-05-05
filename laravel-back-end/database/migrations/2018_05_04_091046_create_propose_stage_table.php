<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateProposeStageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('propose_stage', function(Blueprint $table)
		{
			$table->date('date_emission_stage')->nullable();
			$table->integer('id_entreprise');
			$table->integer('id_stage')->index('FK_propose_stage_id_stage');
			$table->primary(['id_entreprise','id_stage']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('propose_stage');
	}

}
