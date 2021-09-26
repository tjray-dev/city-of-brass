class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :character_name
      t.text :character_origin
      t.integer :character_type, default: 0
      t.integer :character_hp, default: 100
      t.integer :attack_bonus, default: 1
      t.integer :defense_bonus, default: 1

      t.timestamps
    end
  end
end
