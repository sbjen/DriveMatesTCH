// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarpoolContract {

    address public owner;
    uint256 public totalUsers;
     
    function getOwner() public view returns (address) {
        return owner;
    }


// will manage users
    struct Users{
        address userAddress;
        string userName;
        string userGender;
        string userContactNo;
        uint256 userId;
        
    }
        function getTotalUsers() public view returns (uint256) {
        return totalUsers;
    }

    // mapping Users to address for unique registration from one address
    mapping(address => Users) public users;


// testing 
    function getUserName(address _userAddress) public view returns (string memory) {
        return users[_userAddress].userName;
    }


// login function will check is user a user
    function logIn(address _userAddress, uint256 _userId)public view returns(uint256){
        // require(users[_userAddress].userId );
        if(users[_userAddress].userId == _userId){
            return 1;
        }

        else return 0;
    }

    event UserRegistered(address indexed userAddress, string name, string gender, uint256 id);


    function registerMe(string memory _name, string memory _gender, string memory _contactNo) public {
    

        require( msg.sender != users[msg.sender].userAddress , "you are already our user");

        users[msg.sender] = Users( 
            {
                userName:_name,
                userGender:_gender,
                userContactNo:_contactNo,
                userAddress:msg.sender,
                userId: totalUsers + 1
                
            }
        );

        totalUsers = totalUsers + 1;

        emit UserRegistered(msg.sender,_name, _gender, totalUsers + 1);

    }

       constructor ()  {

        //initalizing contract as 1st user
         owner = msg.sender;
         users[msg.sender] = Users( 
            {
                userName:"Brajendra Suman",
                userGender:"Male",
                userContactNo:"s.brajendra0707@gmail.com",
                userAddress:msg.sender,
                userId: 0
                
                // assigned total users to 0
            }
         );
         totalUsers = 0;


      
   }

  

    struct Ride {
        address driver;
        string boarding;
        string destination;
        uint256 price;
        bool isAvailable;
    }

    mapping(address => Ride) public rides;
    
    mapping(address => bool) public passengers;

    event RideRegistered(address indexed driver, string boarding, string destination, uint256 price);
    event RideBooked(address indexed passenger, address indexed driver, string destination, uint256 price);



    function registerRide(string memory _destination,string memory _boarding, uint256 _price) public {
        require(_price > 0, "Price must be greater than zero");
        require(!rides[msg.sender].isAvailable, "You have already registered a ride");

// registering ride from current account
        rides[msg.sender] = Ride({
            boarding:_boarding,
            driver: msg.sender,
            destination: _destination,
            price: _price,
            isAvailable: true
        });

        emit RideRegistered(msg.sender,_boarding, _destination, _price);
    }



    function bookRide(address _driver) public payable {
        require(rides[_driver].isAvailable, "Driver is not offering a ride or already booked");
        require(msg.value <= rides[_driver].price, "Insufficient payment");

        rides[_driver].isAvailable = false;
        passengers[_driver] = true;

        emit RideBooked(msg.sender, _driver, rides[_driver].destination, rides[_driver].price);
    }

    function withdrawPayment() public {
        require(passengers[msg.sender], "No payment to withdraw");

        uint256 payment = rides[msg.sender].price;
        passengers[msg.sender] = false;
        rides[msg.sender].isAvailable = true;

        (bool success, ) = msg.sender.call{value: payment}("");
        require(success, "Payment withdrawal failed");
    }
}

