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
var accountsMerge0 = function(accounts) {
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

//--------------------------------------------------------------------------------------------------

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {

  const graph = new Map();
  const addEdge = (graph, email1, email2) => {
    if (!graph.has(email1)) {
      graph.set(email1, new Set());
    }
    graph.get(email1).add(email2);
    if (!graph.has(email2)) {
      graph.set(email2, new Set());
    }
    graph.get(email2).add(email1);
  };

  const emailToNameMap = new Map();
  accounts.forEach(([name, ...emails]) => {
    emails.forEach(email => {
      emailToNameMap.set(email, name);
    });
    const [first, ...rest] = emails;
    rest.forEach(email => {
      addEdge(graph, first, email);
    });
  });

  const visited = new Set();
  const dfs = (rootEmail) => {
    const emails = new Set();
    const stack = [rootEmail];
    while (stack.length) {
      const email = stack.pop();
      visited.add(email);
      emails.add(email);
      if (graph.has(email)) {
        graph.get(email).forEach(neighbor => {
          visited.has(neighbor) || stack.push(neighbor);
        });
      }
    }
    return Array.from(emails);
  };

  const ret = [];
  Array.from(emailToNameMap.keys()).forEach(email => {
    if (!visited.has(email)) {
      ret.push([
        emailToNameMap.get(email),
        ...dfs(email).sort()
      ]);
    }
  });
  return ret;
};

export default accountsMerge;