import { Controller } from "@hotwired/stimulus"
import Song from './components/Song'
import {createRoot} from 'react-dom/client'
import React from 'react'
// Connects to data-controller="song"
export default class extends Controller {
  connect() {
    console.log("connected song controller");
    const audio = document.getElementById("audio");
    createRoot(audio).render( <Song />);
   
  }
}
