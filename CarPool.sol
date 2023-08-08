// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CarpoolContract {

  

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

