Item.create(name: 'longsword', item_type: 1)
Item.create(name: 'shield', item_type: 1)
Item.create(name: 'leather cap', item_type: 2)
Item.create(name: 'leather tunic', item_type: 3)
Item.create(name: 'leather trousers', item_type: 4)
Item.create(name: 'leather boots', item_type: 5)
Item.create(name: 'leather belt', item_type: 6)
Item.create(name: 'copper ring', item_type: 7)
Item.create(name: 'copper amulet'. item_type: 8)
puts 'items seeded!'

Characters.create(name: 'Skeleton', character_type: 0, mind: 1, body: 1, 
                  spirit: 1, strength: 1, agility: 1, fortitude: 1, sanity: 1,
                 knowlege: 1, reason: 1, faith: 1, will: 1, intuition: 1)
Characters.create(name: 'Zombie', character_type: 0, mind: 1, body: 1, 
                  spirit: 1, strength: 1, agility: 1, fortitude: 1, sanity: 1,
                 knowlege: 1, reason: 1, faith: 1, will: 1, intuition: 1)
Characters.create(name: 'Warrior', character_type: 0, mind: 1, body: 1, 
                  spirit: 1, strength: 1, agility: 1, fortitude: 1, sanity: 1,
                 knowlege: 1, reason: 1, faith: 1, will: 1, intuition: 1)
Characters.create(name: 'Champion', character_type: 0, mind: 1, body: 1, 
                  spirit: 1, strength: 1, agility: 1, fortitude: 1, sanity: 1,
                 knowlege: 1, reason: 1, faith: 1, will: 1, intuition: 1)
Characters.create(name: 'Minor Abomination', character_type: 0, mind: 1, body: 1, 
                  spirit: 1, strength: 1, agility: 1, fortitude: 1, sanity: 1,
                 knowlege: 1, reason: 1, faith: 1, will: 1, intuition: 1)
Characters.create(name: 'Acolyte', character_type: 0, mind: 1, body: 1, 
                  spirit: 1, strength: 1, agility: 1, fortitude: 1, sanity: 1,
                 knowlege: 1, reason: 1, faith: 1, will: 1, intuition: 1)
Characters.create(name: 'Inquisitor', character_type: 0, mind: 1, body: 1, 
                  spirit: 1, strength: 1, agility: 1, fortitude: 1, sanity: 1,
                 knowlege: 1, reason: 1, faith: 1, will: 1, intuition: 1)
puts 'characters seeded!'

Location.create(name: 'The Sheets', description: 'a cluster of shacks and moth-eaten stalls that sprawl out from the gates of Old Town.', size: 3)
puts 'locations seeded!'