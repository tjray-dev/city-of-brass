class CreateCharacterItems < ActiveRecord::Migration[6.1]
  def change
    create_table :character_items do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true
      t.integer :level

      t.timestamps
    end
  end
end
