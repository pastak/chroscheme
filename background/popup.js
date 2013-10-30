$(function(){
    window.init();
    $('#evalButton').on('click',function(){
        var txt = $('#txt').prop('value');
        window.clickEval();
    });
    var fontSizeSelector = $('#fontSize').on('change', function(event){
                var value = $(this).prop('value');
                $('textarea').css({fontSize : (value+'px')});
                localStorage.setItem('chroSchemeFontSize',value);
            })
;
    for(var i = 10; i <= 90; i++){
        fontSizeSelector.append(
            $('<option>').text((i+' px')).prop('value',i).prop('selected',(localStorage.getItem('chroSchemeFontSize') == i))
        );
    }
    $('textarea').css({fontSize : ((localStorage.getItem('chroSchemeFontSize')||'10')+'px')});
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
