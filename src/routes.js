import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './Components/Landing'
import Contact from './Components/Contact'
import Meme from './Components/Meme'
import AddMeme from './Components/AddMeme'
import Product from './Components/Product'
import Memes from './Components/Memes'

export default (
  <Switch>
    <Route exact path='/' component={Landing}/>
    <Route path='/contact' component={Contact}/>
    <Route path='/meme' component={Meme}/>
    <Route exact path='/addmeme' component={AddMeme}/>
    <Route path='/addmeme/:id' component={AddMeme}/>
    <Route path='/product' component={Product}/>
    <Route path='/memes' component={Memes}/>
  </Switch>
)