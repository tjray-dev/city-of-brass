class CreateCharacterSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :character_skills do |t|
      t.belongs_to :skill, null: false, foreign_key: true
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
