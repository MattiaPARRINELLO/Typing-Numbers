const updateBadge = () => {
  chrome.storage.local.get(["json"], function (result) {
    if (result) {
      // if there is a json, convert the number of char to not exceed 4 digits
      let number = result.json.number;
      if (result.json.number > 1000) {
        // tranform it to x.xk
        number = number / 1000;
        number = number.toFixed(1);
        // if the number is 1.0k, transform it to 1k
        if (number.charAt(2) === "0") {
          number = number.charAt(0) + number.charAt(1);
        }
        // if the number is xxxx.xk transform it to x.xM
        if (number > 1000) {
          number = number / 1000;
          number = number.toFixed(1);
          number = number + "M";
        } else {
          number = number + "k";
        }
      } else {
        number = number.toString();
      }
      // update the badg
      chrome.action.setBadgeText({ text: number });
    }
  });
};

// update the badge every 100ms
setInterval(updateBadge, 100);
chrome.action.setBadgeText({ text: "0" });
