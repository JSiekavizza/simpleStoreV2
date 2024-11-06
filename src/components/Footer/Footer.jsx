import React from "react";

export default function Footer() {
  return (
    <section className="">
      <div className="">
        <div className="flex items-center justify-around text-center text-gray-500">
          <ul class="list-group">
            <li class="list-group-item">
              <a href="/" className="hover:text-black">
                SIMPLE
              </a>
            </li>
          </ul>
          <ul class="text-start list-group">
            <li class="list-group-item">
              <a href="/" className="hover:text-black">
                Inicio
              </a>
            </li>
            <li class="list-group-item">
              <a href="/tienda" className="hover:text-black">
                Tienda
              </a>
            </li>
            <li class="list-group-item">
              <a href="/quienes-somos" className="hover:text-black">
                Quienes Somos
              </a>
            </li>
          </ul>
          <ul class="list-group">
            <li class="list-group-item">Redes Sociales</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
