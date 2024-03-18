import './style.css'
import logo from '/logo.jpg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="#" target="_blank">
      <img src="${logo}" class="logo" alt="miau" />
    </a>
    <h1>Rick e Amanda</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
