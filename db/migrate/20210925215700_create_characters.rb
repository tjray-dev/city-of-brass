class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :character_name
      t.string :character_origin
      t.integer :character_type
      t.integer :character_hp
      t.integer :attack_bonus
      t.integer :defense_bonus

      t.timestamps
    end
  end
end
