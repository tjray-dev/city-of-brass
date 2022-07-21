class CreateBackgrounds < ActiveRecord::Migration[6.1]
  def change
    create_table :backgrounds do |t|
      t.string :name
      t.string :description
      t.integer :strength
      t.integer :agility
      t.integer :fortitude
      t.integer :sanity
      t.integer :reason
      t.integer :knowledge
      t.integer :faith
      t.integer :will
      t.integer :intuition

      t.timestamps
    end
  end
end
