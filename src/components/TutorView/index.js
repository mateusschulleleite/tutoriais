import React, { useEffect, useState } from "react";
import "./TutorView.css";
import IconeCopiar from "./icone-copiar.png";
import IconeCopiado from "./icone-copiado.png";

export default function TutorView({ moduleSelected, data }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const module = data.find((m) => m.id === moduleSelected);
    if (module && module.items) {
      setItems(module.items);
    } else {
      setItems([]);
    }
  }, [moduleSelected]);

  function handleClickLink(e) {
    const itemClicado = e.currentTarget;

    const linkDoItem = itemClicado.dataset.link;
    navigator.clipboard.writeText(linkDoItem);

    itemClicado.querySelector("span").textContent = "Link Copiado";
    itemClicado.querySelector("img").setAttribute("src", IconeCopiado);

    setTimeout(() => {
      itemClicado.querySelector("span").textContent = "Copiar Link";
      itemClicado.querySelector("img").setAttribute("src", IconeCopiar);
    }, 3000);
  }

  function changeLinkVideo(l) {
    let link = l.replace('watch?v=', 'embed/');
    link = link.replace('youtu.be', 'youtube.com.br/embed')
    return link;
  }

  function handleClickItem(e) {
    const videos = document.querySelectorAll('.tutorial-video');
    videos.forEach(video => {
      video.style.display = 'none';
    })
    e.currentTarget.parentNode.nextElementSibling.style.display = 'block';
  }

  return (
    <div className="tutoriais-sublista">
      <div className="sublista-titulo">
        <h1>Links</h1>
      </div>
      <div className="sublista">
        <ul>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <div className="tutorial-topo">
                  <a onClick={(e) => handleClickItem(e)} className="tutorial-link" target="_blank">
                    {item.name}
                  </a>
                  <div
                    onClick={(e) => handleClickLink(e)}
                    data-link={item.link}
                    className="copiar-link"
                  >
                    <div className="icone-copiar">
                      <img src={IconeCopiar} alt="Icone de Copiar" />
                    </div>
                    <span>Copiar Link</span>
                  </div>
                </div>
                <div className='tutorial-video'>
                  <iframe
                    width="560"
                    src={changeLinkVideo(item.link)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
