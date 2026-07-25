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
  //  SPANISH — Basics 2: Greetings & Introductions
  // ════════════════════════════════════════════
  {
    id: "es_basics_2",
    unitId: "spanish_basics",
    languageId: "spanish",
    title: "Greetings & Introductions",
    order: 2,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      { id: "es_b2_g1", description: "Introduce yourself in Spanish", type: "conversation" },
      { id: "es_b2_g2", description: "Learn polite greetings", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "es_b2_v1", word: "Buenos dias", translation: "Good morning", pronunciation: "BWEH-nohs DEE-ahs", examples: ["Buenos dias, como estas?"] },
      { id: "es_b2_v2", word: "Buenas tardes", translation: "Good afternoon", pronunciation: "BWEH-nahs TAR-dehs", examples: ["Buenas tardes, senor."] },
      { id: "es_b2_v3", word: "Buenas noches", translation: "Good evening", pronunciation: "BWEH-nahs NOH-chehs", examples: ["Buenas noches, hasta manana."] },
      { id: "es_b2_v4", word: "Me llamo", translation: "My name is", pronunciation: "meh YAH-moh", examples: ["Me llamo Carlos."] },
      { id: "es_b2_v5", word: "Como te llamas", translation: "What is your name?", pronunciation: "KOH-moh teh YAH-mahs", examples: ["Hola, como te llamas?"] },
    ],
    phrases: [
      { id: "es_b2_p1", text: "Mucho gusto", translation: "Nice to meet you", pronunciation: "MOO-choh GOO-stoh", context: "greeting" },
      { id: "es_b2_p2", text: "Encantado de conocerte", translation: "Pleased to meet you", pronunciation: "ehn-kahn-TAH-doh deh koh-noh-SEHR-teh", context: "greeting" },
    ],
    activities: [
      { id: "es_b2_a1", type: "multiple_choice", instruction: 'How do you say "Good morning"?', sourceText: "Good morning", correctAnswer: "Buenos dias", options: ["Buenas noches", "Buenos dias", "Buenas tardes", "Adios"], points: 10 },
      { id: "es_b2_a2", type: "translation", instruction: 'Translate "My name is" to Spanish', sourceText: "My name is", correctAnswer: "Me llamo", options: ["Me llamo", "Yo soy", "Tu nombre", "Mi amigos"], points: 10 },
      { id: "es_b2_a3", type: "multiple_choice", instruction: 'What does "Mucho gusto" mean?', sourceText: "Mucho gusto", correctAnswer: "Nice to meet you", options: ["Goodbye", "Nice to meet you", "Thank you", "Good morning"], points: 15 },
      { id: "es_b2_a4", type: "match_pairs", instruction: "Match the greetings", sourceText: "", correctAnswer: "", pairs: [{ left: "Buenos dias", right: "Good morning" }, { left: "Buenas tardes", right: "Good afternoon" }, { left: "Buenas noches", right: "Good evening" }], points: 15 },
    ],
    aiPrompt: { id: "es_b2_ai", scenario: "Practice introducing yourself to a new friend.", systemPrompt: "You are a friendly Spanish speaker. Greet the student and ask their name. Encourage them to introduce themselves.", openingLine: "Buenos dias! Me llamo Maria. Como te llamas?", expectedResponses: ["Me llamo ...", "Hola", "Mucho gusto"], difficulty: "beginner", topics: ["introductions", "greetings"] },
  },

  // ════════════════════════════════════════════
  //  SPANISH — Basics 3: Daily Life
  // ════════════════════════════════════════════
  {
    id: "es_basics_3",
    unitId: "spanish_basics",
    languageId: "spanish",
    title: "Daily Life",
    order: 3,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "es_b3_g1", description: "Talk about daily routines", type: "conversation" },
      { id: "es_b3_g2", description: "Learn time expressions", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "es_b3_v1", word: "Manana", translation: "Morning", pronunciation: "mah-NYAH-nah", examples: ["Por la manana tomo cafe."] },
      { id: "es_b3_v2", word: "Tarde", translation: "Afternoon", pronunciation: "TAR-deh", examples: ["Por la tarde trabajo."] },
      { id: "es_b3_v3", word: "Noche", translation: "Evening", pronunciation: "NOH-cheh", examples: ["Por la noche veo television."] },
      { id: "es_b3_v4", word: "Trabajar", translation: "To work", pronunciation: "trah-bah-HAR", examples: ["Yo trabajo en una oficina."] },
      { id: "es_b3_v5", word: "Dormir", translation: "To sleep", pronunciation: "dor-MEER", examples: ["Duermo ocho horas."] },
    ],
    phrases: [
      { id: "es_b3_p1", text: "Como estas hoy?", translation: "How are you today?", pronunciation: "KOH-moh ehs-TAHS oy", context: "question" },
      { id: "es_b3_p2", text: "Estoy bien, gracias", translation: "I am fine, thank you", pronunciation: "ehs-TOY byehn, GRAH-see-ahs", context: "polite" },
    ],
    activities: [
      { id: "es_b3_a1", type: "multiple_choice", instruction: 'What does "Trabajar" mean?', sourceText: "Trabajar", correctAnswer: "To work", options: ["To sleep", "To work", "To eat", "To run"], points: 10 },
      { id: "es_b3_a2", type: "translation", instruction: 'Translate "I am fine" to Spanish', sourceText: "I am fine", correctAnswer: "Estoy bien", options: ["Estoy bien", "Soy bien", "Tengo bien", "Hago bien"], points: 10 },
      { id: "es_b3_a3", type: "fill_blank", instruction: "Fill in the blank", sourceText: "", correctAnswer: "manana", sentenceWithBlank: "Por la ___ tomo cafe.", options: ["manana", "noche", "tarde", "dia"], points: 15 },
      { id: "es_b3_a4", type: "match_pairs", instruction: "Match time words", sourceText: "", correctAnswer: "", pairs: [{ left: "Manana", right: "Morning" }, { left: "Tarde", right: "Afternoon" }, { left: "Noche", right: "Evening" }], points: 15 },
    ],
    aiPrompt: { id: "es_b3_ai", scenario: "Talk about your daily routine with a Spanish speaker.", systemPrompt: "You are a friendly Spanish speaker. Ask about the student's daily routine. Use simple vocabulary.", openingLine: "Hola! Como estas hoy? Que haces por la manana?", expectedResponses: ["Trabajo", "Duermo", "Estoy bien"], difficulty: "beginner", topics: ["daily routines", "time"] },
  },

  // ════════════════════════════════════════════
  //  SPANISH — Basics 4: At the Cafe
  // ════════════════════════════════════════════
  {
    id: "es_basics_4",
    unitId: "spanish_basics",
    languageId: "spanish",
    title: "At the Cafe",
    order: 4,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "es_b4_g1", description: "Order drinks at a cafe", type: "conversation" },
      { id: "es_b4_g2", description: "Learn cafe vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "es_b4_v1", word: "Cafe", translation: "Coffee", pronunciation: "kah-FEH", examples: ["Un cafe, por favor."] },
      { id: "es_b4_v2", word: "Leche", translation: "Milk", pronunciation: "LEH-cheh", examples: ["Cafe con leche, por favor."] },
      { id: "es_b4_v3", word: "Azucar", translation: "Sugar", pronunciation: "ah-SOO-kar", examples: ["Con azucar, por favor."] },
      { id: "es_b4_v4", word: "Té", translation: "Tea", pronunciation: "teh", examples: ["Quiero un te verde."] },
      { id: "es_b4_v5", word: "Pastel", translation: "Cake", pronunciation: "pahs-TEHL", examples: ["Un pastel de chocolate."] },
    ],
    phrases: [
      { id: "es_b4_p1", text: "Quiero un cafe, por favor", translation: "I would like a coffee, please", pronunciation: "KYEH-roh oon kah-FEH, pohr fah-VOHR", context: "restaurant" },
      { id: "es_b4_p2", text: "La cuenta, por favor", translation: "The check, please", pronunciation: "lah KWEHN-tah, pohr fah-VOHR", context: "restaurant" },
    ],
    activities: [
      { id: "es_b4_a1", type: "multiple_choice", instruction: 'What does "Leche" mean?', sourceText: "Leche", correctAnswer: "Milk", options: ["Coffee", "Milk", "Sugar", "Tea"], points: 10 },
      { id: "es_b4_a2", type: "translation", instruction: 'Translate "The check, please" to Spanish', sourceText: "The check, please", correctAnswer: "La cuenta, por favor", options: ["La cuenta, por favor", "El cafe, por favor", "La leche, por favor", "El pastel, por favor"], points: 15 },
      { id: "es_b4_a3", type: "match_pairs", instruction: "Match cafe words", sourceText: "", correctAnswer: "", pairs: [{ left: "Cafe", right: "Coffee" }, { left: "Leche", right: "Milk" }, { left: "Té", right: "Tea" }, { left: "Azucar", right: "Sugar" }], points: 15 },
      { id: "es_b4_a4", type: "fill_blank", instruction: "Fill in the blank", sourceText: "", correctAnswer: "por favor", sentenceWithBlank: "Un cafe, ___", options: ["por favor", "gracias", "adios", "hola"], points: 10 },
    ],
    aiPrompt: { id: "es_b4_ai", scenario: "Order at a Spanish cafe.", systemPrompt: "You are a barista at a cafe. Take the student's order. Keep it simple.", openingLine: "Buenos dias! Bienvenido. Que le gustaria?", expectedResponses: ["Un cafe", "Quiero leche", "La cuenta, por favor"], difficulty: "beginner", topics: ["ordering", "cafe vocabulary"] },
  },

  // ════════════════════════════════════════════
  //  SPANISH — Basics 5: Travel & Directions
  // ════════════════════════════════════════════
  {
    id: "es_basics_5",
    unitId: "spanish_basics",
    languageId: "spanish",
    title: "Travel & Directions",
    order: 5,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 8,
    totalPoints: 50,
    goals: [
      { id: "es_b5_g1", description: "Ask for directions", type: "conversation" },
      { id: "es_b5_g2", description: "Learn direction vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "es_b5_v1", word: "Izquierda", translation: "Left", pronunciation: "ees-kee-EHR-dah", examples: ["Gire a la izquierda."] },
      { id: "es_b5_v2", word: "Derecha", translation: "Right", pronunciation: "deh-REH-chah", examples: ["Gire a la derecha."] },
      { id: "es_b5_v3", word: "Recto", translation: "Straight", pronunciation: "REHK-toh", examples: ["Siga recto."] },
      { id: "es_b5_v4", word: "Cerca", translation: "Near", pronunciation: "SEHR-kah", examples: ["Esta muy cerca."] },
      { id: "es_b5_v5", word: "Lejos", translation: "Far", pronunciation: "LEH-hohs", examples: ["Queda lejos de aqui."] },
    ],
    phrases: [
      { id: "es_b5_p1", text: "Donde esta el bano?", translation: "Where is the bathroom?", pronunciation: "DOHN-deh ehs-TAH ehl BAH-nyoh", context: "question" },
      { id: "es_b5_p2", text: "Como llego a la estacion?", translation: "How do I get to the station?", pronunciation: "KOH-moh yeh-GOH ah lah ehs-tah-SYOHN", context: "question" },
    ],
    activities: [
      { id: "es_b5_a1", type: "multiple_choice", instruction: 'What does "Izquierda" mean?', sourceText: "Izquierda", correctAnswer: "Left", options: ["Right", "Left", "Straight", "Near"], points: 10 },
      { id: "es_b5_a2", type: "translation", instruction: 'Translate "Where is the bathroom?" to Spanish', sourceText: "Where is the bathroom?", correctAnswer: "Donde esta el bano?", options: ["Donde esta el bano?", "Como esta el bano?", "Que es el bano?", "El bano, por favor"], points: 15 },
      { id: "es_b5_a3", type: "match_pairs", instruction: "Match directions", sourceText: "", correctAnswer: "", pairs: [{ left: "Izquierda", right: "Left" }, { left: "Derecha", right: "Right" }, { left: "Recto", right: "Straight" }], points: 15 },
      { id: "es_b5_a4", type: "multiple_choice", instruction: 'When would you say "Cerca"?', sourceText: "Cerca", correctAnswer: "When something is near", options: ["When something is far", "When something is near", "When asking for the bathroom", "When ordering food"], points: 10 },
    ],
    aiPrompt: { id: "es_b5_ai", scenario: "Ask for directions in a Spanish city.", systemPrompt: "You are a local in a Spanish city. The student is lost and needs directions. Help them step by step.", openingLine: "Hola! Necesitas ayuda? Donde quieres ir?", expectedResponses: ["Izquierda", "Derecha", "Recto", "Cerca"], difficulty: "beginner", topics: ["directions", "navigation"] },
  },

  // ════════════════════════════════════════════
  //  SPANISH — Basics 6: Shopping
  // ════════════════════════════════════════════
  {
    id: "es_basics_6",
    unitId: "spanish_basics",
    languageId: "spanish",
    title: "Shopping",
    order: 6,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "es_b6_g1", description: "Shop for items in Spanish", type: "conversation" },
      { id: "es_b6_g2", description: "Learn shopping vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "es_b6_v1", word: "Cuanto cuesta", translation: "How much does it cost?", pronunciation: "KWAHN-toh KWEHS-tah", examples: ["Cuanto cuesta esta camisa?"] },
      { id: "es_b6_v2", word: "Barato", translation: "Cheap", pronunciation: "bah-RAH-toh", examples: ["Este es muy barato."] },
      { id: "es_b6_v3", word: "Caro", translation: "Expensive", pronunciation: "KAH-roh", examples: ["Es demasiado caro."] },
      { id: "es_b6_v4", word: "Tienda", translation: "Store", pronunciation: "TYEHN-dah", examples: ["Vamos a la tienda."] },
      { id: "es_b6_v5", word: "Dinero", translation: "Money", pronunciation: "dee-NEH-roh", examples: ["No tengo dinero."] },
    ],
    phrases: [
      { id: "es_b6_p1", text: "Quiero comprar esto", translation: "I want to buy this", pronunciation: "KYEH-roh kohm-PRAR EHS-toh", context: "casual" },
      { id: "es_b6_p2", text: "Tiene algo mas barato?", translation: "Do you have something cheaper?", pronunciation: "TYEH-neh AHL-goh mahs bah-RAH-toh", context: "question" },
    ],
    activities: [
      { id: "es_b6_a1", type: "multiple_choice", instruction: 'What does "Barato" mean?', sourceText: "Barato", correctAnswer: "Cheap", options: ["Expensive", "Cheap", "Money", "Store"], points: 10 },
      { id: "es_b6_a2", type: "translation", instruction: 'Translate "How much does it cost?" to Spanish', sourceText: "How much does it cost?", correctAnswer: "Cuanto cuesta", options: ["Cuanto cuesta", "Cuanto es", "Que precio", "Cuanto dinero"], points: 15 },
      { id: "es_b6_a3", type: "match_pairs", instruction: "Match shopping words", sourceText: "", correctAnswer: "", pairs: [{ left: "Barato", right: "Cheap" }, { left: "Caro", right: "Expensive" }, { left: "Tienda", right: "Store" }, { left: "Dinero", right: "Money" }], points: 15 },
      { id: "es_b6_a4", type: "multiple_choice", instruction: 'How do you ask for something cheaper?', sourceText: "Cheaper", correctAnswer: "Tiene algo mas barato?", options: ["Tiene algo mas barato?", "Quiero algo barato", "Es muy caro", "Donde esta la tienda?"], points: 10 },
    ],
    aiPrompt: { id: "es_b6_ai", scenario: "Shop at a Spanish market.", systemPrompt: "You are a vendor at a market. Help the student practice shopping. Show items and prices.", openingLine: "Bienvenido a mi tienda! Que le gusta? Tenemos camisas, zapatos, y mas.", expectedResponses: ["Cuanto cuesta?", "Quiero comprar", "Es barato", "Caro"], difficulty: "beginner", topics: ["shopping", "prices"] },
  },

  // ════════════════════════════════════════════
  //  FRENCH — Basics 2: Greetings & Introductions
  // ════════════════════════════════════════════
  {
    id: "fr_basics_2",
    unitId: "french_basics",
    languageId: "french",
    title: "Greetings & Introductions",
    order: 2,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      { id: "fr_b2_g1", description: "Introduce yourself in French", type: "conversation" },
      { id: "fr_b2_g2", description: "Learn polite expressions", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "fr_b2_v1", word: "Je m'appelle", translation: "My name is", pronunciation: "zhuh mah-PEHL", examples: ["Je m'appelle Sophie."] },
      { id: "fr_b2_v2", word: "Enchante", translation: "Nice to meet you", pronunciation: "ahn-shahn-TAY", examples: ["Enchante de vous rencontrer!"] },
      { id: "fr_b2_v3", word: "Comment allez-vous", translation: "How are you?", pronunciation: "koh-MAHN tah-lay VOO", examples: ["Comment allez-vous aujourd'hui?"] },
      { id: "fr_b2_v4", word: "Je vais bien", translation: "I am fine", pronunciation: "zhuh vay byehn", examples: ["Je vais bien, merci."] },
      { id: "fr_b2_v5", word: "Salut", translation: "Hi / Bye (informal)", pronunciation: "sah-LEW", examples: ["Salut, comment ca va?"] },
    ],
    phrases: [
      { id: "fr_b2_p1", text: "Comment vous appelez-vous?", translation: "What is your name?", pronunciation: "koh-MAHN voo zah-play VOO", context: "question" },
      { id: "fr_b2_p2", text: "Je suis americain", translation: "I am American", pronunciation: "zhuh swee zah-meh-ree-KEHN", context: "greeting" },
    ],
    activities: [
      { id: "fr_b2_a1", type: "multiple_choice", instruction: 'How do you say "My name is"?', sourceText: "My name is", correctAnswer: "Je m'appelle", options: ["Je suis", "Je m'appelle", "J'ai", "Je veux"], points: 10 },
      { id: "fr_b2_a2", type: "translation", instruction: 'Translate "Nice to meet you" to French', sourceText: "Nice to meet you", correctAnswer: "Enchante", options: ["Enchante", "Bonjour", "Merci", "Salut"], points: 10 },
      { id: "fr_b2_a3", type: "match_pairs", instruction: "Match French greetings", sourceText: "", correctAnswer: "", pairs: [{ left: "Bonjour", right: "Hello" }, { left: "Salut", right: "Hi/Bye" }, { left: "Enchante", right: "Nice to meet you" }], points: 15 },
      { id: "fr_b2_a4", type: "multiple_choice", instruction: 'What does "Je vais bien" mean?', sourceText: "Je vais bien", correctAnswer: "I am fine", options: ["I am tired", "I am fine", "I am hungry", "I am happy"], points: 10 },
    ],
    aiPrompt: { id: "fr_b2_ai", scenario: "Practice introducing yourself in French.", systemPrompt: "You are a friendly French speaker. Greet the student and ask their name.", openingLine: "Bonjour! Je m'appelle Pierre. Comment vous appelez-vous?", expectedResponses: ["Je m'appelle ...", "Bonjour", "Enchante"], difficulty: "beginner", topics: ["introductions", "greetings"] },
  },

  // ════════════════════════════════════════════
  //  FRENCH — Basics 3: Daily Life
  // ════════════════════════════════════════════
  {
    id: "fr_basics_3",
    unitId: "french_basics",
    languageId: "french",
    title: "Daily Life",
    order: 3,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "fr_b3_g1", description: "Talk about daily activities", type: "conversation" },
      { id: "fr_b3_g2", description: "Learn common verbs", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "fr_b3_v1", word: "Manger", translation: "To eat", pronunciation: "mahn-ZHAY", examples: ["Je mange a midi."] },
      { id: "fr_b3_v2", word: "Boire", translation: "To drink", pronunciation: "bwahr", examples: ["Je bois du cafe."] },
      { id: "fr_b3_v3", word: "Dormir", translation: "To sleep", pronunciation: "dor-MEER", examples: ["Je dors huit heures."] },
      { id: "fr_b3_v4", word: "Travailler", translation: "To work", pronunciation: "trah-vah-YAY", examples: ["Je travaille au bureau."] },
      { id: "fr_b3_v5", word: "Lire", translation: "To read", pronunciation: "leer", examples: ["Je lis un livre."] },
    ],
    phrases: [
      { id: "fr_b3_p1", text: "Qu'est-ce que tu fais?", translation: "What are you doing?", pronunciation: "keh-skuh tuh fay", context: "question" },
      { id: "fr_b3_p2", text: "Je suis en vacances", translation: "I am on vacation", pronunciation: "zhuh swee ahn vah-KAHNS", context: "casual" },
    ],
    activities: [
      { id: "fr_b3_a1", type: "multiple_choice", instruction: 'What does "Manger" mean?', sourceText: "Manger", correctAnswer: "To eat", options: ["To drink", "To eat", "To sleep", "To work"], points: 10 },
      { id: "fr_b3_a2", type: "translation", instruction: 'Translate "To read" to French', sourceText: "To read", correctAnswer: "Lire", options: ["Lire", "Ecrire", "Parler", "Ecouter"], points: 10 },
      { id: "fr_b3_a3", type: "match_pairs", instruction: "Match French verbs", sourceText: "", correctAnswer: "", pairs: [{ left: "Manger", right: "To eat" }, { left: "Boire", right: "To drink" }, { left: "Dormir", right: "To sleep" }, { left: "Lire", right: "To read" }], points: 15 },
      { id: "fr_b3_a4", type: "fill_blank", instruction: "Fill in the blank", sourceText: "", correctAnswer: "travailler", sentenceWithBlank: "Je ___ au bureau.", options: ["travailler", "manger", "dormir", "lire"], points: 10 },
    ],
    aiPrompt: { id: "fr_b3_ai", scenario: "Talk about your daily routine in French.", systemPrompt: "You are a French friend. Ask about the student's daily activities.", openingLine: "Salut! Qu'est-ce que tu fais aujourd'hui?", expectedResponses: ["Je mange", "Je travaille", "Je dors"], difficulty: "beginner", topics: ["daily routines", "verbs"] },
  },

  // ════════════════════════════════════════════
  //  FRENCH — Basics 4: At the Cafe
  // ════════════════════════════════════════════
  {
    id: "fr_basics_4",
    unitId: "french_basics",
    languageId: "french",
    title: "At the Cafe",
    order: 4,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "fr_b4_g1", description: "Order at a French cafe", type: "conversation" },
      { id: "fr_b4_g2", description: "Learn food and drink words", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "fr_b4_v1", word: "Un croissant", translation: "A croissant", pronunciation: "uhn kwah-SAHN", examples: ["Je voudrais un croissant."] },
      { id: "fr_b4_v2", word: "Un cafe", translation: "A coffee", pronunciation: "uhn kah-FAY", examples: ["Un cafe, s'il vous plait."] },
      { id: "fr_b4_v3", word: "Lait", translation: "Milk", pronunciation: "leh", examples: ["Cafe au lait, s'il vous plait."] },
      { id: "fr_b4_v4", word: "Sucre", translation: "Sugar", pronunciation: "SEW-kruh", examples: ["Avec du sucre, merci."] },
      { id: "fr_b4_v5", word: "L'addition", translation: "The bill", pronunciation: "lah-dee-SYOHN", examples: ["L'addition, s'il vous plait."] },
    ],
    phrases: [
      { id: "fr_b4_p1", text: "Je voudrais un cafe", translation: "I would like a coffee", pronunciation: "zhuh voo-DREH uhn kah-FAY", context: "restaurant" },
      { id: "fr_b4_p2", text: "C'est combien?", translation: "How much is it?", pronunciation: "say kohm-BYEHN", context: "question" },
    ],
    activities: [
      { id: "fr_b4_a1", type: "multiple_choice", instruction: 'What does "Lait" mean?', sourceText: "Lait", correctAnswer: "Milk", options: ["Sugar", "Milk", "Coffee", "Bread"], points: 10 },
      { id: "fr_b4_a2", type: "translation", instruction: 'Translate "The bill, please" to French', sourceText: "The bill, please", correctAnswer: "L'addition, s'il vous plait", options: ["L'addition, s'il vous plait", "Le cafe, s'il vous plait", "L'eau, s'il vous plait", "Le croissant, s'il vous plait"], points: 15 },
      { id: "fr_b4_a3", type: "match_pairs", instruction: "Match cafe words", sourceText: "", correctAnswer: "", pairs: [{ left: "Croissant", right: "Croissant" }, { left: "Cafe", right: "Coffee" }, { left: "Lait", right: "Milk" }, { left: "Sucre", right: "Sugar" }], points: 15 },
      { id: "fr_b4_a4", type: "fill_blank", instruction: "Fill in the blank", sourceText: "", correctAnswer: "s'il vous plait", sentenceWithBlank: "Un cafe, ___", options: ["s'il vous plait", "merci", "bonjour", "au revoir"], points: 10 },
    ],
    aiPrompt: { id: "fr_b4_ai", scenario: "Order at a French cafe.", systemPrompt: "You are a waiter at a French cafe. Take the student's order.", openingLine: "Bonjour! Bienvenue au cafe. Que desirez-vous?", expectedResponses: ["Un cafe", "Je voudrais", "L'addition, s'il vous plait"], difficulty: "beginner", topics: ["ordering", "cafe vocabulary"] },
  },

  // ════════════════════════════════════════════
  //  FRENCH — Basics 5: Travel & Directions
  // ════════════════════════════════════════════
  {
    id: "fr_basics_5",
    unitId: "french_basics",
    languageId: "french",
    title: "Travel & Directions",
    order: 5,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 8,
    totalPoints: 50,
    goals: [
      { id: "fr_b5_g1", description: "Ask for directions in French", type: "conversation" },
      { id: "fr_b5_g2", description: "Learn direction words", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "fr_b5_v1", word: "Gauche", translation: "Left", pronunciation: "gohsh", examples: ["Tournez a gauche."] },
      { id: "fr_b5_v2", word: "Droite", translation: "Right", pronunciation: "dwaht", examples: ["Tournez a droite."] },
      { id: "fr_b5_v3", word: "Tout droit", translation: "Straight ahead", pronunciation: "too drwah", examples: ["Allez tout droit."] },
      { id: "fr_b5_v4", word: "Pres", translation: "Near", pronunciation: "preh", examples: ["C'est pres d'ici."] },
      { id: "fr_b5_v5", word: "Loin", translation: "Far", pronunciation: "lwahn", examples: ["C'est loin d'ici."] },
    ],
    phrases: [
      { id: "fr_b5_p1", text: "Ou est la gare?", translation: "Where is the station?", pronunciation: "oo eh lah gahr", context: "question" },
      { id: "fr_b5_p2", text: "Comment aller a l'hotel?", translation: "How do I get to the hotel?", pronunciation: "koh-MAHN ah-lay ah loh-TEL", context: "question" },
    ],
    activities: [
      { id: "fr_b5_a1", type: "multiple_choice", instruction: 'What does "Gauche" mean?', sourceText: "Gauche", correctAnswer: "Left", options: ["Right", "Left", "Straight", "Near"], points: 10 },
      { id: "fr_b5_a2", type: "translation", instruction: 'Translate "Where is the station?" to French', sourceText: "Where is the station?", correctAnswer: "Ou est la gare?", options: ["Ou est la gare?", "Comment est la gare?", "Qu'est-ce que la gare?", "La gare, ou?"], points: 15 },
      { id: "fr_b5_a3", type: "match_pairs", instruction: "Match direction words", sourceText: "", correctAnswer: "", pairs: [{ left: "Gauche", right: "Left" }, { left: "Droite", right: "Right" }, { left: "Tout droit", right: "Straight" }], points: 15 },
      { id: "fr_b5_a4", type: "multiple_choice", instruction: 'How do you say "straight ahead"?', sourceText: "Straight ahead", correctAnswer: "Tout droit", options: ["A gauche", "A droite", "Tout droit", "Pres"], points: 10 },
    ],
    aiPrompt: { id: "fr_b5_ai", scenario: "Ask for directions in Paris.", systemPrompt: "You are a local in Paris. Help the student find their way.", openingLine: "Bonjour! Vous cherchez quelque chose?", expectedResponses: ["Ou est...", "Comment aller...", "Gauche", "Droite"], difficulty: "beginner", topics: ["directions", "navigation"] },
  },

  // ════════════════════════════════════════════
  //  FRENCH — Basics 6: Shopping
  // ════════════════════════════════════════════
  {
    id: "fr_basics_6",
    unitId: "french_basics",
    languageId: "french",
    title: "Shopping",
    order: 6,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "fr_b6_g1", description: "Shop in a French store", type: "conversation" },
      { id: "fr_b6_g2", description: "Learn shopping vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "fr_b6_v1", word: "Combien", translation: "How much", pronunciation: "kohm-BYEHN", examples: ["Combien ca coute?"] },
      { id: "fr_b6_v2", word: "Cher", translation: "Expensive", pronunciation: "shehr", examples: ["C'est trop cher."] },
      { id: "fr_b6_v3", word: "Bon marche", translation: "Cheap", pronunciation: "bohn mar-SHAY", examples: ["C'est bon marche."] },
      { id: "fr_b6_v4", word: "Magasin", translation: "Store", pronunciation: "mah-gah-ZAHN", examples: ["Le magasin est ouvert."] },
      { id: "fr_b6_v5", word: "Argent", translation: "Money", pronunciation: "ar-ZHAHN", examples: ["J'ai assez d'argent."] },
    ],
    phrases: [
      { id: "fr_b6_p1", text: "Je voudrais acheter ceci", translation: "I would like to buy this", pronunciation: "zhuh voo-DREH ah-sheh-TAY suh-SEE", context: "casual" },
      { id: "fr_b6_p2", text: "Avez-vous quelque chose de moins cher?", translation: "Do you have something cheaper?", pronunciation: "ah-vay-VOO kehl-kuh shohz duh mwahn shehr", context: "question" },
    ],
    activities: [
      { id: "fr_b6_a1", type: "multiple_choice", instruction: 'What does "Cher" mean?', sourceText: "Cher", correctAnswer: "Expensive", options: ["Cheap", "Expensive", "Money", "Store"], points: 10 },
      { id: "fr_b6_a2", type: "translation", instruction: 'Translate "How much" to French', sourceText: "How much", correctAnswer: "Combien", options: ["Combien", "Quand", "Comment", "Pourquoi"], points: 10 },
      { id: "fr_b6_a3", type: "match_pairs", instruction: "Match shopping words", sourceText: "", correctAnswer: "", pairs: [{ left: "Cher", right: "Expensive" }, { left: "Bon marche", right: "Cheap" }, { left: "Magasin", right: "Store" }, { left: "Argent", right: "Money" }], points: 15 },
      { id: "fr_b6_a4", type: "multiple_choice", instruction: 'How do you ask for something cheaper?', sourceText: "Cheaper", correctAnswer: "Avez-vous quelque chose de moins cher?", options: ["Avez-vous quelque chose de moins cher?", "C'est trop cher", "Je veux quelque chose", "Ou est le magasin?"], points: 15 },
    ],
    aiPrompt: { id: "fr_b6_ai", scenario: "Shop at a French market.", systemPrompt: "You are a vendor at a market. Help the student practice shopping.", openingLine: "Bienvenue! Regardez nos produits. Que cherchez-vous?", expectedResponses: ["Combien?", "Je voudrais", "Cher", "Bon marche"], difficulty: "beginner", topics: ["shopping", "prices"] },
  },

  // ════════════════════════════════════════════
  //  JAPANESE — Basics 2: Greetings & Introductions
  // ════════════════════════════════════════════
  {
    id: "ja_basics_2",
    unitId: "japanese_basics",
    languageId: "japanese",
    title: "Greetings & Introductions",
    order: 2,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      { id: "ja_b2_g1", description: "Introduce yourself in Japanese", type: "conversation" },
      { id: "ja_b2_g2", description: "Learn polite greetings", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ja_b2_v1", word: "はじめまして", translation: "Nice to meet you", pronunciation: "hah-jee-MEH-mah-shee-teh", examples: ["はじめまして、田中です。"] },
      { id: "ja_b2_v2", word: "はじめまして", translation: "How do you do", pronunciation: "hah-jee-MEH-mah-shee-teh", examples: ["はじめまして。"] },
      { id: "ja_b2_v3", word: "お元気ですか", translation: "How are you?", pronunciation: "oh-GEHN-kee DEHS-kah", examples: ["お元気ですか？"] },
      { id: "ja_b2_v4", word: "元気です", translation: "I am fine", pronunciation: "GEHN-kee DEHS", examples: ["元気です、ありがとう。"] },
      { id: "ja_b2_v5", word: "よろしく", translation: "Nice to meet you (casual)", pronunciation: "yoh-ROH-shoo", examples: ["よろしくお願いします。"] },
    ],
    phrases: [
      { id: "ja_b2_p1", text: "はじめまして、___です", translation: "Nice to meet you, I am ___", pronunciation: "hah-jee-MEH-mah-shee-teh, ___ DEHS", context: "greeting" },
      { id: "ja_b2_p2", text: "よろしくお願いします", translation: "Please take care of me (formal greeting)", pronunciation: "yoh-ROH-shoo oh-neh-GAI-shee-MAHS", context: "greeting" },
    ],
    activities: [
      { id: "ja_b2_a1", type: "multiple_choice", instruction: 'What does "はじめまして" mean?', sourceText: "はじめまして", correctAnswer: "Nice to meet you", options: ["Goodbye", "Nice to meet you", "Thank you", "Excuse me"], points: 10 },
      { id: "ja_b2_a2", type: "translation", instruction: 'Translate "I am fine" to Japanese', sourceText: "I am fine", correctAnswer: "元気です", options: ["元気です", "すみません", "ありがとう", "こんにちは"], points: 10 },
      { id: "ja_b2_a3", type: "match_pairs", instruction: "Match Japanese greetings", sourceText: "", correctAnswer: "", pairs: [{ left: "はじめまして", right: "Nice to meet you" }, { left: "お元気ですか", right: "How are you?" }, { left: "元気です", right: "I am fine" }], points: 15 },
      { id: "ja_b2_a4", type: "multiple_choice", instruction: 'What is "よろしくお願いします"?', sourceText: "よろしくお願いします", correctAnswer: "Formal greeting meaning please take care of me", options: ["Goodbye", "Thank you", "Formal greeting meaning please take care of me", "I'm sorry"], points: 15 },
    ],
    aiPrompt: { id: "ja_b2_ai", scenario: "Practice self-introductions in Japanese.", systemPrompt: "You are a Japanese teacher. Practice formal introductions with the student.", openingLine: "はじめまして！田中です。はじめまして。どうぞよろしく。", expectedResponses: ["はじめまして", "よろしく", "元気です"], difficulty: "beginner", topics: ["introductions", "formal greetings"] },
  },

  // ════════════════════════════════════════════
  //  JAPANESE — Basics 3: Daily Life
  // ════════════════════════════════════════════
  {
    id: "ja_basics_3",
    unitId: "japanese_basics",
    languageId: "japanese",
    title: "Daily Life",
    order: 3,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "ja_b3_g1", description: "Talk about daily activities", type: "conversation" },
      { id: "ja_b3_g2", description: "Learn common verbs", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ja_b3_v1", word: "食べる", translation: "To eat", pronunciation: "tah-BEH-roo", examples: ["ご飯を食べます。"] },
      { id: "ja_b3_v2", word: "飲む", translation: "To drink", pronunciation: "NOH-moo", examples: ["お茶を飲みます。"] },
      { id: "ja_b3_v3", word: "寝る", translation: "To sleep", pronunciation: "NEH-roo", examples: ["夜10時に寝ます。"] },
      { id: "ja_b3_v4", word: "起きる", translation: "To wake up", pronunciation: "oh-KEE-roo", examples: ["朝6時に起きます。"] },
      { id: "ja_b3_v5", word: "仕事", translation: "Work", pronunciation: "shee-GOH-toh", examples: ["仕事は何ですか？"] },
    ],
    phrases: [
      { id: "ja_b3_p1", text: "今日はどうですか", translation: "How is today?", pronunciation: "KYOH-oh DOH DEHS-kah", context: "question" },
      { id: "ja_b3_p2", text: "元気です、ありがとう", translation: "I am fine, thank you", pronunciation: "GEHN-kee DEHS, ah-ree-GAH-toh", context: "polite" },
    ],
    activities: [
      { id: "ja_b3_a1", type: "multiple_choice", instruction: 'What does "食べる" mean?', sourceText: "食べる", correctAnswer: "To eat", options: ["To drink", "To eat", "To sleep", "To work"], points: 10 },
      { id: "ja_b3_a2", type: "translation", instruction: 'Translate "To drink" to Japanese', sourceText: "To drink", correctAnswer: "飲む", options: ["飲む", "食べる", "寝る", "起きる"], points: 10 },
      { id: "ja_b3_a3", type: "match_pairs", instruction: "Match Japanese verbs", sourceText: "", correctAnswer: "", pairs: [{ left: "食べる", right: "To eat" }, { left: "飲む", right: "To drink" }, { left: "寝る", right: "To sleep" }, { left: "起きる", right: "To wake up" }], points: 15 },
      { id: "ja_b3_a4", type: "multiple_choice", instruction: 'What is "仕事"?', sourceText: "仕事", correctAnswer: "Work", options: ["School", "Work", "Home", "Store"], points: 10 },
    ],
    aiPrompt: { id: "ja_b3_ai", scenario: "Talk about your daily routine in Japanese.", systemPrompt: "You are a Japanese friend. Ask about the student's daily activities.", openingLine: "今日はどうですか？何をしますか？", expectedResponses: ["食べます", "飲みます", "起きます"], difficulty: "beginner", topics: ["daily routines", "verbs"] },
  },

  // ════════════════════════════════════════════
  //  JAPANESE — Basics 4: At the Cafe
  // ════════════════════════════════════════════
  {
    id: "ja_basics_4",
    unitId: "japanese_basics",
    languageId: "japanese",
    title: "At the Cafe",
    order: 4,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "ja_b4_g1", description: "Order at a Japanese cafe", type: "conversation" },
      { id: "ja_b4_g2", description: "Learn cafe vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ja_b4_v1", word: "コーヒー", translation: "Coffee", pronunciation: "KOH-hee", examples: ["コーヒーをください。"] },
      { id: "ja_b4_v2", word: "お茶", translation: "Tea", pronunciation: "oh-CHAH", examples: ["お茶はいかがですか？"] },
      { id: "ja_b4_v3", word: "水", translation: "Water", pronunciation: "mee-ZOO", examples: ["お水をください。"] },
      { id: "ja_b4_v4", word: "おかえりなさい", translation: "Welcome back", pronunciation: "oh-kah-EH-ree-nah-sai", examples: ["いらっしゃいませ！"] },
      { id: "ja_b4_v5", word: "おすすめ", translation: "Recommendation", pronunciation: "oh-soo-soo-MEH", examples: ["おすすめは何ですか？"] },
    ],
    phrases: [
      { id: "ja_b4_p1", text: "これをください", translation: "I would like this, please", pronunciation: "koh-REH oh koo-dah-SAI", context: "restaurant" },
      { id: "ja_b4_p2", text: "お会計お願いします", translation: "Check, please", pronunciation: "oh-kai-KEI oh-neh-GAI-shee-MAHS", context: "restaurant" },
    ],
    activities: [
      { id: "ja_b4_a1", type: "multiple_choice", instruction: 'What does "コーヒー" mean?', sourceText: "コーヒー", correctAnswer: "Coffee", options: ["Tea", "Coffee", "Water", "Milk"], points: 10 },
      { id: "ja_b4_a2", type: "translation", instruction: 'Translate "I would like this" to Japanese', sourceText: "I would like this", correctAnswer: "これをください", options: ["これをください", "それは何ですか", "お会計お願いします", "すみません"], points: 15 },
      { id: "ja_b4_a3", type: "match_pairs", instruction: "Match cafe words", sourceText: "", correctAnswer: "", pairs: [{ left: "コーヒー", right: "Coffee" }, { left: "お茶", right: "Tea" }, { left: "水", right: "Water" }], points: 15 },
      { id: "ja_b4_a4", type: "multiple_choice", instruction: 'How do you ask for the check?', sourceText: "Check, please", correctAnswer: "お会計お願いします", options: ["お会計お願いします", "これをください", "すみません", "ありがとうござます"], points: 10 },
    ],
    aiPrompt: { id: "ja_b4_ai", scenario: "Order at a Japanese cafe.", systemPrompt: "You are a barista at a Japanese cafe. Help the student order.", openingLine: "いらっしゃいませ！何になさいますか？", expectedResponses: ["コーヒーをください", "お茶", "お会計"], difficulty: "beginner", topics: ["ordering", "cafe vocabulary"] },
  },

  // ════════════════════════════════════════════
  //  JAPANESE — Basics 5: Travel & Directions
  // ════════════════════════════════════════════
  {
    id: "ja_basics_5",
    unitId: "japanese_basics",
    languageId: "japanese",
    title: "Travel & Directions",
    order: 5,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 8,
    totalPoints: 50,
    goals: [
      { id: "ja_b5_g1", description: "Ask for directions in Japanese", type: "conversation" },
      { id: "ja_b5_g2", description: "Learn direction vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ja_b5_v1", word: "左", translation: "Left", pronunciation: "hee-DAH-ree", examples: ["左に曲がってください。"] },
      { id: "ja_b5_v2", word: "右", translation: "Right", pronunciation: "mee-GEE", examples: ["右に曲がってください。"] },
      { id: "ja_b5_v3", word: "まっすぐ", translation: "Straight", pronunciation: "MAHS-soo-goo", examples: ["まっすぐ行ってください。"] },
      { id: "ja_b5_v4", word: "近い", translation: "Near", pronunciation: "chee-KAI", examples: ["ここから近いです。"] },
      { id: "ja_b5_v5", word: "遠い", translation: "Far", pronunciation: "toh-OI", examples: ["そこは遠いです。"] },
    ],
    phrases: [
      { id: "ja_b5_p1", text: "すみません、___はどこですか", translation: "Excuse me, where is ___?", pronunciation: "soo-mee-MAH-sehn, ___ wah DOH-koh DEHS-kah", context: "question" },
      { id: "ja_b5_p2", text: "駅はどこですか", translation: "Where is the station?", pronunciation: "EH-kee wah DOH-koh DEHS-kah", context: "question" },
    ],
    activities: [
      { id: "ja_b5_a1", type: "multiple_choice", instruction: 'What does "左" mean?', sourceText: "左", correctAnswer: "Left", options: ["Right", "Left", "Straight", "Near"], points: 10 },
      { id: "ja_b5_a2", type: "translation", instruction: 'Translate "Where is the station?" to Japanese', sourceText: "Where is the station?", correctAnswer: "駅はどこですか", options: ["駅はどこですか", "駅は何ですか", "どこが駅ですか", "駅に行きたい"], points: 15 },
      { id: "ja_b5_a3", type: "match_pairs", instruction: "Match direction words", sourceText: "", correctAnswer: "", pairs: [{ left: "左", right: "Left" }, { left: "右", right: "Right" }, { left: "まっすぐ", right: "Straight" }], points: 15 },
      { id: "ja_b5_a4", type: "multiple_choice", instruction: 'How do you say "straight"?', sourceText: "Straight", correctAnswer: "まっすぐ", options: ["左", "右", "まっすぐ", "近い"], points: 10 },
    ],
    aiPrompt: { id: "ja_b5_ai", scenario: "Ask for directions in Tokyo.", systemPrompt: "You are a local in Tokyo. Help the student find their way.", openingLine: "すみません、何かお手伝いできますか？", expectedResponses: ["駅はどこですか", "左", "右", "まっすぐ"], difficulty: "beginner", topics: ["directions", "navigation"] },
  },

  // ════════════════════════════════════════════
  //  JAPANESE — Basics 6: Shopping
  // ════════════════════════════════════════════
  {
    id: "ja_basics_6",
    unitId: "japanese_basics",
    languageId: "japanese",
    title: "Shopping",
    order: 6,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "ja_b6_g1", description: "Shop in a Japanese store", type: "conversation" },
      { id: "ja_b6_g2", description: "Learn shopping vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ja_b6_v1", word: "いくら", translation: "How much", pronunciation: "EE-koo-rah", examples: ["これはいくらですか？"] },
      { id: "ja_b6_v2", word: "高い", translation: "Expensive", pronunciation: "tah-KAI", examples: ["これは高いです。"] },
      { id: "ja_b6_v3", word: "安い", translation: "Cheap", pronunciation: "yah-SOO-ee", examples: ["これは安いです。"] },
      { id: "ja_b6_v4", word: "店", translation: "Store", pronunciation: "mee-SEH", examples: ["あの店は大きいです。"] },
      { id: "ja_b6_v5", word: "お金", translation: "Money", pronunciation: "oh-keh-NEH", examples: ["お金はありますか？"] },
    ],
    phrases: [
      { id: "ja_b6_p1", text: "これをください", translation: "I would like this, please", pronunciation: "koh-REH oh koo-dah-SAI", context: "casual" },
      { id: "ja_b6_p2", text: "もっと安いのはありますか", translation: "Do you have something cheaper?", pronunciation: "MOH-toh yah-SOO-ee NOH wah ah-ree-MAHS-kah", context: "question" },
    ],
    activities: [
      { id: "ja_b6_a1", type: "multiple_choice", instruction: 'What does "高い" mean?', sourceText: "高い", correctAnswer: "Expensive", options: ["Cheap", "Expensive", "Money", "Store"], points: 10 },
      { id: "ja_b6_a2", type: "translation", instruction: 'Translate "How much" to Japanese', sourceText: "How much", correctAnswer: "いくら", options: ["いくら", "いつ", "どこ", "なに"], points: 10 },
      { id: "ja_b6_a3", type: "match_pairs", instruction: "Match shopping words", sourceText: "", correctAnswer: "", pairs: [{ left: "高い", right: "Expensive" }, { left: "安い", right: "Cheap" }, { left: "店", right: "Store" }, { left: "お金", right: "Money" }], points: 15 },
      { id: "ja_b6_a4", type: "multiple_choice", instruction: 'How do you ask for something cheaper?', sourceText: "Cheaper", correctAnswer: "もっと安いのはありますか", options: ["もっと安いのはありますか", "これは安いですか", "安いものをください", "どこに安い店がありますか"], points: 15 },
    ],
    aiPrompt: { id: "ja_b6_ai", scenario: "Shop at a Japanese store.", systemPrompt: "You are a shop clerk. Help the student practice shopping.", openingLine: "いらっしゃいませ！何かお探しですか？", expectedResponses: ["いくらですか", "これをください", "高い", "安い"], difficulty: "beginner", topics: ["shopping", "prices"] },
  },

  // ════════════════════════════════════════════
  //  KOREAN — Basics 1: Greetings & Introductions
  // ════════════════════════════════════════════
  {
    id: "ko_basics_1",
    unitId: "korean_basics",
    languageId: "korean",
    title: "Greetings & Introductions",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      { id: "ko_b1_g1", description: "Introduce yourself in Korean", type: "conversation" },
      { id: "ko_b1_g2", description: "Learn basic greetings", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ko_b1_v1", word: "안녕하세요", translation: "Hello", pronunciation: "ahn-nyeong-hah-SEH-yoh", examples: ["안녕하세요, 만나서 반갑습니다."] },
      { id: "ko_b1_v2", word: "감사합니다", translation: "Thank you", pronunciation: "kahm-sah-hahm-NEE-dah", examples: ["도움 주셔서 감사합니다."] },
      { id: "ko_b1_v3", word: "죄송합니다", translation: "I'm sorry", pronunciation: "jweh-song-hahm-NEE-dah", examples: ["늦어서 죄송합니다."] },
      { id: "ko_b1_v4", word: "네", translation: "Yes", pronunciation: "neh", examples: ["네, 알겠습니다."] },
      { id: "ko_b1_v5", word: "아니요", translation: "No", pronunciation: "ah-NEE-yoh", examples: ["아니요, 괜찮습니다."] },
    ],
    phrases: [
      { id: "ko_b1_p1", text: "만나서 반갑습니다", translation: "Nice to meet you", pronunciation: "mahn-nah-soh bahn-gahp-SEUM-nee-dah", context: "greeting" },
      { id: "ko_b1_p2", text: "이름이 뭐예요?", translation: "What is your name?", pronunciation: "ee-reum-ee MWO-yeh-yoh", context: "question" },
    ],
    activities: [
      { id: "ko_b1_a1", type: "multiple_choice", instruction: 'What does "안녕하세요" mean?', sourceText: "안녕하세요", correctAnswer: "Hello", options: ["Goodbye", "Hello", "Thank you", "Sorry"], points: 10 },
      { id: "ko_b1_a2", type: "translation", instruction: 'Translate "Thank you" to Korean', sourceText: "Thank you", correctAnswer: "감사합니다", options: ["감사합니다", "죄송합니다", "안녕하세요", "네"], points: 10 },
      { id: "ko_b1_a3", type: "match_pairs", instruction: "Match Korean greetings", sourceText: "", correctAnswer: "", pairs: [{ left: "안녕하세요", right: "Hello" }, { left: "감사합니다", right: "Thank you" }, { left: "죄송합니다", right: "I'm sorry" }, { left: "네", right: "Yes" }], points: 15 },
      { id: "ko_b1_a4", type: "multiple_choice", instruction: 'How do you say "Nice to meet you"?', sourceText: "Nice to meet you", correctAnswer: "만나서 반갑습니다", options: ["만나서 반갑습니다", "안녕히 가세요", "감사합니다", "죄송합니다"], points: 15 },
    ],
    aiPrompt: { id: "ko_b1_ai", scenario: "Practice self-introductions in Korean.", systemPrompt: "You are a friendly Korean speaker. Greet the student and ask their name.", openingLine: "안녕하세요! 저는 김민수입니다. 이름이 뭐예요?", expectedResponses: ["안녕하세요", "이름은 ... 입니다", "만나서 반갑습니다"], difficulty: "beginner", topics: ["introductions", "greetings"] },
  },

  // ════════════════════════════════════════════
  //  KOREAN — Basics 2: Daily Life
  // ════════════════════════════════════════════
  {
    id: "ko_basics_2",
    unitId: "korean_basics",
    languageId: "korean",
    title: "Daily Life",
    order: 2,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "ko_b2_g1", description: "Talk about daily activities", type: "conversation" },
      { id: "ko_b2_g2", description: "Learn common verbs", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ko_b2_v1", word: "먹다", translation: "To eat", pronunciation: "mohk-DAH", examples: ["밥을 먹어요."] },
      { id: "ko_b2_v2", word: "마시다", translation: "To drink", pronunciation: "mah-SEE-dah", examples: ["물을 마시세요."] },
      { id: "ko_b2_v3", word: "자다", translation: "To sleep", pronunciation: "jah-DAH", examples: ["일찍 자요."] },
      { id: "ko_b2_v4", word: "가다", translation: "To go", pronunciation: "gah-DAH", examples: ["학교에 가요."] },
      { id: "ko_b2_v5", word: "오다", translation: "To come", pronunciation: "oh-DAH", examples: ["여기로 오세요."] },
    ],
    phrases: [
      { id: "ko_b2_p1", text: "잘 지냈어요?", translation: "How have you been?", pronunciation: "jahl jee-neh-SSOH-yoh", context: "question" },
      { id: "ko_b2_p2", text: "잘 지냈어요, 감사합니다", translation: "I've been well, thank you", pronunciation: "jahl jee-neh-SSOH-yoh, kahm-sah-hahm-NEE-dah", context: "polite" },
    ],
    activities: [
      { id: "ko_b2_a1", type: "multiple_choice", instruction: 'What does "먹다" mean?', sourceText: "먹다", correctAnswer: "To eat", options: ["To drink", "To eat", "To sleep", "To go"], points: 10 },
      { id: "ko_b2_a2", type: "translation", instruction: 'Translate "To sleep" to Korean', sourceText: "To sleep", correctAnswer: "자다", options: ["자다", "먹다", "가다", "오다"], points: 10 },
      { id: "ko_b2_a3", type: "match_pairs", instruction: "Match Korean verbs", sourceText: "", correctAnswer: "", pairs: [{ left: "먹다", right: "To eat" }, { left: "마시다", right: "To drink" }, { left: "자다", right: "To sleep" }, { left: "가다", right: "To go" }], points: 15 },
      { id: "ko_b2_a4", type: "multiple_choice", instruction: 'How do you say "To come"?', sourceText: "To come", correctAnswer: "오다", options: ["가다", "오다", "먹다", "자다"], points: 10 },
    ],
    aiPrompt: { id: "ko_b2_ai", scenario: "Talk about your daily routine in Korean.", systemPrompt: "You are a Korean friend. Ask about the student's daily activities.", openingLine: "안녕하세요! 오늘 뭐 했어요?", expectedResponses: ["먹었어요", "마셨어요", "잤어요"], difficulty: "beginner", topics: ["daily routines", "verbs"] },
  },

  // ════════════════════════════════════════════
  //  KOREAN — Basics 3: At the Cafe
  // ════════════════════════════════════════════
  {
    id: "ko_basics_3",
    unitId: "korean_basics",
    languageId: "korean",
    title: "At the Cafe",
    order: 3,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "ko_b3_g1", description: "Order at a Korean cafe", type: "conversation" },
      { id: "ko_b3_g2", description: "Learn cafe vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ko_b3_v1", word: "커피", translation: "Coffee", pronunciation: "koh-PEE", examples: ["커피 한 잔 주세요."] },
      { id: "ko_b3_v2", word: "차", translation: "Tea", pronunciation: "CHAH", examples: ["녹차 있어요?"] },
      { id: "ko_b3_v3", word: "물", translation: "Water", pronunciation: "MOOL", examples: ["물 좀 주세요."] },
      { id: "ko_b3_v4", word: "케이크", translation: "Cake", pronunciation: "keh-EE-keh", examples: ["딸기 케이크 하나요."] },
      { id: "ko_b3_v5", word: "얼마", translation: "How much", pronunciation: "ohl-MAH", examples: ["이거 얼마예요?"] },
    ],
    phrases: [
      { id: "ko_b3_p1", text: "이것 주세요", translation: "I would like this, please", pronunciation: "ee-GOHT joo-SEH-yoh", context: "restaurant" },
      { id: "ko_b3_p2", text: "계산서 주세요", translation: "Check, please", pronunciation: "geh-sahn-SOH joo-SEH-yoh", context: "restaurant" },
    ],
    activities: [
      { id: "ko_b3_a1", type: "multiple_choice", instruction: 'What does "커피" mean?', sourceText: "커피", correctAnswer: "Coffee", options: ["Tea", "Coffee", "Water", "Cake"], points: 10 },
      { id: "ko_b3_a2", type: "translation", instruction: 'Translate "How much" to Korean', sourceText: "How much", correctAnswer: "얼마", options: ["얼마", "언제", "어디", "뭐"], points: 10 },
      { id: "ko_b3_a3", type: "match_pairs", instruction: "Match cafe words", sourceText: "", correctAnswer: "", pairs: [{ left: "커피", right: "Coffee" }, { left: "차", right: "Tea" }, { left: "물", right: "Water" }, { left: "케이크", right: "Cake" }], points: 15 },
      { id: "ko_b3_a4", type: "multiple_choice", instruction: 'How do you ask for the check?', sourceText: "Check, please", correctAnswer: "계산서 주세요", options: ["계산서 주세요", "이것 주세요", "얼마예요", "감사합니다"], points: 10 },
    ],
    aiPrompt: { id: "ko_b3_ai", scenario: "Order at a Korean cafe.", systemPrompt: "You are a barista at a Korean cafe. Help the student order.", openingLine: "어서오세요! 뭐 드릴까요?", expectedResponses: ["커피 주세요", "얼마예요", "계산서 주세요"], difficulty: "beginner", topics: ["ordering", "cafe vocabulary"] },
  },

  // ════════════════════════════════════════════
  //  KOREAN — Basics 4: Travel & Directions
  // ════════════════════════════════════════════
  {
    id: "ko_basics_4",
    unitId: "korean_basics",
    languageId: "korean",
    title: "Travel & Directions",
    order: 4,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 8,
    totalPoints: 50,
    goals: [
      { id: "ko_b4_g1", description: "Ask for directions in Korean", type: "conversation" },
      { id: "ko_b4_g2", description: "Learn direction vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ko_b4_v1", word: "왼쪽", translation: "Left", pronunciation: "wen-JJOHK", examples: ["왼쪽으로 가세요."] },
      { id: "ko_b4_v2", word: "오른쪽", translation: "Right", pronunciation: "oh-reun-JJOHK", examples: ["오른쪽으로 가세요."] },
      { id: "ko_b4_v3", word: "직진", translation: "Straight", pronunciation: "JIK-jin", examples: ["직진하세요."] },
      { id: "ko_b4_v4", word: "가까운", translation: "Near", pronunciation: "gah-kah-oon", examples: ["여기서 가까워요."] },
      { id: "ko_b4_v5", word: "먼저", translation: "Far", pronunciation: "muhn-JUH", examples: ["거기는 멀어요."] },
    ],
    phrases: [
      { id: "ko_b4_p1", text: "여기가 어디예요?", translation: "Where is this place?", pronunciation: "yoh-gee-gah oh-dee-YEH-yoh", context: "question" },
      { id: "ko_b4_p2", text: "역이 어디예요?", translation: "Where is the station?", pronunciation: "yoh-gee oh-dee-YEH-yoh", context: "question" },
    ],
    activities: [
      { id: "ko_b4_a1", type: "multiple_choice", instruction: 'What does "왼쪽" mean?', sourceText: "왼쪽", correctAnswer: "Left", options: ["Right", "Left", "Straight", "Near"], points: 10 },
      { id: "ko_b4_a2", type: "translation", instruction: 'Translate "Where is the station?" to Korean', sourceText: "Where is the station?", correctAnswer: "역이 어디예요?", options: ["역이 어디예요?", "역이 뭐예요?", "어디에 역이 있어요?", "역에 가고 싶어요"], points: 15 },
      { id: "ko_b4_a3", type: "match_pairs", instruction: "Match direction words", sourceText: "", correctAnswer: "", pairs: [{ left: "왼쪽", right: "Left" }, { left: "오른쪽", right: "Right" }, { left: "직진", right: "Straight" }], points: 15 },
      { id: "ko_b4_a4", type: "multiple_choice", instruction: 'How do you say "straight"?', sourceText: "Straight", correctAnswer: "직진", options: ["왼쪽", "오른쪽", "직진", "가까운"], points: 10 },
    ],
    aiPrompt: { id: "ko_b4_ai", scenario: "Ask for directions in Seoul.", systemPrompt: "You are a local in Seoul. Help the student find their way.", openingLine: "안녕하세요! 길을 잃으셨어요?", expectedResponses: ["역이 어디예요", "왼쪽", "오른쪽", "직진"], difficulty: "beginner", topics: ["directions", "navigation"] },
  },

  // ════════════════════════════════════════════
  //  KOREAN — Basics 5: Shopping
  // ════════════════════════════════════════════
  {
    id: "ko_basics_5",
    unitId: "korean_basics",
    languageId: "korean",
    title: "Shopping",
    order: 5,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "ko_b5_g1", description: "Shop in a Korean store", type: "conversation" },
      { id: "ko_b5_g2", description: "Learn shopping vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ko_b5_v1", word: "얼마예요", translation: "How much is it?", pronunciation: "ohl-mah-YEH-yoh", examples: ["이거 얼마예요?"] },
      { id: "ko_b5_v2", word: "비싸다", translation: "Expensive", pronunciation: "bee-SSAH-dah", examples: ["이거 너무 비싸요."] },
      { id: "ko_b5_v3", word: "싸다", translation: "Cheap", pronunciation: "SSAH-dah", examples: ["이거 싸요."] },
      { id: "ko_b5_v4", word: "가게", translation: "Store", pronunciation: "gah-GEH", examples: ["그 가게에 뭐 있어요?"] },
      { id: "ko_b5_v5", word: "돈", translation: "Money", pronunciation: "DOHN", examples: ["돈이 좀 부족해요."] },
    ],
    phrases: [
      { id: "ko_b5_p1", text: "이것 사고 싶어요", translation: "I want to buy this", pronunciation: "ee-GOHT sah-GOH sib-POH-yoh", context: "casual" },
      { id: "ko_b5_p2", text: "더 싼 거 있어요?", translation: "Do you have something cheaper?", pronunciation: "duh SSahn GOH eee-SSOH-yoh", context: "question" },
    ],
    activities: [
      { id: "ko_b5_a1", type: "multiple_choice", instruction: 'What does "비싸다" mean?', sourceText: "비싸다", correctAnswer: "Expensive", options: ["Cheap", "Expensive", "Money", "Store"], points: 10 },
      { id: "ko_b5_a2", type: "translation", instruction: 'Translate "How much is it?" to Korean', sourceText: "How much is it?", correctAnswer: "얼마예요", options: ["얼마예요", "뭐예요", "어디예요", "언제예요"], points: 10 },
      { id: "ko_b5_a3", type: "match_pairs", instruction: "Match shopping words", sourceText: "", correctAnswer: "", pairs: [{ left: "비싸다", right: "Expensive" }, { left: "싸다", right: "Cheap" }, { left: "가게", right: "Store" }, { left: "돈", right: "Money" }], points: 15 },
      { id: "ko_b5_a4", type: "multiple_choice", instruction: 'How do you ask for something cheaper?', sourceText: "Cheaper", correctAnswer: "더 싼 거 있어요?", options: ["더 싼 거 있어요?", "이거 싸요?", "돈이 얼마예요?", "가게가 어디예요?"], points: 15 },
    ],
    aiPrompt: { id: "ko_b5_ai", scenario: "Shop at a Korean market.", systemPrompt: "You are a vendor at a market. Help the student practice shopping.", openingLine: "어서오세요! 뭐 찾으세요?", expectedResponses: ["얼마예요", "이것 사고 싶어요", "비싸요", "싸요"], difficulty: "beginner", topics: ["shopping", "prices"] },
  },

  // ════════════════════════════════════════════
  //  KOREAN — Basics 6: Family & Friends
  // ════════════════════════════════════════════
  {
    id: "ko_basics_6",
    unitId: "korean_basics",
    languageId: "korean",
    title: "Family & Friends",
    order: 6,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "ko_b6_g1", description: "Talk about family members", type: "conversation" },
      { id: "ko_b6_g2", description: "Learn family vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "ko_b6_v1", word: "가족", translation: "Family", pronunciation: "gah-JOHK", examples: ["제 가족은 4명이에요."] },
      { id: "ko_b6_v2", word: "어머니", translation: "Mother", pronunciation: "uh-MUH-nee", examples: ["어머니는 선생님이에요."] },
      { id: "ko_b6_v3", word: "아버지", translation: "Father", pronunciation: "ah-BUH-jee", examples: ["아버지가 의사예요."] },
      { id: "ko_b6_v4", word: "친구", translation: "Friend", pronunciation: "CHIN-goo", examples: ["제 친구는 학생이에요."] },
      { id: "ko_b6_v5", word: "형/오빠", translation: "Older brother (M)", pronunciation: "hyung/oh-ppah", examples: ["제 형은 대학생이에요."] },
    ],
    phrases: [
      { id: "ko_b6_p1", text: "가족이 몇 명이에요?", translation: "How many family members do you have?", pronunciation: "gah-JOH-gee MYUHT myeong-ee-EH-yoh", context: "question" },
      { id: "ko_b6_p2", text: "이是我的朋友 (Korean equivalent)", translation: "This is my friend", pronunciation: "ee-goh NEH chin-goo-EE-eh-yoh", context: "greeting" },
    ],
    activities: [
      { id: "ko_b6_a1", type: "multiple_choice", instruction: 'What does "친구" mean?', sourceText: "친구", correctAnswer: "Friend", options: ["Family", "Friend", "Mother", "Father"], points: 10 },
      { id: "ko_b6_a2", type: "translation", instruction: 'Translate "Family" to Korean', sourceText: "Family", correctAnswer: "가족", options: ["가족", "친구", "어머니", "아버지"], points: 10 },
      { id: "ko_b6_a3", type: "match_pairs", instruction: "Match family words", sourceText: "", correctAnswer: "", pairs: [{ left: "가족", right: "Family" }, { left: "어머니", right: "Mother" }, { left: "아버지", right: "Father" }, { left: "친구", right: "Friend" }], points: 15 },
      { id: "ko_b6_a4", type: "multiple_choice", instruction: 'How do you ask "How many family members?"', sourceText: "How many family members?", correctAnswer: "가족이 몇 명이에요?", options: ["가족이 몇 명이에요?", "가족이 뭐예요?", "가족이 어디예요?", "가족이 누구예요?"], points: 15 },
    ],
    aiPrompt: { id: "ko_b6_ai", scenario: "Talk about your family in Korean.", systemPrompt: "You are a Korean friend. Ask about the student's family.", openingLine: "안녕하세요! 가족이 몇 명이에요?", expectedResponses: ["가족은 ... 명이에요", "이것은 제 ... 입니다", "친구"], difficulty: "beginner", topics: ["family", "introductions"] },
  },

  // ════════════════════════════════════════════
  //  GERMAN — Basics 1: Greetings & Introductions
  // ════════════════════════════════════════════
  {
    id: "de_basics_1",
    unitId: "german_basics",
    languageId: "german",
    title: "Greetings & Introductions",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      { id: "de_b1_g1", description: "Introduce yourself in German", type: "conversation" },
      { id: "de_b1_g2", description: "Learn basic greetings", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "de_b1_v1", word: "Guten Tag", translation: "Good day / Hello", pronunciation: "GOO-ten tahk", examples: ["Guten Tag, wie geht es Ihnen?"] },
      { id: "de_b1_v2", word: "Danke", translation: "Thank you", pronunciation: "DAHN-keh", examples: ["Vielen Dank!"] },
      { id: "de_b1_v3", word: "Bitte", translation: "Please / You're welcome", pronunciation: "BIT-teh", examples: ["Bitte schön."] },
      { id: "de_b1_v4", word: "Ja", translation: "Yes", pronunciation: "yah", examples: ["Ja, natürlich."] },
      { id: "de_b1_v5", word: "Nein", translation: "No", pronunciation: "nine", examples: ["Nein, danke."] },
    ],
    phrases: [
      { id: "de_b1_p1", text: "Wie heissen Sie?", translation: "What is your name?", pronunciation: "vee HAI-sen ZEE", context: "question" },
      { id: "de_b1_p2", text: "Ich heisse ___", translation: "My name is ___", pronunciation: "ikh HAI-seh ___", context: "greeting" },
    ],
    activities: [
      { id: "de_b1_a1", type: "multiple_choice", instruction: 'What does "Guten Tag" mean?', sourceText: "Guten Tag", correctAnswer: "Good day / Hello", options: ["Goodbye", "Good day / Hello", "Thank you", "Please"], points: 10 },
      { id: "de_b1_a2", type: "translation", instruction: 'Translate "Thank you" to German', sourceText: "Thank you", correctAnswer: "Danke", options: ["Danke", "Bitte", "Hallo", "Tschüss"], points: 10 },
      { id: "de_b1_a3", type: "match_pairs", instruction: "Match German greetings", sourceText: "", correctAnswer: "", pairs: [{ left: "Guten Tag", right: "Good day" }, { left: "Danke", right: "Thank you" }, { left: "Bitte", right: "Please" }, { left: "Ja", right: "Yes" }], points: 15 },
      { id: "de_b1_a4", type: "multiple_choice", instruction: 'How do you ask "What is your name?"', sourceText: "What is your name?", correctAnswer: "Wie heissen Sie?", options: ["Wie heissen Sie?", "Wie alt sind Sie?", "Wo wohnen Sie?", "Was machen Sie?"], points: 15 },
    ],
    aiPrompt: { id: "de_b1_ai", scenario: "Practice self-introductions in German.", systemPrompt: "You are a friendly German speaker. Greet the student and ask their name.", openingLine: "Guten Tag! Ich heisse Hans. Wie heissen Sie?", expectedResponses: ["Guten Tag", "Ich heisse ...", "Danke"], difficulty: "beginner", topics: ["introductions", "greetings"] },
  },

  // ════════════════════════════════════════════
  //  GERMAN — Basics 2: Daily Life
  // ════════════════════════════════════════════
  {
    id: "de_basics_2",
    unitId: "german_basics",
    languageId: "german",
    title: "Daily Life",
    order: 2,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "de_b2_g1", description: "Talk about daily activities", type: "conversation" },
      { id: "de_b2_g2", description: "Learn common verbs", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "de_b2_v1", word: "Essen", translation: "To eat", pronunciation: "EH-sen", examples: ["Ich esse gern Pizza."] },
      { id: "de_b2_v2", word: "Trinken", translation: "To drink", pronunciation: "TRINK-en", examples: ["Ich trinke Kaffee."] },
      { id: "de_b2_v3", word: "Schlafen", translation: "To sleep", pronunciation: "SHLAH-fen", examples: ["Ich schlafe um 22 Uhr."] },
      { id: "de_b2_v4", word: "Arbeiten", translation: "To work", pronunciation: "AR-bei-ten", examples: ["Ich arbeite im Büro."] },
      { id: "de_b2_v5", word: "Lesen", translation: "To read", pronunciation: "LAY-sen", examples: ["Ich lese ein Buch."] },
    ],
    phrases: [
      { id: "de_b2_p1", text: "Wie geht es Ihnen?", translation: "How are you?", pronunciation: "vee gate es EE-nen", context: "question" },
      { id: "de_b2_p2", text: "Mir geht es gut", translation: "I am doing well", pronunciation: "meer gate es goot", context: "polite" },
    ],
    activities: [
      { id: "de_b2_a1", type: "multiple_choice", instruction: 'What does "Essen" mean?', sourceText: "Essen", correctAnswer: "To eat", options: ["To drink", "To eat", "To sleep", "To work"], points: 10 },
      { id: "de_b2_a2", type: "translation", instruction: 'Translate "To read" to German', sourceText: "To read", correctAnswer: "Lesen", options: ["Lesen", "Schreiben", "Hören", "Sprechen"], points: 10 },
      { id: "de_b2_a3", type: "match_pairs", instruction: "Match German verbs", sourceText: "", correctAnswer: "", pairs: [{ left: "Essen", right: "To eat" }, { left: "Trinken", right: "To drink" }, { left: "Schlafen", right: "To sleep" }, { left: "Lesen", right: "To read" }], points: 15 },
      { id: "de_b2_a4", type: "multiple_choice", instruction: 'How do you say "I am doing well"?', sourceText: "I am doing well", correctAnswer: "Mir geht es gut", options: ["Mir geht es gut", "Ich bin gut", "Es geht mir", "Gut, danke"], points: 10 },
    ],
    aiPrompt: { id: "de_b2_ai", scenario: "Talk about your daily routine in German.", systemPrompt: "You are a German friend. Ask about the student's daily activities.", openingLine: "Hallo! Wie geht es Ihnen? Was machen Sie heute?", expectedResponses: ["Ich esse", "Ich trinke", "Mir geht es gut"], difficulty: "beginner", topics: ["daily routines", "verbs"] },
  },

  // ════════════════════════════════════════════
  //  GERMAN — Basics 3: At the Cafe
  // ════════════════════════════════════════════
  {
    id: "de_basics_3",
    unitId: "german_basics",
    languageId: "german",
    title: "At the Cafe",
    order: 3,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "de_b3_g1", description: "Order at a German cafe", type: "conversation" },
      { id: "de_b3_g2", description: "Learn cafe vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "de_b3_v1", word: "Kaffee", translation: "Coffee", pronunciation: "KAH-feh", examples: ["Einen Kaffee, bitte."] },
      { id: "de_b3_v2", word: "Tee", translation: "Tea", pronunciation: "teh", examples: ["Einen Tee, bitte."] },
      { id: "de_b3_v3", word: "Wasser", translation: "Water", pronunciation: "VAH-ser", examples: ["Ein Wasser, bitte."] },
      { id: "de_b3_v4", word: "Kuchen", translation: "Cake", pronunciation: "KOO-ken", examples: ["Ein Stück Kuchen, bitte."] },
      { id: "de_b3_v5", word: "Rechnung", translation: "Bill/Check", pronunciation: "REKH-noong", examples: ["Die Rechnung, bitte."] },
    ],
    phrases: [
      { id: "de_b3_p1", text: "Ich möchte einen Kaffee", translation: "I would like a coffee", pronunciation: "ikh MURKH-teh AI-nen KAH-feh", context: "restaurant" },
      { id: "de_b3_p2", text: "Was kostet das?", translation: "How much does this cost?", pronunciation: "vahs KOS-tet dahs", context: "question" },
    ],
    activities: [
      { id: "de_b3_a1", type: "multiple_choice", instruction: 'What does "Kaffee" mean?', sourceText: "Kaffee", correctAnswer: "Coffee", options: ["Tea", "Coffee", "Water", "Cake"], points: 10 },
      { id: "de_b3_a2", type: "translation", instruction: 'Translate "The bill, please" to German', sourceText: "The bill, please", correctAnswer: "Die Rechnung, bitte", options: ["Die Rechnung, bitte", "Der Kaffee, bitte", "Das Wasser, bitte", "Der Kuchen, bitte"], points: 15 },
      { id: "de_b3_a3", type: "match_pairs", instruction: "Match cafe words", sourceText: "", correctAnswer: "", pairs: [{ left: "Kaffee", right: "Coffee" }, { left: "Tee", right: "Tea" }, { left: "Wasser", right: "Water" }, { left: "Kuchen", right: "Cake" }], points: 15 },
      { id: "de_b3_a4", type: "multiple_choice", instruction: 'How do you ask "How much does this cost"?', sourceText: "How much does this cost?", correctAnswer: "Was kostet das?", options: ["Was kostet das?", "Was ist das?", "Wo ist das?", "Wie viel ist das?"], points: 10 },
    ],
    aiPrompt: { id: "de_b3_ai", scenario: "Order at a German cafe.", systemPrompt: "You are a waiter at a German cafe. Take the student's order.", openingLine: "Guten Tag! Was darf ich Ihnen bringen?", expectedResponses: ["Einen Kaffee", "Ich möchte", "Die Rechnung, bitte"], difficulty: "beginner", topics: ["ordering", "cafe vocabulary"] },
  },

  // ════════════════════════════════════════════
  //  GERMAN — Basics 4: Travel & Directions
  // ════════════════════════════════════════════
  {
    id: "de_basics_4",
    unitId: "german_basics",
    languageId: "german",
    title: "Travel & Directions",
    order: 4,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 8,
    totalPoints: 50,
    goals: [
      { id: "de_b4_g1", description: "Ask for directions in German", type: "conversation" },
      { id: "de_b4_g2", description: "Learn direction vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "de_b4_v1", word: "Links", translation: "Left", pronunciation: "links", examples: ["Biegen Sie links ab."] },
      { id: "de_b4_v2", word: "Rechts", translation: "Right", pronunciation: "rekhts", examples: ["Biegen Sie rechts ab."] },
      { id: "de_b4_v3", word: "Geradeaus", translation: "Straight ahead", pronunciation: "geh-RAH-deh-ows", examples: ["Gehen Sie geradeaus."] },
      { id: "de_b4_v4", word: "Nah", translation: "Near", pronunciation: "nah", examples: ["Es ist ganz nah."] },
      { id: "de_b4_v5", word: "Weit", translation: "Far", pronunciation: "vite", examples: ["Es ist sehr weit."] },
    ],
    phrases: [
      { id: "de_b4_p1", text: "Wo ist der Bahnhof?", translation: "Where is the train station?", pronunciation: "vo ist dehr BAHN-hohf", context: "question" },
      { id: "de_b4_p2", text: "Wie komme ich zum Hotel?", translation: "How do I get to the hotel?", pronunciation: "vee KO-me ikh tsoom HO-tel", context: "question" },
    ],
    activities: [
      { id: "de_b4_a1", type: "multiple_choice", instruction: 'What does "Links" mean?', sourceText: "Links", correctAnswer: "Left", options: ["Right", "Left", "Straight", "Near"], points: 10 },
      { id: "de_b4_a2", type: "translation", instruction: 'Translate "Where is the train station?" to German', sourceText: "Where is the train station?", correctAnswer: "Wo ist der Bahnhof?", options: ["Wo ist der Bahnhof?", "Wo ist das Hotel?", "Wo ist die Haltestelle?", "Wo ist die Strasse?"], points: 15 },
      { id: "de_b4_a3", type: "match_pairs", instruction: "Match direction words", sourceText: "", correctAnswer: "", pairs: [{ left: "Links", right: "Left" }, { left: "Rechts", right: "Right" }, { left: "Geradeaus", right: "Straight" }], points: 15 },
      { id: "de_b4_a4", type: "multiple_choice", instruction: 'How do you say "straight ahead"?', sourceText: "Straight ahead", correctAnswer: "Geradeaus", options: ["Links", "Rechts", "Geradeaus", "Nah"], points: 10 },
    ],
    aiPrompt: { id: "de_b4_ai", scenario: "Ask for directions in Berlin.", systemPrompt: "You are a local in Berlin. Help the student find their way.", openingLine: "Hallo! Brauchen Sie Hilfe?", expectedResponses: ["Wo ist der Bahnhof?", "Links", "Rechts", "Geradeaus"], difficulty: "beginner", topics: ["directions", "navigation"] },
  },

  // ════════════════════════════════════════════
  //  GERMAN — Basics 5: Shopping
  // ════════════════════════════════════════════
  {
    id: "de_basics_5",
    unitId: "german_basics",
    languageId: "german",
    title: "Shopping",
    order: 5,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "de_b5_g1", description: "Shop in a German store", type: "conversation" },
      { id: "de_b5_g2", description: "Learn shopping vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "de_b5_v1", word: "Wie viel", translation: "How much", pronunciation: "vee feel", examples: ["Wie viel kostet das?"] },
      { id: "de_b5_v2", word: "Teuer", translation: "Expensive", pronunciation: "TOY-er", examples: ["Das ist zu teuer."] },
      { id: "de_b5_v3", word: "Gunstig", translation: "Cheap/Affordable", pronunciation: "GOON-stig", examples: ["Das ist gunstig."] },
      { id: "de_b5_v4", word: "Geschaft", translation: "Store", pronunciation: "geh-SHEFT", examples: ["Das Geschaft ist gross."] },
      { id: "de_b5_v5", word: "Geld", translation: "Money", pronunciation: "gelt", examples: ["Ich habe kein Geld."] },
    ],
    phrases: [
      { id: "de_b5_p1", text: "Ich moechte das kaufen", translation: "I would like to buy this", pronunciation: "ikh MURKH-teh dahs KOW-fen", context: "casual" },
      { id: "de_b5_p2", text: "Haben Sie etwas guenstigeres?", translation: "Do you have something cheaper?", pronunciation: "HAH-ben ZEE EH-tvas GOON-stee-geh-res", context: "question" },
    ],
    activities: [
      { id: "de_b5_a1", type: "multiple_choice", instruction: 'What does "Teuer" mean?', sourceText: "Teuer", correctAnswer: "Expensive", options: ["Cheap", "Expensive", "Money", "Store"], points: 10 },
      { id: "de_b5_a2", type: "translation", instruction: 'Translate "How much" to German', sourceText: "How much", correctAnswer: "Wie viel", options: ["Wie viel", "Was", "Wo", "Warum"], points: 10 },
      { id: "de_b5_a3", type: "match_pairs", instruction: "Match shopping words", sourceText: "", correctAnswer: "", pairs: [{ left: "Teuer", right: "Expensive" }, { left: "Gunstig", right: "Cheap" }, { left: "Geschaft", right: "Store" }, { left: "Geld", right: "Money" }], points: 15 },
      { id: "de_b5_a4", type: "multiple_choice", instruction: 'How do you ask for something cheaper?', sourceText: "Cheaper", correctAnswer: "Haben Sie etwas gunstigeres?", options: ["Haben Sie etwas gunstigeres?", "Ist das gunstig?", "Wo ist das gunstigere?", "Das ist zu teuer"], points: 15 },
    ],
    aiPrompt: { id: "de_b5_ai", scenario: "Shop at a German market.", systemPrompt: "You are a vendor at a market. Help the student practice shopping.", openingLine: "Willkommen! Was suchen Sie?", expectedResponses: ["Wie viel?", "Ich möchte kaufen", "Teuer", "Gunstig"], difficulty: "beginner", topics: ["shopping", "prices"] },
  },

  // ════════════════════════════════════════════
  //  GERMAN — Basics 6: Family & Friends
  // ════════════════════════════════════════════
  {
    id: "de_basics_6",
    unitId: "german_basics",
    languageId: "german",
    title: "Family & Friends",
    order: 6,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "de_b6_g1", description: "Talk about family members", type: "conversation" },
      { id: "de_b6_g2", description: "Learn family vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "de_b6_v1", word: "Familie", translation: "Family", pronunciation: "fah-MEE-lee-eh", examples: ["Meine Familie ist gross."] },
      { id: "de_b6_v2", word: "Mutter", translation: "Mother", pronunciation: "MOO-ter", examples: ["Meine Mutter ist Lehrerin."] },
      { id: "de_b6_v3", word: "Vater", translation: "Father", pronunciation: "FAH-ter", examples: ["Mein Vater ist Arzt."] },
      { id: "de_b6_v4", word: "Freund", translation: "Friend", pronunciation: "froynt", examples: ["Er ist mein bester Freund."] },
      { id: "de_b6_v5", word: "Bruder", translation: "Brother", pronunciation: "BROO-der", examples: ["Mein Bruder ist 10 Jahre alt."] },
    ],
    phrases: [
      { id: "de_b6_p1", text: "Wie gross ist Ihre Familie?", translation: "How big is your family?", pronunciation: "vee grohs ist EE-reh fah-MEE-lee-eh", context: "question" },
      { id: "de_b6_p2", text: "Das ist mein Freund", translation: "This is my friend", pronunciation: "dahs ist mine froynt", context: "greeting" },
    ],
    activities: [
      { id: "de_b6_a1", type: "multiple_choice", instruction: 'What does "Familie" mean?', sourceText: "Familie", correctAnswer: "Family", options: ["Friend", "Family", "Mother", "Father"], points: 10 },
      { id: "de_b6_a2", type: "translation", instruction: 'Translate "Mother" to German', sourceText: "Mother", correctAnswer: "Mutter", options: ["Mutter", "Vater", "Bruder", "Freund"], points: 10 },
      { id: "de_b6_a3", type: "match_pairs", instruction: "Match family words", sourceText: "", correctAnswer: "", pairs: [{ left: "Familie", right: "Family" }, { left: "Mutter", right: "Mother" }, { left: "Vater", right: "Father" }, { left: "Freund", right: "Friend" }], points: 15 },
      { id: "de_b6_a4", type: "multiple_choice", instruction: 'How do you ask "How big is your family"?', sourceText: "How big is your family?", correctAnswer: "Wie gross ist Ihre Familie?", options: ["Wie gross ist Ihre Familie?", "Wie viele gibt es?", "Wer ist Ihre Familie?", "Wo ist Ihre Familie?"], points: 15 },
    ],
    aiPrompt: { id: "de_b6_ai", scenario: "Talk about your family in German.", systemPrompt: "You are a German friend. Ask about the student's family.", openingLine: "Hallo! Wie gross ist Ihre Familie?", expectedResponses: ["Meine Familie", "Meine Mutter", "Mein Vater", "Freund"], difficulty: "beginner", topics: ["family", "introductions"] },
  },

  // ════════════════════════════════════════════
  //  CHINESE — Basics 1: Greetings & Introductions
  // ════════════════════════════════════════════
  {
    id: "zh_basics_1",
    unitId: "chinese_basics",
    languageId: "chinese",
    title: "Greetings & Introductions",
    order: 1,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 6,
    totalPoints: 50,
    goals: [
      { id: "zh_b1_g1", description: "Introduce yourself in Chinese", type: "conversation" },
      { id: "zh_b1_g2", description: "Learn basic greetings", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "zh_b1_v1", word: "你好", translation: "Hello", pronunciation: "nee HAH-oh", examples: ["你好，很高兴认识你。"] },
      { id: "zh_b1_v2", word: "谢谢", translation: "Thank you", pronunciation: "syeh-syeh", examples: ["谢谢你！"] },
      { id: "zh_b1_v3", word: "对不起", translation: "I'm sorry", pronunciation: "doo-BWOO-chee", examples: ["对不起，我迟到了。"] },
      { id: "zh_b1_v4", word: "是", translation: "Yes / To be", pronunciation: "shir", examples: ["是的，我是学生。"] },
      { id: "zh_b1_v5", word: "不", translation: "No / Not", pronunciation: "boo", examples: ["不，我不是。"] },
    ],
    phrases: [
      { id: "zh_b1_p1", text: "我叫___", translation: "My name is ___", pronunciation: "woh JYOW ___", context: "greeting" },
      { id: "zh_b1_p2", text: "很高兴认识你", translation: "Nice to meet you", pronunciation: "hen GOW-shing ren shir nee", context: "greeting" },
    ],
    activities: [
      { id: "zh_b1_a1", type: "multiple_choice", instruction: 'What does "你好" mean?', sourceText: "你好", correctAnswer: "Hello", options: ["Goodbye", "Hello", "Thank you", "Sorry"], points: 10 },
      { id: "zh_b1_a2", type: "translation", instruction: 'Translate "Thank you" to Chinese', sourceText: "Thank you", correctAnswer: "谢谢", options: ["谢谢", "对不起", "你好", "不"], points: 10 },
      { id: "zh_b1_a3", type: "match_pairs", instruction: "Match Chinese greetings", sourceText: "", correctAnswer: "", pairs: [{ left: "你好", right: "Hello" }, { left: "谢谢", right: "Thank you" }, { left: "对不起", right: "I'm sorry" }, { left: "是", right: "Yes" }], points: 15 },
      { id: "zh_b1_a4", type: "multiple_choice", instruction: 'How do you say "Nice to meet you"?', sourceText: "Nice to meet you", correctAnswer: "很高兴认识你", options: ["很高兴认识你", "你好吗", "谢谢", "对不起"], points: 15 },
    ],
    aiPrompt: { id: "zh_b1_ai", scenario: "Practice self-introductions in Chinese.", systemPrompt: "You are a friendly Chinese speaker. Greet the student and ask their name.", openingLine: "你好！我叫李明。你叫什么名字？", expectedResponses: ["你好", "我叫 ...", "很高兴认识你"], difficulty: "beginner", topics: ["introductions", "greetings"] },
  },

  // ════════════════════════════════════════════
  //  CHINESE — Basics 2: Daily Life
  // ════════════════════════════════════════════
  {
    id: "zh_basics_2",
    unitId: "chinese_basics",
    languageId: "chinese",
    title: "Daily Life",
    order: 2,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "zh_b2_g1", description: "Talk about daily activities", type: "conversation" },
      { id: "zh_b2_g2", description: "Learn common verbs", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "zh_b2_v1", word: "吃", translation: "To eat", pronunciation: "chr", examples: ["我吃饭了。"] },
      { id: "zh_b2_v2", word: "喝", translation: "To drink", pronunciation: "huh", examples: ["我喝茶。"] },
      { id: "zh_b2_v3", word: "睡", translation: "To sleep", pronunciation: "shway", examples: ["我十点睡觉。"] },
      { id: "zh_b2_v4", word: "工作", translation: "To work", pronunciation: "gwong-ZWOh", examples: ["我在公司工作。"] },
      { id: "zh_b2_v5", word: "学习", translation: "To study", pronunciation: "shweh-SHEE", examples: ["我在学中文。"] },
    ],
    phrases: [
      { id: "zh_b2_p1", text: "你今天好吗？", translation: "How are you today?", pronunciation: "nee jin-TYEN hah MAH", context: "question" },
      { id: "zh_b2_p2", text: "我很好，谢谢", translation: "I am fine, thank you", pronunciation: "woh hen HOW, syeh-syeh", context: "polite" },
    ],
    activities: [
      { id: "zh_b2_a1", type: "multiple_choice", instruction: 'What does "吃" mean?', sourceText: "吃", correctAnswer: "To eat", options: ["To drink", "To eat", "To sleep", "To work"], points: 10 },
      { id: "zh_b2_a2", type: "translation", instruction: 'Translate "To drink" to Chinese', sourceText: "To drink", correctAnswer: "喝", options: ["喝", "吃", "睡", "工作"], points: 10 },
      { id: "zh_b2_a3", type: "match_pairs", instruction: "Match Chinese verbs", sourceText: "", correctAnswer: "", pairs: [{ left: "吃", right: "To eat" }, { left: "喝", right: "To drink" }, { left: "睡", right: "To sleep" }, { left: "学习", right: "To study" }], points: 15 },
      { id: "zh_b2_a4", type: "multiple_choice", instruction: 'What is "工作"?', sourceText: "工作", correctAnswer: "To work", options: ["To study", "To work", "To eat", "To sleep"], points: 10 },
    ],
    aiPrompt: { id: "zh_b2_ai", scenario: "Talk about your daily routine in Chinese.", systemPrompt: "You are a Chinese friend. Ask about the student's daily activities.", openingLine: "你好！你今天做了什么？", expectedResponses: ["我吃了", "我喝了", "我工作了"], difficulty: "beginner", topics: ["daily routines", "verbs"] },
  },

  // ════════════════════════════════════════════
  //  CHINESE — Basics 3: At the Cafe
  // ════════════════════════════════════════════
  {
    id: "zh_basics_3",
    unitId: "chinese_basics",
    languageId: "chinese",
    title: "At the Cafe",
    order: 3,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "zh_b3_g1", description: "Order at a Chinese cafe", type: "conversation" },
      { id: "zh_b3_g2", description: "Learn cafe vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "zh_b3_v1", word: "咖啡", translation: "Coffee", pronunciation: "kah-FAY", examples: ["我要一杯咖啡。"] },
      { id: "zh_b3_v2", word: "茶", translation: "Tea", pronunciation: "chah", examples: ["绿茶还是红茶？"] },
      { id: "zh_b3_v3", word: "水", translation: "Water", pronunciation: "shway", examples: ["给我一杯水。"] },
      { id: "zh_b3_v4", word: "蛋糕", translation: "Cake", pronunciation: "dahn-GOW", examples: ["一块蛋糕。"] },
      { id: "zh_b3_v5", word: "多少钱", translation: "How much", pronunciation: "dwoh SHAO chyen", examples: ["这个多少钱？"] },
    ],
    phrases: [
      { id: "zh_b3_p1", text: "我要这个", translation: "I would like this", pronunciation: "woh YOW zheh-geh", context: "restaurant" },
      { id: "zh_b3_p2", text: "买单", translation: "Check, please", pronunciation: "mai-DAN", context: "restaurant" },
    ],
    activities: [
      { id: "zh_b3_a1", type: "multiple_choice", instruction: 'What does "咖啡" mean?', sourceText: "咖啡", correctAnswer: "Coffee", options: ["Tea", "Coffee", "Water", "Cake"], points: 10 },
      { id: "zh_b3_a2", type: "translation", instruction: 'Translate "How much" to Chinese', sourceText: "How much", correctAnswer: "多少钱", options: ["多少钱", "什么时候", "在哪里", "什么"], points: 10 },
      { id: "zh_b3_a3", type: "match_pairs", instruction: "Match cafe words", sourceText: "", correctAnswer: "", pairs: [{ left: "咖啡", right: "Coffee" }, { left: "茶", right: "Tea" }, { left: "水", right: "Water" }, { left: "蛋糕", right: "Cake" }], points: 15 },
      { id: "zh_b3_a4", type: "multiple_choice", instruction: 'How do you say "Check, please"?', sourceText: "Check, please", correctAnswer: "买单", options: ["买单", "我要这个", "多少钱", "谢谢"], points: 10 },
    ],
    aiPrompt: { id: "zh_b3_ai", scenario: "Order at a Chinese cafe.", systemPrompt: "You are a barista at a Chinese cafe. Help the student order.", openingLine: "欢迎光临！您想喝点什么？", expectedResponses: ["我要咖啡", "多少钱", "买单"], difficulty: "beginner", topics: ["ordering", "cafe vocabulary"] },
  },

  // ════════════════════════════════════════════
  //  CHINESE — Basics 4: Travel & Directions
  // ════════════════════════════════════════════
  {
    id: "zh_basics_4",
    unitId: "chinese_basics",
    languageId: "chinese",
    title: "Travel & Directions",
    order: 4,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 8,
    totalPoints: 50,
    goals: [
      { id: "zh_b4_g1", description: "Ask for directions in Chinese", type: "conversation" },
      { id: "zh_b4_g2", description: "Learn direction vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "zh_b4_v1", word: "左", translation: "Left", pronunciation: "zwoh", examples: ["向左转。"] },
      { id: "zh_b4_v2", word: "右", translation: "Right", pronunciation: "yoh", examples: ["向右转。"] },
      { id: "zh_b4_v3", word: "直走", translation: "Go straight", pronunciation: "jir ZOH", examples: ["一直直走。"] },
      { id: "zh_b4_v4", word: "近", translation: "Near", pronunciation: "jin", examples: ["很近。"] },
      { id: "zh_b4_v5", word: "远", translation: "Far", pronunciation: "ywen", examples: ["很远。"] },
    ],
    phrases: [
      { id: "zh_b4_p1", text: "___在哪里？", translation: "Where is ___?", pronunciation: "___ ZAI nah-LEE", context: "question" },
      { id: "zh_b4_p2", text: "火车站在哪里？", translation: "Where is the train station?", pronunciation: "hwoh-CHUH jahn ZAI nah-LEE", context: "question" },
    ],
    activities: [
      { id: "zh_b4_a1", type: "multiple_choice", instruction: 'What does "左" mean?', sourceText: "左", correctAnswer: "Left", options: ["Right", "Left", "Straight", "Near"], points: 10 },
      { id: "zh_b4_a2", type: "translation", instruction: 'Translate "Where is the train station?" to Chinese', sourceText: "Where is the train station?", correctAnswer: "火车站在哪里？", options: ["火车站在哪里？", "火车站在什么？", "火车站在哪里？", "火车站是什么？"], points: 15 },
      { id: "zh_b4_a3", type: "match_pairs", instruction: "Match direction words", sourceText: "", correctAnswer: "", pairs: [{ left: "左", right: "Left" }, { left: "右", right: "Right" }, { left: "直走", right: "Straight" }], points: 15 },
      { id: "zh_b4_a4", type: "multiple_choice", instruction: 'How do you say "Go straight"?', sourceText: "Go straight", correctAnswer: "直走", options: ["左", "右", "直走", "近"], points: 10 },
    ],
    aiPrompt: { id: "zh_b4_ai", scenario: "Ask for directions in Beijing.", systemPrompt: "You are a local in Beijing. Help the student find their way.", openingLine: "你好！你需要帮忙吗？", expectedResponses: ["火车站在哪里", "左", "右", "直走"], difficulty: "beginner", topics: ["directions", "navigation"] },
  },

  // ════════════════════════════════════════════
  //  CHINESE — Basics 5: Shopping
  // ════════════════════════════════════════════
  {
    id: "zh_basics_5",
    unitId: "chinese_basics",
    languageId: "chinese",
    title: "Shopping",
    order: 5,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "zh_b5_g1", description: "Shop in a Chinese store", type: "conversation" },
      { id: "zh_b5_g2", description: "Learn shopping vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "zh_b5_v1", word: "多少钱", translation: "How much", pronunciation: "dwoh SHAO chyen", examples: ["这个多少钱？"] },
      { id: "zh_b5_v2", word: "贵", translation: "Expensive", pronunciation: "gway", examples: ["太贵了。"] },
      { id: "zh_b5_v3", word: "便宜", translation: "Cheap", pronunciation: "pyen-ee", examples: ["这个很便宜。"] },
      { id: "zh_b5_v4", word: "商店", translation: "Store", pronunciation: "shahng-DYEN", examples: ["那个商店很大。"] },
      { id: "zh_b5_v5", word: "钱", translation: "Money", pronunciation: "chyen", examples: ["我没有钱。"] },
    ],
    phrases: [
      { id: "zh_b5_p1", text: "我想买这个", translation: "I want to buy this", pronunciation: "woh SYANG mai zheh-geh", context: "casual" },
      { id: "zh_b5_p2", text: "有没有便宜一点的？", translation: "Do you have something cheaper?", pronunciation: "yoh MEEH-yoh pyen-ee yee-DYEN duh", context: "question" },
    ],
    activities: [
      { id: "zh_b5_a1", type: "multiple_choice", instruction: 'What does "贵" mean?', sourceText: "贵", correctAnswer: "Expensive", options: ["Cheap", "Expensive", "Money", "Store"], points: 10 },
      { id: "zh_b5_a2", type: "translation", instruction: 'Translate "How much" to Chinese', sourceText: "How much", correctAnswer: "多少钱", options: ["多少钱", "什么时候", "什么", "哪里"], points: 10 },
      { id: "zh_b5_a3", type: "match_pairs", instruction: "Match shopping words", sourceText: "", correctAnswer: "", pairs: [{ left: "贵", right: "Expensive" }, { left: "便宜", right: "Cheap" }, { left: "商店", right: "Store" }, { left: "钱", right: "Money" }], points: 15 },
      { id: "zh_b5_a4", type: "multiple_choice", instruction: 'How do you ask for something cheaper?', sourceText: "Cheaper", correctAnswer: "有没有便宜一点的？", options: ["有没有便宜一点的？", "这个很便宜", "多少钱", "商店在哪里？"], points: 15 },
    ],
    aiPrompt: { id: "zh_b5_ai", scenario: "Shop at a Chinese market.", systemPrompt: "You are a vendor at a market. Help the student practice shopping.", openingLine: "欢迎！您想买什么？", expectedResponses: ["多少钱", "我想买", "贵", "便宜"], difficulty: "beginner", topics: ["shopping", "prices"] },
  },

  // ════════════════════════════════════════════
  //  CHINESE — Basics 6: Family & Friends
  // ════════════════════════════════════════════
  {
    id: "zh_basics_6",
    unitId: "chinese_basics",
    languageId: "chinese",
    title: "Family & Friends",
    order: 6,
    level: "A1",
    difficulty: "beginner",
    estimatedMinutes: 7,
    totalPoints: 50,
    goals: [
      { id: "zh_b6_g1", description: "Talk about family members", type: "conversation" },
      { id: "zh_b6_g2", description: "Learn family vocabulary", type: "vocabulary" },
    ],
    vocabulary: [
      { id: "zh_b6_v1", word: "家人", translation: "Family", pronunciation: "jah-REN", examples: ["我家人很多。"] },
      { id: "zh_b6_v2", word: "妈妈", translation: "Mother", pronunciation: "MAH-mah", examples: ["我妈妈是老师。"] },
      { id: "zh_b6_v3", word: "爸爸", translation: "Father", pronunciation: "BAH-bah", examples: ["我爸爸是医生。"] },
      { id: "zh_b6_v4", word: "朋友", translation: "Friend", pronunciation: "pohng-YOH", examples: ["他是我好朋友。"] },
      { id: "zh_b6_v5", word: "哥哥", translation: "Older brother", pronunciation: "GUH-guh", examples: ["我哥哥在北京。"] },
    ],
    phrases: [
      { id: "zh_b6_p1", text: "你家有几口人？", translation: "How many people are in your family?", pronunciation: "nee JAH yoh JEE koh REN", context: "question" },
      { id: "zh_b6_p2", text: "这是我的朋友", translation: "This is my friend", pronunciation: "zheh SHIR woh-DUH pohng-YOH", context: "greeting" },
    ],
    activities: [
      { id: "zh_b6_a1", type: "multiple_choice", instruction: 'What does "朋友" mean?', sourceText: "朋友", correctAnswer: "Friend", options: ["Family", "Friend", "Mother", "Father"], points: 10 },
      { id: "zh_b6_a2", type: "translation", instruction: 'Translate "Mother" to Chinese', sourceText: "Mother", correctAnswer: "妈妈", options: ["妈妈", "爸爸", "哥哥", "朋友"], points: 10 },
      { id: "zh_b6_a3", type: "match_pairs", instruction: "Match family words", sourceText: "", correctAnswer: "", pairs: [{ left: "家人", right: "Family" }, { left: "妈妈", right: "Mother" }, { left: "爸爸", right: "Father" }, { left: "朋友", right: "Friend" }], points: 15 },
      { id: "zh_b6_a4", type: "multiple_choice", instruction: 'How do you ask "How many people in your family"?', sourceText: "How many people in your family?", correctAnswer: "你家有几口人？", options: ["你家有几口人？", "你家有什么人？", "你家人是谁？", "你家在哪里？"], points: 15 },
    ],
    aiPrompt: { id: "zh_b6_ai", scenario: "Talk about your family in Chinese.", systemPrompt: "You are a Chinese friend. Ask about the student's family.", openingLine: "你好！你家有几口人？", expectedResponses: ["我家有 ... 口人", "这是我的 ...", "朋友"], difficulty: "beginner", topics: ["family", "introductions"] },
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
