class CreateSkills < ActiveRecord::Migration[6.1]
  def change
    create_table :skills do |t|
      t.string :name
      t.string :desc
      t.integer :skill_type

      t.timestamps
    end
  end
end
