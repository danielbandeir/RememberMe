import 'package:flutter/material.dart';
import 'package:remember/screens/login/components/tap_screen.dart';

Widget BodyLogin(context){
  return Stack(
    children: <Widget>[
      Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'RememberMe',
              style: TextStyle(
                color: Colors.black,
                fontSize: 43,
                fontFamily: 'RalewayBlack',
                fontWeight: FontWeight.w900
              ),
            )
          ]
        ),
      ),
      Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              TapScreen(context)
            ],
          ),
        ],
      )
    ]
  );
}