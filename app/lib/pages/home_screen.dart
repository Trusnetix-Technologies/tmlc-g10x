import 'package:app/models/Movie.dart';
import 'package:app/pages/movie_detail_screen.dart';
import 'package:app/widgets/movie_card.dart';
import 'package:flutter/material.dart';

// list (array) of movies 
final List<Movie> movies = [
  Movie(id: "1", name: "The Dark Knight", imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"),
  Movie(id: "2", name: "Inception", imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"),
  Movie(id: "3", name: "Interstellar", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkshzpfsh566sD5Im2qzFxaxfNFFqSQAFZgg&s"),
  Movie(id: "4", name: "The Matrix", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZNl1EYS9z4PfNViNWMK_V5ZspshcWfksobw&s"),
  Movie(id: "5", name: "Toy Story", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1_9O7ZAMWdim0aZ3AGYpzugvq7EPOdJpHA&s"),
  Movie(id: "6", name: "Mr. Robot", imageUrl: "https://m.media-amazon.com/images/M/MV5BOTg4NTBiZDAtZTc0YS00NzZlLTg4Y2ItNGQ3M2ZlMDM5MWQzXkEyXkFqcGc@._V1_.jpg"),
];

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width; // Gives the width
    double height = MediaQuery.of(context).size.height; // Gives the height

    return Scaffold(
      appBar: AppBar(
        title: Text("TMLC"),
        backgroundColor: Colors.cyan,
        centerTitle: true,
      ),
      
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8),
          
          // Grid layout for movies
          child: GridView.builder(
            shrinkWrap: true, // Grid takes only required height
            // Disable GridView's own scrolling
            // because SingleChildScrollView handles scrolling
            physics: NeverScrollableScrollPhysics(), 
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,      // 2 columns
              childAspectRatio: 0.7,  // Height/width ratio of each card
              crossAxisSpacing: 10,   // Horizontal spacing
              mainAxisSpacing: 10,    // Vertical spacing
            ),

            itemCount: movies.length, // Number of grid items

            // Builds each movie card
            itemBuilder: (context, index) {
              return MovieCard(
                movie: movies[index], // Pass movie data
                
                // Navigate to details screen on tap
                onTap: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) =>
                          MovieDetailScreen(movie: movies[index]),
                    ),
                  );
                },
              );
            },
          ),
        ),
      ),
    );
  }
}
