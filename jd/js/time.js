
213+546//新闻快讯文本轮播


//setInterval(function(){
//    $(".new .center").css({"transform":"translateY(-16px)","transition":"1s"})
//    if(){
//        $(".new .center").css({"transform":"translateY(0)","transition":"0s"})
//        $(".new .center .text").eq(0).appendTo($(".news .center"))
//    }else{
//        $(".new .center").css({"transform":"translateY(-16px)","transition":"1s"})
//    }
//    
//},1000)








//顶部广告
 var cles = document.querySelector(".guang span");
 var guang = document.querySelector(".guang");
 var search = document.querySelector(".search");
if(sessionStorage.guang == "false"){
    guang.style.display = "none";
    search.style.top = 0;
}else{
    guang.style.display = "block";
    search.style.top = "auto";
}

cles.onclick = function(){
    guang.style.display = "none";
    sessionStorage.guang = "false"
}








//banner轮播图
 var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })





//                  京-*/东秒杀倒计时js
function run(){
    var date1 = new Date("2019/6/1 15:34:00");//规定时间
    var date2 = new Date();//当前时间
    var date1c = date1.getTime();
    var date2c = date2.getTime();
            
            
              
    var hm = date1c-date2c;
            
    var days = Math.floor(hm/(1000*60*60*24));
            
    var daysYu = hm%(1000*60*60*24); 
            
    var hours = Math.floor(daysYu/(1000*60*60));
            
    var hoursYu =  daysYu%(1000*60*60);
            
    var minutes = Math.floor(hoursYu/(1000*60));
            
    var minutesYu = hoursYu%(1000*60);
            
    var seconds = Math.floor(minutesYu/1000);
            
    var span1 = document.querySelector(".kill .left .time1");
        
    var span2 = document.querySelector(".kill .left .time2");
      
    var span3 = document.querySelector(".kill .left .time3");
    var kill = document.querySelector(".kill")
    if(kill != null){
       if(hours<10){
            span1.innerHTML = "0"+hours;
        }else{
            span1.innerHTML = hours;
        } 
    }
     
    
    if(kill != null){
        if(minutes<10){
            span2.innerHTML = "0"+minutes;
        }else{
            span2.innerHTML = minutes;
        }
    }
    
    if(kill != null){
        if(seconds<10){
            span3.innerHTML = "0"+seconds;
        }else{
            span3.innerHTML = seconds;
        }
    }
}
    run();
    setInterval(function(){
        run();
    },1000)
        
        
        
        
        
        
        
       
new Vue({
    el:".wei",
    data:{
    arrs:[
        
    {name:"【京东超市】e洁 自动收口袋垃圾袋加厚手提式45c",img:"img/wei/1.jpg",price:"￥119.00",price1:"￥19.00",img1:"img/wei/plus.jpg"},
        
        {name:"安昕 梁悬男士船袜5双装 中筒棉袜商务男袜子吸汗透气短 船...",img:"img/wei/2.jpg",price:"￥119.00",similar:"找相似"}, 
        
        {name:"苹果原装数据线iPhone7plus//6p/5SE/ipdpro手机usb",img:"img/wei/3.jpg",price:"￥119.00",similar:"找相似"},  
        
        {name:"真皮多卡位零钱包女士卡夹信用卡包头层牛皮驾驶证皮套风琴...",img:"img/wei/4.jpg",price:"￥119.00",similar:"找相似"},
        
        {name:"QANLIIY千里鹰便携双筒望远镜高倍高清微光夜视非红外军事演..",img:"img/wei/5.jpg",price:"￥119.00",similar:"找相似"},
        
        {name:"【京东超市】蒙牛（MENGNIU）成人奶粉 全脂...",img:"img/wei/6.jpg",price:"￥119.00",similar:"找相似"},
        
        {name:"【京东超市】清风（APP）卷纸 原木纯品 3层270段卫生...",img:"img/wei/7.jpg",price:"￥119.00",similar:"找相似"},
        
        {name:"【京东超市】绿之源360°室内装修安全卫士活碳汽车...",img:"img/wei/8.jpg",price:"￥119.00",similar:"找相似"},
        
        {name:"澳洲进口 卢卡斯Lucas番木瓜膏滋养保湿万用膏 驱蚊...",img:"img/wei/9.jpg",price:"￥119.00",similar:"找相似"},
        
        {name:"海尔（Haier） BCD-201STPA 201升 三门冰..",img:"img/wei/10.jpg",price:"￥119.00",similar:"找相似"}
            
            
            
        ]
    }
})         
        
        
//回到顶部


window.onscroll = function(){
    if(document.body.scrollTop > 300){
        document.getElementById("top").style.display = "block";
    }else{
        document.getElementById("top").style.display = "none";
    }
}



fanhuidingbu.addEventListener("click",function(){
    var t = setInterval(function(){
        document.body.scrollTop = document.body.scrollTop -20;
        document.documentElement.scrollTop = document.documentElement.scrollTop -20;
        if(document.body.scrollTop === 0){
            clearInterval(t);
        }  
    },10)                    
});



//顶部导航滚动条判断更换背景        
window.onscroll = function(){
    if(document.body.scrollTop > 90){
        document.querySelector(".search").style.background = "red";
        search.style.top = 0;
    }else{
        document.querySelector(".search").style.background = "none";
        search.style.top = "auto";
    }
}        
   


new Vue({
    el:"#vue",
    data:{
    arrs:[ 
            {img:"img/sort/reimai/5b056472N771896da.png",name:"电风扇"},
            {img:"img/sort/reimai/5b054fedN2ba90518.jpg",name:"手机"},
            {img:"img/sort/reimai/5b055000N410a7553.png",name:"空调"},
            {img:"img/sort/reimai/5b055011Nb89b2bda.png",name:"充电宝"},{img:"img/sort/reimai/5b05507eN6a4152bc.jpg",name:"蓝牙耳机"},
            {img:"img/sort/reimai/5b056485N5ff83ec1.png",name:"蚊帐"},
            {img:"img/sort/reimai/5b05648bN0b429032.png",name:"凉席"},
            {img:"img/sort/reimai/5b05522dNa2aae1bb.png",name:"耳机"},
            {img:"img/sort/reimai/5b055555N9245f8aa.jpg",name:"电饭煲"},
            {img:"img/sort/reimai/5b055225N991ebfb0.png",name:"空调挂机"},
            {img:"img/sort/reimai/5b0565a7N8dbc0017.png",name:"路由器"},
            {img:"img/sort/reimai/5b0552f2Nac9a0c92.png",name:"空调扇"},
            {img:"img/sort/reimai/5b0552eaNbc8f1bda.png",name:"男鞋"},
            {img:"img/sort/reimai/5b055235Nf8fb2d6c.png",name:"热水器"},
            {img:"img/sort/reimai/5b055644Nf0b93238.jpg",name:"防晒"}
        ],
        arrs1s:[ 
            {img:"img/sort/reimai/5b0567c1N59d53b27.png",name:"冰箱"},
            {img:"img/sort/reimai/5b0567c7N9cc1c355.png",name:"洗衣机"},
            {img:"img/sort/reimai/5b0567cdN275fbcdd.png",name:"电视"}
            ],
        arrs1ss:[   
            {img:"img/sort/reimai/5a4f4872Ndb69555f.png",name:"华为"},
            {img:"img/sort/reimai/5a4f4867Ncb588473.png",name:"小米"},
            {img:"img/sort/reimai/5a69d582N25086304.png",name:"苹果"}
            ],
        //2 手机数码
        arrs2:[   
            {img:"img/sort/shoujishuma/5a1692eeN105a64b4.png",name:"小米"},
            {img:"img/sort/shoujishuma/5a1692e2Nbea6e136.jpg",name:"华为"},
            {img:"img/sort/shoujishuma/5a1692e2N6df7c609.jpg",name:"荣耀"},
            {img:"img/sort/shoujishuma/5a1692ebN8ae73077.jpg",name:"苹果"},
            {img:"img/sort/shoujishuma/5a169244Nff0179e0.png",name:"vivo"},
            {img:"img/sort/shoujishuma/5a169254N4bbbd9fb.png",name:"oppp"},
            {img:"img/sort/shoujishuma/5a169243N40eca33c.jpg",name:"魅族"},
            {img:"img/sort/shoujishuma/5a16925aN8a6dfd03.png",name:"三星"},
            {img:"img/sort/shoujishuma/5a16923fNfc14307e.jpg",name:"一加"},
            {img:"img/sort/shoujishuma/5a16924fNeac7677e.jpg",name:"360手机"},
            {img:"img/sort/shoujishuma/5a9fa5e0N6754e52a.jpg",name:"锤子"},
            {img:"img/sort/shoujishuma/5a9fa5e7Nc5cc0f6b.jpg",name:"努比亚"}
            ],
        arrs2s:[   
            
            {img:"img/sort/shoujishuma/5a169217N5d1b842e.jpg",name:"老人机"},
            {img:"img/sort/shoujishuma/5a169216N0701c7f1.jpg",name:"手机"},
            {img:"img/sort/shoujishuma/5ac48d27N3f5bb821.jpg",name:"全面屏手机"},
            {img:"img/sort/shoujishuma/5a169238Nc8f0882b.jpg",name:"游戏手机"},
            {img:"img/sort/shoujishuma/5a169232Ndf76f53c.jpg",name:"拍照手机"},
            {img:"img/sort/shoujishuma/5a169204Nd4aa27bb.jpg",name:"对讲机"},
            {img:"img/sort/shoujishuma/5a1691e0N62f626e3.jpg",name:"京东回收"},
            {img:"img/sort/shoujishuma/5a9fa728Nbff29ad2.jpg",name:"女性手机"},
            {img:"img/sort/shoujishuma/5a169205N84a49a6a.jpg",name:"京东维修"},
            ],
        arrs2s1:[
            {img:"img/sort/shoujishuma/5a168e83Nb1a35aac.png",name:"合约机"},
            {img:"img/sort/shoujishuma/5a168e7eNdd5d0121.png",name:"选号卡"},
            {img:"img/sort/shoujishuma/5a168e78N78b24a8e.jpg",name:"办套餐"},
            {img:"img/sort/shoujishuma/5a9faa1fN03a4c9e1.jpg",name:"京东网厅"}  
        ],
        arrs2s2:[
            {img:"img/sort/shoujishuma/5ac48672N11cf61fe.jpg",name:"数据线"},
            {img:"img/sort/shoujishuma/5a167b73Na69aae95.jpg",name:"手机存储卡"},
            {img:"img/sort/shoujishuma/5ac48791Nb224f939.jpg",name:"充电宝"},
            {img:"img/sort/shoujishuma/5ac486c6N0c8a93dc.jpg",name:"手机贴膜"},  
            {img:"img/sort/shoujishuma/5ac486ccN2d8031c1.jpg",name:"手机耳机"},  
            {img:"img/sort/shoujishuma/5ac486d1Ncae5823b.jpg",name:"蓝牙耳机"},  
            {img:"img/sort/shoujishuma/5ac486d7N3afa8a3e.jpg",name:"手机支架"},  
            {img:"img/sort/shoujishuma/5ac486deN24e397cb.jpg",name:"手机饰品"},  
            {img:"img/sort/shoujishuma/5ac48749Nf95f399e.jpg",name:"车载配件"},  
            {img:"img/sort/shoujishuma/5ac48749Nf95f399e.jpg",name:"充电器"},  
            {img:"img/sort/shoujishuma/5ac48770N435b114d.jpg",name:"手机电池"},  
            {img:"img/sort/shoujishuma/5ac48776N9bf8b7c7.jpg",name:"创意配件"},  
            {img:"img/sort/shoujishuma/5ac4877eNa263158a.jpg",name:"拍照配件"},  
            {img:"img/sort/shoujishuma/5ac48786N17d8442a.jpg",name:"苹果周边"},  
            {img:"img/sort/shoujishuma/5ac4878cN658cbb07.jpg",name:"手机壳"},  
            {img:"img/sort/shoujishuma/5ac48798N728a2978.jpg",name:"无线充电器"},  
            {img:"img/sort/shoujishuma/5ac4879eN1e7b1ce9.jpg",name:"背夹充电宝"},  
            {img:"img/sort/shoujishuma/5ac487a4Nc21fb4d0.jpg",name:"手机转接"}  
        ],
        arrs2s3:[
            {img:"img/sort/shoujishuma/5a1679f2Nc2f659b6.jpg",name:"单反相机"}, 
            {img:"img/sort/shoujishuma/5a1679caNada7f827.jpg",name:"数码相机"}, 
            {img:"img/sort/shoujishuma/5a1679e9Nc3e2dd28.jpg",name:"拍立得"}, 
            {img:"img/sort/shoujishuma/5a1679c3N67e2b3f1.jpg",name:"户外器材"}, 
            {img:"img/sort/shoujishuma/5a1679f1N577ba68b.jpg",name:"单电/微单"}, 
            {img:"img/sort/shoujishuma/5a1679daNbea69778.jpg",name:"摄像机"}, 
            {img:"img/sort/shoujishuma/5a1679d5Nfdcfe9bb.jpg",name:"运动相机"}, 
            {img:"img/sort/shoujishuma/5a1679b9N42a5f8e5.jpg",name:"镜头"}, 
            {img:"img/sort/shoujishuma/5a1679a9N51936911.jpg",name:"影棚器材"}, 
            {img:"img/sort/shoujishuma/5a1679baNaffaf88c.png",name:"冲印服务"} 
        ],
         arrs2s4:[
            {img:"img/sort/shoujishuma/5a167864Ne52020f2.jpg",name:"便携/无线音箱"}, 
            {img:"img/sort/shoujishuma/5a167859N01d8198b.jpg",name:"音箱/音响"}, 
            {img:"img/sort/shoujishuma/5a16782fN5899ee5e.jpg",name:"MP3/MP4"}, 
            {img:"img/sort/shoujishuma/5a167866N8c853168.jpg",name:"耳机/耳麦"}, 
            {img:"img/sort/shoujishuma/5a16783dN749e1e5c.jpg",name:"收音机"}, 
            {img:"img/sort/shoujishuma/5a167834N97e065bb.jpg",name:"麦克风"}, 
            {img:"img/sort/shoujishuma/5a16782eN9012c0c4.jpg",name:"专业音频"}
        ],
        arrs2s5:[
            {img:"img/sort/shoujishuma/5a1676e9N1ba70a81.jpg",name:"存储卡"},
            {img:"img/sort/shoujishuma/5a1676d7N70b9300c.jpg",name:"三脚架/云台"},
            {img:"img/sort/shoujishuma/5a16769aNc48193e6.jpg",name:"数码之架"},
            {img:"img/sort/shoujishuma/5a1676f9N0198258e.jpg",name:"读卡器"},
            {img:"img/sort/shoujishuma/5a1676efN42553f76.jpg",name:"滤镜"},
            {img:"img/sort/shoujishuma/5a1676d4Nb81ebdcb.jpg",name:"相机清洁/贴膜"},
            {img:"img/sort/shoujishuma/5a1676abN9c4b4edf.jpg",name:"镜头附件"},
            {img:"img/sort/shoujishuma/5a1676e6Na93e4fd1.jpg",name:"相机包"},
            {img:"img/sort/shoujishuma/5a1676ecNfdacde72.jpg",name:"闪光灯/手柄"},
            {img:"img/sort/shoujishuma/5a1676c1N018a0176.jpg",name:"机身附件"},
            {img:"img/sort/shoujishuma/5a16767bNe089435f.jpg",name:"电池/充电器"}
        ],
         arrs2s6:[
              {img:"img/sort/shoujishuma/5a1674a2Nf5dc75c6.jpg",name:"智能手环"},
              {img:"img/sort/shoujishuma/5a16749eN34794086.jpg",name:"智能手表"},
              {img:"img/sort/shoujishuma/5a167490N092a2af2.jpg",name:"智能家居"},
              {img:"img/sort/shoujishuma/5a16745dNa1c329c2.jpg",name:"智能机器人"},
              {img:"img/sort/shoujishuma/5a167498N2b3accb8.jpg",name:"健康监测"},
              {img:"img/sort/shoujishuma/5a16747aNeecc001b.jpg",name:"体感车"},
              {img:"img/sort/shoujishuma/5a16745aN29dedc36.jpg",name:"无人机"},
              {img:"img/sort/shoujishuma/5a167464Nb18dbd59.jpg",name:"其他配件"},
              {img:"img/sort/shoujishuma/5a167484N0a623a5b.jpg",name:"VR眼睛"},
              {img:"img/sort/shoujishuma/5a16747eN1568fc89.jpg",name:"运动跟踪器"},
              {img:"img/sort/shoujishuma/5a167467Ndd23929b.jpg",name:"智能配饰"}
         ],
        arrs2s7:[
            {img:"img/sort/shoujishuma/5a167302N7103e54c.jpg",name:"学生平板"},
            {img:"img/sort/shoujishuma/5a167317Nde2f9a4b.jpg",name:"电纸书"},
            {img:"img/sort/shoujishuma/5a167312N33ea5808.jpg",name:"录音笔"},
            {img:"img/sort/shoujishuma/5a1672fbN487f682b.jpg",name:"早教益智"},
            {img:"img/sort/shoujishuma/5a16731cN06050c3e.jpg",name:"电子词典"},
            {img:"img/sort/shoujishuma/5a167308Ne65f7b7c.jpg",name:"点读机/笔"},
            {img:"img/sort/shoujishuma/5a16730dN65cbc05a.jpg",name:"复读机"}
        ],
        //3 家用电器
        arrs3:[
            {img:"img/sort/jiayongdianqi/5a17f1d2N8078d5e6.jpg",name:"电水壶/热水壶"},
            {img:"img/sort/jiayongdianqi/5a17f21dN905aaf4c.jpg",name:"电压力锅"},
            {img:"img/sort/jiayongdianqi/5a17f224Nea1d3f59.jpg",name:"电饭煲"},
            {img:"img/sort/jiayongdianqi/5a17f1edN56abbe6e.jpg",name:"电磁炉"},
            {img:"img/sort/jiayongdianqi/5a17f203N50016f64.jpg",name:"微波炉"},
            {img:"img/sort/jiayongdianqi/5a17f1e3Nf7957b34.jpg",name:"电饼铛"},
            {img:"img/sort/jiayongdianqi/5a17f229Nc4c681fb.jpg",name:"豆浆机"},
            {img:"img/sort/jiayongdianqi/5a17f1ccN019c7fda.jpg",name:"多用途锅"},
            {img:"img/sort/jiayongdianqi/5a17f237Nb9978251.jpg",name:"料理机"},
            {img:"img/sort/jiayongdianqi/5a17f224N9756f6e5.jpg",name:"榨汁机/原汁机"},
            {img:"img/sort/jiayongdianqi/5a17f1f1N9c125c81.jpg",name:"电烤箱"},
            {img:"img/sort/jiayongdianqi/5a17c966Nd140f4e3.jpg",name:"养生壶/煎药壶"},
            {img:"img/sort/jiayongdianqi/5a17f1aeNf7647558.jpg",name:"电炖锅"},
            {img:"img/sort/jiayongdianqi/5a17f1a9N8a775fab.jpg",name:"电烧烤箱"},
            {img:"img/sort/jiayongdianqi/5a17f20aNde6af185.jpg",name:"面包机"},
            {img:"img/sort/jiayongdianqi/5a17f208N6ea88eba.jpg",name:"咖啡机"},
            {img:"img/sort/jiayongdianqi/5a17f1e3Nbb40dec0.jpg",name:"煮蛋器"},
            {img:"img/sort/jiayongdianqi/5a17c968Nb5ea6a23.jpg",name:"电热饭盒"},
            {img:"img/sort/jiayongdianqi/5a17c97bNad765464.jpg",name:"其他厨房电器"},
            {img:"img/sort/jiayongdianqi/5a17c946N052e26a3.jpg",name:"面条机"},
            {img:"img/sort/jiayongdianqi/5a17f1deN2f022a90.jpg",name:"酸奶机"},
            {img:"img/sort/jiayongdianqi/5a17f1fbNc9df1b71.jpg",name:"空气炸锅"},
            {img:"img/sort/jiayongdianqi/5a17f1b7N26b23a3a.jpg",name:"蔬菜解毒机"},
            
        ],
        arrs3s:[
            {img:"img/sort/jiayongdianqi/5a17c20fN16e27ed9.png",name:"电吹风"}, 
            {img:"img/sort/jiayongdianqi/5a17c221Nf85c1934.jpg",name:"剃须刀"}, 
            {img:"img/sort/jiayongdianqi/5a17c201N6f968e89.jpg",name:"理发器"}, 
            {img:"img/sort/jiayongdianqi/5a17c1eeNb9958e28.jpg",name:"足浴盆"}, 
            {img:"img/sort/jiayongdianqi/5a17c21bN9fa5f473.jpg",name:"剃/脱毛器"}, 
            {img:"img/sort/jiayongdianqi/5a17c1f5Nb9390d12.jpg",name:"按摩器"}, 
            {img:"img/sort/jiayongdianqi/5a17c1ddNba83885a.jpg",name:"卷直发器"}, 
            {img:"img/sort/jiayongdianqi/5a17c1fcN516045fe.jpg",name:"按摩椅"}, 
            {img:"img/sort/jiayongdianqi/5a17c214N2eab4352.jpg",name:"口腔护理"}, 
            {img:"img/sort/jiayongdianqi/5a17c1e8Nbfc87330.jpg",name:"电子秤"}, 
            {img:"img/sort/jiayongdianqi/5a17c209Nff3d08aa.jpg",name:"美容器"}, 
            {img:"img/sort/jiayongdianqi/5a17c1e3N576565f7.jpg",name:"其他健康电器"}, 
        ],
    }
})



//选项卡
var list = document.querySelectorAll(".stay .main .x-left > li");

var lost = document.querySelectorAll(".stay .main .x-right > div");

for(var i=0; i<list.length;i++){
    list[i].index = i;
    list[i].onclick = function(){
        for(var b=0; b<list.length; b++){
            console.log(lost[b]);
            list[b].classList.remove("active");
            lost[b].classList.remove("active");
        }
        list[this.index].classList.add("active");
        lost[this.index].classList.add("active");
        
    }
}




































