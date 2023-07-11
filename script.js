
    // JavaScript code
    function openPopup(url) {
      window.open(url, "_blank", "width=500,height=400");
    }
    
    var buttons = document.getElementsByClassName("button");
    
    Array.from(buttons).forEach(function(button) {
      button.addEventListener("click", function() {
        // Change button background color
        button.style.backgroundColor = "#ff0000";
        
        // Change list item text color
        var listItem = button.parentNode;
        listItem.style.color = "#ff0000";
        
        // Disable button
        button.disabled = true;
      });
    });

 