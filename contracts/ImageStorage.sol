
pragma solidity >=0.4.21 <0.7.0;

contract ImageStorage {
  uint public imageCount;

  mapping(uint => string) public images;

  function set(string memory _path) public {
    imageCount++;
    images[imageCount] = _path;
  }

}
