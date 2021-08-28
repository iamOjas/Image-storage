const ImageStorage = artifacts.require("./ImageStorage.sol");

contract("ImageStorage", accounts => {
  it("...should store the value 'Hello World'", async () => {
    const ImageStorageInstance = await ImageStorage.deployed();

    // Set value of images to Hello World
    await ImageStorageInstance.set("Hello World", { from: accounts[0] });

    // Get stored value
    const storedData = await ImageStorageInstance.images.call(1);

    assert.equal(storedData, "Hello World", "The value Hello World was not stored.");
  });
});
