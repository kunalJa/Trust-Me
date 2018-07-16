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

const myContractAddress = "0xbb52f0eae5fef07dc52a10e597ea2301cd7a4900";
var myContract = web3.eth.contract(abi);
contractInstance = myContract.at(myContractAddress);

var buttonAction1 = function() {
  contractInstance.initializeFundraiser(0xa6Bdc9CFc79d4fd1906bCc98daf8203b89D93147, (err, result) => {
    web3.eth.getBalance("0xa6Bdc9CFc79d4fd1906bCc98daf8203b89D93147", (error, result) => {
      if (!error)
      console.log("charity: ", result/1000000000000000000);
    });
    web3.eth.getBalance("0xbb52f0eae5fef07dc52a10e597ea2301cd7a4900", (error, result) => {
      if (!error)
        console.log("contract: ", result/1000000000000000000);
    });
  });
}

var buttonAction2 = function() {
  contractInstance.donate(1, 0xa6Bdc9CFc79d4fd1906bCc98daf8203b89D93147, {
    gas: 300000,
    from: web3.eth.accounts[0],
    value: web3.toWei(1, "ether")
    }, (err, result) => {
    web3.eth.getBalance("0xa6Bdc9CFc79d4fd1906bCc98daf8203b89D93147", (error, result) => {
      if (!error)
      console.log("charity: ", result/1000000000000000000);
    });
    web3.eth.getBalance("0xbb52f0eae5fef07dc52a10e597ea2301cd7a4900", (error, result) => {
      if (!error)
        console.log("contract: ", result/1000000000000000000);
    });
  });
	let loadingBar = document.getElementById("loading-bar");
	loadingBar.style.width = "40%";
	let moneyRaised = document.getElementById("money-raised");
	moneyRaised.innerHTML = "1 Ether raised"
}

var buttonAction3 = function() {
  contractInstance.withdraw(0xa6Bdc9CFc79d4fd1906bCc98daf8203b89D93147, {
    gasLimit: 1000000
    }, (err, result) => {
    if (!err) {
      console.log("GFG");
    }
    web3.eth.getBalance("0xa6Bdc9CFc79d4fd1906bCc98daf8203b89D93147", (error, result) => {
      if (!error)
      console.log("charity: ", result/1000000000000000000);
    });
    web3.eth.getBalance("0xbb52f0eae5fef07dc52a10e597ea2301cd7a4900", (error, result) => {
      if (!error)
        console.log("contract: ", result/1000000000000000000);
    });
    web3.eth.sendTransaction({to:"0xa6Bdc9CFc79d4fd1906bCc98daf8203b89D93147", from:"0x3502b25b195f245c07a9AA16505190B389dFce9f", value:web3.toWei("1", "ether")}, (error, result) => {
      console.log("hello");
    });
   // 0x9fA8a8eE12ECfe1f4f457610076344598611f1a8 donor1
  });
}
