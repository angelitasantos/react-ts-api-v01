import { exec } from 'node:child_process'

const URL = 'http://localhost:5173'
const OPEN_DELAY = 5000

function getOpenCommand(url) {
  switch (process.platform) {
    case 'win32':
      return `start ${url}`

    case 'darwin':
      return `open ${url}`

    case 'linux':
      return `xdg-open ${url}`

    default:
      return null
  }
}

function openUrl(url) {
  const command = getOpenCommand(url)

  if (!command) {
    console.error(`Sistema operacional não suportado: ${process.platform}`)
    return
  }

  exec(command)
}

console.log(`Sistema: ${process.platform}`)
console.log('Aguardando inicialização dos servidores...')

setTimeout(() => {
  console.log('Abrindo aplicação...')
  openUrl(URL)
}, OPEN_DELAY)