$(function(){
    window.init();
    $('#evalButton').on('click',function(){
        var txt = $('#txt').prop('value');
        window.clickEval();
    });
    $('#clearInputButton').on('click',function(){
        $('txt').prop('value','');
    });
    $('#clearLogButton').on('click',function(){
        $('#log').prop('value','');
    });
    chrome.tabs.executeScript({
        file: '/content/content.js',
        runAt: 'document_end'
    },function(result){
        var res = result[0];
        if(res && res.text.length > 0){
            $('#txt').prop('value',res.text);
            window.clickEval();
        }
    })
})
