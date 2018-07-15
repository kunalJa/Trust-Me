const Web3 = require('web3');

if(typeof web3 != 'undefined') {
  console.log("Using web3 detected from external source like Metamask")
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

let TrustMe = artifacts.require("./TrustMe");

contract('TrustMe', function(accounts) {
  var trust_me;
  it("should retreive deplyoed contract", function(done) {
    TrustMe.deployed().then(function(instance) {
      trust_me = instance;
      console.log(web3.eth.getBalance(accounts[1]).toNumber()/1000000000000000000);
      // console.log("trust_me", trust_me);
      assert.isOk(trust_me);
      done();
    });
  })

  it("Should gain 1 ether", function(done) {
      console.log(web3.eth.getBalance(accounts[0]).toNumber()/1000000000000000000);
      trust_me.initializeFundraiser(accounts[1], 0);
      trust_me.donate(1, accounts[1], 0, {
          gas: 300000,
          from:accounts[0],
          to:accounts[1],
          value:web3.toWei(1, "ether")
      }).then(function(tx) {
        assert.isOk(tx.receipt);
        console.log(web3.eth.getBalance(accounts[0]).toNumber()/1000000000000000000);
        // done();
      });
      trust_me.withdraw(accounts[1], 0).then(function(result) {
        // assert.isTrue(result === true);
        console.log(web3.eth.getBalance(accounts[1]).toNumber()/1000000000000000000);
        done();
      });
  })
})
