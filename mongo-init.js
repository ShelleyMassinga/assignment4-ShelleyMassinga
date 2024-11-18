db = db.getSiblingDB('bookstore');

db.createCollection('users');
db.createCollection('products');


db.products.insertMany([
    { 
        "id": 1, 
        "name": "The Masterpice", 
        "description": "The Masterpiece is a redemptive, character-driven, contemporary Christian romance that tells the story of two broken individuals, Grace and Roman, who are drawn together by fate and faith. Grace, a woman of deep spirituality, and Roman, a troubled artist with a dark past, both struggle with inner demons and personal trauma. As they navigate their evolving relationship, the novel explores themes of forgiveness, healing, and redemption through faith in God. With richly developed characters and a heartfelt journey toward restoration, the story illustrates the power of love and divine grace in transforming lives.", 
        "price": 11.99, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/masterPiece.png",
        "author":  "Francine Rivers",
        "ISBN": "05933282590",
        "Publisher": "Tyndale Fiction (February 6, 2018)",
        "Pages": "433 pages",
        "Language": "English"
    }, 
    { 
        "id": 2, 
        "name": "Better Than the Movies", 
        "description": "Better Than the Movies is a charming young adult romantic comedy that centers on Liz Buxbaum, a hopeless romantic who dreams of experiencing a love story like the ones in her favorite rom-com movies. When her childhood crush, Michael, returns to town, Liz enlists the help of her annoying but handsome neighbor, Wes, to win Michael's heart. However, as Liz and Wes spend more time together, she begins to question her feelings and realizes that real life may hold surprises that are even better than the movies. The novel is filled with witty banter, heartfelt moments, and a delightful exploration of love and friendship.", 
        "price": 7.40, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/betterThanMovies.jpg",
        "author":  "Lynn Painter",
        "ISBN": "05973282590",
        "Publisher": "Vine Leaves Press (February 16, 2016)",
        "Pages": "67 pages",
        "Language": "English"
    },
    { 
        "id": 3, 
        "name": "The Great Gatsby", 
        "description": "The Great Gatsby is a classic novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream. The story follows Nick Carraway, who moves to Long Island and becomes entangled in the life of his mysterious and wealthy neighbor, Jay Gatsby. Gatsby is known for his lavish parties but harbors an obsessive love for Daisy Buchanan, a married woman from his past. As Nick uncovers the truth about Gatsby's life and his longing for Daisy, the novel delves into the disillusionment of the American Dream and the moral decay beneath the surface of opulence.", 
        "price": 7.02, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/greatGatsby.jpg",
        "author":  "F. Scott Fitzgerald",
        "ISBN": "15973289590",
        "Publisher": "Scribner (May 27, 2003)",
        "Pages": "205 pages",
        "Language": "English"
    }, 
    { 
        "id": 4, 
        "name": "The One Who Knows Me", 
        "description": "The One Who Knows Me is a Christian contemporary romance novel that tells the story of Tayo, a college student in the UK, who grapples with personal challenges and a deep sense of loneliness. As she navigates friendships, academics, and life on campus, she encounters Eli, a charming fellow student, and begins to explore her faith and relationship with God. The novel weaves themes of love, friendship, faith, and self-discovery, portraying Tayo's journey to finding purpose and understanding through her connection with God and those around her. It's a heartwarming story about spiritual growth and the power of unconditional love.", 
        "price": 14.99, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/whoKnowsMe.png",
        "author":  "Joan Embola",
        "ISBN": "25973289590",
        "Publisher": "Love Qualified Press (September 10, 2021)",
        "Pages": "320 pages",
        "Language": "English"
    } ,
    { 
        "id": 5, 
        "name": "Postcards from Here", 
        "description": "Postcards from Here is a young adult contemporary novel that focuses on themes of mental health, friendship, and healing. The story follows 16-year-old Chloe, who is struggling with anxiety and feelings of isolation after the loss of her father. As she navigates her grief and the challenges of growing up, Chloe starts exchanging postcards with her best friend Sophie, who is away at a summer camp. Through their correspondence, Chloe begins to find solace and a sense of connection. The novel explores the importance of supportive relationships and self-care in overcoming emotional struggles.", 
        "price": 8.92, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/postcards.png",
        "author":  "Penny Guisinger",
        "ISBN": "0591328959",
        "Publisher": "Vine Leaves Press (February 16, 2016)",
        "Pages": "67 pages",
        "Language":  "English"
    }  ,
    { 
        "id": 6, 
        "name": "The Layover", 
        "description": "The Layover is a contemporary romance novel about Ava Greene, a flight attendant who is ready to leave her job and settle down. Her final trip before resigning takes an unexpected turn when she ends up on a layover in Belize with Jack Stone, a fellow flight attendant and someone she's been trying to avoid. Stuck together in paradise, Ava's carefully laid-out plans begin to unravel as sparks fly between them. The novel is a lighthearted, witty romance filled with adventure, self-discovery, and the tension between living life by the rules or embracing the unexpected.", 
        "price": 9.59, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/layover.png",
        "author":  "Lacie Waldon",
        "ISBN": "0593328256",
        "Publisher": "G.P. Putnam's Sons (June 15, 2021)",
        "Pages": "336 pages",
        "Language":  "English"
    }, 
    { 
        "id": 7, 
        "name": "The Dead Romantics", 
        "description": "The Dead Romantics is a unique blend of romance and the supernatural. The story follows Florence Day, a ghostwriter for a famous romance author, who no longer believes in love after a devastating breakup. When her father passes away, Florence returns to her small hometown to handle his funeral, only to be haunted—literally—by the ghost of her new editor, Benji Andor. As Florence helps Benji resolve his unfinished business, she begins to rediscover her own ability to love and heal. The novel combines humor, heartache, and the paranormal, exploring themes of grief, second chances, and the magic of unexpected love.", 
        "price": 10.64, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/deadRomantics.png",
        "author":  "Ashley Poston",
        "ISBN": "0593336488",
        "Publisher": "Berkley (June 28, 2022)",
        "Pages": "368 pages",
        "Language": "English"
    },
    { 
        "id": 8, 
        "name": "Suffering is Never for Nothing", 
        "description": "Suffering is Never for Nothing is a Christian inspirational book that addresses the difficult topic of suffering from a faith-based perspective. In this work, Elliot, who endured significant personal losses, including the death of her missionary husband, reflects on how suffering can have profound spiritual meaning and purpose. Through a series of lectures, she shares her belief that pain and hardship are never wasted when viewed through the lens of God's plan. Elliot encourages readers to trust in God's sovereignty, even in times of sorrow, and offers hope by affirming that suffering can lead to deeper faith, growth, and intimacy with God.", 
        "price": 10.39, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/suffering.png",
        "author":  "Elisabeth Elliot",
        "ISBN": "1535914157",
        "Publisher": "B&H Books (February 1, 2019)",
        "Pages": "128 pages",
        "Language": "English"
    }, 
    { 
        "id": 9, 
        "name": "The Women", 
        "description": "The Women is a historical fiction novel that delves into the complex personal life of renowned architect Frank Lloyd Wright. The book is told from the perspectives of four women who were romantically involved with Wright at different points in his life—his three wives and one mistress. Each woman’s story reveals a different aspect of Wright's personality and the tumultuous relationships he had with them, set against the backdrop of his groundbreaking architectural work and personal scandals. The novel explores themes of love, obsession, betrayal, and the emotional cost of genius, offering a multifaceted portrait of Wright through the eyes of the women who knew him best.", 
        "price": 18.45, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/theWomen.png",
        "author":  "Kristin Hannah",
        "ISBN": "1250178630",
        "Publisher": "St. Martin's Press; American First edition (February 6, 2024)",
        "Pages": "480 pages",
        "Language": "English"
    } ,
    { 
        "id": 10, 
        "name": "The God of the Woods", 
        "description": "The God of the Woods is a psychological thriller that follows the story of Tess, a woman who returns to her childhood home in rural France after the death of her estranged mother. Haunted by past traumas and the mysterious disappearance of her sister years earlier, Tess becomes entangled in the eerie atmosphere of the woods surrounding her home. As she delves deeper into her family's history and the strange occurrences in the village, she uncovers dark secrets that blur the line between reality and myth. The novel is a gripping exploration of memory, loss, and the haunting influence of the past.", 
        "price": 17.00, 
        "image": "https://bookstore-product-images.s3.us-east-1.amazonaws.com/theGod.png",
        "author":  "Liz Moore",
        "ISBN": "0593418913",
        "Publisher": "Riverhead Books (July 2, 2024)",
        "Pages": "496 pages",
        "Language":  "English"
    }    
]);

db.products.createIndex({ id: 1 }, { unique: true });


db.users.createIndex({ email: 1 }, { unique: true });