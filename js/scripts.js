document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for funfacts.html
    const questions = [    
        {
            "question": "dundd 出生在哪一年？",
            "options": ["2003", "2005", "2007", "2009"],
            "answer": 1
        },
        {
            "question": "dundd 的慣用手是哪一隻？",
            "options": ["右手", "左手"],
            "answer": 1
        },
        {
            "question": "dundd 出生時有什麼健康問題？",
            "options": ["讀寫障礙", "肌肉問題", "專注力不足", "智力障礙"],
            "answer": 1
        },
        {
            "question": "dundd 在中小學被歸類為哪類學生？",
            "options": ["資優生", "普通生", "特殊教育需要學生"],
            "answer": 2
        },
        {
            "question": "dundd 的書寫如何？",
            "options": ["工整", "不佳"],
            "answer": 1
        },
        {
            "question": "dundd 的運動能力如何？",
            "options": ["強", "差"],
            "answer": 1
        },
        {
            "question": "dundd 的智力水平如何？",
            "options": ["低於平均水平", "平均水平", "高於平均水平"],
            "answer": 1
        },
        {
            "question": "dundd 是否患有讀寫障礙？",
            "options": ["是", "否"],
            "answer": 1
        },
        {
            "question": "dundd 最討厭處理什麼？",
            "options": ["學業", "人際關係", "家庭關係"],
            "answer": 1
        },
        {
            "question": "dundd 認為什麼是極其重要的？",
            "options": ["金錢", "名譽", "互相信任"],
            "answer": 2
        },
        {
            "question": "dundd 在哪一年級向平機會提出投訴？",
            "options": ["中一", "中二", "中三", "中四"],
            "answer": 2
        },
        {
            "question": "dundd 在哪裡攻讀學士學位？",
            "options": ["香港大學", "英國薩塞克斯大學", "德國柏林洪堡大學"],
            "answer": 1
        },
        {
            "question": "dundd 在中一朗誦比賽中做了什麼？",
            "options": ["獲得冠軍", "退出比賽", "被取消資格"],
            "answer": 1
        },
        {
            "question": "dundd 在中學時擔任什麼職務？",
            "options": ["班長", "學生會主席", "圖書館管理員"],
            "answer": 2
        },
        {
            "question": "dundd 在中學時期如何看待「課改」？",
            "options": ["喜歡", "討厭", "無所謂"],
            "answer": 1
        },
        {
            "question": "dundd 在中一校運會上參加了哪個項目？",
            "options": ["100 米短跑", "跳高", "3 公里長跑"],
            "answer": 2
        },
        {
            "question": "dundd 在中一校運會期間做了什麼「不守規矩」的事？",
            "options": ["偷吃零食", "偷玩手機", "提早離開"],
            "answer": 2
        },
        {
            "question": "dundd 如何看待中一時期學校提供的午餐？",
            "options": ["美味", "難吃", "一般"],
            "answer": 1
        },
        {
            "question": "dundd 在中一英文科考試作文中做了什麼？",
            "options": ["獲得高分", "畫了 mind map", "交白卷"],
            "answer": 1
        },
        {
            "question": "dundd 中學時期的學校位於哪裡？",
            "options": ["東涌", "屋邨附近", "半山"],
            "answer": 1
        },
        {
            "question": "dundd 中學時期的學校是什麼類型的學校？",
            "options": ["Band 1", "Band 2", "Band 3"],
            "answer": 2
        },
        {
            "question": "dundd 在中一 I-CAN 成長營中發生了什麼事？",
            "options": ["與同學打架", "獲得最佳表現獎", "什麼都沒發生"],
            "answer": 0
        },
        {
            "question": "dundd 在 I-CAN 成長營中為什麼與同學打架？",
            "options": ["同學嘲笑他", "同學弄壞了他的時鐘", "同學偷了他的手機"],
            "answer": 1
        },
        {
            "question": "dundd 對 I-CAN 成長營的職員有什麼評價？",
            "options": ["友善", "嚴厲", "一般"],
            "answer": 1
        },
        {
            "question": "dundd 在 I-CAN 成長營之後，班上同學對他的態度如何？",
            "options": ["更友好", "更疏遠", "沒有變化"],
            "answer": 1
        },
        {
            "question": "dundd 在中二時最討厭老師做什麼？",
            "options": ["罰抄書", "檢查手機", "留堂"],
            "answer": 1
        },
        {
            "question": "dundd 在中二時期，如何應對學校提供的午餐？",
            "options": ["在學校吃", "帶白飯", "外出用餐"],
            "answer": 1
        },
        {
            "question": "dundd 在中二時期參加了哪個課外活動？",
            "options": ["中樂團", "圖書館管理員", "籃球隊"],
            "answer": 1
        },
        {
            "question": "dundd 在中二英文考試中做了什麼，導致被副校長約談？",
            "options": ["作弊", "撕毀默書紙", "缺席考試"],
            "answer": 1
        },
        {
            "question": "dundd 在中三時期，如何看待 VTC？",
            "options": ["好學校", "差學校", "一般學校"],
            "answer": 1
        },
        {
            "question": "dundd 在中三校運會期間帶了什麼？",
            "options": ["手機", "GoPro", "iPad"],
            "answer": 1
        },
        {
            "question": "dundd 在中三時期的學校旅行去了哪裡？",
            "options": ["海洋公園", "迪士尼樂園", "燒烤"],
            "answer": 2
        },
        {
            "question": "dundd 如何評價王子滔？",
            "options": ["好同學", "壞同學", "一般同學"],
            "answer": 1
        },
        {
            "question": "dundd 在中四時期最討厭哪一科？",
            "options": ["中文", "英文", "數學", "電腦"],
            "answer": 3
        },
        {
            "question": "dundd 在中四時期因為什麼事情而在 IG 上發文抱怨？",
            "options": ["被老師冤枉", "與同學吵架", "考試不及格"],
            "answer": 0
        },
        {
            "question": "dundd 在中四時期的規劃是什麼？",
            "options": ["考 DSE", "去台灣升學", "去英國升學"],
            "answer": 2
        },
        {
            "question": "dundd 在中五時期的數學成績如何？",
            "options": ["優秀", "合格", "不及格"],
            "answer": 1
        },
        {
            "question": "dundd 在中五時期的英文成績如何？",
            "options": ["優秀", "合格", "不及格"],
            "answer": 1
        },
        {
            "question": "dundd 在中五時期的體育成績如何？",
            "options": ["優秀", "合格", "不及格"],
            "answer": 2
        },
        {
            "question": "dundd 是否參加了 DSE 考試？",
            "options": ["是", "否"],
            "answer": 1
        },
        {
            "question": "dundd 如何看待學校提供的冬季校服？",
            "options": ["保暖", "不保暖"],
            "answer": 1
        },
        {
            "question": "dundd 在中五時期的成績單上有哪些「污點」？",
            "options": ["警告", "缺點", "警告和缺點"],
            "answer": 0
        },
        {
            "question": "dundd 在中五的聖誕節聯歡會上帶了什麼「違禁品」？",
            "options": ["手機", "iPad", "Apple Watch"],
            "answer": 0
        },
        {
            "question": "dundd 如何評價在中學時期的自己？",
            "options": ["好學生", "壞學生", "一般學生"],
            "answer": 0  //  Subjective, depends on perspective.  More accurately: "看法不一"
        },
        {
            "question": "dundd 在英國讀的是什麼課程？",
            "options": ["預科", "學士", "碩士"],
            "answer": 0
        },
        {
            "question": "dundd 在英國大學 Foundation 課程中遇到了哪些問題？",
            "options": ["考試", "被老師趕出教室", "被網絡欺凌", "以上皆是"],
            "answer": 3
        },
        {
            "question": "dundd 在英國大學的英文考試中遇到了什麼問題？",
            "options": ["電腦當機", "無法提交答案", "被指控作弊", "以上皆是"],
            "answer": 3
        },
        {
            "question": "dundd 如何看待英國預科學校的線上考試系統？",
            "options": ["好", "差"],
            "answer": 1
        },
        {
            "question": "dundd 在英國預科課程中，有沒有被網絡欺凌？",
            "options": ["有", "沒有"],
            "answer": 0
        },
        {
            "question": "dundd 在英國預科課程中，被誰網絡欺凌？",
            "options": ["中國同學", "香港同學", "中東同學"],
            "answer": 2
        },
        {
            "question": "dundd 在英國遇到的網路霸凌，是透過什麼方式進行的？",
            "options": ["私訊辱罵", "公開貼文攻擊", "造謠誹謗"],
            "answer": 1
        },
        {
            "question": "dundd 最後是如何處理在英國的網路霸凌的？",
            "options": ["反擊", "無視", "尋求幫助"],
            "answer": 1
        },
        {
            "question": "dundd在Threads上分享的內容，主要是什麼類型的？",
            "options": ["正面正面", "負負面", "中性客觀"],
            "answer": 1 // Mostly negative, though interpretations may vary
        },
        {
            "question": "dundd 在英國有沒有學過開車？",
            "options": ["有", "沒有"],
            "answer": 0
        },
        {
            "question": "dundd 的 MBTI 人格類型是什麼？",
            "options": ["INFJ", "ENFJ", "INTJ"],
            "answer": 0
        },
    ];

    // 初始化分數
    let score = 0;

    // 修改題目資料處理邏輯
    let currentQuestionIndex = 0;
    let shuffledQuestions = [];

    function shuffleQuestions() {
        shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    }

    function createQuestionCard(question, index) {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.innerHTML = `
            <h3>Question ${index + 1}</h3>
            <p>${question.question}</p>
            <div class="options">
                ${question.options.map((opt, i) => `
                    <button class="option-btn" data-option="${i}">${opt}</button>
                `).join('')}
            </div>
            <div class="answer-feedback"></div>
            <button class="next-btn">Next Question</button>
        `;
        return card;
    }

    function showNextQuestion() {
        const container = document.getElementById('questionsContainer');
        container.innerHTML = '';
        
        if (currentQuestionIndex < shuffledQuestions.length) {
            const card = createQuestionCard(shuffledQuestions[currentQuestionIndex], currentQuestionIndex);
            container.appendChild(card);
            
            // 更新進度
            document.getElementById('questionProgress').textContent = currentQuestionIndex + 1;
            document.getElementById('totalQuestions').textContent = shuffledQuestions.length;
            document.querySelector('.progress-fill').style.width = 
                `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%`;
        } else {
            container.innerHTML = `
                <div class="question-card end-screen">
                    <h2>Game Over!</h2>
                    <div class="stats-container">
                        <div class="stat-card">
                            <h3>Final Score</h3>
                            <p>${score}</p>
                        </div>
                        <div class="stat-card">
                            <h3>Accuracy</h3>
                            <p>${Math.round((score / (shuffledQuestions.length * 10)) * 100)}%</p>
                        </div>
                    </div>
                    <button class="next-btn" onclick="restartGame()">Play Again</button>
                </div>
            `;
        }
    }

    function handleAnswer(optionIndex) {
        const question = shuffledQuestions[currentQuestionIndex];
        const card = document.querySelector('.question-card');
        const buttons = card.querySelectorAll('.option-btn');
        const feedback = card.querySelector('.answer-feedback');
        const nextBtn = card.querySelector('.next-btn');

        buttons.forEach(btn => btn.disabled = true);
        
        if (optionIndex === question.answer) {
            buttons[optionIndex].classList.add('correct');
            feedback.className = 'answer-feedback correct-feedback';
            feedback.textContent = 'Correct!';
            score += 10;
            createFireworks();
            card.classList.add('win-animation');
        } else {
            buttons[optionIndex].classList.add('wrong');
            buttons[question.answer].classList.add('correct');
            feedback.className = 'answer-feedback wrong-feedback';
            feedback.textContent = 'Wrong!';
            
            // 新增錯誤效果
            card.classList.add('shake-effect', 'flash-effect');
            
            // 分數不能低於0
            score = Math.max(0, score - 5);
            
            // 移除動畫類別以便重複使用
            setTimeout(() => {
                card.classList.remove('shake-effect', 'flash-effect');
            }, 500);

            // 在錯誤時產生紅色粒子效果
            createErrorParticles();
        }
        
        feedback.style.display = 'block';
        nextBtn.style.display = 'block';
        document.getElementById('score').textContent = score;
    }

    function restartGame() {
        score = 0;
        currentQuestionIndex = 0;
        document.getElementById('score').textContent = score;
        document.querySelector('.progress-fill').style.width = '0%';
        shuffleQuestions();
        showNextQuestion();
    }

    // 創建煙火效果
    function createFireworks() {
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'firework';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = Math.random() * window.innerHeight + 'px';
            confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = 'confetti 1s ease-out forwards';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 1000);
        }
    }

    // 新增錯誤粒子效果
    function createErrorParticles() {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.background = `rgba(244, 67, 54, ${Math.random()})`;
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.transform = `scale(${Math.random() * 2})`;
            particle.style.animation = 'confetti 0.8s ease-out forwards';
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 800);
        }
    }

    // 深色模式切換
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // 事件監聽器
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('option-btn') && !e.target.disabled) {
            const optionIndex = parseInt(e.target.dataset.option);
            handleAnswer(optionIndex);
        } else if (e.target.classList.contains('next-btn')) {
            currentQuestionIndex++;
            showNextQuestion();
        }
    });

    // 初始化
    shuffleQuestions();
    showNextQuestion();
});

document.addEventListener('DOMContentLoaded', function() {
    // JavaScript for henshin.html
    function darkMode() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    window.onload = function() {
        const img = document.getElementById("henshin!");
        const audio = new Audio('../img/Henshin Sound.mp3');
        let isAnimating = false;
        let animationTimeout;

        // Add error handling for audio
        audio.addEventListener('error', (e) => {
            console.error('Error loading audio:', e);
            alert('Failed to load audio. Please refresh the page.');
        });

        function startAnimation() {
            if (!isAnimating) {
                isAnimating = true;
                img.src = '../img/henshin!.gif';
                
                // Reset audio and play
                audio.currentTime = 0;
                const playPromise = audio.play();
                
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.error('Error playing audio:', error);
                    });
                }

                animationTimeout = setTimeout(() => {
                    img.src = '../img/akibaranger henshin.png';
                    isAnimating = false;
                }, 5000);

                // 添加震動反饋（如果設備支援）
                if (navigator.vibrate) {
                    navigator.vibrate(200);
                }
            }
        }

        // Clean up on page unload
        window.addEventListener('unload', () => {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
            }
            audio.pause();
        });

        // Restore dark mode preference
        if (localStorage.getItem('darkMode') === 'true' || 
            window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
        }

        img.addEventListener('click', startAnimation);
        img.addEventListener('touchstart', startAnimation);

        // 添加載入動畫
        document.querySelector('.container').classList.remove('loading');
        
        // 添加音效預加載
        audio.preload = 'auto';

        // Error handling
        img.addEventListener('error', () => {
            console.error('Image loading failed');
            alert('Failed to load image. Please refresh the page.');
        });
    }
});
