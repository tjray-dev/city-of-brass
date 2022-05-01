class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :character_name
      t.integer :character_type, default: 0
      t.integer :mind
      t.integer :body
      t.integer :spirit

      t.timestamps
    end
  end
end
