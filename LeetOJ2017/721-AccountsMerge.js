class Person {
  constructor (name, emails) {
    // console.log('creating person', name, emails);
    this.name = name;
    this.emails = new Set(emails);
  }
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const emailToPersonMap = new Map();
  const peopleSet = new Set();

  const merge = (name, people) => {
    people.forEach(person => {
      peopleSet.delete(person);
    });
    const emails = people.reduce(
      (ret, person) => {
        person.emails.forEach(email => {
          ret.add(email);
        });
        return ret;
      },
      new Set()
    );
    const mergedPerson = new Person(name, emails);
    peopleSet.add(mergedPerson);
    return mergedPerson;
  };

  const getOrCreatePerson = (name, email) => {
    if (emailToPersonMap.has(email)) {
      return emailToPersonMap.get(email);
    }
    const person = new Person(name, new Set([email]));
    emailToPersonMap.set(email, person);
    return person;
  };

  accounts.forEach(([name, ...emails]) => {
    const people = emails.map(email => getOrCreatePerson(name, email));
    const person = merge(name, people);
    person.emails.forEach(email => {
      emailToPersonMap.set(email, person);
    });
  });
  const ret = [];
  peopleSet.forEach(person => {
    ret.push([
      person.name,
      ...Array.from(person.emails).sort()
    ]);
  });
  return ret;
};

export default accountsMerge;