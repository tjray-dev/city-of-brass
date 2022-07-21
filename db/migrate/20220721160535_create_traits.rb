class CreateTraits < ActiveRecord::Migration[6.1]
  def change
    create_table :traits do |t|
      t.string :name
      t.string :description
      t.string :stat
      t.integer :modifier

      t.timestamps
    end
  end
end
