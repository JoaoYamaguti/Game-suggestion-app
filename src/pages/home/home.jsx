import { useState } from 'react'
import './home.css'

import { Header } from "../../components/header/header.jsx";
import { Footer } from "../../components/footer/footer.jsx";
import { Button } from '../../components/button/button.jsx';

export function Home() {
  return (
    <div className="home">

      <Header/>

      <main>
            <section>
                <h2>Create your own poll<br/>or<br/>Sort some game play.</h2>
                <div className="btns">
                <Button href='./create' message="Creat a Poll"/>
                <Button href='./sort' message="Sort a Game"/>
                </div>
            </section>
        </main>

      <Footer/>
    </div>
  )
}
