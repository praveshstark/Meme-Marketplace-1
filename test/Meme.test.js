const Meme = artifacts.require('./Meme.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Meme', ([deployer, seller, buyer]) => {
  let meme_marketplace

  before(async () => {
    meme_marketplace = await Meme.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await meme_marketplace.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await meme_marketplace.name()
      assert.equal(name, 'Meme Marketplace')
    })
  })

  describe('memes', async () => {
    let result, memecount

    before(async () => {
      result = await meme_marketplace.createMeme('Main itni sundar hu to main kya kru ;)', web3.utils.toWei('1', 'Ether'), { from: seller })
      memecount = await meme_marketplace.memecount()
    })

    it('creates memes', async () => {
      // SUCCESS
      assert.equal(memecount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), memecount.toNumber(), 'id is correct')
      assert.equal(event.name, 'Main itni sundar hu to main kya kru ;)', 'name is correct')
      assert.equal(event.price, '1000000000000000000', 'price is correct')
      assert.equal(event.owner, seller, 'owner is correct')
      assert.equal(event.purchased, false, 'purchased is correct')

      // FAILURE: Meme must have a name
      await await meme_marketplace.createMeme('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
      // FAILURE: Meme must have a price
      await await meme_marketplace.createMeme('Main itni sundar hu to main kya kru ;)', 0, { from: seller }).should.be.rejected;
    })

    it('lists memes', async () => {
      const meme = await meme_marketplace.memes(memecount)
      assert.equal(meme.id.toNumber(), memecount.toNumber(), 'id is correct')
      assert.equal(meme.name, 'Main itni sundar hu to main kya kru ;)', 'name is correct')
      assert.equal(meme.price, '1000000000000000000', 'price is correct')
      assert.equal(meme.owner, seller, 'owner is correct')
      assert.equal(meme.purchased, false, 'purchased is correct')
    })

    it('sells memes', async () => {
      // Track the seller balance before purchase
      let oldSellerBalance
      oldSellerBalance = await web3.eth.getBalance(seller)
      oldSellerBalance = new web3.utils.BN(oldSellerBalance)

      // SUCCESS: Buyer makes purchase
      result = await meme_marketplace.purchasedMeme(memecount, { from: buyer, value: web3.utils.toWei('1', 'Ether')})

      // Check logs
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), memecount.toNumber(), 'id is correct')
      assert.equal(event.name, 'Main itni sundar hu to main kya kru ;)', 'name is correct')
      assert.equal(event.price, '1000000000000000000', 'price is correct')
      assert.equal(event.owner, buyer, 'owner is correct')
      assert.equal(event.purchased, true, 'purchased is correct')

      // Check that seller received funds
      let newSellerBalance
      newSellerBalance = await web3.eth.getBalance(seller)
      newSellerBalance = new web3.utils.BN(newSellerBalance)

      let price
      price = web3.utils.toWei('1', 'Ether')
      price = new web3.utils.BN(price)

      const exepectedBalance = oldSellerBalance.add(price)

      assert.equal(newSellerBalance.toString(), exepectedBalance.toString())

      // FAILURE: Tries to buy a product that does not exist, i.e., product must have valid id
      await meme_marketplace.purchasedMeme(99, { from: buyer, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;      // FAILURE: Buyer tries to buy without enough ether
      // FAILURE: Buyer tries to buy without enough ether
      await meme_marketplace.purchasedMeme(memecount, { from: buyer, value: web3.utils.toWei('0.5', 'Ether') }).should.be.rejected;
      // FAILURE: Deployer tries to buy the product, i.e., product can't be purchased twice
      await meme_marketplace.purchasedMeme(memecount, { from: deployer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
      // FAILURE: Buyer tries to buy again, i.e., buyer can't be the seller
      await meme_marketplace.purchasedMeme(memecount, { from: buyer, value: web3.utils.toWei('1', 'Ether') }).should.be.rejected;
    })

  })
})
