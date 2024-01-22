document.getElementById('saveTabs').addEventListener('click', function() {
    chrome.tabs.query({}, function(tabs) {
      var urls = tabs.map(tab => tab.url).join('\n');
      var blob = new Blob([urls], { type: 'text/plain' });
      var url = URL.createObjectURL(blob);
  
      chrome.downloads.download({
        url: url,
        filename: 'tabs.txt'
      });
    });
  });
  