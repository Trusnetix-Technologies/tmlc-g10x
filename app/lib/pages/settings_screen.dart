import 'package:flutter/material.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.width; // Gives the width
    double height = MediaQuery.of(context).size.height; // Gives the height

    return Scaffold(
      appBar: AppBar(
        title: Text("Settings"),
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
              Padding(
                padding: const EdgeInsets.all(12.0),
                child: Container(height: 300, width: width * 0.85, color: Colors.pink),
              ),
              Padding(
                padding: const EdgeInsets.all(12.0),
                child: Container(height: 300, width: width * 0.85, color: Colors.amber),
              ),
              Padding(
                padding: const EdgeInsets.all(12.0),
                child: Container(height: 300, width: width * 0.85, color: Colors.blue),
              ),
              Padding(
                padding: const EdgeInsets.all(12.0),
                child: Container(
                  height: 300,
                  width: width * 0.85,
                  color: Colors.amberAccent,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
