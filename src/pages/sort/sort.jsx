import { useState } from 'react'
import './sort.css'

import { Header } from "../../components/header/header.jsx";
import { Footer } from "../../components/footer/footer.jsx";
import { CreatePoll } from '../../components/createPoll/createPoll.jsx';

export function Sort() {
  return (
    <div className="container">

      <Header />

      <main>
        <CreatePoll />


      </main>

    </div>
  )
}
