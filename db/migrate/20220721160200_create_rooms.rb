class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :description
      t.integer :location_id
      t.integer :enemy_amount

      t.timestamps
    end
  end
end
