
# Character.create!(character_name: "Monster", character_origin: "Born", character_type: 1)
Character.create!(character_name: "Hero", character_origin: "Hero")
Character.create!(character_name: "Goblin King", character_origin: "Goblin", character_type: 1)
Character.create!(character_name: "Goblin Padfoot", character_origin: "Goblin", character_type: 1)
Character.create!(character_name: "Goblin Gnasher", character_origin: "Goblin", character_type: 1)
Character.create!(character_name: "Goblin Scrapper", character_origin: "Goblin", character_type: 1)
Character.create!(character_name: "Goblin Tosser", character_origin: "Goblin", character_type: 1)

sneak =Skill.create!(name: "Sneak", desc: "A skill...", skill_type: 0)
perception = Skill.create!(name: "Perception", desc: "A skill...", skill_type: 0)
athletics = Skill.create!(name: "Athletics", desc: "A skill...", skill_type: 0)
swords = Skill.create!(name: "Swords", desc: "A skill...", skill_type: 0)
shields = Skill.create!(name: "Shields", desc: "A skill...", skill_type: 0)

sword = Item.create!(name: "Sword", desc: "A  Simple Sword...", item_type: 0)
armor =Item.create!(name: "Armor", desc: "A Suite of Armor...", item_type: 0)
shield = Item.create!(name: "Shield", desc: "A Well Worn Shield...", item_type: 0)
oil_flask = Item.create!(name: "Oil Flask", desc: "Shatters, coating an enemy in oil", item_type: 0)
firebomb = Item.create!(name: "Firebomb", desc: "Explodes in an inferno", item_type: 0)

CharacterSkill.create!(character_id: Character.first.id, skill_id: sneak.id)
CharacterSkill.create!(character_id: Character.first.id, skill_id: perception.id)
CharacterSkill.create!(character_id: Character.first.id, skill_id: athletics.id)
CharacterSkill.create!(character_id: Character.first.id, skill_id: swords.id)
CharacterSkill.create!(character_id: Character.first.id, skill_id: shields.id)

CharacterItem.create!(character_id: Character.first.id, item_id: sword.id)
CharacterItem.create!(character_id: Character.first.id, item_id: armor.id)
CharacterItem.create!(character_id: Character.first.id, item_id: shield.id)
CharacterItem.create!(character_id: Character.first.id, item_id: oil_flask.id)
CharacterItem.create!(character_id: Character.first.id, item_id: firebomb.id)

User.create!(user_name: "Tate", password: "password", password_confirmation: "password", character_id: 1)
