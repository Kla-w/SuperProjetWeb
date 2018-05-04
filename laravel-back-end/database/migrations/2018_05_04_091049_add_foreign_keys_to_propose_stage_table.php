<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProposeStageTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('propose_stage', function(Blueprint $table)
		{
			$table->foreign('id_entreprise', 'FK_propose_stage_id_entreprise')->references('id_entreprise')->on('entreprise')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('id_stage', 'FK_propose_stage_id_stage')->references('id_stage')->on('offre_stage')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('propose_stage', function(Blueprint $table)
		{
			$table->dropForeign('FK_propose_stage_id_entreprise');
			$table->dropForeign('FK_propose_stage_id_stage');
		});
	}

}
