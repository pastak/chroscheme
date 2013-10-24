$(function(){
    $('#evalBtn').on('click',function(){
        var txt = $('#evalTextInput').prop('value');
        window.clickEval(txt);
    });
    $('#clearLogBtn').on('click',function(){
        $('#log').prop('value','');
    });
    chrome.tabs.executeScript({
        file: '/content/content.js',
        runAt: 'document_end'
    },function(result){
        var res = result[0];
        if(res && res.text.length > 0){
            $('#evalTextInput').prop('value',res.text);
            window.clickEval(res.text);
        }
    })
})
