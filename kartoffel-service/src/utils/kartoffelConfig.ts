const kartoffelConfig = {
  valueObjects: {
    source: {
      values: ["oa_name", "es_name", "sf_name", "aka", "adNN_name", "city_name", "mir_name"],
      strongSources: ["oa_name"],
      primaryMap: {
        ads: "sf_name",
        unit2: "es",
      },
    },
    rank: {
      values: ["unknown", "rookie", "champion", "ultimate"],
    },
    serviceType: {
      values: ["A", "B", "C", "D", "E", "F", "G"],
    },
    digitalIdentityId: {
      domain: {
        values: ["rabiran.com", "jello.com", "adnn.com", "leonardo.com", "city.com"],
      },
    },
    EntityType: {
      Soldier: "agumon",
      Civilian: "digimon",
      GoalUser: "tamar",
    },
    Sex: {
      Male: "male",
      Female: "female",
    },
    digitalIdentityType: {
      DomainUser: "domainUser",
      VirtualUser: "virtualUser",
    },
  },
  db: {
    mongo: {
      connectionString:
        "mongodb://nitro:password123@localhost:27017/kartoffelMock?replicaSet=rs0&directConnection=true&ssl=false",
      poolSize: 10,
      modelNames: {
        group: "Group",
        digitalIdentity: "DigitalIdentity",
        entity: "Entity",
        role: "Role",
        eventOutbox: "EventMessage",
      },
    },
  },
  server: {
    port: 4000,
  },
};

export { kartoffelConfig };
