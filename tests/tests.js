/* global Fingerprint */
/* eslint-disable no-alert, no-console */

exports.defineAutoTests = function() {
  describe("Decimal keyboard object", function () {
    it("should exist", function() {
      expect(window.DecimalKeyboard).toBeDefined();
    });
  });
};

exports.defineManualTests = function (contentEl, createActionButton) {

  createActionButton("some action", function () {
    window.DecimalKeyboard.isAvailable(isAvailableSuccess, isAvailableError);

    function isAvailableSuccess(result) {
      console.log(result);
      alert("Fingerprint available (" + result + ")");
    }

    function isAvailableError(error) {
      console.log(error);
      alert(error.message);
    }
  });

};
