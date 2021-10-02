
# Character.create!(character_name: "Monster", character_origin: "Born", character_type: 1)
Character.create!(character_name: "Hero", character_origin: "Hero")
Character.create!(character_name: "Goblin King", character_origin: "Goblin", character_type: 1)
Character.create!(character_name: "Goblin Padfoot", character_origin: "Goblin", character_type: 1)
Character.create!(character_name: "Goblin Gnasher", character_origin: "Goblin", character_type: 1)
Character.create!(character_name: "Goblin Scrapper", character_origin: "Goblin", character_type: 1)
Character.create!(character_name: "Goblin Tosser", character_origin: "Goblin", character_type: 1)

Skill.create!(name: "Skill", desc: "A skill...", skill_type: 0)

Item.create!(name: "Sword", desc: "A Sword...", item_type: 0)

CharacterSkill.create!(character_id: Character.first.id, skill_id: Skill.first.id)

User.create!(user_name: "Tate", password: "password", password_confirmation: "password", character_id: 1)
