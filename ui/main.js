var button = document.getElementById('counter');

button.onclick = function(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    request.open('GET', 'http://abhinay-sunny.imad.hasura-app.io/counter', true);
    request.send(null);
};


document.getElementById('submit_btn').onclick = function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var names = request.responseText;
                names=JSON.parse(names);
                var list = '';
                for (var i=0;i<names.length;i++){
                    list += '<li>' + names[i] + '</li>';
                }
                document.getElementById('namelist').innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name').value;
    request.open('GET', 'http://abhinay-sunny.imad.hasura-app.io/submit-name?name='+nameInput, true);
    request.send(null);
    
    
};
