class CreateOrigins < ActiveRecord::Migration[6.1]
  def change
    create_table :origins do |t|
      t.string :name
      t.string :description
      t.integer :mind
      t.integer :body
      t.integer :spirit

      t.timestamps
    end
  end
end
