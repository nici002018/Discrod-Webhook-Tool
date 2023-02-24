
                var url = "";
                var name = "";
                var image = "";
                
                function sendMessage() {
                        url = document.getElementById("webhook-url").value;
                        var message = document.getElementById("message").value;

                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", url, true);
                        xhr.setRequestHeader('Content-type', 'application/json');
                        xhr.onreadystatechange = function() {
                                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 204) {
                                        alert("Message sent successfully!");
                                }
                        };
                        var data = JSON.stringify({"content": message});
                        xhr.send(data);
                }
                
                function changeName() {
                        url = document.getElementById("webhook-url").value;
                        name = document.getElementById("webhook-name").value;

                        var xhr = new XMLHttpRequest();
                        xhr.open("PATCH", url, true);
                        xhr.setRequestHeader('Content-type', 'application/json');
                        xhr.onreadystatechange = function() {
                                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 204) {
                                        alert("Webhook name changed successfully!");
                                }
                        };
                        var data = JSON.stringify({"name": name});
                        xhr.send(data);
                }
                

                function deleteWebhook() {
                        var url = document.getElementById("webhook-url").value;
                        var request = new XMLHttpRequest();
                        request.open("DELETE", url);
                        request.send();
                        alert("Webhook has been deleted.");
                }