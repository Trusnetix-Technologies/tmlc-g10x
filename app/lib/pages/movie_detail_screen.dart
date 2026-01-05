import 'package:flutter/material.dart';
import 'package:app/models/Movie.dart';

class MovieDetailScreen extends StatelessWidget {
  // Movie object received from previous screen
  final Movie movie;

  // Constructor to accept movie data
  const MovieDetailScreen({super.key, required this.movie});

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width; // Gives the width
    double height = MediaQuery.of(context).size.height; // Gives the height

    return Scaffold(
      // Top app bar showing movie name
      appBar: AppBar(
        title: Text(movie.name), // Movie title
        backgroundColor: Colors.amber,
      ),

      // Body content centered on screen
      body: Center(
        child: Column(
          // mainAxisAlignment: MainAxisAlignment.center, // Vertical center
          children: [
            // Movie poster image
             Hero(
                tag: movie.id,
                child: Image.network(
                  movie.imageUrl,
                  fit: BoxFit.cover,
                  width: width,
                ),
              ),

            // Image.network(
            //   movie.imageUrl,
            //   width: 200, // Image width
            //   height: 300, // Image height
            //   fit: BoxFit.cover,
            // ),
            SizedBox(height: 20), // Space between image and text
            // Movie name text
            Text(
              movie.name,
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
          ],
        ),
      ),
    );
  }
}
