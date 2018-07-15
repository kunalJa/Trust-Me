pragma solidity 0.4.24;

contract TrustMe {
    address owner;

    struct fundraiser {
        uint256 unique_id;
        uint256 money;
    }

    mapping(address => fundraiser[]) charities;

    constructor() public {
      owner = msg.sender;
   }

   function initializeFundraiser(address organization, uint256 id) public {
       charities[organization].push(fundraiser(id, 0));
   }

   function donate(uint256 ammount, address organization, uint256 id) public payable {
        require(
           ammount > 0,
           "Invalid donation ammount"
        );

        charities[organization][id].money += msg.value;
   }

   function withdraw(address organization, uint256 id) public returns (bool) {
       uint amount = charities[organization][id].money;
       if (amount > 0) {
           charities[organization][id].money = 0;

           if (!organization.send(amount)) {
               charities[organization][id].money = amount;
               return false;
           }
       }
       return true;
   }

}
