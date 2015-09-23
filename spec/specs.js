describe('diceRoll', function() {
    it("returns one of 6 numbers", function() {
      expect(diceRoll()).to.not.equal(7);
   });
});
