import react from "react";
import './App.css'
export function QrComponent({ imagen }) {
    return (
        <div className="centro">
            <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet"></link>
            <img
                className="imagenqr"
                src={imagen}
                alt="codigo QR"
                width="330"

            />

            <section className="parrafos">
                <h1 className="titulo">Improve your front-end
                    skills by building projects
                </h1>
                <p className="parrafo1">
                    scan the QR code to visit Frontend
                </p >
                <p className="parrafo2">
                    Mentor and take your coding skills to

                </p>
                <p className="parrafo3">the net level</p>
            </section>

        </div>
    )
}