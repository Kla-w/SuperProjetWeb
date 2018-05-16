<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateAEffectueTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('a_effectue', function(Blueprint $table)
		{
			$table->date('debut_formation')->nullable();
			$table->integer('fk_id_formation')->index('id_formation');
			$table->integer('fk_id_etud')->index('FK_a_effectue_id_etud');
			$table->integer('fk_statut_id')->index('FK_a_effectue_id_statut');
			$table->primary(['fk_id_formation','fk_id_etud','fk_statut_id']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('a_effectue');
	}

}
