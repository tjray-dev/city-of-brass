class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :location_name
      t.text :location_description
      t.integer :location_type

      t.timestamps
    end
  end
end
