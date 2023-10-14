function shuffle()
{
    var tab_pos=new Array();
    while(tab_pos.length<6){
        var numero =Math.round(Math.random()*100);
        if((numero==11)||(numero==12)||(numero==13)||(numero==21)||(numero==22)||(numero==23)){
            if(!tab_pos.includes(numero))
            {
                tab_pos[tab_pos.length]=numero;
            }
        }
    }
    document.getElementById('p11').textContent=tab_pos[0];
    document.getElementById('p11').style.background='url('+tab_pos[0]+'.jpeg)';

    document.getElementById('p12').textContent=tab_pos[1];
    document.getElementById('p12').style.background='url('+tab_pos[1]+'.jpeg)';

    document.getElementById('p13').textContent=tab_pos[2];
    document.getElementById('p13').style.background='url('+tab_pos[2]+'.jpeg)';

    document.getElementById('p21').textContent=tab_pos[3];
    document.getElementById('p21').style.background='url('+tab_pos[3]+'.jpeg)';

    document.getElementById('p22').textContent=tab_pos[4];
    document.getElementById('p22').style.background='url('+tab_pos[4]+'.jpeg)';

    document.getElementById('p23').textContent=tab_pos[5];
    document.getElementById('p23').style.background='url('+tab_pos[5]+'.jpeg)';

}
function switching(cell)
{
    if(document.getElementById(cell).textContent!='11')
    {
        switch(cell)
        {
            case 'p11':
                if(document.getElementById('p12').textContent=='11'){
                    var temp_val=document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent=document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent=temp_val;
                    document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpeg)';
                    document.getElementById('p12').style.background='url('+document.getElementById('p12').textContent+'.jpeg)';
                }
                if(document.getElementById('p21').textContent=='11'){
                    var temp_val=document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent=document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent=temp_val;
                    document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpeg)';
                    document.getElementById('p21').style.background='url('+document.getElementById('p21').textContent+'.jpeg)';
                }
                
                break;
            case 'p12':
                if(document.getElementById('p11').textContent=='11'){
                    var temp_val=document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent=document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent=temp_val;
                    document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpeg)';
                    document.getElementById('p12').style.background='url('+document.getElementById('p12').textContent+'.jpeg)';
                }
                if(document.getElementById('p13').textContent=='11'){
                    var temp_val=document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent=document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent=temp_val;
                    document.getElementById('p13').style.background='url('+document.getElementById('p13').textContent+'.jpeg)';
                    document.getElementById('p12').style.background='url('+document.getElementById('p12').textContent+'.jpeg)';
                }
                if(document.getElementById('p22').textContent=='11'){
                    var temp_val=document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent=document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent=temp_val;
                    document.getElementById('p22').style.background='url('+document.getElementById('p22').textContent+'.jpeg)';
                    document.getElementById('p12').style.background='url('+document.getElementById('p12').textContent+'.jpeg)';
                }
                break;    
            case 'p13':
                if(document.getElementById('p12').textContent=='11'){
                    var temp_val=document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent=document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent=temp_val;
                    document.getElementById('p13').style.background='url('+document.getElementById('p13').textContent+'.jpeg)';
                    document.getElementById('p12').style.background='url('+document.getElementById('p12').textContent+'.jpeg)';
                }
                if(document.getElementById('p23').textContent=='11'){
                    var temp_val=document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent=document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent=temp_val;
                    document.getElementById('p13').style.background='url('+document.getElementById('p13').textContent+'.jpeg)';
                    document.getElementById('p23').style.background='url('+document.getElementById('p23').textContent+'.jpeg)';
                }
               break;
            case 'p21':
                if(document.getElementById('p11').textContent=='11'){
                    var temp_val=document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent=document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent=temp_val;
                    document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpeg)';
                    document.getElementById('p21').style.background='url('+document.getElementById('p21').textContent+'.jpeg)';
                }
                if(document.getElementById('p22').textContent=='11'){
                    var temp_val=document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent=document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent=temp_val;
                    document.getElementById('p22').style.background='url('+document.getElementById('p22').textContent+'.jpeg)';
                    document.getElementById('p21').style.background='url('+document.getElementById('p21').textContent+'.jpeg)';
                }
                break;
            case 'p22':
                if(document.getElementById('p11').textContent=='11'){
                    var temp_val=document.getElementById('p11').textContent;
                    document.getElementById('p11').textContent=document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent=temp_val;
                    document.getElementById('p11').style.background='url('+document.getElementById('p11').textContent+'.jpeg)';
                    document.getElementById('p21').style.background='url('+document.getElementById('p21').textContent+'.jpeg)';
                }
                if(document.getElementById('p12').textContent=='11'){
                    var temp_val=document.getElementById('p12').textContent;
                    document.getElementById('p12').textContent=document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent=temp_val;
                    document.getElementById('p12').style.background='url('+document.getElementById('p12').textContent+'.jpeg)';
                    document.getElementById('p22').style.background='url('+document.getElementById('p22').textContent+'.jpeg)';
                }
                if(document.getElementById('p21').textContent=='11'){
                    var temp_val=document.getElementById('p21').textContent;
                    document.getElementById('p21').textContent=document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent=temp_val;
                    document.getElementById('p21').style.background='url('+document.getElementById('p21').textContent+'.jpeg)';
                    document.getElementById('p22').style.background='url('+document.getElementById('p22').textContent+'.jpeg)';
                }
                if(document.getElementById('p23').textContent=='11'){
                    var temp_val=document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent=document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent=temp_val;
                    document.getElementById('p23').style.background='url('+document.getElementById('p23').textContent+'.jpeg)';
                    document.getElementById('p22').style.background='url('+document.getElementById('p22').textContent+'.jpeg)';
                }
                break;
            case 'p23':
                if(document.getElementById('p13').textContent=='11'){
                    var temp_val=document.getElementById('p13').textContent;
                    document.getElementById('p13').textContent=document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent=temp_val;
                    document.getElementById('p13').style.background='url('+document.getElementById('p13').textContent+'.jpeg)';
                    document.getElementById('p23').style.background='url('+document.getElementById('p23').textContent+'.jpeg)';
                }
                if(document.getElementById('p22').textContent=='11'){
                    var temp_val=document.getElementById('p22').textContent;
                    document.getElementById('p22').textContent=document.getElementById('p23').textContent;
                    document.getElementById('p23').textContent=temp_val;
                    document.getElementById('p22').style.background='url('+document.getElementById('p22').textContent+'.jpeg)';
                    document.getElementById('p23').style.background='url('+document.getElementById('p23').textContent+'.jpeg)';
                }
                break;
        
            }
    }
}
function shuffle1()
{
    var tab_pos=new Array();
    while(tab_pos.length<6){
        var numero =Math.round(Math.random()*100);
        if((numero==11)||(numero==12)||(numero==13)||(numero==21)||(numero==22)||(numero==23)){
            if(!tab_pos.includes(numero))
            {
                tab_pos[tab_pos.length]=numero;
            }
        }
    }
    document.getElementById('m11').textContent=tab_pos[0];
    document.getElementById('m11').style.background='url('+tab_pos[0]+'.jpeg)';

    document.getElementById('m12').textContent=tab_pos[1];
    document.getElementById('m12').style.background='url('+tab_pos[1]+'.jpeg)';

    document.getElementById('m13').textContent=tab_pos[2];
    document.getElementById('m13').style.background='url('+tab_pos[2]+'.jpeg)';

    document.getElementById('m21').textContent=tab_pos[3];
    document.getElementById('m21').style.background='url('+tab_pos[3]+'.jpeg)';

    document.getElementById('m22').textContent=tab_pos[4];
    document.getElementById('m22').style.background='url('+tab_pos[4]+'.jpeg)';

    document.getElementById('m23').textContent=tab_pos[5];
    document.getElementById('m23').style.background='url('+tab_pos[5]+'.jpeg)';

    
}
function switching1(cell)
{
    if(document.getElementById(cell).textContent!='11')
    {
        switch(cell)
        {
            case 'm11':
                if(document.getElementById('m12').textContent=='11'){
                    var temp_val=document.getElementById('m12').textContent;
                    document.getElementById('m12').textContent=document.getElementById('m11').textContent;
                    document.getElementById('m11').textContent=temp_val;
                    document.getElementById('m11').style.background='url('+document.getElementById('m11').textContent+'.jpeg)';
                    document.getElementById('m12').style.background='url('+document.getElementById('m12').textContent+'.jpeg)';
                }
                if(document.getElementById('m21').textContent=='11'){
                    var temp_val=document.getElementById('m21').textContent;
                    document.getElementById('m21').textContent=document.getElementById('m11').textContent;
                    document.getElementById('m11').textContent=temp_val;
                    document.getElementById('m11').style.background='url('+document.getElementById('m11').textContent+'.jpeg)';
                    document.getElementById('m21').style.background='url('+document.getElementById('m21').textContent+'.jpeg)';
                }
                
                break;
            case 'm12':
                if(document.getElementById('m11').textContent=='11'){
                    var temp_val=document.getElementById('m11').textContent;
                    document.getElementById('m11').textContent=document.getElementById('m12').textContent;
                    document.getElementById('m12').textContent=temp_val;
                    document.getElementById('m11').style.background='url('+document.getElementById('m11').textContent+'.jpeg)';
                    document.getElementById('m12').style.background='url('+document.getElementById('m12').textContent+'.jpeg)';
                }
                if(document.getElementById('m13').textContent=='11'){
                    var temp_val=document.getElementById('m13').textContent;
                    document.getElementById('m13').textContent=document.getElementById('m12').textContent;
                    document.getElementById('m12').textContent=temp_val;
                    document.getElementById('m13').style.background='url('+document.getElementById('m13').textContent+'.jpeg)';
                    document.getElementById('m12').style.background='url('+document.getElementById('m12').textContent+'.jpeg)';
                }
                if(document.getElementById('m22').textContent=='11'){
                    var temp_val=document.getElementById('m22').textContent;
                    document.getElementById('m22').textContent=document.getElementById('m12').textContent;
                    document.getElementById('m12').textContent=temp_val;
                    document.getElementById('m22').style.background='url('+document.getElementById('m22').textContent+'.jpeg)';
                    document.getElementById('m12').style.background='url('+document.getElementById('m12').textContent+'.jpeg)';
                }
                break;    
            case 'm13':
                if(document.getElementById('m12').textContent=='11'){
                    var temp_val=document.getElementById('m12').textContent;
                    document.getElementById('m12').textContent=document.getElementById('m13').textContent;
                    document.getElementById('m13').textContent=temp_val;
                    document.getElementById('m13').style.background='url('+document.getElementById('m13').textContent+'.jpeg)';
                    document.getElementById('m12').style.background='url('+document.getElementById('m12').textContent+'.jpeg)';
                }
                if(document.getElementById('m23').textContent=='11'){
                    var temp_val=document.getElementById('m23').textContent;
                    document.getElementById('m23').textContent=document.getElementById('m13').textContent;
                    document.getElementById('m13').textContent=temp_val;
                    document.getElementById('m13').style.background='url('+document.getElementById('m13').textContent+'.jpeg)';
                    document.getElementById('m23').style.background='url('+document.getElementById('m23').textContent+'.jpeg)';
                }
               break;
            case 'm21':
                if(document.getElementById('m11').textContent=='11'){
                    var temp_val=document.getElementById('m11').textContent;
                    document.getElementById('m11').textContent=document.getElementById('m21').textContent;
                    document.getElementById('m21').textContent=temp_val;
                    document.getElementById('m11').style.background='url('+document.getElementById('m11').textContent+'.jpeg)';
                    document.getElementById('m21').style.background='url('+document.getElementById('m21').textContent+'.jpeg)';
                }
                if(document.getElementById('m22').textContent=='11'){
                    var temp_val=document.getElementById('m22').textContent;
                    document.getElementById('m22').textContent=document.getElementById('m21').textContent;
                    document.getElementById('m21').textContent=temp_val;
                    document.getElementById('m22').style.background='url('+document.getElementById('m22').textContent+'.jpeg)';
                    document.getElementById('m21').style.background='url('+document.getElementById('m21').textContent+'.jpeg)';
                }
                break;
            case 'm22':
                if(document.getElementById('m11').textContent=='11'){
                    var temp_val=document.getElementById('m11').textContent;
                    document.getElementById('m11').textContent=document.getElementById('m21').textContent;
                    document.getElementById('m21').textContent=temp_val;
                    document.getElementById('m11').style.background='url('+document.getElementById('m11').textContent+'.jpeg)';
                    document.getElementById('m21').style.background='url('+document.getElementById('m21').textContent+'.jpeg)';
                }
                if(document.getElementById('m12').textContent=='11'){
                    var temp_val=document.getElementById('m12').textContent;
                    document.getElementById('m12').textContent=document.getElementById('m22').textContent;
                    document.getElementById('m22').textContent=temp_val;
                    document.getElementById('m12').style.background='url('+document.getElementById('m12').textContent+'.jpeg)';
                    document.getElementById('m22').style.background='url('+document.getElementById('m22').textContent+'.jpeg)';
                }
                if(document.getElementById('m21').textContent=='11'){
                    var temp_val=document.getElementById('m21').textContent;
                    document.getElementById('m21').textContent=document.getElementById('m22').textContent;
                    document.getElementById('m22').textContent=temp_val;
                    document.getElementById('m21').style.background='url('+document.getElementById('m21').textContent+'.jpeg)';
                    document.getElementById('m22').style.background='url('+document.getElementById('m22').textContent+'.jpeg)';
                }
                if(document.getElementById('m23').textContent=='11'){
                    var temp_val=document.getElementById('m23').textContent;
                    document.getElementById('m23').textContent=document.getElementById('m22').textContent;
                    document.getElementById('m22').textContent=temp_val;
                    document.getElementById('m23').style.background='url('+document.getElementById('m23').textContent+'.jpeg)';
                    document.getElementById('m22').style.background='url('+document.getElementById('m22').textContent+'.jpeg)';
                }
                break;
            case 'm23':
                if(document.getElementById('m13').textContent=='11'){
                    var temp_val=document.getElementById('m13').textContent;
                    document.getElementById('m13').textContent=document.getElementById('m23').textContent;
                    document.getElementById('m23').textContent=temp_val;
                    document.getElementById('m13').style.background='url('+document.getElementById('m13').textContent+'.jpeg)';
                    document.getElementById('m23').style.background='url('+document.getElementById('m23').textContent+'.jpeg)';
                }
                if(document.getElementById('m22').textContent=='11'){
                    var temp_val=document.getElementById('m22').textContent;
                    document.getElementById('m22').textContent=document.getElementById('m23').textContent;
                    document.getElementById('m23').textContent=temp_val;
                    document.getElementById('m22').style.background='url('+document.getElementById('m22').textContent+'.jpeg)';
                    document.getElementById('m23').style.background='url('+document.getElementById('m23').textContent+'.jpeg)';
                }
                break;
        
            }
    }
}
function checkwin()
{
    var i1=document.getElementById('p11').textContent;
    var i2=document.getElementById('p12').textContent;
    var i3=document.getElementById('p13').textContent;
    var i4=document.getElementById('p21').textContent;
    var i5=document.getElementById('p22').textContent;
    var i6=document.getElementById('p23').textContent;
    

    var j1=document.getElementById('m11').textContent;
    var j2=document.getElementById('m12').textContent;
    var j3=document.getElementById('m13').textContent;
    var j4=document.getElementById('m21').textContent;
    var j5=document.getElementById('m22').textContent;
    var j6=document.getElementById('m23').textContent;
    

    if((i1==j1)&&(i2==j2)&&(i3==j3)&&(i4==j4)&&(i5==j5)&&(i6==j6))
    {
        document.getElementById("btn").value="Correct";
    }
    else
    {
    document.getElementById("btn").value="InCorrect";
}
}