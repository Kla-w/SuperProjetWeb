<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToProposeEmploiTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('propose_emploi', function(Blueprint $table)
		{
			$table->foreign('id_emploi', 'FK_propose_emploi_id_emploi')->references('id_emploi')->on('offre_emploi')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('id_entreprise', 'FK_propose_emploi_id_entreprise')->references('id_entreprise')->on('entreprise')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('propose_emploi', function(Blueprint $table)
		{
			$table->dropForeign('FK_propose_emploi_id_emploi');
			$table->dropForeign('FK_propose_emploi_id_entreprise');
		});
	}

}
