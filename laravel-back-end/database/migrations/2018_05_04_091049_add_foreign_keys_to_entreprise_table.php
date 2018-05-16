<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class AddForeignKeysToEntrepriseTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('entreprise', function(Blueprint $table)
		{
			$table->foreign('fk_id_region_ese', 'FK_entreprise_id_region')->references('id_region')->on('region')->onUpdate('RESTRICT')->onDelete('RESTRICT');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('entreprise', function(Blueprint $table)
		{
			$table->dropForeign('FK_entreprise_id_region');
		});
	}

}
