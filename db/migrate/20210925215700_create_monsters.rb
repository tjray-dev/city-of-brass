class CreateMonsters < ActiveRecord::Migration[6.1]
  def change
    create_table :monsters do |t|
      t.string :monster_name
      t.integer :monster_type, default: 0
      t.integer :mind
      t.integer :body
      t.integer :spirit
      t.integer :strength
      t.integer :agility
      t.integer :fortitude
      t.integer :sanity
      t.integer :knowledge
      t.integer :reason
      t.integer :faith
      t.integer :will
      t.integer :intuition

      t.timestamps
    end
  end
end
