const CarpoolContract = artifacts.require("CarpoolContract"); // return artifact

// all accounts in blockchain will be stored in this {accoutns} variable
contract("CarpoolContract", (accounts) => {
  let instance;
  let owner;

  before(async () => {
    instance = await CarpoolContract.deployed(); // Deploy the contract before tests
  });

  before;
  it("---------deployement & owner name should match----------", async () => {
    // will return contract instance
    // const carpoolContract = await CarpoolContract.deployed();

    const owner = instance.getOwner();
    assert.equal(await owner, accounts[0], "owner account dismatch error");

    assert.equal(
      await instance.getUserName(accounts[0]),
      "Brajendra Suman",
      "dismatch in 1st owner"
    );
  });

  it("--------- user register functionality ----------", async () => {
    const useAcnt = {
      from: accounts[1],
    };
    await instance.registerMe(
      "user 2",
      "Male",
      "sb7acc3@gmail.com",
      "1111",
      "assam",
      useAcnt
    );

    console.log(`-----totalUsers-----${await instance.getTotalUsers()}------`);
  });

  it("--------- Registred Accound login check ----------", async () => {
    const useAcnt = {
      from: accounts[1],
    };

    const data = await instance.logIn(1111, useAcnt);
    console.log("data is : ");
    console.log(data);
  });

  it("---------RIde registered by logged in user ----------", async () => {

    const useAcnt = {
      from: accounts[1],
    };

    const tx = await instance.registerRide("guwahati", "dest: Jalukbari", " board: camous",200,7072002,3,155,255,"guwahati07072002",useAcnt);
    
    const logs = tx.receipt.logs;
    console.log(`---------log---------`)
    console.log(logs[0].args);

  });
  it("---------RIDE BOOKING ----------", async () => {});
  it("---------ridecancellation check----------", async () => {});

  it("---------refund amount rollback----------", async () => {});

  it("---------female passenger matching ----------", async () => {});

  it("---------choosing ride of choice among lis ----------", async () => {});

  it("---------route preference addition----------", async () => {});
});
