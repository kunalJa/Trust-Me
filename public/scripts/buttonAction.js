// const Web3 = require('web3');

if(typeof web3 != 'undefined') {
  console.log("Using web3 detected from external source like Metamask")
  web3 = new Web3(web3.currentProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const MyContract = web3.eth.contract([[
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
			},
			{
				"name": "id",
				"type": "uint256"
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
			},
			{
				"name": "id",
				"type": "uint256"
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
			},
			{
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]]);

const ContractInstance = MyContract.at("0x1a4d220004887d17ef3fc752c46c99b1b2a3e3c8")

var buttonAction = function () {
  // ContractInstance.initializeFundraiser(0xa6Bdc9CFc79d4fd1906bCc98daf8203b89D93147, 0);
  console.log("HI");
}
