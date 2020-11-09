pragma solidity ^0.5.0;

contact Meme {
    string public name;
    uint public memecount = 0;
    mapping(uint => Meme) public memes;

    struct Meme {
        uint id;
        string name;
        uint price;
        address payable owner;
        bool challenged;
        bool purchased;
    }

    event MemeCreated(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool challenged,
        bool purchased
    );

    event MemePurchased(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool challenged,
        bool purchased
    );
    event MemeChallenged(
        uint id,
        string name,
        uint price,
        address payable owner,
        bool challenged,
        bool purchased
    );

    constructor() public {
    name = "Meme Marketplace";
}

function createMeme(string memory _name, uint _price) public {
    require(bytes(_name).length >0);
    require(_price>0);
    memeCount++;
    memes[memeCount] = Meme(memecount, _name, _price, msg.sender, false);
    emit MemeCreated(memecount, _name, _price, msg.sender,false,false);
}

function purchasedMeme(uint _id) public payable {

    Meme memory _meme = memes[_id];
    address payable _seller = _meme.owner;
    require(_meme.id>0&&_meme.id<= memecount);
    require(msg.value>= _meme.price);
    require(!_meme.purchased);
    require(_seller != msg.sender);
    _meme.owner = msg.sender;
    _meme.purchased = true;
    memes[_id] = _meme;
    address(_seller).transfer(msg.value);
    emit memePurchased(memecount, _meme.name,meme.price,msg.sender,false,true);
}

function challengedMeme(uint _id) public {
    Meme memeory _meme =  memes[_id];
    require(_meme.id>0&&_meme.id<= memecount);
    require(msg.value>= _meme.price);
    require(!_meme.purchased);
    require(_seller != msg.sender);
    
    
    emit memeChallenged(memecount, _meme.name,meme.price,msg.sender,true,false);
}



}

