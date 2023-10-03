import { Navbar } from './components/navbar'
import Countdown from './components/countdown'
import { Map } from './components/map'
import AttendanceForm from './components/attendanceForm'
import { Footer } from './components/footer'
import Image from 'next/image'
import rightLeaf from '../public/leaf1.png'
import leftLeaf from '../public/leaf2.png'

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#e8e6e7]">
      <Navbar />
      <section style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/736993448124481619/1154869039726870658/hero_background.jpg')" }} className="w-screen h-screen bg-no-repeat bg-cover bg-center bg-fixed relative">
        <div className="hidden absolute right-0 top-20 md:block"><Image width={340} src={rightLeaf} alt="leaf"/></div>
        <div className="hidden absolute left-0 bottom-0 md:block"><Image width={340} src={leftLeaf} alt="leaf"/></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="mb-8 font-paris text-4xl md:text-7xl"> Vinicius <span className="text-lime-800">&</span> Beatriz </div>
          <div className="font-vibes text-2xl md:text-4xl">| 11 . 11 . 2023 |</div>
        </div>
      </section>
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl font-vibes text-lime-800 mb-8">
            Contagem regressiva para o grande dia!
          </h1>
          <Countdown />
        </div>
        <div className="hidden w-full h-px md:block bg-lime-800" />
        <section className="flex flex-col items-center w-full">
          <h1 className="text-2xl md:text-5xl font-vibes text-lime-800 mb-8">
            Sejam bem-vindos ao nosso site!
          </h1>
          <h3 className="text-lg md:text-xl font-ysra italic mb-6">
            A melhor forma de compartilhar esse momento com vocês é vivendo juntos esse sonho e contarmos um pouco sobre a nossa história!
          </h3>

          <div>
            <p className="font-ysra text-justify text-lg md:text-xl max-w-5xl">
              Em 11/11/2017 o Vinicius e a Beatriz assumiram um primeiro compromisso <span className="font-bold text-lime-800">em nome do amor</span>, apenas com 17 e 20 anos a Bia e o Vini iniciaram sua caminhada juntos, sempre lado a lado, apoiando um ao outro e, assim, foram construindo um relacionamento de muito <span className="font-bold text-lime-800">respeito, união e companheirismo</span>. Agora, exatamente <span className="font-bold text-lime-800">6 anos depois</span>, os dois decidiram elevar essa relação, firmando mais um compromisso e estreitando ainda mais os laços. <span className="font-bold text-lime-800">Em 11/11/2023</span>, juntamente com os familiares, a <span className="font-bold text-lime-800">Bia e o Vini vão se casar</span>, e você como parte dessa história irá poder celebrar e prestigiar esse momento tão especial para os noivos!
            </p>
          </div>
        </section>
        <div className="hidden w-full h-px md:block bg-lime-800" />
        <section className="flex flex-col w-full items-center justify-between">
          <h1 className="text-2xl md:text-5xl font-vibes text-lime-800 mb-8">
            Onde será nossa celebração
          </h1>
          <div className="flex flex-col md:flex-row w-full items-center justify-between">
            <div className="flex flex-col w-full max-w-lg items-center md:w-1/2">
              <h1 className="text-xl md:text-3xl font-vibes text-lime-800 mb-4">Casamento Civil</h1>
              <h3 className="text-base md:text-lg font-ysra"><span className="text-lime-800 font-bold">Local:</span> 2º Cartório de Registro Civil</h3>
              <h3 className="text-base md:text-lg font-ysra"><span className="text-lime-800 font-bold">Endereço:</span> Rua Lacerda Franco, 168/170</h3>
              <h3 className="text-base md:text-lg font-ysra">Vila Arens, Jundiaí - SP, 13201-750.</h3>
              <h3 className="mb-4 text-base md:text-lg font-ysra"><span className="text-lime-800 font-bold">Dia:</span> 11 de Novembro às 10:30 da manhã</h3>
              <Map />
            </div>
            <div className="flex flex-col w-full max-w-lg items-center md:w-1/2">
              <h1 className="text-xl md:text-3xl font-vibes text-lime-800 mb-4">Almoço de Celebração</h1>
              <h3 className="text-base md:text-lg font-ysra"><span className="text-lime-800 font-bold">Local:</span> A ser decidido</h3>
              <h3 className="text-base md:text-lg font-ysra"><span className="text-lime-800 font-bold">Endereço:</span> Rua Lacerda Franco, 168/170</h3>
              <h3 className="text-base md:text-lg font-ysra">Vila Arens, Jundiaí - SP, 13201-750.</h3>
              <h3 className="mb-4 text-base md:text-lg font-ysra"><span className="text-lime-800 font-bold">Dia:</span> 11 de Novembro às 13:30 da tarde</h3>
              <Map />
            </div>
          </div>
        </section>
        <div className="hidden w-full h-px md:block bg-lime-800" />
        <section id="attendance" className="flex flex-col items-center w-full">
          <h1 className="text-2xl md:text-5xl font-vibes text-lime-800 mb-8">
            Formulário de Presença
          </h1>
          <div className="flex flex-col w-full items-center">
            <AttendanceForm />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}