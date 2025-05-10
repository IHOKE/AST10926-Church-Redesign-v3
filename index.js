const contentData = [
    {
        title: '香港聖公會西九龍教區婦女團主辦 走訪《麥理浩夫人中心》',
        img: 'images/index/HKSKH Lady MacLehose Centre.png',
        body: '時間 ： 上午10:45 – 下午14:00<br>地點 ： 香港聖公會麥理浩夫人中心 (石籬和宜合道22號) <br><br>西九龍教區婦女團本屆主題為《跨代手牽手•侍主肩並肩》！希望籍著不同活動，走到教區教省各處，認識聖公會的三頭馬車，怎樣將上帝的愛傳給每一個人！並透過團契活動，讓我們與不同年齡層的弟兄姊妹相知、相交，彰顯主基督的愛。 <br><br>本團將於2025年5月10日(星期六)舉行走訪《麥理浩夫人中心》，認識聖公會在葵涌、青衣及荃灣服務范圍最大，層面最廣的社服機構。詳情如下: <br><br>活動內容 ： 中心服務介紹、明陣、葵華健樂中心等服務 - 參觀及體驗、麥理浩餐廳～中式、西式午餐 <br>名額 ： 80人 (每牧區6名 + 2名後備) <br>費用 ： 全免 <br>報名及查詢： 可聯絡貴堂婦女部部長或代表 <br>截止日期 ： 2025年4月28日(星期一)'
    },
    {
        title: '主設立聖餐日祝聖油暨聖品重申牧職委身禮儀',
        img: 'images/index/Eucharist.jpg',
        body: '時間：上午9:30 <br>地點：聖約翰座堂 (香港中環花園道4-8號) <br>教省於本年主設立聖餐日（4月17日）星期四早上9時半於中環聖約翰座堂舉 行「祝聖聖油暨聖品重申牧職委身禮儀」。 教省主教長陳謳明大主教在當日感恩祭中將祝聖教會生活中使用的三種油膏，分別為：慕道聖油、病者聖油及至聖聖油，同時所有教省聖品在崇拜中將重申牧職委身之承諾。 The Revd Prof. Martyn Percy在崇拜中講道。 歡迎所有信徒一同參禮。'
    },
    {
        title: '香港聖公會西九龍教區牧區議員及侍奉人員退修會',
        img: 'images/index/Retreat.png',
        body: '時間 : 下午2-5 時<br> 地點 : 香港中文大學崇基學院神學院聖堂<br> 主題 : 司禱的信徒牧職與健康教會的建立<br> <br> 承剛舉行之第十四屆教區議會的主題，常備委員會於第一次會議上建議舉辦牧區議員及事奉 人員退修會，以加增各議員及事奉人員對平信徒牧職 – 司禱人員 (Lay Reader) 這課題進一 步之交流。是次教區議員退修會詳情如下： <br> <br> 報名方法: 向各堂幹事同工報名<br> 查詢 : 請致電西九龍教區辦事處2783 0811 梅淑銘姊妹<br> 截止報名日期：2025 年3 月22 日'
    },
    {
        title: '西九龍教區婦女團第八屆年會、感恩崇拜及晚宴 ',
        img: 'images/index/Thanksgiving Worship.jpeg',
        body: '年會時間：下午2點<br> 地點：諸聖座堂 (旺角白布街11號)<br> 感恩崇拜時間：下午4點<br> 地點：諸聖座堂 (旺角白布街11號)<br> 晚宴時間：下午6點<br> 地點：仕德福酒店陶源酒家（旺角豉油街118 號）<br><br> 香港聖公會西九龍教區婦女團謹訂於二零二五年二月十五日(星期六)下午二時正假九龍旺角白布街11號諸聖座堂舉行第八屆年會，下午四時正感恩聖餐崇拜及差遣禮，會後並假旺角豉油街118號（仕德福酒店）陶源酒家舉行感恩晚宴，共聚主內團契，晚宴每位港幣$250。現誠邀各堂弟兄姊妹參與，共享團契，同頌主恩。報名及查詢可聯絡西九龍教區各堂婦女部團長或部長，截止報名日期為2025年1月24日（星期五）。'
    },
    {
        title: '香港聖公會婦女總團 X 四區聯合青年事工 IM Boardgame-ing!',
        img: 'images/index/boardGame.jpg',
        body: '日期：2024年12月13日（星期五） <br> 時間：晚上7時至9時 <br> 地點：中環威靈頓街2-8號 ･ M88/2樓 <br> 目的：團聚青年 <br>內容：桌遊玩樂'
    }
];

function showContent(index) {
    const contentBox = document.getElementById('contentBox');
    const content = contentData[index - 1];
    contentBox.innerHTML = `
        <h4>
        	<span class="chi">${content.title}</span>
			<span class="eng"></span>
        </h4>

        <div class="s2-slide-img text-center"><img src="${content.img}" alt="Image for ${content.title}"></div>

        <p class="chi overflow-y" style="height: 200px; margin-top: 15px;">
            ${content.body}
        </p>
    `;
}