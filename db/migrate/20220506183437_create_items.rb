class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :item_name
      t.integer :item_type
      t.integer :item_effect
      t.integer :item_level

      t.timestamps
    end
  end
end
