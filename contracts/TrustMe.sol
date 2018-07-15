pragma solidity 0.4.24;

contract TrustMe {
    address owner;

    mapping(address => uint256) charities;

    constructor() public {
      owner = msg.sender;
   }

   function initializeFundraiser(address organization) public {
       charities[organization] = 0;
   }

   function donate(uint256 ammount, address organization) public payable {
        require(
           ammount > 0,
           "Invalid donation ammount"
        );

        charities[organization] += msg.value;
   }

   function withdraw(address organization) public {
       organization.transfer(charities[organization]);
   }

}
