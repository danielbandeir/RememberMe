import 'package:flutter/material.dart';

Widget TapScreen(context){
  return GestureDetector(
    onTap: ()=> print('Tap'),
    child: Container(
      width: MediaQuery.of(context).size.width-50,
      height: 60,
      decoration: BoxDecoration(
        color: Colors.white,
        boxShadow: [
          BoxShadow(
            color: Colors.grey,
            blurRadius: 10.0, // has the effect of softening the shadow
            spreadRadius: 0.2, // has the effect of extending the shadow
            offset: Offset(
              0.0, // horizontal, move right 10
              0.0, // vertical, move down 10
            ),
          )
        ],
        borderRadius: BorderRadius.only(
          topLeft: Radius.circular(20),
          topRight: Radius.circular(20))
      ),
      child: Center(
        child: Text('Que função deseja?'),
      ),
    ),
  );
}