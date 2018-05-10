const $ = window.$ = window.jQuery = require('jquery');

import AOS from 'aos';


import 'slick-carousel';

import './components/header/header'
import './components/modalForm/modalForm'
import './components/menu/menu'
import './components/offer/offer'

AOS.init({
  disable: 'mobile'
});