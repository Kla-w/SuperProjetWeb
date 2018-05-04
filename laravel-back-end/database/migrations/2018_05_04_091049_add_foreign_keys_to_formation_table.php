<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToFormationTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('formation', function(Blueprint $table)
		{
			$table->foreign('fk_id_specialite_form', 'FK_fomation_id_specialite')->references('id_specialite')->on('specialite')->onUpdate('RESTRICT')->onDelete('RESTRICT');
			$table->foreign('fk_id_etablissement_form', 'FK_formation_id_etablissement')->references('id_etablissement')->on('etablissement')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('formation', function(Blueprint $table)
		{
			$table->dropForeign('FK_fomation_id_specialite');
			$table->dropForeign('FK_formation_id_etablissement');
		});
	}

}
