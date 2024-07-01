document.addEventListener('DOMContentLoaded', () => {
    const poemButtons = document.querySelectorAll('.poem-button');
    const poemDisplay = document.getElementById('poemDisplay');
    const poemContent = document.getElementById('poemContent');
    const closePoemButton = document.getElementById('closePoemButton');
    const poems = {
        'start': 'On your special day, I send wishes bright,\nMay joy and laughter fill your sight.\nEnjoy these poems, a gift from my heart\'s core,\nHappy birthday, my love, forevermore.🫶🏻',
        
        'Poem 1': 'wo khilkhilati hui uski hasi, uske badan ki mardani sakhti\nus bheed main uski munfrid mojudgi main kabhi bhulungi nahi\n\nis ek badi si duniya main reh kar uski aankhon main uski khudki ek duniya thi\nnajane kitne khususi logo ko samaya hoga duniya main usne apni\n\nkya kabhi main use dikhungi? Haye meri badi badi khushfehmi\nkya naam hoga us kaynaat ka jisme mujhe wo duniya dikhi\n\nkya kabhi us duniya se saamna hoga? Ya ye bhi koi khushfehmi reh jayegi?\nWo kaynat hamesha se hi mere aas paas hi thi, per pehle kabhi dikhi kyu nahi?\n\nShayad is kaynaat ko apna banane ka waqt abhi aaya isliye ye abhi dikhi!\nAre are meri badi badi khushfehmi\n\nKaha rehti hai ye kaynaat ,mujhse kitni door hai ye?\nAchhi hai ya buri mere liye kitni sahi hai ye?\n\nKya naam hoga is kaynat ka jisko jane bagair mainne apni kaynaat bana li hai?\nEk na qabil-e-shanakht tajassus paida hui hai mujhme\n\nKya is kaynaat k paas jaya jaye, ya bas door se hi dekh kar apne mann ko behlaya jaye?\nNajane kya faisla hoga mera per mujhe itna to pata hai\n\nek khubsurat kaynat se pehli baar mera samna hua hai\nmeri ho ya na ho, dekhna to banta hai',

        'Poem 2': 'The days stretch on, each moment a year,\nSince I last saw him, my heart holds dear.\n\nIn memories, he lingers, a gentle trace,\nYet my soul longs to see his beloved face.\n\nThe wait is heavy, like a sky before rain,\nYet hope remains, amidst the pain.\n\nHis laughter, his eyes, his tender embrace,\nAll I seek is his presence, his grace.\n\nTime drifts slowly, yet my hope stays strong,\nIn dreams, he visits, where he belongs.\n\nOh, how I yearn for that cherished sight,\nTo see him again, to feel pure delight.',

        'Poem 3': 'In the midst of vibrant colors, he stands so tall,\nWearing purple threads that gracefully fall.\nA traditional day, a sight to behold,\n\nIn his kurta of purple, a vision of gold.\nWith every glance, my heart does sway,\nAdoring him more with each passing way.\n\nHis presence, a poem, in the language of old,\nHis smile, a story, tender and bold.\nIn the hues of purple, tradition we weave,\n\nIn the charm of his style, I truly believe.\nA moment so pure, in his eyes I find,\nAn eternal purity, beautifully intertwined.',
        
        'Poem 4': 'In the glow of his gaze, my heart takes flight,\nHe is finally noticed, my world feels right.\nA dream awakened, a wish come true,\nHe speaks to me, and the skies turn blue.\n\nGratitude fills every corner of my soul,\nFor his words, his presence, making me whole.\nIn the warmth of his voice, I find my place,\nIn his kindness, a tender embrace.\n\nOur first handshake, a moment unique,\nA touch that was gentle, a little mystique.\nIn his notice, I blossom, in his light I bask,\nGrateful for him, in every breath I ask.',
        
        'Poem 5': 'Each day begins with his voice, a soothing start,\nHis presence a balm to my eager heart.\nIn every bus ride, a shared journey we take,\nWith him by my side, no path seems fake.\n\nHe makes the effort, day in and day out,\nTo be with me, removing any doubt.\nTogether to college, and back we return,\nIn his care and kindness, I truly learn.\n\nGratitude overflows for the steps he takes,\nFor the bond we build, for the memories we make.\nFeeling special, cherished, in his gentle embrace,\nAppreciating his efforts, his love, and grace.',
        
        'Poem 6': 'jo haath hamesha ulfat se uthe ,aise haath pasand hai mujhe\njin hatho main shakhs ki mehnat jhalke, aise hatho per fakhr hai mujhe\njin haatho ne apni zindagi ka wazan uthaya ho fir bhi unme ik narmi rahe,aise haatho ki  talab hai mujhe\n\njin haatho ko thaam kar kisi cheez se dar na lage,use paane ki ek umang hai mujhme\njin haatho se dar lagta tha mujhe aaj wahi bas pasand hai\njin haatho ko dekh kar thar tharati thi main ,aaj unme hi sukoon hai\n\nye haatho ki garmi,puri ruh ko thandak deti hai\nhar waqt inhe thamne ka dil bahana deti hai\npasand aye hai wo haath jinse nafrat thi mujhe',
        
        'Poem 7': 'Roz ki aadat hai, us ki maujoodgi ka noor,\nMeri zindagi mein hai, woh ik qeemti huzoor.\nUs ki baatein, us ka dilkash andaaz,\nDil ko bhaata hai, har lafz ka aghaaz.\n\nUs ki awaaz mein hai, ek khaas kashish,\nDil chahe sunna, us ki baaton ki ramish.\nRoz ki baatein, roz ka yeh safar,\nYeh lamhe qeemti, yeh din raat ka hunar.\n\nNa chhode kabhi, yeh pyaar bhari guftagu,\nUs ki maujoodgi, hai meri rooh ka wuzu.\nAadat si hogayi hai, us ki har baat ki,\nUse sunoon main, dil chahe har raat ki.',
        
        'Poem 8': 'Teri mojudgi meri zindagi ka ek khaas hissa ban gayi,\nHar din tere saath guzarta hai, jaise ek nayi duniya bas gayi.\nTere bina jeena ab mumkin nahin lagta,\nTere bina khushiyon ka rang, dheere dheere dhundla lagta.\n\nTu mere dil per chaya hai, meri har ek saans mein samaya tu,\nTere bina zindagi, ek adhoori kahani hai, bas tu hi tu.\nKhauf hai mujhe, kahin tu door na chala jaaye,\nTere bina mere sapne, phir se na bikhar jaaye.\n\nTere jane ka darr, mujhe raaton ko jagata hai,\nTere bina zindagi ka har pal, mujhe rulate rehta hai.\nTu hai toh sab kuch hai, teri mohabbat ka hai sahara,\nMeri dua hai, tu kabhi na ho mujhse juda, tu mera pyaara.',
        
        'Poem 9': 'Shuruat se hi uljhi thi ye zindagi jo ab tak suljhi nahi\nSuljhane k liye kabhi ye uljhan samjhi hi nahi\nKhudse wada kiya tha k is uljhan main kabhi kisi suljhe insaan ko tabah karungi nahi\nPhir dil aur dimaag ne 2 alag baat kahi\n\nDil ne kaha\n“is uljhan ko bina suljhaye ager mil rahi hai tujhe itni khushi , to kyu takleef uthana ise suljhane ki\nJis sukoon k liye tu ye uljhan suljhana chahti thi ,bina suljhe tujhe akhir kaar mil hi to gayi ,to kyu takleef uthana ise suljhane ki\nJin ehsasaat k liye tu is uljhan se nikalna chahti thi wo bina suljhe mil rahi ,to kyu takleef uthana ise suljhane ki”\n\nPer dimaag ne dant kar kaha k “wo suljha insaan bhi badi mushkil se aazad hua apni uljhano se, to kyu takleef dena use fir se apni uljhan main uljhane ki.\nMat sabab bana is suljhe insaan ko apni aarzi Khushi ki, teri uljhan main wo ulajh gaya to uski zindagi tabah hojayegi\nfir kisi suljhe insaan ki tabahi ka sabab ban kar teri uljhan kabhi khatm nahi hopayegi”\n\nager puchoge k mainne kis ki suni ,dill ki ya dimaag ki\nsach kahu to is faisle main bhi uljhi hun jisko shayad mujhe kabhi suljhana nahi',
        
        'Poem 10': 'his warm lips finally glided on mine, everything around us blurred so hard that I see our world collide\nthat burning sensation in my heart grew, as our hands intertwine\noh, the perfect settling emotion I had, to have this ‘finally’ moment in my life\n\nI remember how my body melts in his warm embrace, as he cherished me\nThose confusing thoughts, those confusing feeling\nthose unsettling emotions, and that uncontrollable thrilling\n\nOn this day with all the respect and consent I finally had my first kiss\nWith a beautiful face that I have always imagined\nWith such a beautiful person that never terrifies me',
        
        'Poem 11': 'Every moment with him, a thrilling delight,\nHis presence turns my day from gray to bright.\nLucky I feel, when he sits close by,\nHis smile makes me feel like I can touch the sky.\n\nWhen he looks at me, I feel so fair,\nHis gaze, a gentle touch, shows he cares.\nSecure in his arms, wrapped so tight,\nProtected and cherished, everything feels right.\n\nHis laughter, a melody, a sweet refrain,\nIn his company, I forget all pain.\nWith every touch, my heart does race,\nIn his embrace, I have found my safe place.',
        
        'Poem 12': 'When he pulls me close, his arms around me tight,\nI feel secure, protected, everything feels right.\nHis hand on my shoulder, a gentle embrace,\nIn his warmth and care, I have found my place.\n\nI have fallen asleep on his shoulder, so serene,\nHis gentle pats, a comfort I have never seen.\nThis feeling is new, so tender and rare,\nIn his presence, I forget all my care.\n\nGrateful am I for these moments we share,\nFor the warmth and the love, for his gentle care.\nIn his embrace, my heart feels so light,\nThankful for him, my shining light.',
        
        'Poem 13': 'Ek kachhe safar per nikli thi main ,irade the sachhe\nLaga kayi log hai saath dene , per sach main koi nahi the\n\nKab khatam hoga ye safar aur kitna lamba hoga?\nKya koi hamsafar ikhtetam per milega?\n\nEk waqt k liye khudko samjha diya \nK koi nahi hai ab mere peeche\n\nFir ek jagah akhir kar aap mil gaye\nAb farak nahi padhta safar pakka ho ya kachha\n\nHamsafar ager aap ho to kyu safar khatam hone ka intezar karna?\nBas ye kachha safar khatam hojaye fir inshallah uske baad aapke saath ek naya shuru karna\n\nKayi ummide hai aapki mujhse mujhe pata \nPer aapko abhi wo sab nahi desakti ,mujhe zara maaf karna\n\nBas ye kachha safar khatam hojaye fir dekhte hai na\nHosakta hai kismet mujhpe thodi meherbaan hojaye, fir aapke pass ajaungi na\n\nBas ek kaam diya tha khuda ko, k is kachhe safar main kisi hamsafar ko dedona\nAb unhone galti se pakke safar main likhe hue hamsafar ko yaha dediya to main kya karu samjh nai araha\n\nNa aapko apne pass rakh sakti hun , na aapko chodh sakti hun\nKaash aap meri halat samjh kar , pakke safar ki inteha k waqt bhi sathme ajaona',
        
        'Poem 14': 'Kuch baate hai kehne ki jo main keh na saki\nKisine roka nahi , main khud hi khudko rok rahi\n\nKahi sab kuch bigad na jaye, aisi nadani nahi kar sakti\nHosh-o-hawas main koi beimani nahi kar sakti\n\nKhudse jhoot bolrahi hun main ki, kuch fark nahi padhta\nMujhse behtar aur koi nahi janta k chubhan kitni hoti\n\nSach jaan kar bhi khudko jhoot kehna\nSab dekh kar bhi undekha karna\n\nItni Khushi paa kar bhi yakeen na karna\nIn khushiyon ki,khwahishat ki, ulfat ki, gurbat mein main itna fasi \n\nK jab ye chote chote khwab pure hone lage to inhe apnane se main dari\nKya hoga is rishte ka ,kya main karungi?\n\nDar dar ke hi aise jiyungi , ya apno ki izzat uchal kar ise apna lungi?\nNajane kya faisla hoga mera , main khudse hi yun bhaag rahi ',
        
        'Poem 15': 'My heart feels a whirlwind, emotions all entangled,\nFeelings for him, undeniable, yet still not handled.\nI know I like him, this truth is clear,\nBut commitment brings forth my deepest fear.\n\nI dread the thought of losing him, of being cast away,\nHated by him, my feelings in disarray.\nI wish I could promise, give what he deserves,\nBut my heart trembles, caught in unsteady curves.\n\nHe means so much, more than words can say,\nYet I am scared to lead him the wrong way.\nIn this confusion, my heart finds its plea,\nTo keep him close, and hope he understands me.',

        'Poem 16': 'Devilishly handsome, with a charm so fine,\nHis look is mesmerizing, his presence divine.\nHe reminds me of a fantasy, a dream come true,\nHotter than fire, with a gaze that pierces through.\n\nI crave to kiss him everywhere, lips so sweet,\nCheeks, forehead, chin, where our hearts meet.\nNose and eyes, where his soul does shine,\nEating his lips, tasting his essence so fine.\n\nTo hug him tight, feel his warmth and might,\nMake him touch me, in the softest light.\nHis allure captivates, a spell I can\'t break,\nIn his embrace, my every desire does awake.',
        
        'Poem 17': 'His masculine hands, when they trace my waist,\nHold me close, in their gentle embrace,\nEvery touch, a sensation of pleasure so true,\nIn his hands, I find comfort, I find you.\n\nFingers intertwined, a dance of desire,\nTracing paths of love, setting my heart on fire.\nWith each caress, my soul starts to bloom,\nIn his touch, I find solace, in his arms, my room.\n\nHis hands, a symphony, playing on my skin,\nAwakening desires, igniting passions within.\nIn his gentle grip, I find ecstasy untold,\nHis touch, my sanctuary, where I unfold.',
        
        'Poem 18': 'Chaand k manind chaal hai uski ahista se zehen main utra\nChaand ki tarah chamakta hai k dekhne ko bas man karta\nChaand ko dekh kar yaad ati hai uski khilkhilati hui hasi\n\nwo khilkhilati hasi uski timtimate tare ki tarah hai lagti\nbas ek lamhe k liye dikhti fir gayab wo hojati\nkaash wo lamha ruk jata to main thoda aur taadh leti\n\nchaand k manind chaal hai uski ahista se dil main utra\naise kaise ye chaand is banjar zameen per aa utra?\nuski wo aetamad wali hasi ab bhi mere kaano main gunjti\nnajane kab deedar honge us chaand k wapis,is gurbat mein main rehti\nPoonam ki raat ya mere dil ki aag se hogi?\nchaand k manind chaal hai uski dil-o-dimaag dono main hai utra',
        
        'Poem 19': 'With him, my heart is light, filled with pure delight,\nHis presence calms my fears, everything feels right.\nEvery day with him, I cherish, and I wish for more,\nHis company a treasure, my heart’s deepest core.\n\nHis presence brings comfort, no shadows of dread,\nIn his light, all my worries are easily shed.\nI long to spend each moment, every single day,\nWith him by my side, life finds its way.\n\nHe is healed my heart, mending what he did not break,\nIn his care and love, I find solace for my ache.\nHappiness surrounds me when he is near,\nIn his embrace, everything becomes clear.',
        
        'end': 'As you read these lines, may they softly say,\nOf love and longing in every gentle sway.\nIn each verse, a piece of my heart\'s lore,\nCherish these words, forevermore.🫶🏻',
    };

    poemButtons.forEach(button => {
        button.addEventListener('click', () => {
            const poemKey = button.getAttribute('data-poem');
            const poemText = poems[poemKey];
            displayPoem(poemText);
        });
    });

    closePoemButton.addEventListener('click', () => {
        poemDisplay.style.display = 'none';
        poemContent.innerHTML = '';
    });

    function displayPoem(poem) {
        poemDisplay.style.display = 'block';
        poemContent.innerHTML = '';
        let i = 0;
        const interval = setInterval(() => {
            if (i < poem.length) {
                if (poem[i] === '\n') {
                    poemContent.innerHTML += '<br>';
                } else {
                    poemContent.innerHTML += poem[i];
                }
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }
});
