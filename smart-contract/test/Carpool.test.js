const CarpoolContract = artifacts.require("CarpoolContract"); // return artifact

contract("CarpoolContract", () => {
  it("Should deploy Cont", async () => {
    
    // will return contract instance
    const carpoolContract = await CarpoolContract.deployed();
    console.log(cont.address);
    assert(cont.address != "");
  });
});


// const ContractA = artifacts.require("Contract_test");
// 
// const addressA = '0x0E869320f0B73915568E628304fBfDb39af03495';
// 
// contract('ContractA', (accounts) => {
//   let instanceA ;
//   before(async () => {
//     instanceA = await ContractA.at(addressA);
//   });
// 
//   it('Test ', () => {
//     assert.ok(instanceA, 'Contract should be deployed');
//   });
// 
// });