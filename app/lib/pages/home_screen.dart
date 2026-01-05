import 'package:flutter/material.dart';

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
      
      body: Container(
        color: Colors.white54,
        width: width,
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
     
            ],
          ),
        ),
      ),
    );
  }
}
