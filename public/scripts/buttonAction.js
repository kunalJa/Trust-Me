window.addEventListener('load', function() {
  if(typeof web3 != 'undefined') {
    console.log("Using web3 detected from external source like Metamask")
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
  }
})

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "ammount",
				"type": "uint256"
			},
			{
				"name": "organization",
				"type": "address"
			}
		],
		"name": "donate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "organization",
				"type": "address"
			}
		],
		"name": "initializeFundraiser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "organization",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

const myContractAddress = "0xfab958d10af58fb26c8f0f7ae1912ccbb0ee569c";
var myContract = web3.eth.contract(abi);
contractInstance = myContract.at(myContractAddress);

var buttonAction1 = function() {
  contractInstance.initializeFundraiser(0x92F52f890a70fB3c0cF23E1777464cec415108A4, (err, result) => {
    web3.eth.getBalance("0x92F52f890a70fB3c0cF23E1777464cec415108A4", (error, result) => {
      if (!error)
      console.log("charity: ", result/1000000000000000000);
    });
    web3.eth.getBalance("0xfab958d10af58fb26c8f0f7ae1912ccbb0ee569c", (error, result) => {
      if (!error)
        console.log("contract: ", result/1000000000000000000);
    });
  });
}

var buttonAction2 = function() {
  contractInstance.donate(1, 0x92F52f890a70fB3c0cF23E1777464cec415108A4, {
    gas: 300000,
    from: web3.eth.accounts[0],
    value: web3.toWei(1, "ether")
    }, (err, result) => {
    web3.eth.getBalance("0x92F52f890a70fB3c0cF23E1777464cec415108A4", (error, result) => {
      if (!error)
      console.log("charity: ", result/1000000000000000000);
    });
    web3.eth.getBalance("0xfab958d10af58fb26c8f0f7ae1912ccbb0ee569c", (error, result) => {
      if (!error)
        console.log("contract: ", result/1000000000000000000);
    });
  });
}

var buttonAction3 = function() {
  contractInstance.withdraw(0x92F52f890a70fB3c0cF23E1777464cec415108A4, {
    gasLimit: 1000000
    }, (err, result) => {
    if (!err) {
      console.log("GFG");
    }
    web3.eth.getBalance("0x92F52f890a70fB3c0cF23E1777464cec415108A4", (error, result) => {
      if (!error)
      console.log("charity: ", result/1000000000000000000);
    });
    web3.eth.getBalance("0xfab958d10af58fb26c8f0f7ae1912ccbb0ee569c", (error, result) => {
      if (!error)
        console.log("contract: ", result/1000000000000000000);
    });
  });
}
