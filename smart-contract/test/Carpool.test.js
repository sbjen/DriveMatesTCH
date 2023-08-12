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
      from: accounts[2],
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

    await console.log(
      `-----totalUsers-----${await instance.getTotalUsers()}------`
    );

    await instance.registerMe(
      "userAccount1",
      "Male",
      "sb7acc3@gmail.com",
      useAcnt
    );
  });


  
});
