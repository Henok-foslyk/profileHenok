// techIcons.js

// Imports
import python from '../assets/logos/python.png';
import go from "../assets/logos/Go.png"
import tensorFlow from "../assets/logos/TensorFlow.png"
import pyTorch from "../assets/logos/PyTorch.png"
import cPlusPlus from "../assets/logos/CPlusPlus.png"
import javascript from '../assets/logos/js.png';
import net from '../assets/logos/net.png';
import chat from '../assets/logos/chatbot integration.png';
import chrome from '../assets/logos/chrome extension apis.png';
import css from '../assets/logos/css.png';
import f from '../assets/logos/F.png';
import figma from '../assets/logos/figma.png';
import firebase from '../assets/logos/Firebase.png';
import html from '../assets/logos/HTML5.png';
import jupyter from '../assets/logos/Jupyter.png';
import matplot from '../assets/logos/Matplotlib.png';
import node from '../assets/logos/Node.js.png';
import numpy from '../assets/logos/Numpy.png';
import pandas from '../assets/logos/Pandas.png';
import react from '../assets/logos/React.png';
import scikit from '../assets/logos/scikit-learn.png'; 
import spotify from '../assets/logos/spotify.png';
import kotlin from '../assets/logos/kotlin.png';
import compose from '../assets/logos/compose.png';
import androidstudio from '../assets/logos/androidStudio.png';
import java from '../assets/logos/Java.png';

// Normalized keys (lowercase, no punctuation or spaces)
const techIcons = {
  python: { name: 'Python', icon: python },
  javascript: { name: 'JavaScript', icon: javascript },
  java: { name: 'Java', icon: java },
  net: { name: '.NET', icon: net },
  chatbotintegration: { name: 'Chatbot Integration', icon: chat },
  chromeextensionapis: { name: 'Chrome Extension APIs', icon: chrome },
  css: { name: 'CSS', icon: css },
  f: { name: 'F#', icon: f },
  figmaui: { name: 'Figma (UI Design)', icon: figma },
  figmaprototyping: { name: 'Figma (Prototyping)', icon: figma },
  firebase: { name: 'Firebase', icon: firebase },
  firebaseauthentication: { name: 'Firebase Authentication', icon: firebase },
  firebasefirestore: { name: 'Firebase Firestore', icon: firebase },
  html: { name: 'HTML', icon: html },
  jupyternotebook: { name: 'Jupyter Notebook', icon: jupyter },
  matplotlib: { name: 'Matplotlib', icon: matplot },
  nodejs: { name: 'Node.js', icon: node },
  numpy: { name: 'NumPy', icon: numpy },
  pandas: { name: 'Pandas', icon: pandas },
  react: { name: 'React', icon: react },
  scikitlearn: { name: 'Scikit-learn', icon: scikit },
  spotifyapi: { name: 'Spotify API', icon: spotify },
  kotlin: { name: 'Kotlin', icon: kotlin },
  jetpackcompose: { name: 'Jetpack Compose', icon: compose },
  androidstudio: { name: 'Android Studio', icon: androidstudio },
  c: {name: 'C++', icon: cPlusPlus},
  pytorch : {name: 'PyTorch', icon: pyTorch},
  tensorflow: {name: 'TensorFlow', icon: tensorFlow},
  golang: {name: 'Golang', icon: go}
};

export default techIcons;
