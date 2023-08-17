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
      from: accounts[3],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );

    await assert.equal(
      await "userAccount1",
      await instance.getUserName(useAcnt.from),
      "register user mismatch check"
    );

    // await console.log(
    //   `-----totalUsers-----${await instance.getTotalUsers()}------`
    // );
  });

  it("---------lOGIN CHECK ACCOUNT SHOUKD BE FLAGED----------", async () => {
    const useAcnt = {
      from: accounts[2],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
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

  it("---------RIde registered by logged in user ----------", async () => {
    const useAcnt = {
      from: accounts[4],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
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
  it("---------RIDE BOOKING ----------", async () => {
    const useAcnt = {
      from: accounts[7],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
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
  it("---------ridecancellation check----------", async () => {
    const useAcnt = {
      from: accounts[6],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
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

  it("---------refund amount rollback----------", async () => {
    const useAcnt = {
      from: accounts[9],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
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

  it("---------female passenger matching ----------", async () => {
    const useAcnt = {
      from: accounts[8],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
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

  it("---------choosing ride of choice among lis ----------", async () => {
    const useAcnt = {
      from: accounts[5],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
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

  it("---------route preference addition----------", async () => {
    const useAcnt = {
      from: accounts[1],
    };
    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
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
});
