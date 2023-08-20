// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract CarpoolContract {
    address public owner;
    uint16 public totalUsers;
    Ride[][] public arrayOfArrayOfRides;

    uint16 indexesForRide = 0;
    // will manage users
    struct Users {
        address userAddress;
        string userName;
        string userGender;
        string userContactNo;
        uint16 userId;
        uint256 userPassword;
        uint userTotalRidesOffered;
        string userCity;
    }

    struct Ride {
        address driver;
        string boarding;
        string destination;
        uint16 price;
        bool isAvailable;
        string city;
        uint8 maxPassengerCount;
        uint16 inTime;
        uint16 outTime;
        uint32 date;
    }

    mapping(address => bool) public passengers;
    // mapping(address => Ride) public rides;
    mapping(address => Users) public users;
    // mapping string eg guwahati07072002 perticular city perticular data available rides
    mapping(string => uint16) public mapDateCityCodeToInt;
    mapping(string => Ride[]) public mapDateTimeToRideArray;

    constructor() {
        //initalizing contract as 1st user
        owner = msg.sender;
        users[msg.sender] = Users({
            userName: "Brajendra Suman",
            userGender: "Male",
            userContactNo: "s.brajendra0707@gmail.com",
            userAddress: msg.sender,
            userId: 0,
            userTotalRidesOffered: 0,
            userPassword: 0,
            userCity: "guwahati"
            // assigned total users to 0
        });
        totalUsers = 0;
    }

    event UserRegistered(
        address indexed userAddress,
        string name,
        string gender,
        uint16 id,
        string userCity
    );

    event dataLoggedIn(
        address indexed userAddress,
        string name,
        string gender,
        uint16 id,
        string contactNo
    );

    event RideRegistered(Ride ride);
    event RideBooked(
        address indexed passenger,
        address indexed driver,
        string destination,
        uint256 price
    );
    event SearchRideLog(Ride[] ride);

    function getOwner() public view returns (address) {
        return owner;
    }

    function getTotalUsers() public view returns (uint16) {
        return totalUsers;
    }

    function getUserName(
        address _userAddress
    ) public view returns (string memory) {
        return users[_userAddress].userName;
    }

    function registerMe(
        string memory _name,
        string memory _gender,
        string memory _userContactNo,
        uint256 _userPassword,
        string memory _userCity
    ) public {
        require(
            msg.sender != users[msg.sender].userAddress,
            "you are already our user"
        );

        users[msg.sender] = Users({
            userName: _name,
            userGender: _gender,
            userContactNo: _userContactNo,
            userAddress: msg.sender,
            userId: totalUsers + 1,
            userPassword: _userPassword,
            userTotalRidesOffered: 0,
            userCity: _userCity
        });

        totalUsers = totalUsers + 1;

        emit UserRegistered(
            msg.sender,
            _name,
            _gender,
            totalUsers + 1,
            _userCity
        );
    }

    // mapping Users to address for unique registration from one address

    // testing

    // login function will check is user a user

    function logIn(
        uint256 _userPassword
    )
        public
        view
        returns (
            uint8,
            string memory,
            string memory,
            address,
            string memory,
            uint256
        )
    {
        // require(users[_userAddress].userId );

        if (users[msg.sender].userPassword == _userPassword) {
            return (
                111,
                users[msg.sender].userName,
                users[msg.sender].userCity,
                users[msg.sender].userAddress,
                users[msg.sender].userGender,
                users[msg.sender].userTotalRidesOffered
            );
        } else {
            return (0, " ", "no city", msg.sender, " ", 0);
        }
    }

    function registerRide(
        string memory _city,
        string memory _destination,
        string memory _boarding,
        uint16 _price,
        uint32 _date,
        uint8 _maxPassengerCount,
        uint16 _inTime,
        uint16 _outTime,
        string memory _cityDateCode
    ) public {
        require(_price > 0, "Price must be greater than zero");
        // require(
        //     !rides[msg.sender].isAvailable,
        //     "You have already registered a ride"
        // );

        Ride memory inst = Ride(
            msg.sender,
            _boarding,
            _destination,
            _price,
            true,
            _city,
            _maxPassengerCount,
            _inTime,
            _outTime,
            _date
        );

        mapDateTimeToRideArray[_cityDateCode].push(inst);
        users[msg.sender].userTotalRidesOffered += 1;

        emit RideRegistered(mapDateTimeToRideArray[_cityDateCode][0]);
    }

    function searchRides(
        string memory _cityDateCode
    ) public returns (uint8, string memory) {
        Ride[] memory ride = mapDateTimeToRideArray[_cityDateCode];
        if (ride.length > 0) {
            
            emit SearchRideLog(ride);
            return (1, "rides are available");

        } else {
            return (0, "rides are not available");
        }

        // Ride[] inst = Ride[];
    }

    //     function bookRide(address _driver) public payable {
    //         require(
    //             rides[_driver].isAvailable,
    //             "Driver is not offering a ride or already booked"
    //         );
    //         require(msg.value <= rides[_driver].price, "Insufficient payment");
    // 
    //         rides[_driver].isAvailable = false;
    //         passengers[_driver] = true;
    // 
    //         emit RideBooked(
    //             msg.sender,
    //             _driver,
    //             rides[_driver].destination,
    //             rides[_driver].price
    //         );
    //     }
}
