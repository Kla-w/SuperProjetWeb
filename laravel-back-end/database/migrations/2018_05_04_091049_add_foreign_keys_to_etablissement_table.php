<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToEtablissementTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('etablissement', function(Blueprint $table)
		{
			$table->foreign('fk_id_region_etab', 'FK_etablissement_id_region')->references('id_region')->on('region')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('etablissement', function(Blueprint $table)
		{
			$table->dropForeign('FK_etablissement_id_region');
		});
	}

}
