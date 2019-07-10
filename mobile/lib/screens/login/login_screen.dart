import 'package:flutter/material.dart';
import 'package:remember/screens/login/components/body_screen.dart';

class Login extends StatefulWidget {
  @override
  _LoginState createState() => _LoginState();
}

class _LoginState extends State<Login> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: BodyLogin(context),
    );
  }
}
