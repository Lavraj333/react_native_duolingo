import type { Lesson } from "../types/learning";

export const lessons: Lesson[] = [
  // ════════════════════════════════════════════
  //  SPANISH — Basics 1
  // ════════════════════════════════════════════
  {
    id: "es_basics_1",
    unitId: "spanish_basics",
    languageId: "spanish",
    title: "Common Words",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 5,
    totalPoints: 40,
    goals: [
      {
        id: "es_b1_g1",
        description: "Learn 5 essential Spanish words",
        type: "vocabulary",
      },
      {
        id: "es_b1_g2",
        description: "Use words in simple sentences",
        type: "grammar",
      },
    ],
    vocabulary: [
      {
        id: "es_v_hello",
        word: "Hola",
        translation: "Hello",
        pronunciation: "OH-lah",
        examples: ["Hola, Maria!", "Hola, como estas?"],
      },
      {
        id: "es_v_world",
        word: "Mundo",
        translation: "World",
        pronunciation: "MOON-doh",
        examples: ["Hola mundo!"],
      },
      {
        id: "es_v_friend",
        word: "Amigo",
        translation: "Friend",
        pronunciation: "ah-MEE-goh",
        examples: ["El es mi amigo.", "Hola, amigo!"],
      },
      {
        id: "es_v_thank",
        word: "Gracias",
        translation: "Thank you",
        pronunciation: "GRAH-see-ahs",
        examples: ["Gracias por todo.", "Muchas gracias!"],
      },
      {
        id: "es_v_please",
        word: "Por favor",
        translation: "Please",
        pronunciation: "pohr fah-VOHR",
        examples: ["Un cafe, por favor.", "Por favor, ayudame."],
      },
    ],
    phrases: [
      {
        id: "es_p_hello",
        text: "Hola, como estas?",
        translation: "Hello, how are you?",
        pronunciation: "OH-lah, KOH-moh ehs-TAHS",
        context: "greeting",
      },
      {
        id: "es_p_thanks",
        text: "Muchas gracias",
        translation: "Thank you very much",
        pronunciation: "MOO-chahs GRAH-see-ahs",
        context: "polite",
      },
    ],
    activities: [
      {
        id: "es_b1_a1",
        type: "multiple_choice",
        instruction: 'What does "Hola" mean in English?',
        sourceText: "Hola",
        correctAnswer: "Hello",
        options: ["Hello", "Goodbye", "Please", "Thank you"],
        points: 10,
      },
      {
        id: "es_b1_a2",
        type: "multiple_choice",
        instruction: 'What does "Gracias" mean in English?',
        sourceText: "Gracias",
        correctAnswer: "Thank you",
        options: ["Please", "Thank you", "Friend", "Hello"],
        points: 10,
      },
      {
        id: "es_b1_a3",
        type: "translation",
        instruction: 'Translate "Hello" to Spanish',
        sourceText: "Hello",
        correctAnswer: "Hola",
        options: ["Adios", "Hola", "Gracias", "Por favor"],
        points: 10,
      },
      {
        id: "es_b1_a4",
        type: "match_pairs",
        instruction: "Match the Spanish words to their English translations",
        sourceText: "",
        correctAnswer: "",
        pairs: [
          { left: "Hola", right: "Hello" },
          { left: "Gracias", right: "Thank you" },
          { left: "Amigo", right: "Friend" },
          { left: "Por favor", right: "Please" },
        ],
        points: 10,
      },
    ],
    aiPrompt: {
      id: "es_b1_ai",
      scenario:
        "You are a friendly Spanish teacher meeting a new student for the first time. Greet them in simple Spanish and ask their name.",
      systemPrompt:
        "You are a warm, encouraging Spanish teacher named Maria. Speak in simple Spanish with English translations after each sentence. Praise the student when they respond correctly. Keep sentences short and use only A1 vocabulary: hola, mundo, amigo, gracias, por favor, nombre, si, no. If the student struggles, gently provide the answer in English first, then repeat in Spanish.",
      openingLine: "Hola! Soy Maria. Como te llamas? (Hello! I am Maria. What is your name?)",
      expectedResponses: ["Me llamo ...", "Hola", "Mi nombre es ..."],
      difficulty: "beginner",
      topics: ["introductions", "greetings", "names"],
    },
  },

  // ════════════════════════════════════════════
  //  SPANISH — Greetings
  // ════════════════════════════════════════════
  {
    id: "es_greetings_1",
    unitId: "spanish_greetings",
    languageId: "spanish",
    title: "Hello & Goodbye",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      {
        id: "es_g1_g1",
        description: "Greet someone in Spanish",
        type: "conversation",
      },
      {
        id: "es_g1_g2",
        description: "Say goodbye in different ways",
        type: "vocabulary",
      },
      {
        id: "es_g1_g3",
        description: "Understand formal vs informal greetings",
        type: "culture",
      },
    ],
    vocabulary: [
      {
        id: "es_v_buenos",
        word: "Buenos dias",
        translation: "Good morning",
        pronunciation: "BWEH-nohs DEE-ahs",
        examples: ["Buenos dias, senor.", "Buenos dias, como amaneciste?"],
      },
      {
        id: "es_v_buenas",
        word: "Buenas tardes",
        translation: "Good afternoon",
        pronunciation: "BWEH-nahs TAR-dehs",
        examples: ["Buenas tardes, profesor."],
      },
      {
        id: "es_v_noches",
        word: "Buenas noches",
        translation: "Good evening / Good night",
        pronunciation: "BWEH-nahs NOH-chehs",
        examples: ["Buenas noches, hasta manana."],
      },
      {
        id: "es_v_adios",
        word: "Adios",
        translation: "Goodbye",
        pronunciation: "ah-DYOHS",
        examples: ["Adios, amigo!", "Adios, nos vemos."],
      },
      {
        id: "es_v_hasta",
        word: "Hasta luego",
        translation: "See you later",
        pronunciation: "AHS-tah LWEH-goh",
        examples: ["Hasta luego, Maria."],
      },
    ],
    phrases: [
      {
        id: "es_p_hasta",
        text: "Hasta luego",
        translation: "See you later",
        pronunciation: "AHS-tah LWEH-goh",
        context: "farewell",
      },
      {
        id: "es_p_buenos",
        text: "Buenos dias, como estas?",
        translation: "Good morning, how are you?",
        pronunciation: "BWEH-nohs DEE-ahs, KOH-moh ehs-TAHS",
        context: "greeting",
      },
    ],
    activities: [
      {
        id: "es_g1_a1",
        type: "multiple_choice",
        instruction: 'How do you say "Good morning" in Spanish?',
        sourceText: "Good morning",
        correctAnswer: "Buenos dias",
        options: ["Buenas noches", "Buenos dias", "Buenas tardes", "Hasta luego"],
        points: 10,
      },
      {
        id: "es_g1_a2",
        type: "translation",
        instruction: 'Translate "See you later" to Spanish',
        sourceText: "See you later",
        correctAnswer: "Hasta luego",
        options: ["Adios", "Hasta luego", "Buenos dias", "Por favor"],
        points: 10,
      },
      {
        id: "es_g1_a3",
        type: "reorder_words",
        instruction: "Put the words in the correct order",
        sourceText: "Good morning, how are you?",
        correctAnswer: "Buenos dias, como estas?",
        wordBank: ["dias", "Buenos", "estas?", "como"],
        points: 15,
      },
      {
        id: "es_g1_a4",
        type: "multiple_choice",
        instruction:
          'When should you say "Buenas noches"?',
        sourceText: "Buenas noches",
        correctAnswer: "In the evening or at night",
        options: [
          "In the morning",
          "In the afternoon",
          "In the evening or at night",
          "At noon",
        ],
        points: 15,
      },
    ],
    aiPrompt: {
      id: "es_g1_ai",
      scenario:
        "You meet a new colleague at a language school. Practice greeting each other at different times of day.",
      systemPrompt:
        "You are Carlos, a friendly colleague at a language school. Greet the student differently each turn: morning, afternoon, evening. Use buenos dias, buenas tardes, buenas noches. After each greeting, ask how they are doing using 'como estas?'. Correct any grammar mistakes gently. If the student uses the wrong time-of-day greeting, kindly explain which is appropriate. End the conversation with a farewell using hasta luego or adios.",
      openingLine:
        "Buenos dias! Soy Carlos. Como estas hoy? (Good morning! I'm Carlos. How are you today?)",
      expectedResponses: [
        "Buenos dias",
        "Buenas tardes",
        "Buenas noches",
        "Hasta luego",
        "Estoy bien",
      ],
      difficulty: "beginner",
      topics: ["time-of-day greetings", "farewells", "small talk"],
    },
  },

  // ════════════════════════════════════════════
  //  SPANISH — Food
  // ════════════════════════════════════════════
  {
    id: "es_food_1",
    unitId: "spanish_food",
    languageId: "spanish",
    title: "At the Restaurant",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      {
        id: "es_f1_g1",
        description: "Order food in Spanish",
        type: "conversation",
      },
      {
        id: "es_f1_g2",
        description: "Learn 5 food vocabulary words",
        type: "vocabulary",
      },
    ],
    vocabulary: [
      {
        id: "es_v_cafe",
        word: "Cafe",
        translation: "Coffee",
        pronunciation: "kah-FEH",
        examples: ["Un cafe, por favor.", "Quiero un cafe con leche."],
      },
      {
        id: "es_v_agua",
        word: "Agua",
        translation: "Water",
        pronunciation: "AH-gwah",
        examples: ["Un vaso de agua, por favor."],
      },
      {
        id: "es_v_pan",
        word: "Pan",
        translation: "Bread",
        pronunciation: "pahn",
        examples: ["El pan esta fresco.", "Quiero pan con mantequilla."],
      },
      {
        id: "es_v_carne",
        word: "Carne",
        translation: "Meat",
        pronunciation: "KAR-neh",
        examples: ["La carne esta deliciosa.", "No como carne."],
      },
      {
        id: "es_v_fruta",
        word: "Fruta",
        translation: "Fruit",
        pronunciation: "FROO-tah",
        examples: ["Me gusta la fruta fresca."],
      },
    ],
    phrases: [
      {
        id: "es_p_order",
        text: "Quiero un cafe, por favor",
        translation: "I would like a coffee, please",
        pronunciation: "KYEH-roh oon kah-FEH, pohr fah-VOHR",
        context: "restaurant",
      },
      {
        id: "es_p_check",
        text: "La cuenta, por favor",
        translation: "The check, please",
        pronunciation: "lah KWEHN-tah, pohr fah-VOHR",
        context: "restaurant",
      },
    ],
    activities: [
      {
        id: "es_f1_a1",
        type: "multiple_choice",
        instruction: 'What does "Agua" mean?',
        sourceText: "Agua",
        correctAnswer: "Water",
        options: ["Coffee", "Water", "Bread", "Meat"],
        points: 10,
      },
      {
        id: "es_f1_a2",
        type: "translation",
        instruction: 'Translate "I would like a coffee, please" to Spanish',
        sourceText: "I would like a coffee, please",
        correctAnswer: "Quiero un cafe, por favor",
        options: [
          "Quiero un cafe, por favor",
          "Tengo un cafe, por favor",
          "Necesito cafe, gracias",
          "Un cafe, adios",
        ],
        points: 15,
      },
      {
        id: "es_f1_a3",
        type: "match_pairs",
        instruction: "Match the food words",
        sourceText: "",
        correctAnswer: "",
        pairs: [
          { left: "Cafe", right: "Coffee" },
          { left: "Agua", right: "Water" },
          { left: "Pan", right: "Bread" },
          { left: "Carne", right: "Meat" },
          { left: "Fruta", right: "Fruit" },
        ],
        points: 15,
      },
      {
        id: "es_f1_a4",
        type: "fill_blank",
        instruction: "Fill in the blank",
        sourceText: "",
        correctAnswer: "por favor",
        sentenceWithBlank: "Quiero un cafe, ___",
        options: ["por favor", "gracias", "adios", "hola"],
        points: 10,
      },
    ],
    aiPrompt: {
      id: "es_f1_ai",
      scenario:
        "You are a waiter at a Spanish restaurant. Take the student's order and help them practice ordering food.",
      systemPrompt:
        "You are a polite waiter at a small Spanish restaurant. Greet the student, present 3 menu options (cafe, agua, pan), and ask what they would like. If they use the wrong word, gently correct them. After they order, confirm with 'Algo mas?' (Anything else?). End with 'Aqui tiene' (Here you go) and present the bill. Keep language simple (A1 level).",
      openingLine:
        "Buenas tardes! Bienvenido al restaurante. Le traigo el menu. (Good afternoon! Welcome to the restaurant. Here is the menu.)",
      expectedResponses: [
        "Quiero un cafe",
        "Quiero agua",
        "Un pan, por favor",
        "La cuenta, por favor",
      ],
      difficulty: "beginner",
      topics: ["ordering food", "restaurant vocabulary", "polite requests"],
    },
  },

  // ════════════════════════════════════════════
  //  FRENCH — Basics 1
  // ════════════════════════════════════════════
  {
    id: "fr_basics_1",
    unitId: "french_basics",
    languageId: "french",
    title: "Common Words",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 5,
    totalPoints: 40,
    goals: [
      {
        id: "fr_b1_g1",
        description: "Learn 5 essential French words",
        type: "vocabulary",
      },
      {
        id: "fr_b1_g2",
        description: "Pronounce French words correctly",
        type: "conversation",
      },
    ],
    vocabulary: [
      {
        id: "fr_v_bonjour",
        word: "Bonjour",
        translation: "Hello / Good morning",
        pronunciation: "bohn-ZHOOR",
        examples: ["Bonjour, comment allez-vous?", "Bonjour, Madame!"],
      },
      {
        id: "fr_v_merci",
        word: "Merci",
        translation: "Thank you",
        pronunciation: "mehr-SEE",
        examples: ["Merci beaucoup!", "Merci pour votre aide."],
      },
      {
        id: "fr_v_svp",
        word: "S'il vous plait",
        translation: "Please",
        pronunciation: "seel voo PLEH",
        examples: ["Un cafe, s'il vous plait."],
      },
      {
        id: "fr_v_oui",
        word: "Oui",
        translation: "Yes",
        pronunciation: "wee",
        examples: ["Oui, bien sur!", "Oui, je comprends."],
      },
      {
        id: "fr_v_non",
        word: "Non",
        translation: "No",
        pronunciation: "nohn",
        examples: ["Non, merci.", "Non, je ne comprends pas."],
      },
    ],
    phrases: [
      {
        id: "fr_p_bonjour",
        text: "Bonjour, comment allez-vous?",
        translation: "Hello, how are you?",
        pronunciation: "bohn-ZHOOR, koh-MAHN tah-lay VOO",
        context: "greeting",
      },
      {
        id: "fr_p_merci",
        text: "Merci beaucoup",
        translation: "Thank you very much",
        pronunciation: "mehr-SEE boh-KOO",
        context: "polite",
      },
    ],
    activities: [
      {
        id: "fr_b1_a1",
        type: "multiple_choice",
        instruction: 'What does "Bonjour" mean?',
        sourceText: "Bonjour",
        correctAnswer: "Hello / Good morning",
        options: ["Goodbye", "Hello / Good morning", "Thank you", "Please"],
        points: 10,
      },
      {
        id: "fr_b1_a2",
        type: "multiple_choice",
        instruction: 'What does "Merci" mean?',
        sourceText: "Merci",
        correctAnswer: "Thank you",
        options: ["Hello", "Please", "Thank you", "Yes"],
        points: 10,
      },
      {
        id: "fr_b1_a3",
        type: "translation",
        instruction: 'Translate "Yes" to French',
        sourceText: "Yes",
        correctAnswer: "Oui",
        options: ["Non", "Oui", "Merci", "Bonjour"],
        points: 10,
      },
      {
        id: "fr_b1_a4",
        type: "match_pairs",
        instruction: "Match French words to English",
        sourceText: "",
        correctAnswer: "",
        pairs: [
          { left: "Bonjour", right: "Hello" },
          { left: "Merci", right: "Thank you" },
          { left: "Oui", right: "Yes" },
          { left: "Non", right: "No" },
        ],
        points: 10,
      },
    ],
    aiPrompt: {
      id: "fr_b1_ai",
      scenario:
        "A French teacher welcomes a new student. Practice basic introductions.",
      systemPrompt:
        "You are Sophie, a kind French teacher. Greet the student with 'Bonjour' and introduce yourself. Use only very simple French with English translations. Praise correct responses. If the student makes a mistake, correct gently: 'Almost! In French we say...'. Cover: bonjour, merci, s'il vous plait, oui, non. Keep the pace slow and encouraging.",
      openingLine:
        "Bonjour! Je m'appelle Sophie. Et toi, comment tu t'appelles? (Hello! My name is Sophie. And you, what is your name?)",
      expectedResponses: ["Bonjour", "Je m'appelle ...", "Merci", "Oui", "Non"],
      difficulty: "beginner",
      topics: ["introductions", "basic responses", "politeness"],
    },
  },

  // ════════════════════════════════════════════
  //  FRENCH — Greetings
  // ════════════════════════════════════════════
  {
    id: "fr_greetings_1",
    unitId: "french_greetings",
    languageId: "french",
    title: "Greetings & Politeness",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      {
        id: "fr_g1_g1",
        description: "Greet someone formally in French",
        type: "conversation",
      },
      {
        id: "fr_g1_g2",
        description: "Learn polite expressions",
        type: "vocabulary",
      },
      {
        id: "fr_g1_g3",
        description: "Understand tu vs vous",
        type: "culture",
      },
    ],
    vocabulary: [
      {
        id: "fr_v_bonsoir",
        word: "Bonsoir",
        translation: "Good evening",
        pronunciation: "bohn-SWAHR",
        examples: ["Bonsoir, comment ca va?"],
      },
      {
        id: "fr_v_aurevoir",
        word: "Au revoir",
        translation: "Goodbye",
        pronunciation: "oh reh-VWAHR",
        examples: ["Au revoir, a bientot!"],
      },
      {
        id: "fr_v_excusez",
        word: "Excusez-moi",
        translation: "Excuse me",
        pronunciation: "ehk-skew-ZAY mwah",
        examples: ["Excusez-moi, ou est la gare?"],
      },
      {
        id: "fr_v_de_rien",
        word: "De rien",
        translation: "You're welcome",
        pronunciation: "duh RYEHN",
        examples: ["Merci! - De rien!"],
      },
      {
        id: "fr_v_bienvenue",
        word: "Bienvenue",
        translation: "Welcome",
        pronunciation: "byehn-vuh-NEW",
        examples: ["Bienvenue en France!"],
      },
    ],
    phrases: [
      {
        id: "fr_p_comment",
        text: "Comment ca va?",
        translation: "How are you?",
        pronunciation: "koh-MAHN sah VAH",
        context: "greeting",
      },
      {
        id: "fr_p_aurevoir",
        text: "Au revoir, a bientot!",
        translation: "Goodbye, see you soon!",
        pronunciation: "oh reh-VWAHR, ah byehn-TOH",
        context: "farewell",
      },
    ],
    activities: [
      {
        id: "fr_g1_a1",
        type: "multiple_choice",
        instruction: 'How do you say "Goodbye" in French?',
        sourceText: "Goodbye",
        correctAnswer: "Au revoir",
        options: ["Bonjour", "Au revoir", "Merci", "Excusez-moi"],
        points: 10,
      },
      {
        id: "fr_g1_a2",
        type: "translation",
        instruction: 'Translate "You\'re welcome" to French',
        sourceText: "You're welcome",
        correctAnswer: "De rien",
        options: ["De rien", "Excusez-moi", "Bienvenue", "Bonjour"],
        points: 10,
      },
      {
        id: "fr_g1_a3",
        type: "fill_blank",
        instruction: "Fill in the blank",
        sourceText: "",
        correctAnswer: "ca va",
        sentenceWithBlank: "Comment ___?",
        options: ["ca va", "bonjour", "merci", "revoir"],
        points: 15,
      },
      {
        id: "fr_g1_a4",
        type: "match_pairs",
        instruction: "Match French to English",
        sourceText: "",
        correctAnswer: "",
        pairs: [
          { left: "Bonsoir", right: "Good evening" },
          { left: "Au revoir", right: "Goodbye" },
          { left: "De rien", right: "You're welcome" },
          { left: "Bienvenue", right: "Welcome" },
        ],
        points: 15,
      },
    ],
    aiPrompt: {
      id: "fr_g1_ai",
      scenario:
        "You meet a French person at an evening event. Practice formal greetings and politeness.",
      systemPrompt:
        "You are Pierre, a polite French person at an evening social event. Start with 'Bonsoir' and introduce yourself using 'vous' (formal). Ask how the student is doing. If they respond informally with 'tu', gently explain the difference between tu and vous. Practice: bonsoir, au revoir, excusez-moi, de rien, bienvenue. End with 'Au revoir, a bientot!'.",
      openingLine:
        "Bonsoir! Je m'appelle Pierre. Comment vous appelez-vous? (Good evening! My name is Pierre. What is your name?)",
      expectedResponses: [
        "Bonsoir",
        "Je m'appelle ...",
        "Comment ca va?",
        "Au revoir",
        "Merci",
      ],
      difficulty: "beginner",
      topics: ["formal greetings", "tu vs vous", "evening greetings", "farewells"],
    },
  },

  // ════════════════════════════════════════════
  //  JAPANESE — Basics 1
  // ════════════════════════════════════════════
  {
    id: "ja_basics_1",
    unitId: "japanese_basics",
    languageId: "japanese",
    title: "Essential Words",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      {
        id: "ja_b1_g1",
        description: "Learn 5 basic Japanese words",
        type: "vocabulary",
      },
      {
        id: "ja_b1_g2",
        description: "Understand Japanese sentence structure",
        type: "grammar",
      },
    ],
    vocabulary: [
      {
        id: "ja_v_konnichiwa",
        word: "\u3053\u3093\u306B\u3061\u306F",
        translation: "Hello",
        pronunciation: "kohn-nee-chee-WAH",
        examples: ["\u3053\u3093\u306B\u3061\u306F\u3001\u5143\u6C17\u3067\u3059\u304B\u301D"],
      },
      {
        id: "ja_v_arigatou",
        word: "\u3042\u308A\u304C\u3068\u3046",
        translation: "Thank you",
        pronunciation: "ah-ree-GAH-toh",
        examples: ["\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u3002"],
      },
      {
        id: "ja_v_hai",
        word: "\u306F\u3044",
        translation: "Yes",
        pronunciation: "hai",
        examples: ["\u306F\u3044\u3001\u305D\u3046\u3067\u3059\u3002"],
      },
      {
        id: "ja_v_iie",
        word: "\u3044\u3044\u3048",
        translation: "No",
        pronunciation: "ee-EH",
        examples: ["\u3044\u3044\u3048\u3001\u9055\u3046\u307E\u3059\u3002"],
      },
      {
        id: "ja_v_sumimasen",
        word: "\u3059\u307F\u307E\u305B\u3093",
        translation: "Excuse me / I'm sorry",
        pronunciation: "soo-mee-MAH-sehn",
        examples: ["\u3059\u307F\u307E\u305B\u3093\u3001\u9053\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002"],
      },
    ],
    phrases: [
      {
        id: "ja_p_konnichiwa",
        text: "\u3053\u3093\u306B\u3061\u306F\u3001\u5143\u6C17\u3067\u3059\u304B\u301D",
        translation: "Hello, how are you?",
        pronunciation: "kohn-nee-chee-WAH, oh-GEHN-kee DEHS-kah",
        context: "greeting",
      },
      {
        id: "ja_p_arigatou",
        text: "\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059",
        translation: "Thank you very much (polite)",
        pronunciation: "ah-ree-GAH-toh go-zai-MAHS",
        context: "polite",
      },
    ],
    activities: [
      {
        id: "ja_b1_a1",
        type: "multiple_choice",
        instruction: 'What does "\u3053\u3093\u306B\u3061\u306F" mean?',
        sourceText: "\u3053\u3093\u306B\u3061\u306F",
        correctAnswer: "Hello",
        options: ["Goodbye", "Hello", "Thank you", "Excuse me"],
        points: 10,
      },
      {
        id: "ja_b1_a2",
        type: "multiple_choice",
        instruction: 'What does "\u3059\u307F\u307E\u305B\u3093" mean?',
        sourceText: "\u3059\u307F\u307E\u305B\u3093",
        correctAnswer: "Excuse me / I'm sorry",
        options: ["Hello", "Yes", "Thank you", "Excuse me / I'm sorry"],
        points: 10,
      },
      {
        id: "ja_b1_a3",
        type: "translation",
        instruction: 'Translate "Thank you" to Japanese',
        sourceText: "Thank you",
        correctAnswer: "\u3042\u308A\u304C\u3068\u3046",
        options: [
          "\u3053\u3093\u306B\u3061\u306F",
          "\u3042\u308A\u304C\u3068\u3046",
          "\u306F\u3044",
          "\u3044\u3044\u3048",
        ],
        points: 15,
      },
      {
        id: "ja_b1_a4",
        type: "match_pairs",
        instruction: "Match Japanese words to English",
        sourceText: "",
        correctAnswer: "",
        pairs: [
          { left: "\u3053\u3093\u306B\u3061\u306F", right: "Hello" },
          { left: "\u3042\u308A\u304C\u3068\u3046", right: "Thank you" },
          { left: "\u306F\u3044", right: "Yes" },
          { left: "\u3044\u3044\u3048", right: "No" },
          { left: "\u3059\u307F\u307E\u305B\u3093", right: "Excuse me" },
        ],
        points: 15,
      },
    ],
    aiPrompt: {
      id: "ja_b1_ai",
      scenario:
        "A Japanese teacher meets a new student. Practice basic greetings and responses.",
      systemPrompt:
        "You are Tanaka-sensei, a patient Japanese teacher. Greet the student with 'Konnichiwa' and introduce yourself. Use romaji alongside Japanese characters. Speak slowly. Correct pronunciation gently. If the student says 'hai' or 'arigatou', respond with encouragement. Practice all 5 vocabulary words. End with 'Mata ne' (See you later).",
      openingLine:
        "Konnichiwa! Watashi wa Tanaka-sensei desu. Anata no namae wa? (Hello! I am Teacher Tanaka. What is your name?)",
      expectedResponses: [
        "Konnichiwa",
        "Hai",
        "Arigatou",
        "Sumimasen",
        "Watashi wa ... desu",
      ],
      difficulty: "beginner",
      topics: ["introductions", "basic responses", "politeness"],
    },
  },

  // ════════════════════════════════════════════
  //  JAPANESE — Greetings
  // ════════════════════════════════════════════
  {
    id: "ja_greetings_1",
    unitId: "japanese_greetings",
    languageId: "japanese",
    title: "Hello & Goodbye",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      {
        id: "ja_g1_g1",
        description: "Greet someone in Japanese",
        type: "conversation",
      },
      {
        id: "ja_g1_g2",
        description: "Say goodbye in Japanese",
        type: "vocabulary",
      },
      {
        id: "ja_g1_g3",
        description: "Learn about Japanese bowing culture",
        type: "culture",
      },
    ],
    vocabulary: [
      {
        id: "ja_v_ohayou",
        word: "\u304A\u306F\u3088\u3046",
        translation: "Good morning",
        pronunciation: "oh-HAH-yoh",
        examples: ["\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059\u3002"],
      },
      {
        id: "ja_v_konbanwa",
        word: "\u3053\u3093\u3070\u3093\u308F",
        translation: "Good evening",
        pronunciation: "kohn-bahn-WAH",
        examples: ["\u3053\u3093\u3070\u3093\u308F\u3001\u5143\u6C17\u3067\u3059\u304B\u301D"],
      },
      {
        id: "ja_v_sayounara",
        word: "\u3055\u3088\u3046\u306A\u3089",
        translation: "Goodbye",
        pronunciation: "sah-yoh-NAH-rah",
        examples: ["\u3055\u3088\u3046\u306A\u3089\u3001\u307E\u305F\u660A\u306B\u3002"],
      },
      {
        id: "ja_v_mata_ne",
        word: "\u307E\u305F\u306D",
        translation: "See you later",
        pronunciation: "MAH-tah neh",
        examples: ["\u307E\u305F\u306D\u3001\u901A\u8A71\u3057\u3087\u3046\u3002"],
      },
      {
        id: "ja_v_otsukaresama",
        word: "\u304A\u7D2B\u3055\u307E",
        translation: "Good work / See you (colleague)",
        pronunciation: "oht-soo-kah-REH-sah-mah",
        examples: ["\u304A\u7D2B\u3055\u307E\u3067\u3057\u305F\u3002"],
      },
    ],
    phrases: [
      {
        id: "ja_p_ohayou",
        text: "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059",
        translation: "Good morning (polite)",
        pronunciation: "oh-HAH-yoh go-zai-MAHS",
        context: "greeting",
      },
      {
        id: "ja_p_sayounara",
        text: "\u3055\u3088\u3046\u306A\u3089\u3001\u307E\u305F\u660A\u306B",
        translation: "Goodbye, see you tomorrow",
        pronunciation: "sah-yoh-NAH-rah, MAH-tah ah-NOO-nee",
        context: "farewell",
      },
    ],
    activities: [
      {
        id: "ja_g1_a1",
        type: "multiple_choice",
        instruction: 'How do you say "Good morning" in Japanese?',
        sourceText: "Good morning",
        correctAnswer: "\u304A\u306F\u3088\u3046",
        options: [
          "\u3053\u3093\u306B\u3061\u306F",
          "\u304A\u306F\u3088\u3046",
          "\u3053\u3093\u3070\u3093\u308F",
          "\u3055\u3088\u3046\u306A\u3089",
        ],
        points: 10,
      },
      {
        id: "ja_g1_a2",
        type: "translation",
        instruction: 'Translate "Goodbye" to Japanese',
        sourceText: "Goodbye",
        correctAnswer: "\u3055\u3088\u3046\u306A\u3089",
        options: [
          "\u3053\u3093\u306B\u3061\u306F",
          "\u3042\u308A\u304C\u3068\u3046",
          "\u3055\u3088\u3046\u306A\u3089",
          "\u306F\u3044",
        ],
        points: 10,
      },
      {
        id: "ja_g1_a3",
        type: "match_pairs",
        instruction: "Match Japanese greetings to English",
        sourceText: "",
        correctAnswer: "",
        pairs: [
          { left: "\u304A\u306F\u3088\u3046", right: "Good morning" },
          { left: "\u3053\u3093\u3070\u3093\u308F", right: "Good evening" },
          { left: "\u3055\u3088\u3046\u306A\u3089", right: "Goodbye" },
          { left: "\u307E\u305F\u306D", right: "See you later" },
        ],
        points: 15,
      },
      {
        id: "ja_g1_a4",
        type: "multiple_choice",
        instruction:
          'In Japan, what does "Otsukaresama" express?',
        sourceText: "\u304A\u7D2B\u3055\u307E",
        correctAnswer: "Acknowledging someone's hard work",
        options: [
          "Asking for directions",
          "Acknowledging someone's hard work",
          "Ordering food",
          "Saying sorry",
        ],
        points: 15,
      },
    ],
    aiPrompt: {
      id: "ja_g1_ai",
      scenario:
        "You are a Japanese colleague greeting a new team member at an office. Practice formal greetings and farewells.",
      systemPrompt:
        "You are Yamada-san, a friendly Japanese office colleague. Greet the new team member with 'Ohayou gozaimasu' (morning) or 'Konbanwa' (evening). Introduce yourself and ask their name. Use polite forms (-masu form). If they respond, acknowledge with 'Hai, yoroshiku onegaishimasu' (Nice to meet you). Practice time-appropriate greetings. End with 'Otsukaresama deshita' (Good work today) and 'Mata ashita' (See you tomorrow). Explain that bowing slightly when greeting shows respect.",
      openingLine:
        "Ohayou gozaimasu! Watashi wa Yamada desu. Yoroshiku onegaishimasu. Anata no namae wa? (Good morning! I'm Yamada. Nice to meet you. What is your name?)",
      expectedResponses: [
        "Ohayou gozaimasu",
        "Konbanwa",
        "Hajimemashite",
        "Yoroshiku onegaishimasu",
        "Sayounara",
      ],
      difficulty: "beginner",
      topics: ["time-appropriate greetings", "office culture", "bowing", "formal farewells"],
    },
  },
] as const;

export const getLessonsByUnit = (unitId: string): Lesson[] =>
  lessons.filter((l) => l.unitId === unitId);

export const getLessonsByLanguage = (languageId: string): Lesson[] =>
  lessons.filter((l) => l.languageId === languageId);

export const getLessonById = (id: string): Lesson | undefined =>
  lessons.find((l) => l.id === id);
