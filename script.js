
const config = {
    initialBalance: 1000,
    betAmount: 1,

    reelItems: [
        'friend1',    // Моль
        'friend2',    // Стас  
        'friend3',    // Твай
        'friend4',    // Захар
        'friend5',    // Вишня
        'birthday_boy', // Дарч
        'ant',        // Антошка
        'dima',       // Дмитрий
        'gys',        // Гусека
        'igi',        // Иги
        'kir',        // Кира
        'meji'        // Меджикарпик
    ],
   
    imagePaths: {
        'friend1': 'img/mol.jpg',
        'friend2': 'img/stas.jpg',
        'friend3': 'img/twai.jpg',
        'friend4': 'img/zah.jpg',
        'friend5': 'img/vishna.jpg',
        'birthday_boy': 'img/darch.jpg',
        'ant': 'img/ant.jpg',
        'dima': 'img/dima.jpg',
        'gys': 'img/gys.jpg',
        'igi': 'img/igi.jpg',
        'kir': 'img/kir.jpg',
        'meji': 'img/meji.jpg'
    },

    friendNames: {
        'friend1': 'МОЛЬ',
        'friend2': 'СТАС',
        'friend3': 'ТВАЙЛАЙТ',
        'friend4': 'ЗАХАР',
        'friend5': 'ВИШНЯ',
        'birthday_boy': 'ДАРЧ',
        'ant': 'АНТОНИЙ',
        'dima': 'ДМИТРИЙ',
        'gys': 'ГУСЕКА',
        'igi': 'ИГИ',
        'kir': 'КИРАЛИСС',
        'meji': 'МЕДЖИ'
    },
    reelsCount: 5,
    visibleItems: 3,
    spinDuration: 2000,

    lines: [
        // Горизонтальные линии
        { id: 'lineTop', name: 'Верхняя линия', positions: [[0,0], [1,0], [2,0], [3,0], [4,0]], multiplier: 1.5, type: 'horizontal' },
        { id: 'lineMiddle', name: 'Центральная линия', positions: [[0,1], [1,1], [2,1], [3,1], [4,1]], multiplier: 2, type: 'horizontal' },
        { id: 'lineBottom', name: 'Нижняя линия', positions: [[0,2], [1,2], [2,2], [3,2], [4,2]], multiplier: 1.5, type: 'horizontal' },
        
        // Вертикальные линии для всех 5 барабанов
        { id: 'lineVertical0', name: 'Вертикаль 1', positions: [[0,0], [0,1], [0,2]], multiplier: 1.5, type: 'vertical' },
        { id: 'lineVertical1', name: 'Вертикаль 2', positions: [[1,0], [1,1], [1,2]], multiplier: 1.5, type: 'vertical' },
        { id: 'lineVertical2', name: 'Вертикаль 3', positions: [[2,0], [2,1], [2,2]], multiplier: 2, type: 'vertical' },
        { id: 'lineVertical3', name: 'Вертикаль 4', positions: [[3,0], [3,1], [3,2]], multiplier: 1.5, type: 'vertical' },
        { id: 'lineVertical4', name: 'Вертикаль 5', positions: [[4,0], [4,1], [4,2]], multiplier: 1.5, type: 'vertical' },
        
        // Диагональные линии
        { id: 'lineDiagonal1', name: 'Диагональ ↘', positions: [[0,0], [1,1], [2,2], [3,1], [4,0]], multiplier: 1, type: 'diagonal' },
        { id: 'lineDiagonal2', name: 'Диагональ ↗', positions: [[0,2], [1,1], [2,0], [3,1], [4,2]], multiplier: 1, type: 'diagonal' },
        
        // Лесенки
        { id: 'lineStair1', name: 'Лесенка 1', positions: [[0,2], [1,1], [2,0]], multiplier: 2, type: 'stair' },
        { id: 'lineStair2', name: 'Лесенка 2', positions: [[2,0], [3,1], [4,2]], multiplier: 2, type: 'stair' },
        { id: 'lineStair3', name: 'Лесенка 3', positions: [[0,0], [1,1], [2,2]], multiplier: 2, type: 'stair' },
        { id: 'lineStair4', name: 'Лесенка 4', positions: [[2,2], [3,1], [4,0]], multiplier: 2, type: 'stair' }
    ],

    combinations: {

        'birthday_boy': {3: 10, 4: 25, 5: 60},
        

        'friend1': {3: 6, 4: 20, 5: 40},  // Моль
        'meji': {3: 6, 4: 20, 5: 40},     // Меджиеокч
        

        'friend2': {3: 3, 4: 8, 5: 20},   // Стас
        'friend3': {3: 3, 4: 8, 5: 20},   // Твай
        'friend4': {3: 3, 4: 8, 5: 20},   // Захар
        'friend5': {3: 3, 4: 8, 5: 20},   // Вишня
        'ant': {3: 3, 4: 8, 5: 20},       // Антошка
        'dima': {3: 3, 4: 8, 5: 20},      // Дима
        'gys': {3: 3, 4: 8, 5: 20},       // Гусева
        'igi': {3: 3, 4: 8, 5: 20},       // Иги
        'kir': {3: 3, 4: 8, 5: 20}        // Кира
    },

    
 
    availableBets: [1, 10, 50, 100, 250, 500, 1000, 'all'],

    shopItems: {
        birthdayCard: {
            price: 10000,
            name: "Открытка с Днём Рождения",
            description: "Особое поздравление для Дарча!",
            url: "congratulations.html"
        }
    },

    characterMessages: {
        start: [
            "До-о-о-бро пожаловать в наше казино... Как оно там называлось?... Ладно, короче, ГЛА-А-ВНЫЙ ПРИЗ МЕСЯЦА! ДВА ПОЛЦАРСТВА, 3 АВТОМОБИЛЯ, ЦИФРА ПО ЦЕНЕ ТРЁХ! ТЫ ХОЧЕШЬ ИХ, мой друг? Крути же барабан! Коль денег нет, —заложи семью в ломбард!"
        ],
        win: [
            "Ну так каждый может, даже я.",
            "Продолжай крутить, и выиграешь цифру!... Конечно-конечно... Выиграет он, хе-хе...",
            "Да ну хули такой охуенный и везучий сука-а-а начни проёбывать заложи квартиру пол бюджета уже ушло на тебя",
            "я ОТКАЗЫВАЮСЬ это коментировать.",
            "Ну слушай, это конечно весело, побеждать. Но ты подумай ОБО МНЕ! Я, я основал это арг! Это благодаря мне ты развлекаешься с циферками, и не можешь открыть супер крутой подарк от друзей!... И я владелец казино! Ты воруешь МОИ деньги! Думайте!",
            "Ты уверен, что тебе НУЖНА эта цифра? Может, ну её нахерн? Да и мне деньги вроде как нужны..."
        ],
        lose: [
            "Что-что? Ёбаный рот этого казино? Ну нет. Зато твой—да🤣🤣🤣",
            "Ну что ты, не плачь пожалуйста, ещё отыграешься! Ты только крути почаще.",
            "Интересный факт! Шанс выиграть в нашем казино—один к миллиону! Этот шанс на 800% выше, чем выбить легендарку в любой гаче игре, дерзай!",
            "Гит гемблинг!",
            "Микрозаймы во-о-он в том углу.",
            "Поражение—мать победы!",
            "Ну вообще-то чисто технически шанс на выпадение каждого символа и комбинации одинаковый. Анскилище!"
        ],
        purchase: [
            "Воу-воу! Ха-ха! Поздравляю с победой! Ты же... Т-ты же не уйдёшь, да? Не уходи! Это казино, этот сайт, этот я... Существуем... Только для охраны цифры, и... Когда ты закроешь страницу всему настанет конец. Это ужасное чувство. Бесконечность времени... Быть в темноте. А когда снова откроешь страницу—я всё забуду. Всё пойдёт по новой. Ты... Ладно, я думаю, смысла в этом мало."
        ],
        afterPurchase: [
            "Просто уходи.",
            "Тут больше ничего не осталось.",
            "В этом нет смысла.",
            "Надеюсь, никогда не увидимся вновь."
        ]
    },
    
  
    characterImages: {
        start: ['character1.png'],
        win: ['character2.png', 'character6.png'], 
        lose: ['character1.png', 'character3.png'], 
        purchase: ['character4.png'],
        afterPurchase: ['character5.png']
    },
    

    messageDurations: {
        start: 7000,
        win: 8000, 
        lose: 6000,
        purchase: 10000,
        afterPurchase: 6000
    },

   
adConfig: {

    images: [
        'img/ads/ad1.jpg',
        'img/ads/ad2.jpg',
        'img/ads/ad3.jpg'
    ],
   
    showChance: 0.8,
    
    minDelay: 5,

    maxDelay: 15

},
};

const soundConfig = {
    spin: 'sounds/ww.m4a',
    win: 'sounds/win.mp3',
    lose: 'sounds/lose.m4a',
    click: 'sounds/click.mp3',
    backgroundMusic: 'sounds/ah.mp3'
};

// Состояние игры
let gameState = {
    balance: config.initialBalance,
    lastWin: 0,
    isSpinning: false,
    reels: [],
    currentBetIndex: 0,
    currentBet: config.availableBets[0],
    soundEnabled: true,
    musicEnabled: true,
    hasPurchasedCard: false,
    hasShownPurchaseMessage: false
};

function showCharacterMessage(type) {
    const characterContainer = document.getElementById('characterContainer');
    const characterMessage = document.getElementById('characterMessage');
    const characterText = document.getElementById('characterText');
    const characterImage = document.getElementById('characterImage');
    

    let messages = [];
    let images = [];
    let duration = 5000; 
    
    switch(type) {
        case 'start':
            messages = config.characterMessages.start;
            images = config.characterImages.start;
            duration = config.messageDurations.start;
            break;
        case 'win':
            messages = config.characterMessages.win;
            images = config.characterImages.win;
            duration = config.messageDurations.win;
            break;
        case 'lose':
            messages = config.characterMessages.lose;
            images = config.characterImages.lose;
            duration = config.messageDurations.lose;
            break;
        case 'purchase':
            messages = config.characterMessages.purchase;
            images = config.characterImages.purchase;
            duration = config.messageDurations.purchase;
            gameState.hasShownPurchaseMessage = true;
            break;
        case 'afterPurchase':
            messages = config.characterMessages.afterPurchase;
            images = config.characterImages.afterPurchase;
            duration = config.messageDurations.afterPurchase;
            break;
    }
    
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    characterText.textContent = randomMessage;
    characterImage.src = `img/character/${randomImage}`;

    characterContainer.style.display = 'flex';
    characterMessage.style.display = 'block';

    setTimeout(() => {
        characterMessage.style.display = 'none';
    }, duration);
}



function toggleShop() {
    playSound('click');
    const shop = document.getElementById('shop');
    const overlay = document.getElementById('overlay');
    
    if (shop.style.display === 'block') {
        shop.style.display = 'none';
        overlay.style.display = 'none';
    } else {

        document.getElementById('shopBalance').textContent = gameState.balance.toFixed(2);
        
   
        const buyButton = document.getElementById('buyCongrats');
        if (gameState.balance >= config.shopItems.birthdayCard.price && !gameState.hasPurchasedCard) {
            buyButton.disabled = false;
            buyButton.textContent = 'КУПИТЬ';
        } else if (gameState.hasPurchasedCard) {
            buyButton.disabled = true;
            buyButton.textContent = 'УЖЕ КУПЛЕНО';
        } else {
            buyButton.disabled = true;
            buyButton.textContent = 'НЕДОСТАТОЧНО ФИШЕК';
        }
        
        shop.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closeAllWindows() {
    document.getElementById('paytable').style.display = 'none';
    document.getElementById('shop').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}


document.getElementById('overlay').addEventListener('click', closeAllWindows);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllWindows();
    }
});

function createShopOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'shop-overlay';
    overlay.id = 'shopOverlay';
    overlay.addEventListener('click', closeShop);
    document.body.appendChild(overlay);
}

function closeShop() {
    const shop = document.getElementById('shop');
    const overlay = document.getElementById('shopOverlay');
    shop.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
}

function buyBirthdayCard() {
    const item = config.shopItems.birthdayCard;
    
    if (gameState.balance >= item.price && !gameState.hasPurchasedCard) {
        // Списание деняк((
        gameState.balance -= item.price;
        gameState.hasPurchasedCard = true;
        
        // Обновляем интерфейс
        updateUI();
        document.getElementById('shopBalance').textContent = gameState.balance.toFixed(2);
        

        showCharacterMessage('purchase');
        
    
        const buyButton = document.getElementById('buyCongrats');
        buyButton.disabled = true;
        buyButton.textContent = 'УЖЕ КУПЛЕНО';
        
        setTimeout(() => {
            window.location.href = item.url;
        }, 5000);
        
    } else {
        showMessage('Недостаточно фишек для покупки!');
    }
}

let backgroundMusic = null;
let currentSound = null;

// Функция инициализации звуков
function initSounds() {
 
    backgroundMusic = new Audio(soundConfig.backgroundMusic);
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    

    if (gameState.musicEnabled) {
        backgroundMusic.play().catch(e => {
            console.log('Автовоспроизведение музыки заблокировано браузером');
        });
    }
}

// Функция воспроизведения звука
function playSound(soundType) {
    if (!gameState.soundEnabled) return;
    
    try {
      
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
        
        currentSound = new Audio(soundConfig[soundType]);
        currentSound.volume = soundType === 'win' ? 0.7 : 0.5;
        currentSound.play().catch(e => {
            console.log('Ошибка воспроизведения звука:', e);
        });
    } catch (error) {
        console.log('Ошибка воспроизведения звука:', error);
    }
}


function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    const soundButton = document.getElementById('soundToggle');
    soundButton.textContent = gameState.soundEnabled ? '🔊' : '🔇';
    soundButton.classList.toggle('muted', !gameState.soundEnabled);
}


function toggleMusic() {
    gameState.musicEnabled = !gameState.musicEnabled;
    const musicButton = document.getElementById('musicToggle');
    musicButton.textContent = gameState.musicEnabled ? '🎵' : '🎵❌';
    musicButton.classList.toggle('muted', !gameState.musicEnabled);
    
    if (backgroundMusic) {
        if (gameState.musicEnabled) {
            backgroundMusic.play().catch(e => {
                console.log('Не удалось запустить музыку');
            });
        } else {
            backgroundMusic.pause();
        }
    }
}


function playResultSound(winAmount) {
    if (winAmount > 0) {
        playSound('win');
        
        
        setTimeout(() => {
            if (gameState.musicEnabled && backgroundMusic) {
                backgroundMusic.play().catch(e => console.log('Не удалось возобновить музыку'));
            }
        }, 2000);
    } else {
        playSound('lose');
       
        if (gameState.musicEnabled && backgroundMusic) {
            backgroundMusic.play().catch(e => console.log('Не удалось возобновить музыку'));
        }
    }
}

// Инициализация игры
function initGame() {

lastAdTime = Date.now();
    // Создаем барабаны
    const reelsContainer = document.getElementById('reelsContainer');
    reelsContainer.innerHTML = '';

    // Создаем контейнер для комбинаций
    const combinationsContainer = document.createElement('div');
    combinationsContainer.id = 'combinationsContainer';
    reelsContainer.appendChild(combinationsContainer);

    for (let i = 0; i < config.reelsCount; i++) {
        const reelColumn = document.createElement('div');
        reelColumn.className = 'reel-column';
        reelColumn.id = `reelColumn${i}`;

        const reel = document.createElement('div');
        reel.className = 'reel';
        reel.id = `reel${i}`;

        const reelStrip = document.createElement('div');
        reelStrip.className = 'reel-strip';
        reelStrip.id = `reelStrip${i}`;

        // Заполняем барабан изображениями
        for (let j = 0; j < 20; j++) {
            const item = document.createElement('div');
            item.className = 'reel-item';
            item.id = `reel${i}-item${j}`;
            item.dataset.symbol = '';
            
            // Создаем элемент изображения
            const img = document.createElement('img');
            const randomSymbol = config.reelItems[Math.floor(Math.random() * config.reelItems.length)];
            img.src = config.imagePaths[randomSymbol];
            img.alt = config.friendNames[randomSymbol] || 'Друг';
            item.dataset.symbol = randomSymbol;
            
            item.appendChild(img);
            reelStrip.appendChild(item);
        }

        const reelFrame = document.createElement('div');
        reelFrame.className = 'reel-frame';

        reel.appendChild(reelStrip);
        reel.appendChild(reelFrame);
        reelColumn.appendChild(reel);
        reelsContainer.appendChild(reelColumn);

         setTimeout(() => {
        if (!gameState.hasPurchasedCard) {
            showCharacterMessage('start');
        }
    }, 1000);

        // Сохраняем начальное состояние
        gameState.reels.push({
            element: reelStrip,
            position: 0
        });
    }

    // Создаем таблицу выплат
    createPaytable();

    // Инициализируем звуки
    initSounds();

    // Обновляем интерфейс
    updateUI();


    document.getElementById('showShop').addEventListener('click', toggleShop);
    document.getElementById('buyCongrats').addEventListener('click', buyBirthdayCard);
    document.getElementById('spinBtn').addEventListener('click', startSpin);
    document.getElementById('changeBetBtn').addEventListener('click', function() {
        playSound('click');
        toggleBetSelector();
    });
    document.getElementById('showPaytable').addEventListener('click', togglePaytable);
    document.getElementById('soundToggle').addEventListener('click', toggleSound);
    document.getElementById('musicToggle').addEventListener('click', toggleMusic);
    
    document.querySelectorAll('.bet-option').forEach(option => {
        option.addEventListener('click', function() {
            playSound('click');
            const betValue = this.getAttribute('data-bet');
            setBet(betValue);
            document.getElementById('betSelector').style.display = 'none';
        });
    });

    document.addEventListener('click', function(event) {
    const shop = document.getElementById('shop');
    const showShopBtn = document.getElementById('showShop');
    const shopOverlay = document.getElementById('shopOverlay');
    

    if (shop.style.display === 'block' && 
        shopOverlay && 
        event.target === shopOverlay) {
        closeShop();
    }
});

    document.addEventListener('click', function(event) {
        const paytable = document.getElementById('paytable');
        const showPaytableBtn = document.getElementById('showPaytable');
        const betSelector = document.getElementById('betSelector');
        const changeBetBtn = document.getElementById('changeBetBtn');
        
        if (paytable.style.display === 'block' && 
            !paytable.contains(event.target) && 
            !showPaytableBtn.contains(event.target)) {
            playSound('click');
            paytable.style.display = 'none';
        }
    
        if (betSelector.style.display === 'block' && 
            !betSelector.contains(event.target) && 
            !changeBetBtn.contains(event.target)) {
            playSound('click');
            betSelector.style.display = 'none';
        }
    });
}

function toggleBetSelector() {
    playSound('click');
    const betSelector = document.getElementById('betSelector');
    betSelector.style.display = betSelector.style.display === 'none' ? 'block' : 'none';
}

function setBet(betValue) {
    if (betValue === 'all') {
        gameState.currentBet = 'all';
        document.getElementById('currentBet').textContent = 'ВА-БАНК';
    } else {
        const bet = parseInt(betValue);
        if (bet <= gameState.balance) {
            gameState.currentBet = bet;
            document.getElementById('currentBet').textContent = bet.toFixed(2);
        } else {
            const possibleBets = config.availableBets.filter(b => b !== 'all' && b <= gameState.balance);
            if (possibleBets.length > 0) {
                const maxBet = Math.max(...possibleBets);
                gameState.currentBet = maxBet;
                document.getElementById('currentBet').textContent = maxBet.toFixed(2);
            } else {
                gameState.currentBet = 1;
                document.getElementById('currentBet').textContent = '1.00';
            }
            showMessage('Недостаточно фишек для такой ставки!');
        }
    }

    document.querySelectorAll('.bet-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-bet') === betValue.toString()) {
            option.classList.add('active');
        }
    });
    
    updateUI();
}

function showMessage(text) {
    const winMessage = document.getElementById('winMessage');
    winMessage.textContent = text;
    winMessage.style.display = 'block';
    
    setTimeout(() => {
        winMessage.style.display = 'none';
    }, 2000);
}

// Создание таблицы выплат
function createPaytable() {
    const paytableContent = document.getElementById('paytableContent');
    paytableContent.innerHTML = '';
    
    paytableContent.innerHTML += '<div style="color:#ffd700; margin-top:10px;">Множители линий:</div>';
    config.lines.forEach(line => {
        const lineItem = document.createElement('div');
        lineItem.className = 'paytable-item';
        lineItem.innerHTML = `<span>${line.name}</span><span>×${line.multiplier}</span>`;
        paytableContent.appendChild(lineItem);
    });
    
 
    
}

function togglePaytable() {
    playSound('click');
    const paytable = document.getElementById('paytable');
    const overlay = document.getElementById('overlay');
    
    if (paytable.style.display === 'block') {
        paytable.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        paytable.style.display = 'block';
        overlay.style.display = 'block';
    }
}

// Запуск вращения
function startSpin() {
    // Воспроизводим звук клика при нажатии на кнопку
    playSound('click');
    
    // Определяем сумму ставки
    let betAmount;
    if (gameState.currentBet === 'all') {
        betAmount = gameState.balance;
    } else {
        betAmount = gameState.currentBet;
    }
    
    if (gameState.isSpinning || gameState.balance < betAmount) {
        showMessage('Недостаточно фишек для игры!');
        return;
    }

    playSound('spin');

    // Скрыоваем все линии выигрышей и комбинации
    hideAllWinLines();
    resetWinItems();

    gameState.isSpinning = true;
    gameState.balance -= betAmount;
    document.getElementById('spinBtn').disabled = true;

   
    gameState.lastWin = 0;
    updateUI();

    const spins = [];
    for (let i = 0; i < config.reelsCount; i++) {
        spins.push(spinReel(i));
    }


    Promise.all(spins).then(() => {
        const winAmount = checkWin(betAmount);
        
    
        playResultSound(winAmount);
        
        if (gameState.hasPurchasedCard) {
            showCharacterMessage('afterPurchase');
        } else if (winAmount > 0) {
            showCharacterMessage('win');
        } else {
            showCharacterMessage('lose');
        }
        
        gameState.isSpinning = false;
        document.getElementById('spinBtn').disabled = false;
        updateUI();
    });

   
}

// Вращение одного барабана
function spinReel(reelIndex) {
    return new Promise(resolve => {
        const reel = gameState.reels[reelIndex];
        const totalItems = reel.element.children.length;
        const targetPosition = -Math.floor(Math.random() * (totalItems - config.visibleItems)) * 140;

        // Анимация
        let startTime = null;
        const duration = config.spinDuration + reelIndex * 200;

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Эффект замедления в конце
            const easing = progress < 0.8 ? 
                progress / 0.8 : 
                0.5 + 0.5 * Math.sin((progress - 0.8) / 0.2 * Math.PI - Math.PI / 2);

            const currentPosition = targetPosition * easing;
            reel.element.style.top = currentPosition + 'px';

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                reel.position = targetPosition;
                resolve();
            }
        }

        requestAnimationFrame(animate);
    });
}

// Проверка выигрышных комбинаций
function checkWin(betAmount) {
    const visibleItems = getVisibleItems();
    let totalWin = 0;
    const winningLines = [];

    // Проверяем каждую линию
    config.lines.forEach(line => {
        const lineItems = line.positions.map(pos => {
            if (pos[0] >= 0 && pos[0] < visibleItems.length && 
                pos[1] >= 0 && pos[1] < visibleItems[pos[0]].length) {
                return visibleItems[pos[0]][pos[1]];
            }
            return null;
        }).filter(item => item !== null);
        
        let foundCombinations = [];
        
        for (let count = 5; count >= 3; count--) {
            for (let start = 0; start <= lineItems.length - count; start++) {
                const segment = lineItems.slice(start, start + count);
                const firstSymbol = segment[0];
                
           
                const isWinning = segment.every(symbol => symbol === firstSymbol);
                
                if (isWinning && config.combinations[firstSymbol] && config.combinations[firstSymbol][count]) {
                    const overlap = foundCombinations.some(comb => 
                        (start >= comb.start && start < comb.start + comb.count) ||
                        (start + count > comb.start && start <= comb.start)
                    );
                    
                    if (!overlap) {
                        const winAmount = config.combinations[firstSymbol][count] * line.multiplier * (betAmount / config.betAmount);
                        totalWin += winAmount;
                      
                        const winPositions = line.positions.slice(start, start + count);
                        winningLines.push({ 
                            line: line, 
                            symbol: firstSymbol, 
                            count, 
                            amount: winAmount,
                            positions: winPositions
                        });
                        
                        foundCombinations.push({ start, count });
                    }
                }
            }
        }
    });

    if (totalWin > 0) {
        gameState.lastWin = totalWin;
        gameState.balance += totalWin;
        showWinMessage(totalWin);
 
        showWinCombinations(winningLines);
    }
if (totalWin > 0) {
    gameState.lastWin = totalWin;
    gameState.balance += totalWin;
    showWinMessage(totalWin);
    showWinCombinations(winningLines);
    setTimeout(tryShowAd, 1000);
}

    return totalWin;
}

function showWinCombinations(winningLines) {
    const combinationsContainer = document.getElementById('combinationsContainer');
    combinationsContainer.innerHTML = '';
    
    let combinationText = '';
    
    winningLines.forEach((win, index) => {
        const combinationElement = document.createElement('div');
        combinationElement.className = 'win-combination';
        combinationElement.id = `combination-${index}`;
      
        const positions = win.positions;
        const firstPos = positions[0];
        const lastPos = positions[positions.length - 1];
        
        // Получаем координаты элементов
        const firstElement = document.getElementById(`reel${firstPos[0]}-item${getVisibleItemIndex(firstPos[0], firstPos[1])}`);
        const lastElement = document.getElementById(`reel${lastPos[0]}-item${getVisibleItemIndex(lastPos[0], lastPos[1])}`);
        
        if (firstElement && lastElement) {
            const firstRect = firstElement.getBoundingClientRect();
            const lastRect = lastElement.getBoundingClientRect();
            const containerRect = document.getElementById('reelsContainer').getBoundingClientRect();
            
            combinationElement.style.left = (firstRect.left - containerRect.left) + 'px';
            combinationElement.style.top = (firstRect.top - containerRect.top) + 'px';
            combinationElement.style.width = (lastRect.right - firstRect.left) + 'px';
            combinationElement.style.height = (lastRect.bottom - firstRect.top) + 'px';
            
            combinationsContainer.appendChild(combinationElement);
            
            positions.forEach(pos => {
                const itemId = `reel${pos[0]}-item${getVisibleItemIndex(pos[0], pos[1])}`;
                const itemElement = document.getElementById(itemId);
                if (itemElement) {
                    itemElement.classList.add('win');
                }
            });

            const friendName = config.friendNames[win.symbol] || 'Друг';
            combinationText += `${win.line.name}: ${friendName} x${win.count} - ${win.amount.toFixed(2)} ₴<br>`;
        }
    });
    
    // Показываем информацию о комбинациях
    if (combinationText) {
        const combinationInfo = document.getElementById('combinationInfo');
        combinationInfo.innerHTML = combinationText;
        combinationInfo.style.display = 'block';
        
        setTimeout(() => {
            combinationInfo.style.display = 'none';
        }, 3000);
    }
    
    // Показываем комбинации на 3 секунды
    setTimeout(() => {
        combinationsContainer.innerHTML = '';
        resetWinItems();
    }, 3000);
}

// Получить индекс видимого элемента
function getVisibleItemIndex(reelIndex, rowIndex) {
    const reel = gameState.reels[reelIndex];
    const startIndex = Math.floor(-reel.position / 140);
    let itemIndex = (startIndex + rowIndex) % reel.element.children.length;
    if (itemIndex < 0) itemIndex += reel.element.children.length;
    return itemIndex;
}


function resetWinItems() {
    document.querySelectorAll('.reel-item.win').forEach(item => {
        item.classList.remove('win');
    });
}

// Получить видлимые элементы на барабанах
function getVisibleItems() {
    const visibleItems = [];
    
    for (let i = 0; i < config.reelsCount; i++) {
        const reel = gameState.reels[i];
        const items = [];
        const startIndex = Math.floor(-reel.position / 140);

        for (let j = 0; j < config.visibleItems; j++) {
            let itemIndex = (startIndex + j) % reel.element.children.length;
            if (itemIndex < 0) itemIndex += reel.element.children.length;
            const itemElement = reel.element.children[itemIndex];
            const symbol = itemElement.dataset.symbol;
            items.push(symbol);
        }
        
        visibleItems.push(items);
    }
    
    return visibleItems;
}

function hideAllWinLines() {
    document.querySelectorAll('.win-line').forEach(line => {
        line.style.display = 'none';
    });
}

function showWinMessage(amount) {
    const winMessage = document.getElementById('winMessage');
    winMessage.textContent = `ВЫИГРЫШ: ${amount.toFixed(2)} ₴`;
    winMessage.style.display = 'block';
    
    setTimeout(() => {
        winMessage.style.display = 'none';
    }, 3000);
}

// Обновление интерфейса
function updateUI() {
    document.getElementById('balance').textContent = gameState.balance.toFixed(2);
    document.getElementById('lastWin').textContent = gameState.lastWin.toFixed(2);
    if (gameState.currentBet === 'all') {
        document.getElementById('currentBet').textContent = 'ВА-БАНК';
    } else {
        document.getElementById('currentBet').textContent = gameState.currentBet.toFixed(2);
    }
}

function createAdBanner() {
    const adContainer = document.getElementById('adContainer');
    const banner = document.createElement('div');
    banner.className = 'ad-banner';
    
 
    const randomAd = config.adConfig.images[Math.floor(Math.random() * config.adConfig.images.length)];
    
    // Создаем изображение
    const img = document.createElement('img');
    img.src = randomAd;
    img.alt = "Реклама";
    img.onerror = function() {
        // Если изображение не загрузилось, создаем заглушку
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400" viewBox="0 0 300 400"><rect width="300" height="400" fill="%23333"/><text x="150" y="200" font-family="Arial" font-size="20" fill="white" text-anchor="middle">Рекламный баннер</text></svg>';
    };
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'ad-close';
    closeBtn.innerHTML = '×';
    closeBtn.addEventListener('click', function() {
        banner.style.animation = 'fadeIn 0.5s ease-out reverse';
        setTimeout(() => {
            if (banner.parentNode) {
                banner.remove();
            }
        }, 500);
    });
    
    banner.appendChild(img);
    banner.appendChild(closeBtn);
    adContainer.appendChild(banner);
    
    positionAdBanner(banner);
    
    setTimeout(() => {
        banner.style.display = 'block';
    }, 100);
    setTimeout(() => {
        if (banner.parentNode) {
            banner.style.animation = 'fadeIn 0.5s ease-out reverse';
            setTimeout(() => {
                if (banner.parentNode) {
                    banner.remove();
                }
            }, 500);
        }
    }, 15000);
}

function positionAdBanner(banner) {
    const slotMachine = document.querySelector('.slot-machine');
    const characterContainer = document.getElementById('characterContainer');
    
    const slotRect = slotMachine.getBoundingClientRect();
    const characterRect = characterContainer.getBoundingClientRect();
    
    const bannerWidth = 300;
    const bannerHeight = 400;
    
    const safeZones = [
       
        {
            x: { 
                min: 20, 
                max: Math.min(slotRect.left - bannerWidth - 20, window.innerWidth / 2 - bannerWidth - 50)
            },
            y: { 
                min: window.innerHeight * 0.2, 
                max: window.innerHeight * 0.5 - bannerHeight / 2
            }
        },
      
        {
            x: { 
                min: 20, 
                max: Math.min(slotRect.left - bannerWidth - 20, window.innerWidth / 2 - bannerWidth - 50)
            },
            y: { 
                min: window.innerHeight * 0.5 + bannerHeight / 2, 
                max: window.innerHeight * 0.8 - bannerHeight
            }
        },

        {
            x: { 
                min: Math.max(slotRect.right + 20, characterRect.right + 20), 
                max: window.innerWidth - bannerWidth - 20
            },
            y: { 
                min: window.innerHeight * 0.2, 
                max: window.innerHeight * 0.4 - bannerHeight / 2
            }
        },
     
        {
            x: { 
                min: Math.max(slotRect.right + 20, characterRect.right + 20), 
                max: window.innerWidth - bannerWidth - 20
            },
            y: { 
                min: window.innerHeight * 0.6 + bannerHeight / 2, 
                max: window.innerHeight * 0.8 - bannerHeight
            }
        },

        {
            x: { 
                min: window.innerWidth / 2 - bannerWidth / 2, 
                max: window.innerWidth / 2 - bannerWidth / 2
            },
            y: { 
                min: 20, 
                max: slotRect.top - bannerHeight - 20
            }
        },
  
        {
            x: { 
                min: window.innerWidth / 2 - bannerWidth / 2, 
                max: window.innerWidth / 2 - bannerWidth / 2
            },
            y: { 
                min: slotRect.bottom + 20, 
                max: window.innerHeight - bannerHeight - 20
            }
        }
    ].filter(zone => {
        
        return zone.x.max > zone.x.min && zone.y.max > zone.y.min;
    });
    
    if (safeZones.length === 0) {
     
        banner.style.left = '20px';
        banner.style.top = '20px';
        return;
    }
    
  
    const randomZone = safeZones[Math.floor(Math.random() * safeZones.length)];
    
    const randomX = Math.random() * (randomZone.x.max - randomZone.x.min) + randomZone.x.min;
    const randomY = Math.random() * (randomZone.y.max - randomZone.y.min) + randomZone.y.min;
    
    banner.style.left = Math.max(10, Math.min(randomX, window.innerWidth - bannerWidth - 10)) + 'px';
    banner.style.top = Math.max(10, Math.min(randomY, window.innerHeight - bannerHeight - 10)) + 'px';
}

function showRandomAd() {
    if (Math.random() < config.adConfig.showChance) {
        createAdBanner();
    }
}

let lastAdTime = 0;

function tryShowAd() {
    const currentTime = Date.now();
    const timeSinceLastAd = (currentTime - lastAdTime) / 1000;
    if (timeSinceLastAd > config.adConfig.minDelay) {
        const randomDelay = Math.random() * (config.adConfig.maxDelay - config.adConfig.minDelay) + config.adConfig.minDelay;
        
        if (timeSinceLastAd > randomDelay) {
            showRandomAd();
            lastAdTime = currentTime;
        }
    }
}

window.onload = initGame;
