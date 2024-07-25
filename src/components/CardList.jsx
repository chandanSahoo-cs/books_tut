import React from 'react'
import Card from './Card';
function CardList() {
    const books = [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            isbn: "978-0-06-112008-4",
            genre: "Fiction",
            publication_year: 1960,
            available: true,
            description: "A novel set in the American South during the 1930s, focusing on themes of racism and injustice."
        },
        {
            title: "1984",
            author: "George Orwell",
            isbn: "978-0-452-28423-4",
            genre: "Dystopian",
            publication_year: 1949,
            available: false,
            description: "A dystopian novel about a totalitarian regime that uses surveillance and mind control."
        },
        {
            title: "Pride and Prejudice",
            author: "Jane Austen",
            isbn: "978-0-14-143951-8",
            genre: "Romance",
            publication_year: 1813,
            available: true,
            description: "A classic romance novel exploring themes of love, social standing, and misunderstanding."
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            isbn: "978-0-7432-7356-5",
            genre: "Tragedy",
            publication_year: 1925,
            available: false,
            description: "A tragic story of Jay Gatsby and his unrequited love for Daisy Buchanan set in the Jazz Age."
        },
        {
            title: "Moby-Dick",
            author: "Herman Melville",
            isbn: "978-0-14-243724-7",
            genre: "Adventure",
            publication_year: 1851,
            available: true,
            description: "An epic tale of the obsessive quest of Captain Ahab for revenge on the white whale Moby-Dick."
        },
        {
            title: "War and Peace",
            author: "Leo Tolstoy",
            isbn: "978-1-59308-065-3",
            genre: "Historical Fiction",
            publication_year: 1869,
            available: true,
            description: "A novel that intertwines the lives of several families against the backdrop of the Napoleonic Wars."
        },
        {
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            isbn: "978-0-316-76948-0",
            genre: "Literary Fiction",
            publication_year: 1951,
            available: false,
            description: "A story about teenage angst and alienation, narrated by the iconic Holden Caulfield."
        },
        {
            title: "Brave New World",
            author: "Aldous Huxley",
            isbn: "978-0-06-085052-4",
            genre: "Science Fiction",
            publication_year: 1932,
            available: true,
            description: "A dystopian novel exploring a future world of genetically modified citizens and a pacified society."
        },
        {
            title: "Jane Eyre",
            author: "Charlotte Brontë",
            isbn: "978-0-14-144114-6",
            genre: "Classic",
            publication_year: 1847,
            available: true,
            description: "A novel that follows the emotions and experiences of its eponymous heroine, including her love for Mr. Rochester."
        },
        {
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            isbn: "978-0-618-00221-3",
            genre: "Fantasy",
            publication_year: 1937,
            available: false,
            description: "A fantasy adventure about Bilbo Baggins' journey to win a share of the treasure guarded by Smaug the dragon."
        },
        {
            title: "Fahrenheit 451",
            author: "Ray Bradbury",
            isbn: "978-0-345-34296-6",
            genre: "Dystopian",
            publication_year: 1953,
            available: true,
            description: "A novel about a future society where books are banned and 'firemen' burn any that are found."
        },
        {
            title: "Animal Farm",
            author: "George Orwell",
            isbn: "978-0-452-28424-1",
            genre: "Political Satire",
            publication_year: 1945,
            available: true,
            description: "A satirical allegory of Soviet totalitarianism, depicted through a group of farm animals."
        },
        {
            title: "The Da Vinci Code",
            author: "Dan Brown",
            isbn: "978-0-385-50420-8",
            genre: "Thriller",
            publication_year: 2003,
            available: false,
            description: "A mystery thriller novel that explores the secret history of the Holy Grail and the hidden messages in Leonardo da Vinci's art."
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            isbn: "978-0-06-112241-5",
            genre: "Adventure",
            publication_year: 1988,
            available: true,
            description: "A philosophical tale about a young shepherd named Santiago and his quest to find a worldly treasure."
        },
        {
            title: "Gone with the Wind",
            author: "Margaret Mitchell",
            isbn: "978-0-684-80356-7",
            genre: "Historical Romance",
            publication_year: 1936,
            available: false,
            description: "A romantic novel set during the American Civil War and Reconstruction era, focusing on the life of Scarlett O'Hara."
        },
        {
            title: "The Shining",
            author: "Stephen King",
            isbn: "978-0-385-12167-5",
            genre: "Horror",
            publication_year: 1977,
            available: true,
            description: "A horror novel about the haunted Overlook Hotel and its effect on the Torrance family."
        },
        {
            title: "The Hunger Games",
            author: "Suzanne Collins",
            isbn: "978-0-439-02352-8",
            genre: "Science Fiction",
            publication_year: 2008,
            available: true,
            description: "A dystopian novel about a televised fight to the death in which teenage contestants are chosen from each district."
        },
        {
            title: "Catch-22",
            author: "Joseph Heller",
            isbn: "978-0-684-83339-2",
            genre: "Satire",
            publication_year: 1961,
            available: true,
            description: "A satirical novel set during World War II, exploring the absurdities of war and bureaucracy."
        },
        {
            title: "The Picture of Dorian Gray",
            author: "Oscar Wilde",
            isbn: "978-0-14-143957-0",
            genre: "Philosophical Fiction",
            publication_year: 1890,
            available: false,
            description: "A novel about a young man who remains youthful while his portrait ages, reflecting his moral corruption."
        },
        {
            title: "Little Women",
            author: "Louisa May Alcott",
            isbn: "978-0-14-751401-7",
            genre: "Coming-of-Age",
            publication_year: 1868,
            available: true,
            description: "A novel that follows the lives of the four March sisters as they grow up in Civil War-era America."
        },
    ];
  return (
    <div className="m-10 flex flex-row flex-wrap gap-20">
            {books.map((book)=>(
                // Card({...book})
                <Card key={book.isbn} {...book}/>
            ))}
  </div>
  )
}

export default CardList