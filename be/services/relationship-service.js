const personRepository = require('../repositories/person-repository');

class RelationshipService {
  async addParent(personId, parentId) {
    if (!personId || !parentId) {
      throw new Error('Person ID and parent ID are required');
    }

    // Validate both exist
    const person = await personRepository.findById(personId);
    const parent = await personRepository.findById(parentId);
    if (!person || !parent) {
      throw new Error('Person or parent not found');
    }

    // Check if already a parent
    if (person.parents.includes(parentId)) {
      throw new Error('Parent already exists');
    }

    // Add parent to person's parents array
    person.parents.push(parentId);
    await personRepository.update(personId, { parents: person.parents });

    // Add person to parent's children array
    if (!parent.children.includes(personId)) {
      parent.children.push(personId);
      await personRepository.update(parentId, { children: parent.children });
    }

    return { message: 'Parent added successfully' };
  }

  async addChild(personId, childId) {
    if (!personId || !childId) {
      throw new Error('Person ID and child ID are required');
    }

    // Validate both exist
    const person = await personRepository.findById(personId);
    const child = await personRepository.findById(childId);
    if (!person || !child) {
      throw new Error('Person or child not found');
    }

    // Check if already a child
    if (person.children.includes(childId)) {
      throw new Error('Child already exists');
    }

    // Add child to person's children array
    person.children.push(childId);
    await personRepository.update(personId, { children: person.children });

    // Add person to child's parents array
    if (!child.parents.includes(personId)) {
      child.parents.push(personId);
      await personRepository.update(childId, { parents: child.parents });
    }

    return { message: 'Child added successfully' };
  }

  async addSpouse(personId, spouseId) {
    if (!personId || !spouseId) {
      throw new Error('Person ID and spouse ID are required');
    }

    if (personId.toString() === spouseId.toString()) {
      throw new Error('Cannot marry yourself');
    }

    // Validate both exist
    const person = await personRepository.findById(personId);
    const spouse = await personRepository.findById(spouseId);
    if (!person || !spouse) {
      throw new Error('Person or spouse not found');
    }

    // Check if already spouses
    if (person.spouse && person.spouse.toString() === spouseId.toString()) {
      throw new Error('Already spouses');
    }

    // Clear previous spouses (assuming monogamy)
    if (person.spouse) {
      const previousSpouse = await personRepository.findById(person.spouse);
      if (previousSpouse) {
        await personRepository.update(person.spouse, { spouse: null });
      }
    }
    if (spouse.spouse) {
      const previousSpouseOfSpouse = await personRepository.findById(spouse.spouse);
      if (previousSpouseOfSpouse) {
        await personRepository.update(spouse.spouse, { spouse: null });
      }
    }

    // Set mutual spouses
    await personRepository.update(personId, { spouse: spouseId });
    await personRepository.update(spouseId, { spouse: personId });

    return { message: 'Spouses added successfully' };
  }
}

module.exports = new RelationshipService();